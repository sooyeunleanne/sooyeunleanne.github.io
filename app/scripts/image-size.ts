/**
 * Reads pixel dimensions out of an image's header bytes.
 *
 * Downloaded Notion images need width/height so `next/image` can reserve space,
 * but the only consumer is this build step — pulling in an image library for
 * four header formats would be more dependency than the job is worth.
 */

export type Dimensions = { width: number; height: number } | null;

export function imageSize(buffer: Buffer): Dimensions {
  return png(buffer) ?? gif(buffer) ?? webp(buffer) ?? jpeg(buffer);
}

function png(buffer: Buffer): Dimensions {
  if (buffer.length < 24) return null;
  if (buffer.readUInt32BE(0) !== 0x89504e47) return null;
  // Bytes 12–16 name the first chunk: IHDR for a plain PNG, but an APNG or a
  // PNG carrying a colour profile can lead with something else.
  if (buffer.toString("ascii", 12, 16) !== "IHDR") return null;
  return { width: buffer.readUInt32BE(16), height: buffer.readUInt32BE(20) };
}

function gif(buffer: Buffer): Dimensions {
  if (buffer.length < 10) return null;
  if (buffer.toString("ascii", 0, 3) !== "GIF") return null;
  return { width: buffer.readUInt16LE(6), height: buffer.readUInt16LE(8) };
}

function webp(buffer: Buffer): Dimensions {
  if (buffer.length < 30) return null;
  if (buffer.toString("ascii", 0, 4) !== "RIFF") return null;
  if (buffer.toString("ascii", 8, 12) !== "WEBP") return null;

  const format = buffer.toString("ascii", 12, 16);
  // Lossy: 14 bits each, after the 3-byte start code at offset 23.
  if (format === "VP8 ") {
    return {
      width: buffer.readUInt16LE(26) & 0x3fff,
      height: buffer.readUInt16LE(28) & 0x3fff,
    };
  }
  // Lossless: 14-bit dimensions packed across bytes 21–24, both minus one.
  if (format === "VP8L") {
    const bits = buffer.readUInt32LE(21);
    return { width: (bits & 0x3fff) + 1, height: ((bits >> 14) & 0x3fff) + 1 };
  }
  // Extended (animation, alpha): 24-bit dimensions minus one, little-endian.
  if (format === "VP8X") {
    return {
      width: (buffer.readUIntLE(24, 3) & 0xffffff) + 1,
      height: (buffer.readUIntLE(27, 3) & 0xffffff) + 1,
    };
  }
  return null;
}

function jpeg(buffer: Buffer): Dimensions {
  if (buffer.length < 4 || buffer.readUInt16BE(0) !== 0xffd8) return null;

  let offset = 2;
  while (offset + 9 < buffer.length) {
    // Segments are 0xFF followed by a marker; padding 0xFF bytes are legal.
    if (buffer[offset] !== 0xff) {
      offset += 1;
      continue;
    }
    const marker = buffer[offset + 1];
    if (marker === 0xff) {
      offset += 1;
      continue;
    }
    // SOF0–SOF15 carry the frame size. C4/C8/CC are DHT/JPG/DAC, not frames.
    if (marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc) {
      return { height: buffer.readUInt16BE(offset + 5), width: buffer.readUInt16BE(offset + 7) };
    }
    // Standalone markers (RSTn, SOI, EOI, TEM) carry no length field.
    if ((marker >= 0xd0 && marker <= 0xd9) || marker === 0x01) {
      offset += 2;
      continue;
    }
    offset += 2 + buffer.readUInt16BE(offset + 2);
  }
  return null;
}

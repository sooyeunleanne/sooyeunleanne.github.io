"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, Html, OrbitControls, RoundedBox } from "@react-three/drei";
import { Suspense, useRef, useState } from "react";
import type { Group } from "three";

function ScreenInterface() {
  const [activePanel, setActivePanel] = useState("Overview");

  return (
    <div className="screen-interface" onPointerDown={(event) => event.stopPropagation()}>
      <header className="screen-header">
        <span className="screen-brand">LEANNE</span>
        <nav aria-label="Portfolio sections">
          {["Overview", "Work", "Notes"].map((panel) => (
            <button
              className={activePanel === panel ? "screen-nav active" : "screen-nav"}
              key={panel}
              onClick={() => setActivePanel(panel)}
              type="button"
            >
              {panel}
            </button>
          ))}
        </nav>
        <span className="screen-status">● online</span>
      </header>

      <main className="screen-content">
        <p className="screen-kicker">Creative technologist · Seoul / New York</p>
        <h2>Ideas with a pulse.</h2>
        <p className="screen-copy">
          I make warm, curious digital experiences where thoughtful systems meet expressive design.
        </p>
        <div className="screen-actions">
          <button className="screen-primary" onClick={() => setActivePanel("Work")} type="button">
            Explore work <span aria-hidden="true">↗</span>
          </button>
          <a className="screen-secondary" href="mailto:hello@sooyeunleanne.com">
            Say hello
          </a>
        </div>
      </main>

      <footer className="screen-footer">
        <span>Selected view: {activePanel}</span>
        <span>drag the laptop to look around</span>
      </footer>
    </div>
  );
}

function LaptopModel() {
  const laptopGroup = useRef<Group>(null);

  useFrame(({ clock }) => {
    if (!laptopGroup.current) return;
    laptopGroup.current.position.y = Math.sin(clock.elapsedTime * 0.7) * 0.035;
  });

  return (
    <group ref={laptopGroup}>
      <RoundedBox args={[5.8, 0.28, 3.75]} radius={0.16} smoothness={4} position={[0, 0.16, 0]}>
        <meshStandardMaterial color="#b8c0c7" metalness={0.92} roughness={0.23} />
      </RoundedBox>

      <RoundedBox args={[5.28, 0.055, 2.92]} radius={0.09} smoothness={3} position={[0, 0.325, -0.08]}>
        <meshStandardMaterial color="#171a1d" metalness={0.2} roughness={0.35} />
      </RoundedBox>

      <RoundedBox args={[2.65, 0.028, 1.58]} radius={0.07} smoothness={3} position={[0, 0.37, 0.74]}>
        <meshStandardMaterial color="#aeb7bf" metalness={0.55} roughness={0.35} />
      </RoundedBox>

      <Keyboard />

      <group position={[0, 0.42, -1.63]} rotation={[0.1, 0, 0]}>
        <RoundedBox args={[5.8, 3.78, 0.18]} radius={0.13} smoothness={4}>
          <meshStandardMaterial color="#aeb7bf" metalness={0.94} roughness={0.2} />
        </RoundedBox>
        <RoundedBox args={[5.38, 3.34, 0.035]} radius={0.08} smoothness={3} position={[0, 0, 0.11]}>
          <meshStandardMaterial color="#101317" metalness={0.45} roughness={0.18} />
        </RoundedBox>
        <Html center transform position={[0, 0, 0.145]} distanceFactor={6} zIndexRange={[1, 10]}>
          <ScreenInterface />
        </Html>
        <mesh position={[0, -1.46, 0.14]} scale={[0.34, 0.34, 0.02]}>
          <circleGeometry args={[1, 48]} />
          <meshStandardMaterial color="#5d656c" metalness={0.75} roughness={0.25} />
        </mesh>
      </group>

      <mesh position={[-1.9, 0.39, -1.52]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.07, 0.07, 0.8, 24]} />
        <meshStandardMaterial color="#747d84" metalness={0.95} roughness={0.2} />
      </mesh>
      <mesh position={[1.9, 0.39, -1.52]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.07, 0.07, 0.8, 24]} />
        <meshStandardMaterial color="#747d84" metalness={0.95} roughness={0.2} />
      </mesh>
    </group>
  );
}

function Keyboard() {
  const rows = [10, 10, 9, 8, 7];
  return (
    <group position={[0, 0.365, -0.39]}>
      {rows.map((keyCount, rowIndex) =>
        Array.from({ length: keyCount }, (_, keyIndex) => {
          const x = (keyIndex - (keyCount - 1) / 2) * 0.34;
          const z = (rowIndex - 2) * 0.3;
          return (
            <RoundedBox args={[0.27, 0.035, 0.21]} radius={0.035} smoothness={2} key={`${rowIndex}-${keyIndex}`} position={[x, 0, z]}>
              <meshStandardMaterial color="#252b30" metalness={0.1} roughness={0.6} />
            </RoundedBox>
          );
        }),
      )}
      <RoundedBox args={[1.65, 0.035, 0.25]} radius={0.04} smoothness={2} position={[0, 0, 1.55]}>
        <meshStandardMaterial color="#252b30" metalness={0.1} roughness={0.6} />
      </RoundedBox>
    </group>
  );
}

function WebGLFallback() {
  return (
    <div className="webgl-fallback" role="status">
      <strong>3D preview unavailable</strong>
      <span>Open this page in a browser with WebGL enabled to explore the laptop.</span>
    </div>
  );
}

export function InteractiveMacBook() {
  return (
    <div className="laptop-stage">
      <div className="stage-label">
        <span>01 / PORTFOLIO</span>
        <span>INTERACTIVE STUDY</span>
      </div>
      <Suspense fallback={<WebGLFallback />}>
        <Canvas
          camera={{ fov: 34, position: [0, 2.6, 8.2] }}
          dpr={[1, 1.75]}
          gl={{ antialias: true, powerPreference: "high-performance" }}
          fallback={<WebGLFallback />}
          shadows
        >
          <color attach="background" args={["#b4bec7"]} />
          <ambientLight intensity={1.2} />
          <directionalLight castShadow intensity={3.5} position={[-4, 7, 5]} shadow-mapSize={[1024, 1024]} />
          <pointLight color="#e5f2ff" intensity={28} distance={12} position={[4, 3, 4]} />
          <LaptopModel />
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.03, 0]} receiveShadow>
            <planeGeometry args={[30, 30]} />
            <meshStandardMaterial color="#9da8b1" metalness={0.18} roughness={0.72} />
          </mesh>
          <ContactShadows blur={2.5} far={8} opacity={0.42} position={[0, 0, 0]} scale={8} resolution={512} />
          <OrbitControls
            enablePan={false}
            enableDamping
            dampingFactor={0.08}
            maxDistance={11}
            maxPolarAngle={Math.PI / 2.05}
            minDistance={5.4}
            minPolarAngle={Math.PI / 3.8}
            rotateSpeed={0.52}
            touches={{ ONE: 1, TWO: 2 }}
          />
        </Canvas>
      </Suspense>
      <p className="stage-hint">Drag to rotate · scroll to zoom</p>
    </div>
  );
}
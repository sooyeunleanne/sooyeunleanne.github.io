import { Component } from '@angular/core';
import { MyRoomComponent } from "../../frames/my-room/my-room.component";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-me',
  imports: [MyRoomComponent],
  templateUrl: './me.component.html',
  styleUrl: './me.component.css'
})
export class MeComponent {
  picturesOpen: string | null = null;

  journalPics: any = {};
  journalKeys: string[] = [];

  travelPics: any = {};
  travelKeys: string[] = [];

  lightboxOpen = false;
  currentImage = '';
  currentIndex = 0;
  currentSet: 'journal' | 'travel' | null = null;
  
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>('assets/journal-pics.json').subscribe(data => {
      this.journalPics = data;
      this.journalKeys = Object.keys(data);
    });

    this.http.get<any>('assets/travel-pics.json').subscribe(data => {
      this.travelPics = data;
      this.travelKeys = Object.keys(data);
    });
  }

  onJournalClick () {
    this.picturesOpen = 'journal';
  }

  onPolaroidClick () {
    this.picturesOpen = 'travel';
  }

  closePopup() {
    this.picturesOpen = null;
  }

  openImage(set: 'journal' | 'travel', index: number) {
    this.currentSet = set;
    this.currentIndex = index;
    this.updateCurrentImage();
    this.lightboxOpen = true;
  }

  updateCurrentImage() {
    if (this.currentSet === 'journal') {
      const keys = this.journalKeys;
      this.currentImage = 'assets/images/me/journal/' + this.journalPics[keys[this.currentIndex]].image;
    } else if (this.currentSet === 'travel') {
      const keys = this.travelKeys;
      this.currentImage = 'assets/images/me/travel/' + this.travelPics[keys[this.currentIndex]].image;
    }
  }

  nextImage(event: Event) {
    event.stopPropagation();
    if (!this.currentSet) return;
    const keys = this.currentSet === 'journal' ? this.journalKeys : this.travelKeys;
    this.currentIndex = (this.currentIndex + 1) % keys.length;
    this.updateCurrentImage();
  }

  prevImage(event: Event) {
    event.stopPropagation();
    if (!this.currentSet) return;
    const keys = this.currentSet === 'journal' ? this.journalKeys : this.travelKeys;
    this.currentIndex = (this.currentIndex - 1 + keys.length) % keys.length;
    this.updateCurrentImage();
  }

  closeLightbox() {
    this.lightboxOpen = false;
  }

}

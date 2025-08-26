import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PageSettingsService {
  // Default values
    private backgroundSource = new BehaviorSubject<string>('balcony-background');
    private headerSideSource = new BehaviorSubject<'left' | 'right'>('right');

    background$ = this.backgroundSource.asObservable();
    headerSide$ = this.headerSideSource.asObservable();

    setPage(backgroundClass: string, headerSide: 'left' | 'right') {
        this.backgroundSource.next(backgroundClass);
        this.headerSideSource.next(headerSide);
    }
}

import { Component, OnDestroy, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  recordMedia: 'A' | 'V' | null = null;

  showRecorder(mode: 'A' | 'V' | null) {
    this.recordMedia = mode;
  }

}

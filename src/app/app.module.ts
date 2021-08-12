import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AudioRecordingService } from './services/audio-recording.service';
import { VideoRecordingService } from './services/video-recording.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    AudioRecordingService,
    VideoRecordingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

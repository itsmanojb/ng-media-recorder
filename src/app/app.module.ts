import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AudioRecordingService } from './services/audio-recording.service';
import { VideoRecordingService } from './services/video-recording.service';
import { AudioRecorderComponent } from './components/audio-recorder/audio-recorder.component';
import { VideoRecorderComponent } from './components/video-recorder/video-recorder.component';

@NgModule({
  declarations: [
    AppComponent,
    AudioRecorderComponent,
    VideoRecorderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    AudioRecordingService,
    VideoRecordingService
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

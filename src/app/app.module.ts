import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyAOEEQj5uV-CRU-pBwgbSdUKefcKfgJ2Bo',
      authDomain: 'cicd-4bcc4.firebaseapp.com',
      databaseURL: 'https://cicd-4bcc4.firebaseio.com',
      projectId: 'cicd-4bcc4',
      storageBucket: 'cicd-4bcc4.appspot.com',
      messagingSenderId: '694345962459',
      appId: '1:694345962459:web:33a084c0047aec6164cdfe',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

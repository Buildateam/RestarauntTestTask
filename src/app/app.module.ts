import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { RestarauntsPage } from '../pages/restaraunts/restaraunts';
import { RestarauntInfoPage } from '../pages/information/restaraunt-info';
import { RestarauntApp } from './app.component';


@NgModule({
  declarations: [
    RestarauntApp,
    RestarauntsPage,
    RestarauntInfoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(RestarauntApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    RestarauntApp,
    RestarauntsPage,
    RestarauntInfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

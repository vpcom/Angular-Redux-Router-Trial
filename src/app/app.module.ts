import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// redux
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/home';
import { counter2Reducer } from './store/second-page';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// router
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { appRoutes } from './routes';

// redux router binding
import { StoreRouterConnectingModule, routerReducer, RouterStateSerializer } from '@ngrx/router-store';
import { CustomRouterStateSerializer } from './store/router';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SecondPageComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ routerReducer: routerReducer, counter: counterReducer, counter2: counter2Reducer}),
    StoreDevtoolsModule.instrument(),
    RouterModule.forRoot(appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    StoreRouterConnectingModule
  ],
  providers: [   
   /**
    * The `RouterStateSnapshot` provided by the `Router` is a large complex structure.
    * A custom RouterStateSerializer is used to parse the `RouterStateSnapshot` provided
    * by `@ngrx/router-store` to include only the desired pieces of the snapshot.
    */
{ provide: RouterStateSerializer, useClass: CustomRouterStateSerializer },],
  bootstrap: [AppComponent]
})
export class AppModule { }

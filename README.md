# AngularReduxRouterTrial

This a trial project aimed at implementing a basic web app with Angular 4, Redux (NgRx), (@Angular)Router.

**vincentperrin.com**


## Technical notes

This project was generated with Angular CLI. Run `npm install -g angular-cli`
to install it if necessary.

Run `npm install` for the setup.

Run `ng serve` to start the server server, and navigate to `http://localhost:4200/`. 


## How this project was built

### Application base

    ng new angular-redux-router-trial


### Fixing package issues

    npm install webpack --save-dev


### Redux (NgRx)

    npm install @ngrx/store --save
    npm install @ngrx/store-devtools --save


###  Router

    npm install @angular/router --save


### Router - store binding

    npm install @ngrx/router-store --save


## Next, todo

use ngrx store freeze and prove it's utility by violating the state immutability.
See https://angular-2-training-book.rangle.io/handout/change-detection/enforcing_immutability.html

Showcase route guards.

Study @ngrx/effects.
https://medium.com/@flashMasterJim/the-basics-of-ngrx-effects-effect-and-async-middleware-for-ngrx-store-in-angular-2-f25587493329

It should implement as much as possible of **good practices**, be a good use case for using debuging tools and allow **lazy-loading**.

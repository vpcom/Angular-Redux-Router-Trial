import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs/Observable";
import {INCREMENT, DECREMENT, RESET} from './../store/home'; // TODO: import as one

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  counter$: Observable<number>;

  constructor(private store: Store<any>) {
    this.counter$ = this.store.select<any>('counter')
  }


  ngOnInit() {
  }

  increment() {
    this.store.dispatch({type: 'INCREMENT'});
  }

  decrement() {
    this.store.dispatch({type: 'DECREMENT'});
  }

  reset() {
    this.store.dispatch({type: 'RESET'});
  }
}

import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs/Observable";
import {INCREMENT2, DECREMENT2, RESET2} from './../store/second-page'; // TODO: import as one

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})
export class SecondPageComponent implements OnInit {

  counter2$: Observable<number>;
  
  constructor(private store: Store<any>) {
    this.counter2$ = this.store.select<any>('counter2')
  }


  ngOnInit() {
  }
  
    
  increment2() {
    this.store.dispatch({type: 'INCREMENT2'});

  }

  decrement2() {
    this.store.dispatch({type: 'DECREMENT2'});
  }

  reset2() {
    this.store.dispatch({type: 'RESET2'});
  }

}

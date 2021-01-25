import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.less']
})
export class CounterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() public count = 0;

  @Output() changeCount = new EventEmitter<number>();

  public increaseCount(): void {
    this.count++;
    this.changeCount.emit(this.count);
  }

  public decreaseCount(): void {
    this.count--;
    this.changeCount.emit(this.count);
  }

  public onChange(): void {
    console.log(this.count);
  }
}

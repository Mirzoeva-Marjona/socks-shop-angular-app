import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

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

  @Output() public changeCount = new EventEmitter<number>();

  public increaseCount(): void {
    this.count++;
    this.changeCount.emit(this.count);
  }

  public decreaseCount(): void {
    this.count--;
    this.changeCount.emit(this.count);
  }

  public onChange(): void {
    this.changeCount.emit(!isNaN(Number(this.count)) ? Number(this.count) : 1);
  }
}

import { Component, OnInit, Input } from '@angular/core';

import { ViaTrackSerService } from '../via-ser/via-track-ser.service';

@Component({
  selector: 'app-via-todo',
  templateUrl: './via-todo.component.html',
  styleUrls: ['./via-todo.component.css']
})
export class ViaTodoComponent implements OnInit {

  constructor( private tracker : ViaTrackSerService) { }

  ngOnInit(): void {
  }

  @Input() todo;

  toggle(){
    this.todo.done = !this.todo.done;
    this.tracker.track(this.todo);
  }

}

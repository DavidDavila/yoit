import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-google-button',
  templateUrl: './google-button.component.html',
  styleUrls: ['./google-button.component.scss'],
})
export class GoogleButtonComponent implements OnInit {
  @Output('onClick') onClick = new EventEmitter();
  constructor() {}

  ngOnInit() {}
  onClicked() {
    this.onClick.emit();
  }
}

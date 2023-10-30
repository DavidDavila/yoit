import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent {
  @Output('onRegister') onRegister = new EventEmitter();
  terms: boolean = false;
  constructor() {}

  onGoogleButtonClicked() {
    this.finish();
  }
  private finish() {
    this.onRegister.emit();
  }
}

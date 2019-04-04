import { Component } from '@angular/core';
import PasswordValidatorInnoCV from './PasswordValidator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  username = '';
  password = '';
  formData: object;
  nameFieldError = undefined
  passwordFieldError = undefined
  formDisabled = false

  submitForm(form) {
    this.formDisabled = true
    const formData = form.value
    this.nameFieldError = undefined;
    this.passwordFieldError = undefined;

    if (formData.username.length < 3) {
      this.nameFieldError = 'Name length doesnt match 3 characters criteria'
    }

    this.passwordFieldError = new PasswordValidatorInnoCV(formData.password).validate()

    this.formDisabled = false

    //here you call to your submission service to your API
  }
}


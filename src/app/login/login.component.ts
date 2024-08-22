import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ButtonType } from '../enums/buttonEnums'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private formBuilder: FormBuilder) {}

  emailText = ''
  passwordText = ''
  passwordInputType = 'password'
  submitted = false
  buttonType = ButtonType.SUBMIT

  onEmailChange(email: string) {
    this.emailText = email
    this.submitted = false
  }

  onPasswordChange(password: string) {
    this.passwordText = password
    this.submitted = false
  }
  Submit() {
    this.submitted = true
  }
  showPassword(showPassword: boolean) {
    if (showPassword) {
      this.passwordInputType = 'text'
    } else {
      this.passwordInputType = 'password'
    }
  }
}

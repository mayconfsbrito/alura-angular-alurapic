import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  templateUrl: './signup.component.html',
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],
      fullName: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(40)
        ]
      ],
      userName: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[a-z0-9_\-]+$/),
          Validators.minLength(2),
          Validators.maxLength(30)
        ]
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(14)
        ]
      ],
    });
  }

}

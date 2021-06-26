import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MainConfigService } from '../main-config.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    public mainconfigservice: MainConfigService,
  ) { }

  username = new FormControl('', Validators.required);

  ngOnInit(): void {
  }

}

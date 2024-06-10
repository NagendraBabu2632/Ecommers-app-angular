import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent {

  username: string = '';
  password: string = '';
  showSubmitError: boolean = false;
  errorMsg: string = 'Invalid User';
  loginForm: any;

  constructor(private formBuilder: FormBuilder, private login: ProductsService, private router:Router) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.router.navigate(['/home']); 
    }else{
      this.showSubmitError = true;
    }


      // user authentication

    // if (this.loginForm.valid){
    //   const usName = this.loginForm.value.username;
    //   const pass = this.loginForm.value.password;
    //   this.login.loginUser(usName, pass).subscribe((data:any) => {
    //     console.log(data,"Data");
    //   }, (error) => {
    //     console.log(error,"Error");
    //     this.showSubmitError = true
    //     this.errorMsg = error.message
    //   }); 
    // }

    }


// using interceptor

    
  }  


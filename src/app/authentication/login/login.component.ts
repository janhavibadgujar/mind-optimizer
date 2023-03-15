import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css',]
})
export class LoginComponent implements OnInit {
  innerHeight:any;
  isLoginActive = false;
  loginOnSubmit = false;

  loginForm!: FormGroup;

  loggedInUserName:string = "";  
  submitted: boolean=false;
  show_password: boolean=false;
  constructor(
    private fb: FormBuilder, 
    private auth: AuthenticationService, 
    private toastr:ToastrService, 
    private router: Router,
    private SpinnerService: NgxSpinnerService
  ){}

  ngOnInit(): void {
    this.innerHeight = window.innerHeight+'px';
    this.isLoginActive = true;
    this.loginForm = this.fb.group({
      username: ['', Validators.compose([
        Validators.required
      ])],
      password: ['', Validators.compose([Validators.required])],
    });
  }

  get loginFormControl() {
    return this.loginForm.controls;
  }

  onSubmit(){
    this.SpinnerService.show();
    this.submitted=true;
      const loginForm = {
        username: this.loginForm.value.username,
        password: this.loginForm.value.password,
      }
      if (this.loginForm.valid){
        //this.auth.loginUser(loginForm).subscribe((response:any)=>{
          //  console.log("response:",response)
           // this.SpinnerService.hide();
            this.toastr.success('Login Succesfully!')
            // localStorage.setItem('userEmail',loginForm.username)
            // localStorage.setItem('token',response?.access)
            // localStorage.setItem('userId',response.id)
             this.router.navigate(['/main-dashboard'])
       // },
        // (Catcherror)=>{
        //   console.log("Error",Catcherror.error)
        //   this.SpinnerService.hide();
        //   this.toastr.error(Catcherror.error.message)
        //   this.loginOnSubmit = false;
        // }
      //  );
      }

  }

  showpassword(id: any, el: any) {
    let x: any = document.getElementById(id);
    if (x.type === "password") {
      x.type = "text";
      el.class = 'ri-eye-off-line';
      this.show_password = true;
    } else {
      x.type = "password";
      el.class = 'password-eye';
      this.show_password = false;
    }
  }

  onChangeEmail(event:any)
  {

  }

  register()
  {
    this.router.navigate(['/register'])
  }

}

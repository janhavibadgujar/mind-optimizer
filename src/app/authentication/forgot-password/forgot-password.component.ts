import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordOnSubmit = false;
  forgotPasswordConfirmOnSubmit = false;

  isShowForgotPasswordDiv = false;
  isShowForgotPasswordConfirmDiv = false;

  forgotPasswordForm!: FormGroup;
  forgotPasswordConfirmForm!: FormGroup;
  constructor(
    private fb: FormBuilder, 
    private auth: AuthenticationService, 
    private toastr:ToastrService, 
    private router: Router,
    private SpinnerService: NgxSpinnerService
  ){}

  ngOnInit(): void {
    this.isShowForgotPasswordConfirmDiv = true;
    this.forgotPasswordForm = this.fb.group({
      username: ['', Validators.compose([
        Validators.required
      ])]
    });

    this.forgotPasswordConfirmForm = this.fb.group({
      username:['',],
      password:['', Validators.compose([Validators.required])],
      code:['', Validators.compose([Validators.required])]
    });
  }

  toggleDisplayDiv(event:any) {  
    if(event === 'forgotPassword'){
      this.isShowForgotPasswordDiv = false;
      this.isShowForgotPasswordConfirmDiv = true;
    }
    if(event === 'forgotPasswordConfirm'){
      this.isShowForgotPasswordDiv = true;
      this.isShowForgotPasswordConfirmDiv = false;
    }
  }

  onSubmit(){
    this.SpinnerService.show();
    if (this.forgotPasswordOnSubmit){
      console.log(this.forgotPasswordForm.value.username)
      const forgotPasswordForm = {
        username: this.forgotPasswordForm.value.username,
      }
      if (this.forgotPasswordForm.valid){
        this.auth.forgotPassword(forgotPasswordForm).subscribe((response)=>{
            console.log("response:",response)
            this.SpinnerService.hide();
            this.toastr.success(response.message)
            this.toggleDisplayDiv('forgotPasswordConfirm');
            this.forgotPasswordOnSubmit = false;

        },
        (Catcherror)=>{
          console.log("Error",Catcherror.error)
          this.SpinnerService.hide();
          this.toastr.error(Catcherror.error.message)
        }
        );
      }
    }

    if (this.forgotPasswordConfirmOnSubmit){
      console.log(">>>>>>>>",this.forgotPasswordConfirmForm)
      const forgotPasswordConfirmForm = {
        username: this.forgotPasswordForm.value.username,
        password: this.forgotPasswordConfirmForm.value.password,
        code: this.forgotPasswordConfirmForm.value.code
      }
      console.log(forgotPasswordConfirmForm)
      if (this.forgotPasswordConfirmForm.valid){
        this.auth.forgotPasswordConfirm(forgotPasswordConfirmForm).subscribe((response)=>{
            console.log("response:",response)
            this.SpinnerService.hide();
            this.toastr.success(response.message)
            this.router.navigate(['/login'])
        },
        (Catcherror)=>{
          console.log("Error",Catcherror.error)
          this.SpinnerService.hide();
          this.toastr.error(Catcherror.error.message)
        }
        );
      }
    }
  }

  get forgotPasswordFormControl() {
    return this.forgotPasswordForm.controls;
  }

  get forgotPasswordConfirmFormControl() {
    return this.forgotPasswordConfirmForm.controls;
  }

}

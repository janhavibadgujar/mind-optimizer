import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  password ="";
  isMatchPassword = false;
  isRegistrationActive =false;
  isAcceptedTermsAndConditions=false;
  
  registrationOnSubmit = false;
  registrationConfirmOnSubmit = false;

  isShowRegistrationDiv = false;
  isShowRegistrationConfirmDiv = false;

  fieldType = "password";
  iconType = "fa fa-eye";

  registrationForm!: FormGroup;
  registrationConfirmForm!: FormGroup;
    
  constructor(
    private fb: FormBuilder, 
    private auth: AuthenticationService, 
    private toastr:ToastrService, 
    private router: Router,
    private SpinnerService: NgxSpinnerService 
  ){}

  ngOnInit(): void {
    this.isRegistrationActive =true;
    this.isShowRegistrationConfirmDiv = true;

    this.registrationForm = this.fb.group({
      password: ['', Validators.compose([Validators.required])],
      c_password: ['', Validators.compose([Validators.required])],
      first_name: ['', Validators.compose([Validators.required])],
      last_name: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required])],
      phone_number: [''],
      postal_code: ['', Validators.compose([Validators.required])],
      country:['',Validators.compose([Validators.required])],
      countryCode:['',Validators.compose([Validators.required])],
      policy:['',Validators.compose([Validators.required])],
      is_subscribed_to_updates:['']
    });

    this.registrationConfirmForm = this.fb.group({
      username: ['',],
      code:['', Validators.compose([Validators.required])]
    });
  }
  toggleDisplayDiv(event:any) {  
    if(event === 'registration'){
      this.isShowRegistrationDiv = false;
      this.isShowRegistrationConfirmDiv = true;
    }
    if(event === 'registrationConfirm'){
      this.isShowRegistrationDiv = true;
      this.isShowRegistrationConfirmDiv = false;
    }
  }

  onSubmit(){
    this.SpinnerService.show();
    if (this.registrationOnSubmit){
      const registrationForm = {
        first_name: this.registrationForm.value.first_name,
        last_name: this.registrationForm.value.last_name,
        email: this.registrationForm.value.email,
        phone_number: this.registrationForm.value.phone_number === ''? '+11111':this.registrationForm.value.countryCode+this.registrationForm.value.phone_number,
        address:'default',
        account_name:'default',
        postal_code: this.registrationForm.value.postal_code,
        country:this.registrationForm.value.country,
        username: this.registrationForm.value.first_name+this.registrationForm.value.last_name ,
        password: this.registrationForm.value.password,
        is_subscribed_to_updates: this.registrationForm.value.is_subscribed_to_updates? true:false,
      }
      if (this.registrationForm.valid){
        this.auth.registerUser(registrationForm).subscribe((response)=>{
            console.log("response:",response)
            this.SpinnerService.hide();
            this.toastr.success(response.message)
            this.registrationOnSubmit = false;
            this.toggleDisplayDiv('registrationConfirm')
        },
        (Catcherror)=>{
          console.log("Error",Catcherror.error)
          this.SpinnerService.hide();
          this.toastr.error(Catcherror.error.message);
          this.registrationOnSubmit = false;
        }
        );
      }
    }

    if (this.registrationConfirmOnSubmit){
      const registrationConfirmForm = {
        username: this.registrationForm.value.first_name+this.registrationForm.value.last_name,
        code: this.registrationConfirmForm.value.code
      }

      if (this.registrationConfirmForm.valid){
        this.auth.registerConfirmUser(registrationConfirmForm).subscribe((response)=>{
            console.log("response:",response)
            this.SpinnerService.hide();
            this.toastr.success(response.message)
            this.router.navigate(['/login'])
        },
        (Catcherror)=>{
          console.log("Error",Catcherror.error)
          this.SpinnerService.hide();
          this.toastr.error(Catcherror.error.message);
          this.registrationConfirmOnSubmit = false;
        }
        );
      }
    }
  }

  get registrationFormControl() {
    return this.registrationForm.controls;
  }

  get registrationConfirmFormControl() {
    return this.registrationConfirmForm.controls;
  }

  checkPassword(event:any){
    if (this.password !== event.target.value){
        this.isMatchPassword = true;
    }else{
      this.isMatchPassword = false;
    }
  }
  storePassword(event:any){
    this.password = event.target.value
  }

  displayOrHidePassword(field:any){
    console.log(field)
    if (field === 'password'){
      this.fieldType  = 'text';
      this.iconType = 'fa fa-eye-slash';
    }
    else{
      this.fieldType  = 'password';
      this.iconType = 'fa fa-eye';
    }
  }

}

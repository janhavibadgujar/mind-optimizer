import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile/profile.service';
import { MainComponent } from '../main.component';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})



export class ProfileComponent implements OnInit {
  userInfo:any;
  isEdit=false;
  updateUserInfoOnSubmit=false;
  profile_image_url = "";
  profile_image_new_path = "";
  updateUserInfoForm!:FormGroup;

  
  constructor(
    private profile: ProfileService, 
    private main:MainComponent,
    private fb: FormBuilder, 
    private toastr:ToastrService, 
    private router: Router,
    private SpinnerService: NgxSpinnerService
  ){}
  
  ngOnInit(): void {
    this.SpinnerService.show();
    //  To hide menu button on routing
    let mobile_width = window.innerWidth;
    if (mobile_width <= 425){
      let menu_element: HTMLElement = document.querySelector('.bx-menu') as HTMLElement;
      let sidenav_element: HTMLElement = document.querySelector('.sidebar') as HTMLElement;
      if (sidenav_element.className === 'sidebar open'){
         menu_element.click()
      }
    }

    this.isEdit=false;
    this.getUserInfo();

    this.updateUserInfoForm = this.fb.group({
      profile_image:[''],
      profile_image_path:[''],
      first_name: ['', Validators.compose([Validators.required])],
      last_name: ['', Validators.compose([Validators.required])],
      phone_number: [''],
      postal_code: ['', Validators.compose([Validators.required])],
      country:['', Validators.compose([Validators.required])],
    });
    setInterval(()=>{
      this.SpinnerService.hide();
    },3500)
    
  }
  onSubmit(){
    this.SpinnerService.show();
    if (this.updateUserInfoOnSubmit){
      console.log('this prffile ', this.updateUserInfoForm)
      const updateUserInfoForm:any = {
        first_name: this.updateUserInfoForm.value.first_name,
        last_name: this.updateUserInfoForm.value.last_name,
        account_name: "default",
        phone_number: this.updateUserInfoForm.value.phone_number,
        address: "default",
        postal_code: this.updateUserInfoForm.value.postal_code,
        country: this.updateUserInfoForm.value.country,
      }
      if(this.userInfo.user_profile !==this.updateUserInfoForm.value.profile_image_path){
        console.log("in if condition")
        updateUserInfoForm['user_profile']= this.updateUserInfoForm.value.profile_image_path

      }
      console.log(">>>>>>>>>>",updateUserInfoForm)
      if (this.updateUserInfoForm.valid){
        this.profile.updateUser(updateUserInfoForm).subscribe((response)=>{
            console.log("response:",response)
            this.updateUserInfoOnSubmit = false;
            this.toastr.success(response.message)
            setTimeout(()=>{
              location.reload()

            },2500)
            
        },
        (catchError)=>{
          console.log("Error",catchError.error)
          this.SpinnerService.hide();
          this.toastr.error(catchError.error.message)
        }
        );
      }
    }

  }

  get updateUserInfoFormControl() {
    return this.updateUserInfoForm.controls;
  }

  getUserInfo(){
    this.profile.getUser().subscribe((response)=>{
        // console.warn(response);
        // this.userInfo = response.data
        this.userInfo = response.data

        this.SpinnerService.hide();
    },
    (catchError)=>{
        // this.main.logoutUser()
    }
    )
  }

  choose_profile_picture(){
    let element: HTMLElement = document.getElementById('profile_image') as HTMLElement;
    element.click()
   }

   upload_profile_image(event:any){
    let spinnerElement:HTMLElement = document.getElementById('profile-edit-spinner') as HTMLElement;
    spinnerElement.toggleAttribute('hidden'); 

    if (event.target.files && event.target.files[0]) {
      // this.userInfo.user_profile ='';
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      let selectedFile = <File>event.target.files[0]
      reader.onload=(event:any)=>{
        this.profile_image_url = event.target.result;
      // spinnerElement.addAttribute('hidden');
        setTimeout(() => {
          spinnerElement.toggleAttribute('hidden'); 

        }, 2000);


        const json_data = {
          name:selectedFile.name,
          image:this.profile_image_url.toString()
        }
  
        this.profile.updateUserProfilePic(json_data).subscribe((response)=>{
          console.log("profile",response.success.message)
          this.profile_image_new_path = response.data.file_path
          console.log("new",this.profile_image_new_path)
        },
        (catchError)=>{
          console.log("profile pic error ",catchError.error.message)
        }
        )
      }
      
    }
   }
}

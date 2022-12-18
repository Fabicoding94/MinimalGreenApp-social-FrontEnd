import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import Swal from 'sweetalert2';





@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  form: FormGroup = new FormGroup({});


  constructor(private fb: FormBuilder, private authSvc: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [null, Validators.required],
      lastname: [null, Validators.required],
      username: [null, Validators.required],
      email: [null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: [null, [Validators.required, Validators.minLength(4)]],
    });
  }

  submit(){
    this.authSvc.register(this.form.value)
    .subscribe({
      next: res => {
        console.log(res),
        Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Registered successfully',
        showConfirmButton: false,
        timer: 3000
        })
      },
      complete: () => this.router.navigate(['/login'])
      ,
        error: error => {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Something went wrong, try with a different username or email!',
            showConfirmButton: true,
            timer: 3000
          })
        }
    })
  }
}

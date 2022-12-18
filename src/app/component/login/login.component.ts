import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  flag: boolean = true;

  constructor(private builder: FormBuilder, private authSvc: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.form = this.builder.group({
      username: [null,[Validators.required]],
      password: [null, [Validators.required, Validators.minLength(4)]],
    });
  }

  login() {

    this.authSvc.login(this.form.value)
    .subscribe({
      next: res => {
      console.log(res)
      this.authSvc.saveAccessData(res)
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Welome to our Forum',
        showConfirmButton: false,
        timer: 1000
      })
      },
      complete: () => this.router.navigate(['/forum'])
      ,
        error: error => {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'This user does not exist',
            showConfirmButton: true,
            timer: 3000
          })
        }
      })
  }
}

/* form: FormGroup = new FormGroup({});
  formIsValid!: boolean;

  constructor(private builder: FormBuilder, private authSrv: AuthService, private router:Router) { }

  ngOnInit(): void {
    this.form = this.builder.group({
      username: [null,[Validators.required]],
      password: [null, [Validators.required, Validators.minLength(3)]],
    });

  }

  login(){

    this.authSrv.login(this.form.value)
      .subscribe({
        next: res => {
          this.authSrv.saveAccessData(res)
          this.router.navigate(['/forum'])
        },
        error: error => {
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Username or password is incorrect!',
            showConfirmButton: false,
            timer: 2000
          })
        }
      })
  }*/

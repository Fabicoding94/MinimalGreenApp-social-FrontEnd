import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthResponse } from 'src/app/models/auth-response';
import { Post } from 'src/app/models/post';
import { PostDto } from 'src/app/models/postDTO';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/service/auth.service';
import { PostService } from 'src/app/service/post.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {



  postform!: FormGroup;
  formIsValid!: boolean;
  currentUser!: User;
  authorId!:number




  formAction:string = 'create'
  loggedUser!: AuthResponse;




  constructor(

    public authSvc: AuthService,
    private postSvc: PostService,
    private formBuilder: FormBuilder,
    private router: Router


  ) { }

  ngOnInit(): void {


    this.postform = this.formBuilder.group({

      title:['', Validators.required],
      text:['', Validators.required ],


    })
  }

  checkLog(): boolean {
    return this.authSvc.isUserLogged()
  }



  submit(post: PostDto, authorId:number): void {

    if(this.postform.valid){
      authorId = this.authSvc.getLoggedUser().id
       this.postSvc.addPost(
           this.postform.value, authorId)
       .subscribe({

          next: res =>{
            console.log(post),
            Swal.fire({
              icon: 'success',
              title: 'Post Added succesfully!',
              showConfirmButton: false,
              timer: 1000,
              timerProgressBar: true
            })

          },


        error: error => {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Something went wrong!',
            showConfirmButton: true,
            timer: 3000
          })
        }
      })

    }


  }

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { Post } from 'src/app/models/post';
import { Comment } from 'src/app/models/comment';
import { PostService } from 'src/app/service/post.service';
import { AuthResponse } from 'src/app/models/auth-response';
import {MatExpansionModule} from '@angular/material/expansion';


import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { PostDto } from 'src/app/models/postDTO';

import { AuthService } from 'src/app/service/auth.service';
import { CommentService } from 'src/app/service/comment.service';
import { PostFormComponent } from '../post-form/post-form.component';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {

  currentPost: Post = new Post();
  loggedUser!: AuthResponse;
  postform!: FormGroup;
  formAction: string = 'create'
  showForm: boolean = false;
  private dialogRef: any;


  constructor(
    private dialog: MatDialog,
     private postSvc:PostService,
     private commentSvc: CommentService,
     private authSvc: AuthService,
    private formBuilder: FormBuilder,){}





  posts:Post[] = [];

  comments:Comment[] = [];

  ngOnInit(): void {
    this.getPosts()


  }

  getPosts(): void {
    this.postSvc.getAllPosts().subscribe(posts =>
      this.posts = posts)
  }



  getComments(): void {

    this.commentSvc.getAllComments().subscribe(comments =>
      this.comments = comments)


  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(PostFormComponent, {
      width: '550px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }





}




/*addPost(post: PostDto): void {

  post.authorId = this.loggedUser?.id
  this.postSvc.addPost(this.postForm.value)
  .subscribe({
    next:(res)=>{
    this.posts.push(res as Post)
    this.dialogRef.close('save');
    this.currentPost = new Post()
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'New Post Created',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true
    })},

    error:(res)=>{
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Something went wrong',
        showConfirmButton: true,
        timer: 3000,
        timerProgressBar: true
      })
    }

  })
}

toggleCreatePost() {
  this.formAction = 'create'
  this.showForm = !this.showForm;
}*/


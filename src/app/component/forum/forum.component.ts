import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { Post } from 'src/app/models/post';
import { Comment } from 'src/app/models/comment';
import { PostService } from 'src/app/service/post.service';
import { AuthResponse } from 'src/app/models/auth-response';
import {MatExpansionModule} from '@angular/material/expansion';


import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { CommentDto } from 'src/app/models/commentDTO';

import { AuthService } from 'src/app/service/auth.service';
import { CommentService } from 'src/app/service/comment.service';
import { PostFormComponent } from '../post-form/post-form.component';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/service/user.service';
import { map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {


  loggedUser!: AuthResponse;
  postform!: FormGroup;
  formAction: string = 'create'
  showForm: boolean = false;
  private dialogRef: any;



  //----comment form

  commentform!: FormGroup;
  authorId:number = this.authSvc.getLoggedUser();



  //---------autocomplete------
  myControl = new FormControl('');
  options: string[] = ['Come possiamo limitare il riscaldamento globale?',
                        'Cosa pensate delle diete sostenibili?',
                        ''];
  filteredOptions!: Observable<string[]>;
  //--


  constructor(
    private dialog: MatDialog,
     private postSvc:PostService,
     private commentSvc: CommentService,
     private userSvc:UserService,
     private authSvc: AuthService,
    private formBuilder: FormBuilder,){}





  posts:Post[] = [];
  post!: Post;


  comments:Comment[] = [];
  commentText: string = '';
  senderId!: number;



  users:User[] = [];

  ngOnInit(): void {
    this.getPosts()
    this.getUsers()
    this.getCommentsOfPost()

    //--autocomplete
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
    //--

    if (this.checkLog())
    this.loggedUser = this.authSvc.getAccessData()

    this.commentform = this.formBuilder.group({
      text:['', Validators.required ],
    } ,)




  }

  getPosts(): void {
    this.postSvc.getAllPosts().subscribe(posts =>
      this.posts = posts)
  }

  getUsers(): void {
    this.userSvc.getAllUsers().subscribe(users =>
      this.users = users)
  }


getCommentsOfPost(): void{
  this.commentSvc.getAllCommentsByPostId(this.post.id).subscribe({
    next: res => {
      this.comments = res

    },
    error: error => console.log(error)
  })


}

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(PostFormComponent, {
      width: '650px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  //---autocomplete
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  checkLog(): boolean {
    return this.authSvc.isUserLogged()
  }

  sendComment(commentText: string, postId: number | undefined) {

    if (postId) {
      let commentDto: CommentDto = {
        text: commentText,
        postId: this.post.id,
        senderId: this.loggedUser.id
      }
      this.commentSvc.addComment(commentDto)
      this.commentText = ''
    }
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


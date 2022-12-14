import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/service/post.service';
import { AuthResponse } from 'src/app/models/auth-response';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {


  constructor(private postSvc:PostService) { }


  @Input() currentUser!: AuthResponse

  @Output() onLike = new EventEmitter()

  posts:Post[] = [];

  ngOnInit(): void {
    this.getPosts()

  }

  getPosts(): void {
    this.postSvc.getAllPosts().subscribe(posts =>
      this.posts = posts)
  }

  like(post: Post) {
    this.onLike.emit(post) //però di fatto non è implementato, è solo lì per bellezza
  }

}

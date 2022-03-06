import { Component, EventEmitter, Output, Input } from '@angular/core';
import { PostsService } from '../../services/posts.service';

import { Post } from '../../models/Post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent {
  @Output() newPost: EventEmitter<Post> = new EventEmitter();
  @Output() updatedPost: EventEmitter<Post> = new EventEmitter();
  @Input() current: Post = {
    id: 0,
    title: '',
    body: ''
  };
  @Input() isEdit: Boolean = false;

  constructor(private postsService: PostsService) {
  }

  addPost(title: string, body: string) {
    if (!title || !body) {
      alert('Please add all fields...');
    } else {
      this.postsService.savePost({
        title,
        body
      } as Post).subscribe(post => {
        this.newPost.emit(post);
      });
    }
  }

  updatePost() {
    this.postsService.updatePost(this.current).subscribe(post => {
      console.log(post);
      this.isEdit = false;
      this.updatedPost.emit(post);
    });
  }
}

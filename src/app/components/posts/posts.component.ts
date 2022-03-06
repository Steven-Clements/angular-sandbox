import { Component } from '@angular/core';
import { PostsService } from '../../services/posts.service';

import { Post } from '../../models/Post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  posts: Post[];
  current: Post = {
    id: 0,
    title: '',
    body: ''
  };
  isEdit: boolean = false;

  constructor(private postsService: PostsService) { 
    this.posts = [];
    this.postsService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  onNewPost(post: Post) {
    this.posts.unshift(post);
  }

  editPost(post: Post) {
    this.current = post
    this.isEdit = true;
  }

  onUpdatedPost(post: Post) {
    this.posts.forEach((current, index) => {
      if (post.id === current.id) {
        this.posts.splice(index, 1);
        this.posts.unshift(post);
        this.isEdit = false;
        this.current = {
          id: 0,
          title: '',
          body: ''
        }
      }
    })
  }

  removePost(post: Post) {
    if (confirm('This action is irreversible! Are you sure you want to delete this resource?')) {
      this.postsService.removePost(post.id).subscribe(() => {
        this.posts.forEach((current, index) => {
          if (post.id === current.id) {
            this.posts.splice(index, 1);
          }
        })
      })
    }
  }
}

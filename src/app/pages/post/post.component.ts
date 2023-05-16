import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fakeData } from '../../data/fakeData';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  photoCover: string ='';
  postTitle: string = '';
  postResume: string = '';
  private id: string | null = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => (this.id = value.get('id')));

    this.setValuesToComonent(this.id)
  }

  setValuesToComonent(id: string | null) {
    const result = fakeData.filter(article => article.id == id)[0]

    this.photoCover = result.photoCover
    this.postTitle = result.title
    this.postResume = result.resume

  }
}

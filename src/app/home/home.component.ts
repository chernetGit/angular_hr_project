import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public href: string = '';
  public bool: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.href = this.router.url;
    if (this.href == '/home') {
      this.bool = true;
    }
    // console.log(this.router.url);
  }
}

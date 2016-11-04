import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  isHome: boolean;

  constructor(private router: Router) {
    router.events.subscribe((val) => {
        if (val instanceof NavigationEnd) {
          this.isHome = val.url == '/';
        }
    });
  }

  ngOnInit() { }

}

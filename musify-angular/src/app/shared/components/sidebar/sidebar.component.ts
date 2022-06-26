import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  menuLinks: sideBarMenu = { defaultOptions: [], accessLink: [], customOptions: [] };

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.menuLinks.defaultOptions = [
      {
        name: "Home", 
        icon: "bi-house-door-fill",
        router: ["/"]
      },
      {
        name: "Buscar", 
        icon: "bi-search", 
        router: ["/", "history"]
      },
      {
        name: "Tu biblioteca", 
        icon: "bi-music-note-list", 
        router: ["/", "favorites"]
      }
    ];

    this.menuLinks.accessLink = [
      {
        name: "Crear lista",
        icon: "bi-plus-square"
      },
      {
        name: "Canciones que te gustan",
        icon: "bi-bookmark-heart"
      }
    ];

    this.menuLinks.customOptions = [
    ];
    
  }
}

interface sideBarMenu {
  defaultOptions: Array<any>;
  accessLink: Array<any>;
  customOptions: Array<any>;
}

import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';




@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  // (function($){
  //       $(document).ready(function(){
  //           // Write the jQuery function here
  //           $('.sidenav').sidenav();

  //       })
  //   })(jQuery);

  
    $(document).ready(function(){
      $('.sidenav').sidenav();
  });



  }

}

import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';
import { ClientserviceService } from './clientservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'University-Website';
  isLoggedIn: boolean = false;
  constructor(
    private router: Router,
    private cservice: ClientserviceService
  ) {

    this.router.events.pipe(
      filter(event => event instanceof NavigationStart)
    ).subscribe((event: any) => {
      if (this.cservice.getClientAuthorization() !== null) {
        setTimeout(() => {
          this.isLoggedIn = true;

        }, 100);
      } else {

        setTimeout(() => {
          this.isLoggedIn = false;

        }, 1);

      }
    });
    //line 20 to 41-->check when routing(url) change it will check authorization
  }
  openPage(str: string): void {
    if(str==="logout"){
      this.cservice.clientLogout();
      return;
    }
    this.router.navigate(['/' + str]);
  }

}




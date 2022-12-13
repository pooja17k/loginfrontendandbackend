import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { ClientserviceService } from 'src/app/clientservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  cemail: string = "";
  cpassword: string = "";

  constructor(
    private router: Router,
    private cservice: ClientserviceService

  ) { }
  clientSignIn(): void {

    const body = {
      "cemail": this.cemail,
      "cpassword": this.cpassword
    }
    console.log("=======>", body);
    this.cservice.clientSignIn(body).pipe(take(1)).subscribe((res: any) => {
      console.log("*****", res);
      if (res && res?.cid) {
        // alert("Login sucessful");
        this.cservice.storeClientAuthorization(res?.cid);
        this.router.navigate(['/home']);

      }
    }, err => {
      console.log("Error  ", err);
      alert("Something going wrong in login!!pl try again");
    })

  }
}




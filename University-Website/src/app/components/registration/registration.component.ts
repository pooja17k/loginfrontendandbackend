import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { ClientserviceService } from 'src/app/clientservice.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  cname: string = "";
  cemail: string = "";
  cpassword: string = "";

  constructor(
    private router: Router,
    private cservice: ClientserviceService
  ) { }

  signup(): void {
    const body: any = {
      cname: this.cname,
      cemail: this.cemail,
      cpassword: this.cpassword
    }
    console.log("@@@", body);
    this.cservice.signUp(body).pipe(take(1)).subscribe((res: any) => {
      console.log("****", res);
      if (res && res?.cid) {
        alert("Registration Success");
        this.router.navigate(["/login"]);
      }
    }, err=>{
      alert("somethine went wrong");
    }

)
}
}

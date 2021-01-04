import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, Params, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Link: any;

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) {
   
   }
 user:User;
 

  login(form){
    console.log(form.value);
    this.authService.signIn(form.value).subscribe((res)=>{
      console.log("Logged in!");
    
      
      let navigationExtras: NavigationExtras = {
        queryParams: {'id': res.user}
      };
  
      // Navigate to the login page with extras
      this.router.navigate(['/home'], navigationExtras);
      return false;
     
    });    
  }
  
 
  ngOnInit() {
    
   
 
  }

 
}
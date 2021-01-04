import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CscService } from '../csc.service';
import { Params, ActivatedRoute, ChildActivationStart } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  id: number;
  createAccountForm: FormGroup;
  countries: {};
  states: {};
  cities: {};
  selected: string ='';
  form: any;

  constructor(private route: ActivatedRoute,private cscService: CscService,private router: Router) { }
 
  ngOnInit() {
    this.route.queryParams.pipe(
      filter(params => params.id))
      .subscribe(params =>{
       this.id= params.id;
       console.log(this.id);
      });
    
    
    this.cscService.getCountries().subscribe(
      data => this.countries = data
    );

    this.createAccountForm = new FormGroup({
      country: new FormControl(''),
      state: new FormControl(''),
      city: new FormControl('')
    });
  }

  onChangeCountry(countryId: number) {
    if (countryId) {
      this.cscService.getStates(countryId).subscribe(
        data => {
          this.states = data;
          this.cities = null;
        }
        
      );
    } else {
      this.states = null;
      this.cities = null;
    }
  }

  onChangeState(stateId: number) {
    if (stateId) {
      this.cscService.getCities(stateId).subscribe(
        data => this.cities = data
      );

      
    } else {
      this.cities = null;
    }
  }
  add(form) {
    console.log(form.value);
    this.cscService.addcountry(form.value).subscribe((res)=>{
      console.log(res);
     
    });
    this.router.navigate(['view']);
    
}

}


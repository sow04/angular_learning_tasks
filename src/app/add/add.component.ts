import { Component, OnInit } from '@angular/core';
import { format } from 'url';
import { CreateService } from '../create.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private createService: CreateService) { }

  ngOnInit() {
  }
s:any;
  create(myform)
  {
      
       if(!(myform.value.country != '' && myform.value.state !='' && myform.value.city!='' ))
       {
          //alert('city,country,state required');
          if(myform.value.state == '' && myform.value.city =='' && myform.value.country != '')
        {
         //alert('added country!');
         //console.log(myform.value.country);
         this.createService.onlycountry(myform.value).subscribe((res)=>
         {  
           
           //console.log(typeof(res));
            //console.log(res.err);
          
           
        })
         }
       
        else if(myform.value.state != '' && myform.value.city !='' && myform.value.country == '')
        {
         alert('added  no need of country!');
         this.createService.nocountry(myform.value).subscribe((res)=>
         {
           console.log(res);
        })
         }
         
         else if(myform.value.country != '' && myform.value.state !='' && myform.value.city == '')
         {
         alert('added  no need of city');
         this.createService.nocity(myform.value).subscribe((res)=>
         {
           console.log(res);
          })
         }
         else if(myform.value.city != '' && myform.value.state =='')
         {
         alert('need state');
         }
         else if(myform.value.country == '' && myform.value.state !='' )
         {
           alert('need country');
          }
        
        }
      else 
      { 
        alert('added');
        this.createService.all(myform.value).subscribe((res)=>
         {
           console.log(res);
        })
      }
}
}

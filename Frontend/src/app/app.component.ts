import { Component } from '@angular/core';
import { FineService } from './fine.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'frontend';
  name: any;
  aadhar: any;
  offence: any;
  amount: any;

  data : any = [];
  variable : any;


  constructor(private service: FineService) {}

  changename(e: any) {
    this.name = e.target.value;
  }

  changeoff(e: any) {
    this.offence = e.target.value;
  }

  changenumber(e: any) {
    this.aadhar = e.target.value;
  }

  changeamount(e: any) {
    this.amount = e.target.value;
  }

  post() {
    this.service.post('fine', { name: this.name, aadhar: this.aadhar, offence: this.offence , amount: this.amount}).subscribe((data) => {
      console.log(data);
    });
  }

  get() {
    this.service.get('getfine').subscribe((data) => {
      this.data = data;
    });  
  }

  getavg()
  {
    var sum = 0;
    this.data.forEach((d:any)=>{
      sum+=Number(d.amount)
    })
    this.variable = sum/this.data.length
  }
}

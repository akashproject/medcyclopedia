import { Component, OnInit } from '@angular/core';

import  'capacitor-razorpay';
import { Plugins } from '@capacitor/core';
const { Checkout } = Plugins;
import {OrderServiceService} from 'src/app/all-services/order-service.service'
@Component({
  selector: 'app-expert-counselling-content',
  templateUrl: './expert-counselling-content.component.html',
  styleUrls: ['./expert-counselling-content.component.scss'],
})
export class ExpertCounsellingContentComponent implements OnInit {

  date : string;
  ptiming : string;

  readioSelected:any;
  readioSelected2:any;
  readioSelected3:any;
  startdate:any;
  enddate:any;

  constructor(private orderservice:OrderServiceService) { }

  ngOnInit() {}

  getPrefTiming(event){
    console.log(event);
  }

  getPreferredMode(event){
    this.readioSelected2 = event
    console.log(event);
  }

  getPreferredLanguages(event){
    this.readioSelected3 = event
    console.log(event)
  }

  

  registerNow(){
    

    console.log(this.date);
    console.log(this.ptiming)

    this.loadCheckout()
  }

  async loadCheckout() {
    const options = { 
      key: 'rzp_test_Ii0YAZ0ccSrcLs',
      key_secret: 'uI4QCdMjvVTQQJ1LGMVauW8R', 
      amount: '5000', 
      
      description: 'Credits towards consultation', 
      image: 'https://i.imgur.com/3g7nmJC.png', 
      currency: 'INR', 
      name: 'Acme Corp', 
      prefill: { 
        email: 'gaurav.kumar@example.com', 
        contact: '9999999999', 
        name: 'Gaurav Kumar'
      }, 
      theme: {
        color: '#3399cc'
        }
      }
    try {
    let data = (await Checkout.open(options));
    console.log(data['response']['razorpay_payment_id'])

    let date = this.date;
    let time = this.ptiming;
    let media = this.readioSelected2;
    let order_id = data['response']['razorpay_payment_id'];
    let language = this.readioSelected3;
    let payment_id = data['response']['razorpay_payment_id'];
    let payment_status = 'success';

    this.orderservice.createOrder(date,time,media,order_id,language,payment_id,payment_status).subscribe(res=>{
        console.log(res);
      })


    } catch (error) {
      console.log(error['description'])
    }
  }

}

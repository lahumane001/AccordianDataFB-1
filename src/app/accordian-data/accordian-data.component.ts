import { Component } from '@angular/core';
import { DataHanlerService } from '../dataHandler.service';

@Component({
  selector: 'app-accordian-data',
  templateUrl: './accordian-data.component.html',
  styleUrls: ['./accordian-data.component.css']
})
export class AccordianDataComponent {
  accordianData : any[]=[];
  constructor(private httpserv : DataHanlerService){

  }
  ngOnInit(): void {
   this.httpserv.getData().subscribe((res:any)=>{
    console.log( res)
    this.httpserv.getData().subscribe((res : any)=>{
      console.log(res)
  })
    this.accordianData = res;
     console.log(this.accordianData)
   })
  }
 
}

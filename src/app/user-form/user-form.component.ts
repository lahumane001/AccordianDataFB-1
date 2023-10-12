import { Component } from '@angular/core';
import { DataHanlerService } from '../dataHandler.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  formData:any;
  constructor(private dataServ : DataHanlerService){}

  ngOnInit(): void {
    this.formData = new FormGroup({
      header : new FormControl('', Validators.required),
      section : new FormControl('', Validators.required)
    })
  }
  
  OnSubmit(){
    console.log(this.formData.value)
    this.dataServ.postData(this.formData.value).subscribe((data : any)=>{
      console.log(data)
      this.dataServ.getData().subscribe((res : any)=>{
        console.log(res)
    })
    })
    this.formData.reset()
  }
}

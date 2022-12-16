import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editform',
  templateUrl: './editform.component.html',
  styleUrls: ['./editform.component.scss']
})
export class EditformComponent implements OnInit {

editForm!:FormGroup;

  constructor( private _fb:FormBuilder) { }

  ngOnInit(): void {

 this.editForm= this._fb.group({
  Name:[],
  Domain:[],
  Gender:[''],
  DOB:[''],
  Phone:[''] ,
  Location:['']

 })


// this.editForm = new FormGroup({
//   Name:new FormControl(),
//   Domain:new FormControl(),
//   Gender:new FormControl(),
//   DOB:new FormControl(),
//   Phone:new FormControl(),
//   Location:new FormControl()
// })
  }

  onSubmit(){
    alert("Data Saved");
    this.editForm.reset();
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { EditformComponent } from '../editform/editform.component';

@Component({
  selector: 'app-professionals',
  templateUrl: './professionals.component.html',
  styleUrls: ['./professionals.component.scss']
})
export class ProfessionalsComponent implements OnInit {
 
  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
    
  }
  editProfile(){
   const data =  this.dialog.open(EditformComponent)
    
  }
  

}

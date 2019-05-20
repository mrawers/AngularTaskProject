import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.css']
})
export class TaskTableComponent implements OnInit {

title = 'Existing Task';
  constructor (private httpService: HttpClient) { }
  arrTask: string [];
  private newAttribute: any = {};
 

    addFieldValue() {
        this.arrTask.push(this.newAttribute)
        this.newAttribute = {};
    }


  
  ngOnInit () {
	  //console.log("Before Parse");
    this.httpService.get('./assets/task-json.json').subscribe(
      data => {
        this.arrTask = data as string [];	 // FILL THE ARRAY WITH DATA.
        //console.log(this.arrTask[1]);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }
}

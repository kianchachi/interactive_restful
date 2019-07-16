import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})


export class AppComponent implements OnInit {
  constructor(private _httpService: HttpService){}



  ngOnInit(){

  }


  tasks = [];
  one_task:any;
  title= 'RESTful Tasks';


getTasksFromService(){
  this._httpService.getTasks().subscribe(data => {
    console.log(data);
    this.tasks = data['tasks'];
    }
  )};


  getTaskFromService(id){
    this._httpService.getTask(id).subscribe(data => {
      console.log(data);
      this.one_task = data['tasks'];


    })
  }

  onButtonClickParam(): void { 
    this._httpService.getTasks().subscribe(data => {
      console.log(data);
      this.tasks = data['tasks'];
})
}

  onButtonClickParams(id): void { 
    this._httpService.getTask(id).subscribe(data => {
      console.log(data);
      this.one_task = data['tasks'];

  })
}

}





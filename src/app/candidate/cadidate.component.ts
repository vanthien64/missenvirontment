import { Component } from '@angular/core';

@Component({
  selector: 'cadidate',
  templateUrl: './cadidate.component.html',
  styleUrls: ['./cadidate.component.css']
})
export class Cadidate {
  add()
  {
    document.querySelector('.blackground')?.classList.add("add")
    document.querySelector('.cadidate-content_information')?.classList.add("add")
  }
  remove()
  {
    document.querySelector('.blackground')?.classList.remove("add");
    document.querySelector('.cadidate-content_information')?.classList.remove("add"); 
  }
}

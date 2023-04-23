import { Component, Input , Output ,OnInit , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  @Input() title:string = ""
  @Input() data:any[] = []
  @Input() select = ''
  @Input() all:boolean = true
  @Output() selectedValue = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  detectChanges(event:any) {
    this.selectedValue.emit(event)
  }

}

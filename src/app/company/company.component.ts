import { EmployeeComponent } from './../employee/employee.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  companyName:string = "ABC COMPANY";
  @ViewChild(EmployeeComponent) emp:EmployeeComponent;

  constructor() { }

  ngOnInit(): void {
  }
  ClickMe(){
    this.emp.empName = "PRUDVI"
  }

}

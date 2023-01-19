import { Component, OnInit } from '@angular/core';
import { ApiResponseModel, EmployeeList } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/service/employee.service';
import {MessageService} from 'primeng/api';


@Component({
  selector: 'emp-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

    public employeelist:EmployeeList[] =[];
    constructor(public employeeService: EmployeeService, public messageService:MessageService) {

    }
    ngOnInit(): void {
        this.getEmployeeList();
    }
    getEmployeeList() {
        this.employeeService.getemployeeList().subscribe((res: ApiResponseModel) => {
            this.employeelist = res.data;
        }, (err) =>{
            this.messageService.add({severity:'error', summary: 'Error', detail: err.error});
        });
    }
}

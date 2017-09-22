import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/primeng';


@Component({
    selector: 'app-staff-assignment',
    templateUrl: 'staff-assignment.component.html',
    styleUrls : ['staff-assignment.component.css'],
    providers: [ConfirmationService]
})

export class StaffAssignmentComponent implements OnInit {

    constructor(private confirmationService: ConfirmationService) {}

    confirm() {
        this.confirmationService.confirm({
            message: 'Are you sure that you want to perform this action?',
            accept: () => {
                // Actual logic to perform a confirmation
            }
        });
    }

    ngOnInit() { }

}

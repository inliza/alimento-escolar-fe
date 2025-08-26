import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { TablerIconsModule } from 'angular-tabler-icons';
import { UsersService } from 'src/app/services/user.service';

@Component({
    selector: 'app-topstrip',
    imports: [TablerIconsModule, MatButtonModule, MatMenuModule, CommonModule],
    templateUrl: './topstrip.component.html',
})
export class AppTopstripComponent implements OnInit {

    company: string ='';

    constructor(private userService: UsersService) { }

    ngOnInit(): void {
        this.userService.loggedUser$.subscribe((data=> {
            this.company = data?.content?.company?.owner;
        }));
    }
}

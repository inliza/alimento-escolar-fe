import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { AppBlogCardsComponent } from 'src/app/components/blog-card/blog-card.component';
import { AppSalesProfitComponent } from 'src/app/components/sales-profit/sales-profit.component';
import { AppTotalFollowersComponent } from 'src/app/components/total-followers/total-followers.component';
import { AppTotalIncomeComponent } from 'src/app/components/total-income/total-income.component';
import { AppPopularProductsComponent } from 'src/app/components/popular-products/popular-products.component';
import { AppEarningReportsComponent } from 'src/app/components/earning-reports/earning-reports.component';
import { UsersService } from 'src/app/services/user.service';

@Component({
  selector: 'app-starter',
  imports: [
    MaterialModule,
    AppSalesProfitComponent,
  ],
  templateUrl: './starter.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class StarterComponent implements OnInit {

  company: string = '';
  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.userService.loggedUser$.subscribe((data => {
      this.company = data?.content?.company?.name;
    }));
  }
}

import { Component, OnInit } from '@angular/core';

import { ActivityService } from '../activities/shared/activity.service';
import { QuotationService } from '../quotations/shared/quotation.service';
import { UserService } from '../users/shared/user.service';
import { PartyService } from '../parties/shared/party.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  activitiesCount: number;
  quotationsCount: number;
  usersCount: number;
  partiesCount: number;

  constructor(private activityService: ActivityService,
              private quotationService: QuotationService,
              private userService: UserService,
              private partyService: PartyService) { }

  ngOnInit() {
    this.getActivitiesCount();
    this.getQuotationsCount();
    this.getUsersCount();
    this.getPartiesCount();
  }

  getActivitiesCount(): void {
    this.activityService.getActivities()
      .subscribe(activities => {
        this.activitiesCount = activities.length;
      });
  }

  getQuotationsCount(): void {
    this.quotationService.getQuotations()
      .subscribe(quotations => {
        this.quotationsCount = quotations.length;
      });
  }

  getUsersCount(): void {
    this.userService.getAllUsers()
      .subscribe(users => {
        this.usersCount = users.length;
      });
  }

  getPartiesCount(): void {
    this.partyService.getParties()
      .subscribe(parties => {
        this.partiesCount = parties.length;
      });
  }
}

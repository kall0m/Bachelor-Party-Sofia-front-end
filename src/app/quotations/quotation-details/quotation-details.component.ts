import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Quotation } from '../shared/quotation.model';
import { QuotationService } from '../shared/quotation.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-quotation-details',
  templateUrl: './quotation-details.component.html',
  styleUrls: ['./quotation-details.component.css']
})
export class QuotationDetailsComponent implements OnInit {

  public quotation: Quotation;
  public customEmailMessage: FormControl;

  constructor(private route: ActivatedRoute,
    private quotationService: QuotationService,
    private router: Router) {
    this.customEmailMessage = new FormControl('');
  }

  ngOnInit() {
    this.getQuotation();
  }

  getQuotation(): void {
    const id = +this.route.snapshot.paramMap.get('id');

    this.quotationService.getQuotation(id).subscribe(quotation => this.quotation = quotation);
  }

  approveRejectQuotation(status: string): void {
    if (confirm(`Are you sure you want this quotation to be ${status}?`)) {
      this.quotationService.approveRejectQuotation(this.quotation, status)
      .subscribe(data => {
          this.router.navigate(['quotations']);
        },
        error => {
          alert(error);
        }
      );
    }
  }
}

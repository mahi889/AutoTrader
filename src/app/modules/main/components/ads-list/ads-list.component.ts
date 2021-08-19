import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Ad } from 'src/API';
import { AdsService } from 'src/app/modules/core/services/ads.service';

@Component({
  selector: 'app-ads-list',
  templateUrl: './ads-list.component.html',
  styleUrls: ['./ads-list.component.sass'],
})
export class AdsListComponent implements OnInit, OnDestroy {
  private readonly subscriptions: Subscription[] = [];
  public adsList$: Observable<Ad[] | null> | undefined;
  public host: string | undefined;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly adsService: AdsService,
    private readonly elemRef: ElementRef
  ) {}

  ngOnInit(): void {
    this.host = this.elemRef.nativeElement.tagName.toLowerCase();

    this.subscriptions.push(
      this.route.queryParams.subscribe((queryParams: Params) => {
        const { make, model, region, minPrice, maxPrice, condition } = queryParams;
        this.adsList$ = this.adsService.loadAdsByFilters({
          make,
          model,
          region,
          minPrice,
          maxPrice,
          condition,
        });
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
}
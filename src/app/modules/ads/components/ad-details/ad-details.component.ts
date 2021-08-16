import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Ad, User } from 'src/API';
import { AdsService } from 'src/app/modules/core/services/ads.service';
import { AuthFacade } from 'src/app/store/facades/auth.facade';

@Component({
  selector: 'app-ad-details',
  templateUrl: './ad-details.component.html',
  styleUrls: ['./ad-details.component.sass'],
})
export class AdDetailsComponent implements OnInit, OnDestroy {
  private readonly subscriptions: Subscription[] = [];
  public pictures: string[] | [] | undefined;
  public ad$: Observable<Ad | null> | undefined;
  public user$: Observable<User | undefined> | undefined;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly adsService: AdsService,
    private readonly authFacade: AuthFacade
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.route.params.subscribe((params: Params) => {
        this.ad$ = this.adsService.loadAdById(params.id);
        this.user$ = this.authFacade.user$;

        // Get the pictures so we can set them in the carousel
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
}

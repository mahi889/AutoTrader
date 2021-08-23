import { Injectable } from '@angular/core';
import { IndividualConfig, ToastrService } from 'ngx-toastr';

@Injectable({ providedIn: 'root' })
export class NotificationsService {
  private readonly notificationsConfigurations: Partial<IndividualConfig> = {
    progressBar: true,
    closeButton: true,
    positionClass: 'toast-top-right',
    timeOut: 4000,
  };

  constructor(private readonly toastrService: ToastrService) {}

  public success(message: string) {
    this.toastrService.success(message, 'Success', this.notificationsConfigurations);
  }

  public info(message: string) {
    this.toastrService.info(message, 'Info', this.notificationsConfigurations);
  }

  public warning(message: string) {
    this.toastrService.warning(message, 'Warning', this.notificationsConfigurations);
  }

  public error(message: string) {
    this.toastrService.error(message, 'Error', this.notificationsConfigurations);
  }
}

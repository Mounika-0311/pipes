import { Component } from '@angular/core';

@Component({
  selector: 'app-mobilenum-formatpipe',
  templateUrl: './mobilenum-formatpipe.component.html',
  styleUrls: ['./mobilenum-formatpipe.component.css']
})
export class MobilenumFormatpipeComponent {
  phoneNumber: string = '';

  formatNumber() {
    // Remove non-numeric characters
    this.phoneNumber = this.phoneNumber.replace(/\D/g, '');
    if (this.phoneNumber.length > 10) {
      // this.phoneNumber = this.phoneNumber.slice(0, 10);
      return
    }
  }
}

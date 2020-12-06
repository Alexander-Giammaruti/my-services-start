import { Component } from '@angular/core';
import { AccountService } from 'src/app/account.service';
import { LoggingService } from '../../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  //providers: [LoggingService,/* AccountService */] // this created a unique instance of the account array. This behavior is not desired for this application
})
export class NewAccountComponent {
  
  constructor(
    private loggingService: LoggingService,
    private accountService: AccountService) {
      this.accountService.statusUpdated.subscribe(
        (status: string) => alert('New Status: ' +status)
      );
    }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
    // this.loggingService.logStatusChange(accountStatus);
  }
}
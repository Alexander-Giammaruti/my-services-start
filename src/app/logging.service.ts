import { Injectable } from '@angular/core';

@Injectable() // not necessarily needed, but in future it might be needed. Nothing is changed by using this decorator
export class LoggingService {
    logStatusChange(status: string) {
        console.log('A server status has changed to ' + status);
    }
}
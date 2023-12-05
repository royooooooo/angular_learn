import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Logger {
  log = (message: String) => {
    console.log(message);
  };
}

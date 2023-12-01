import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Logger {
  count = 0;

  writeCount = () => {
    this.count++;
     console.warn(this.count)
  };
}

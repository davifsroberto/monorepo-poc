import { Component } from '@angular/core';

@Component({
  selector: 'mottu-admin-mfe-erp-entry',
  template: `<div class="remote-entry">
    <h2>erp's Remote Entry </h2>
  </div>`,
  styles: [
    `
      .remote-entry {
        background-color: #143055;
        color: white;
        padding: 5px;
      }
    `,
  ],
})
export class RemoteEntryComponent {}

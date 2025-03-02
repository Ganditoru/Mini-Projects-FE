import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Address } from '../../models/address.model';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@ngbracket/ngx-layout';

@Component({
  selector: 'app-show-address',
  standalone: true,
  imports: [CommonModule, FlexLayoutModule],
  templateUrl: './show-address.component.html',
  styleUrl: './show-address.component.scss'
})
export class ShowAddressComponent {
  @Input() public address: Address | null = null;
  @Output() public close = new EventEmitter<void>();

  public closeComponent() {
    this.close.emit();
  }
}

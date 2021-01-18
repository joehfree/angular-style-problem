import { Component, EventEmitter, Output, OnDestroy } from '@angular/core';

@Component({
  selector: 'apk-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ApkModalComponent implements OnDestroy {
  @Output() close = new EventEmitter<void>();
  constructor() {}

  public onClose(): void {
    this.close.emit();
  }

  ngOnDestroy(): void {
    console.log('I am the modal and I have been destroyed!');
  }
}

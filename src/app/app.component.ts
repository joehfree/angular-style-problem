import { Component, ComponentRef, TemplateRef, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApkModalService } from './modal';
import { ApkModalComponent } from './modal/modal.component';
import { TestComponent } from './test/test.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
@ViewChild(TemplateRef) modalTemplate!: TemplateRef<any>;

  // private modalComponent!: ComponentRef<ApkModalComponent>;
  private modalComponent!: ApkModalComponent;
  private closeSub!: Subscription;

  constructor(private modal: ApkModalService) {}

  openTemplateModal(): void {
    this.modalComponent = this.modal.open(this.modalTemplate);
    // console.log(this.modalComponent);

    this.closeSub = this.modalComponent.close.subscribe(() => {
      this.afterClosed();
    });
  }

  openComponentModal(): void {
    this.modal.open(TestComponent);
  }

  openTextModal(): void {
    this.modal.open('This is a text-only modal.');
  }

  click(): void {
    console.log('click');
  }

  afterClosed(): void {
    console.log('I am the test component, and I know the modal was closed');
  }
}

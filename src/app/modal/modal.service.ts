import {
  Injectable,
  ComponentFactoryResolver,
  Injector,
  Inject,
  TemplateRef,
  Type
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ApkModalComponent } from './modal.component';
import { Subscription } from 'rxjs';

export type Content<T> = string | TemplateRef<T> | Type<T>;

@Injectable({ providedIn: 'root' })
export class ApkModalService {
  private closeSub!: Subscription;
  private modalElement: any;
  private modalComponent: any;

  constructor(
    private resolver: ComponentFactoryResolver,
    private injector: Injector,
    @Inject(DOCUMENT) private document: Document
  ) {}

  /**
   * Instantiates an ApkModalComponent with Content<T>
   */
  open<T>(content: Content<T>) {
    const factory = this.resolver.resolveComponentFactory(ApkModalComponent);
    const ngContent = this.resolveNgContent<T>(content);
    const componentRef = factory.create(this.injector, ngContent);
    this.modalComponent = componentRef;
    componentRef.hostView.detectChanges();
    const { nativeElement } = componentRef.location;
    this.modalElement = nativeElement;
    this.document.body.appendChild(nativeElement);

    // subscribe to overlay click so we can close the modal
    this.closeSub = componentRef.instance.close.subscribe(() => {
      console.log('Modal overlay clicked');
      this.closeSub.unsubscribe();
      this.document.body.removeChild(this.modalElement);
      this.modalComponent.destroy();
    });

    return (componentRef.instance);
  }

  resolveNgContent<T>(content: Content<T>) {
    if (typeof content === 'string') {
      const element = this.document.createTextNode(content);
      return [[element]];
    }

    if (content instanceof TemplateRef) {
      const viewRef = content.createEmbeddedView({} as any);
      return [viewRef.rootNodes];
    }

    const factory = this.resolver.resolveComponentFactory(content);
    const componentRef = factory.create(this.injector);
    return [[componentRef.location.nativeElement]];
  }
}

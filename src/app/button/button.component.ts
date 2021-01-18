import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  Input,
  Renderer2
} from "@angular/core";
import {
  ApkButtonBorderColor,
  ApkButtonBorderThickness,
  ApkButtonColor,
  ApkButtonCornerRadius,
  ApkButtonElevation,
  ApkButtonShape,
  ApkButtonSize
} from "./button.types";

@Component({
  selector: "button[apk-advanced-button], a[apk-advanced-button]",
  exportAs: "apk-advanced-button",
  templateUrl: "./button.component.html",

  /**
   * For some reason, these styles don't seem to work:
   *
   */
  styleUrls: ["./button.component.css"],

  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ApkButtonComponent {
  @HostBinding("class.apk-button")
  private _class = true;
  private _disabled: "true" | "false" = "false";
  private _elevation: ApkButtonElevation = "low";
  private _size: ApkButtonSize = "medium";
  private _shape: ApkButtonShape = "rectangle";
  private _color: ApkButtonColor = "transparent-neutral";
  private _borderColor: ApkButtonBorderColor = "neutral";
  private _borderThickness: ApkButtonBorderThickness = "extra-small";
  private _cornerRadius: ApkButtonCornerRadius = "extra-small";

  constructor(public _elm: ElementRef, renderer: Renderer2) {
    console.log("ApkButtonComponent instantiated.");
  }

  /**
   * The button's size
   */
  @HostBinding("attr.size")
  @Input("size")
  get size(): ApkButtonSize {
    return this._size;
  }
  set size(value: ApkButtonSize) {
    this._size = value;
  }

  /**
   * The shape
   */
  @HostBinding("attr.shape")
  @Input("shape")
  get shape(): ApkButtonShape {
    return this._shape;
  }
  set shape(value: ApkButtonShape) {
    this._shape = value;
  }

  /**
   * The fill color
   */
  @HostBinding("attr.color")
  @Input("color")
  get color(): ApkButtonColor {
    return this._color;
  }
  set color(value: ApkButtonColor) {
    this._color = value;
  }

  /**
   * The border color
   */
  @Input("borderColor")
  get borderColor(): ApkButtonBorderColor {
    return this._borderColor;
  }
  set borderColor(value: ApkButtonBorderColor) {
    this._borderColor = value;
  }

  /**
   * The border thickness
   */
  @HostBinding("attr.borderThickness")
  @Input("borderThickness")
  get borderThickness(): ApkButtonBorderThickness {
    return this._borderThickness;
  }
  set borderThickness(value: ApkButtonBorderThickness) {
    this._borderThickness = value;
  }

  /**
   * The border radius
   */
  @HostBinding("attr.cornerRadius")
  @Input("cornerRadius")
  get cornerRadius(): ApkButtonCornerRadius {
    return this._cornerRadius;
  }
  set cornerRadius(value: ApkButtonCornerRadius) {
    this._cornerRadius = value;
  }

  /**
   * The enable/disable state
   */
  @HostBinding("attr.disable")
  @Input("disable")
  get disabled(): "true" | "false" {
    return this._disabled;
  }
  set disabled(value: "true" | "false") {
    this._disabled = value;
  }

  /**
   * The enable/disable state
   */
  @HostBinding("attr.elevation")
  @Input("elevation")
  get elevation(): ApkButtonElevation {
    return this._elevation;
  }
  set elevation(value: ApkButtonElevation) {
    this._elevation = value;
  }
}

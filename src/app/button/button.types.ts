/**
 * The fill color
 */
export type ApkButtonColor =
  | "transparent-neutral"
  | "transparent-primary"
  | "transparent-secondary"
  | "transparent-tertiary"
  | "transparent-danger"
  | "transparent-warning"
  | "transparent-success"
  | "neutral"
  | "primary"
  | "secondary"
  | "tertiary"
  | "danger"
  | "warning"
  | "success";

/**
 * The thickness of the border
 */
export type ApkButtonBorderThickness = "none" | "extra-small";

/**
 * The color of the border on an AppKit button
 */
export type ApkButtonBorderColor =
  | "neutral"
  | "primary"
  | "secondary"
  | "tertiary";

/**
 * The corner radius
 */
export type ApkButtonCornerRadius =
  | "none"
  | "extra-small"
  | "small"
  | "medium"
  | "large"
  | "extra-large";

/**
 * The size
 */
export type ApkButtonSize = "small" | "medium" | "large";

/**
 * The shape
 */
export type ApkButtonShape = "round" | "square" | "rectangle";

/**
 * The elevation
 */
export type ApkButtonElevation = "none" | "low" | "medium" | "high";

import Logger from "../util/Logger";
import { HEIGHT } from "../constants";

class Bar {
  // Drawing
  private _x: number;
  private _y: number;
  private _width: number;
  private _color: string;
  private _ctx: CanvasRenderingContext2D;
  private _heightMultiplier = 3;

  // Sorting
  private _value: number;

  constructor(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    width: number,
    color: string,
    value: number
  ) {
    this._ctx = ctx;
    this._x = x;
    this._y = y;
    this._width = width;
    this._color = color;
    this._value = value;
  }

  get value(): number {
    return this._value;
  }

  set value(value: number) {
    this._value = value;
  }

  get x(): number {
    return this._x;
  }

  set x(value: number) {
    this._x = value;
  }

  set y(value: number) {
    this._y = value;
  }

  get y() {
    return this._y;
  }

  get color(): string {
    return this._color;
  }

  set color(value: string) {
    this._color = value;
  }

  public isBigger(bar: Bar) {
    bar.color = "red";
    this._color = "red";
    return this.value > bar.value;
  }

  public swapValues(bar: Bar) {
    const tempVal = bar.value;
    const tempY = bar.y;

    bar.value = this._value;
    bar.y = this._y;

    this._value = tempVal;
    this._y = tempY;
  }

  public draw() {
    this._ctx.save();
    this._ctx.fillStyle = this.color;
    this._ctx.fillRect(
      this._x,
      this._y,
      this._width,
      this._value * this._heightMultiplier
    );
    this._ctx.textAlign = "center";
    this._ctx.strokeText(
      "" + this._value,
      this._x + this._width / 2,
      HEIGHT - this.value * this._heightMultiplier - 5
    );
    this._ctx.restore();
  }
}

export default Bar;

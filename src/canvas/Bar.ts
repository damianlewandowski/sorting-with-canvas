import Logger from "../util/Logger";

class Bar {
  // Drawing
  private _x: number;
  private _y: number;
  private _width: number;
  private _color: string;
  private _ctx: CanvasRenderingContext2D;

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

  get y(): number {
    return this._y;
  }

  set y(value: number) {
    this._y = value;
  }

  get width(): number {
    return this._width;
  }

  set width(value: number) {
    this._width = value;
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

    bar.value = this._value;
    this._value = tempVal;
  }

  public draw() {
    this._ctx.save();
    this._ctx.fillStyle = this.color;
    this._ctx.fillRect(this.x, this.y, this.width, this._value * 2);
    this._ctx.strokeText("" + this._value, this._x, this._value * 2 + 10);
    this._ctx.restore();
  }
}

export default Bar;

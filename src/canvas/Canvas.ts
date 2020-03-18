import Bar from "./Bar";

class Canvas {
  private _width: number;
  private _height: number;
  private _ctx: CanvasRenderingContext2D;
  private _bars: Bar[];

  constructor(width: number, height: number) {
    this._width = width;
    this._height = height;

    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    canvas.width = width;
    canvas.height = height;

    this._ctx = canvas.getContext("2d");
  }

  get ctx(): CanvasRenderingContext2D {
    return this._ctx;
  }

  private clear() {
    this.ctx.clearRect(0, 0, this._width, this._height);
  }

  set bars(value: Bar[]) {
    console.log("hello");
    this._bars = value;
  }

  public drawBars() {
    this.clear();
    for (const bar of this._bars) {
      bar.draw();
    }
  }
}

export default Canvas;

import GLOBAL_OPTIONS from "./globals";
import Canvas from "./canvas/Canvas";
import { bubblesort } from "./sorting/bubble-sort";
import generateBars from "./util/generate-bars";

class DomNodes {
  private _canvas: Canvas;

  private _speedSlider: HTMLElement;
  private _speedValueNode: HTMLElement;

  private _startBtn: HTMLElement;

  private _barsValue: HTMLElement;
  private _barsSlider: HTMLElement;

  constructor(canvas: Canvas) {
    this._canvas = canvas;

    this._speedValueNode = document.getElementById("speed-value");
    this._speedSlider = document.getElementById("speed-range");

    this._startBtn = document.getElementById("start-btn");

    this._barsSlider = document.getElementById("bars-range");
    this._barsValue = document.getElementById("bars-value");

    this._speedSlider.onchange = this.assignSpeed;
    this._startBtn.onclick = this.handleStartSorting;
    this._barsSlider.onchange = this.assignBarsAmount;
  }

  private handleStartSorting = () => {
    if (GLOBAL_OPTIONS.IS_RUNNING) {
      GLOBAL_OPTIONS.IS_RUNNING = false;
    } else {
      GLOBAL_OPTIONS.IS_RUNNING = true;
      bubblesort(this._canvas);
    }
  };

  private assignSpeed = (event: Event) => {
    // @ts-ignore
    const speed = this._speedSlider.value;
    this._speedValueNode.innerHTML = speed;

    GLOBAL_OPTIONS.SPEED = speed;
  };

  private assignBarsAmount = (event: Event) => {
    GLOBAL_OPTIONS.IS_RUNNING = false;
    // @ts-ignore
    const amount = this._barsSlider.value;
    GLOBAL_OPTIONS.BARS_AMOUNT = amount;
    this._canvas.bars = generateBars(this._canvas.ctx, amount);
    this._canvas.drawBars();
  };
}

export default DomNodes;

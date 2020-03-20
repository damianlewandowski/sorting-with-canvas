import GLOBAL_OPTIONS from "./globals";
import Canvas from "./canvas/Canvas";
import generateBars from "./util/generate-bars";
import { selectionSort } from "./sorting/selection-sort";
import { SortingAlgorithms } from "./constants";
import { bubblesort } from "./sorting/bubble-sort";
import { quickSort } from "./sorting/quick-sort";
import Logger from "./util/Logger";

class DomNodes {
  private _canvas: Canvas;

  private _speedSlider: HTMLElement;
  private _speedValueNode: HTMLElement;

  private _startBtn: HTMLElement;

  private _barsValue: HTMLElement;
  private _barsSlider: HTMLElement;
  private _resetBarsBtn: HTMLElement;

  private _algorithmsSelect: HTMLElement;

  constructor(canvas: Canvas) {
    this._canvas = canvas;

    this._speedValueNode = document.getElementById("speed-value");
    this._speedSlider = document.getElementById("speed-range");

    this._startBtn = document.getElementById("start-btn");

    this._barsSlider = document.getElementById("bars-range");
    this._barsValue = document.getElementById("bars-value");
    this._resetBarsBtn = document.getElementById("reset-bars-btn");

    this._algorithmsSelect = document.getElementById("algorithms");

    this._speedSlider.onchange = this.assignSpeed;
    this._startBtn.onclick = this.handleStartSorting;
    this._barsSlider.onchange = this.assignBarsAmount;
    this._resetBarsBtn.onclick = this.resetBars;
    this._algorithmsSelect.onchange = this.assignCurrentAlgorithm;
  }

  private chooseSortingAlgorithm(currentlyPickedAlgorithm: SortingAlgorithms) {
    Logger.info(
      `Current sorting algorithm: ${SortingAlgorithms[currentlyPickedAlgorithm]} Sort`
    );
    switch (currentlyPickedAlgorithm) {
      case SortingAlgorithms.Bubble:
        return bubblesort;
      case SortingAlgorithms.Selection:
        return selectionSort;
      case SortingAlgorithms.Quick:
        return quickSort;
      default:
        return quickSort;
    }
  }

  private handleStartSorting = () => {
    if (GLOBAL_OPTIONS.IS_RUNNING) {
      GLOBAL_OPTIONS.IS_RUNNING = false;
    } else {
      GLOBAL_OPTIONS.IS_RUNNING = true;
      const sort = this.chooseSortingAlgorithm(
        GLOBAL_OPTIONS.CURRENT_ALGORITHM
      );
      sort(this._canvas);
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

    this._barsValue.innerHTML = amount;
  };

  private resetBars = (event: Event) => {
    Logger.info("Resetting bars");
    GLOBAL_OPTIONS.IS_RUNNING = false;
    this._canvas.bars = generateBars(
      this._canvas.ctx,
      GLOBAL_OPTIONS.BARS_AMOUNT
    );
    this._canvas.drawBars();
  };

  private assignCurrentAlgorithm = (event: Event) => {
    GLOBAL_OPTIONS.IS_RUNNING = false;
    // @ts-ignore
    const value: string = this._algorithmsSelect.value;
    GLOBAL_OPTIONS.CURRENT_ALGORITHM = SortingAlgorithms[value]; //this._algorithmsSelect.value;
  };
}

export default DomNodes;

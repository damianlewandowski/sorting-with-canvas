import GLOBAL_OPTIONS from "./globals";

class DomNodes {
  private _slider: HTMLElement;
  private _speedValueNode: HTMLElement;

  constructor() {
    this._speedValueNode = document.getElementById("speed-value");
    this._slider = document.getElementById("speed-range");

    this._slider.onchange = this.assignSpeed;
  }

  private assignSpeed = (event: Event) => {
    // @ts-ignore
    const speed = this._slider.value;
    this._speedValueNode.innerHTML = speed;

    GLOBAL_OPTIONS.SPEED = speed;
  };
}

export default DomNodes;

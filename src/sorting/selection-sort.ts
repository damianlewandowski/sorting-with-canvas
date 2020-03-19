import Bar from "../canvas/Bar";
import Canvas from "../canvas/Canvas";
import waitAtSpeed from "../util/wait-at-speed";
import GLOBAL_OPTIONS from "../globals";

async function action(i: number, j: number, bars: Bar[], canvas: Canvas) {
  const shouldSwap = bars[i].isBigger(bars[j]);
  canvas.drawBars();

  // Wait some time to show which bars are compared with each other
  await waitAtSpeed(() => {});

  if (shouldSwap) {
    bars[i].swapValues(bars[j]);
  }
  bars[i].color = "steelblue";
  bars[j].color = "steelblue";
  canvas.drawBars();
}

export async function selectionSort(canvas: Canvas): Promise<Bar[]> {
  const length = canvas.bars.length;
  const bars = canvas.bars;

  //Loop till the second last element
  for (let i = 0; i < length - 1; i++) {
    //Loop after the i till the last element
    for (let j = i + 1; j < length; j++) {
      if (!GLOBAL_OPTIONS.IS_RUNNING) return canvas.bars;

      await waitAtSpeed(() => action(i, j, canvas.bars, canvas));
    }
  }

  //return the sorted array
  return bars;
}

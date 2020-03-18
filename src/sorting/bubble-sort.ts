import Bar from "../canvas/Bar";
import Canvas from "../canvas/Canvas";
import waitAtSpeed from "../util/wait-at-speed";
import GLOBAL_OPTIONS from "../globals";

async function action(j: number, bars: Bar[], canvas: Canvas) {
  const shouldSwap = bars[j].isBigger(bars[j + 1]);
  canvas.drawBars();

  // Wait some time to show which bars are compared with each other
  await waitAtSpeed(() => {});

  if (shouldSwap) {
    bars[j].swapValues(bars[j + 1]);
  }
  bars[j].color = "steelblue";
  bars[j + 1].color = "steelblue";
  canvas.drawBars();
}

export async function bubblesort(canvas: any) {
  const length = canvas.bars.length;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      if (!GLOBAL_OPTIONS.IS_RUNNING) return canvas.bars;

      await waitAtSpeed(() => action(j, canvas.bars, canvas));
    }
  }

  return canvas.bars;
}

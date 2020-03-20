import waitAtSpeed from "../util/wait-at-speed";
import Canvas from "../canvas/Canvas";
import Bar from "../canvas/Bar";
import { randomInt } from "../util/utils";
import { HEIGHT, WIDTH } from "../constants";
import GLOBAL_OPTIONS from "../globals";

function drawNewBars(
  canvas: Canvas,
  left: Bar[],
  head: Bar,
  right: Bar[],
  offsetX = 0
) {
  const merged = [...left, head, ...right];
  const distance = 5;
  const width = WIDTH / GLOBAL_OPTIONS.BARS_AMOUNT - distance;

  merged.forEach((bar, i) => {
    const x = offsetX * (distance + width) + i * (distance + width);

    bar.x = x;
  });

  canvas.drawBars();
}

export async function quickSort(canvas: Canvas): Promise<Bar[]> {
  const canvasBars = canvas.bars;

  async function sort(bars: Bar[], offsetX = 0) {
    if (!bars.length) return [];

    const [head, ...tail] = bars;
    head.color = "orange";
    canvas.drawBars();
    await waitAtSpeed(() => {});

    const left = tail.filter(e => e.value < head.value);
    const right = tail.filter(e => e.value >= head.value);

    left.forEach(bar => (bar.color = "red"));
    canvas.drawBars();
    await waitAtSpeed(() => {});

    right.forEach(bar => (bar.color = "green"));
    canvas.drawBars();
    await waitAtSpeed(() => {});

    drawNewBars(canvas, left, head, right, offsetX);
    canvas.drawBars();
    await waitAtSpeed(() => {});

    return (await sort(left, offsetX)).concat(
      head,
      await sort(right, offsetX + left.length + 1)
    );
  }

  return sort(canvasBars);
}

import Canvas from "./canvas/Canvas";
import { WIDTH, HEIGHT } from "./constants";
import generateBars from "./util/generate-bars";
import { bubblesort } from "./sorting/bubble-sort";
import DomNodes from "./DomNodes";
import GLOBAL_OPTIONS from "./globals";

async function main() {
  const canvas = new Canvas(WIDTH, HEIGHT);
  const domNodes = new DomNodes(canvas);

  const bars = generateBars(canvas.ctx, GLOBAL_OPTIONS.BARS_AMOUNT);
  canvas.bars = bars;

  canvas.drawBars();

  //
}

main();

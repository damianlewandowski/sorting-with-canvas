import Canvas from "./canvas/Canvas";
import { WIDTH, HEIGHT, SortingAlgorithms } from "./constants";
import generateBars from "./util/generate-bars";
import DomNodes from "./DomNodes";
import GLOBAL_OPTIONS from "./globals";
import { quickSort } from "./sorting/quick-sort";

async function main() {
  const canvas = new Canvas(WIDTH, HEIGHT);
  const domNodes = new DomNodes(canvas);

  const bars = generateBars(canvas.ctx, GLOBAL_OPTIONS.BARS_AMOUNT);
  canvas.bars = bars;

  canvas.drawBars();

}

main();

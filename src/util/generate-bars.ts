import Bar from "../canvas/Bar";
import { randomInt } from "./utils";
import { WIDTH, HEIGHT } from "../constants";
import GLOBAL_OPTIONS from "../globals";

export default (ctx: CanvasRenderingContext2D, amount: number) => {
  const x = 0;
  const distance = 5;
  const width = WIDTH / GLOBAL_OPTIONS.BARS_AMOUNT - distance;
  const color = "steelblue";

  let bars: Bar[] = [];

  for (let i = 0; i < amount; i++) {
    const offsetX = x + i * (distance + width);
    const value = randomInt(10, 74);
    const height = value * 3;
    const y = HEIGHT - height;
    const bar = new Bar(ctx, offsetX, y, width, color, value);

    bars.push(bar);
  }

  return bars;
};

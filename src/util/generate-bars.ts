import Bar from "../canvas/Bar";
import { randomInt } from "./utils";

export default (ctx: CanvasRenderingContext2D, amount: number) => {
  const x = 0;
  const y = 0;
  const distance = 5;
  const width = 10;
  const color = "steelblue";

  let bars: Bar[] = [];

  for (let i = 0; i < amount; i++) {
    const offsetX = x + i * (distance + width);
    const value = randomInt(10, 74);
    const bar = new Bar(ctx, offsetX, y, width, color, value);

    bars.push(bar);
  }

  return bars;
};

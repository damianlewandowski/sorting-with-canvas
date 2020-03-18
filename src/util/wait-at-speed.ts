import GLOBAL_OPTIONS from "../globals";

function waitAtSpeed(action: any) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(action());
    }, 1000 / GLOBAL_OPTIONS.SPEED);
  });
}

export default waitAtSpeed;

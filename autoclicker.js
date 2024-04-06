import robot from "robotjs";
import keypress from "keypress";

let autoclickPosition;
let time = 1;

function checkKeyDown() {
  return new Promise((resolve) => {
    keypress(process.stdin);
    process.stdin.setEncoding("utf8");
    process.stdin.setRawMode(true);

    function keypressListener(ch, key) {
      process.stdin.removeListener("keypress", keypressListener);
      process.stdin.pause();
      resolve(key);
    }

    process.stdin.on("keypress", keypressListener);
    process.stdin.resume();
  });
}

function logMousePosition(callback) {
  autoclickPosition = robot.getMousePos();
  callback(autoclickPosition);
}

function clickSpot(callback) {
  console.log(
    "Move the mouse to the spot you want to start clicking in 5 seconds..."
  );
  setTimeout(() => {
    logMousePosition(callback);
  }, 5000);
}

function autoclick(t = 10) {
  const a = setInterval(() => {

    robot.moveMouse(autoclickPosition.x, autoclickPosition.y);
    robot.mouseClick();
    console.log(`clicked ${time} times`);
    time++;
  }, t);

  checkKeyDown().then((key) => {
    if (key && key.name === "k") {
      clearInterval(a);
      console.log("interrupt");
    }
  });
}

function main() {
  clickSpot((m) => {
    console.log("Autoclick position:", m);
    autoclick(1);//change the time here to set amount of time between each click 
  });
}

main();

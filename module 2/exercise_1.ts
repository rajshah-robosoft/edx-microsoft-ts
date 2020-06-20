let color: string;
let squareSizeNum: number;

color = "red";
squareSizeNum = 100;

let squareSize: string = `${squareSizeNum}px`;

let button: Element = document.createElement("button");
let div: Element = document.createElement("div");

button.textContent = "Change Color";

let colorChange: Function = (elem: Element, color: string): boolean => {
  (<HTMLElement>elem).style.backgroundColor = color;
  return true;
};

(<HTMLElement>div).style.width = squareSize;
(<HTMLElement>div).style.height = squareSize;

(button as HTMLElement).onclick = (event) => {
  colorChange(div, color);
};

document.body.appendChild(button);
document.body.appendChild(div);

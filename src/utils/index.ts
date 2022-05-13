export function componentToHex(c: number) {
  var hex = c.toString(16);
  return hex.length == 1 ? '0' + hex : hex;
}

export function findPos(obj: React.MouseEvent) {
  return { x: obj.nativeEvent.offsetX, y: obj.nativeEvent.offsetY };
}

export function rgbToHex(r: number, g: number, b: number) {
  return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

export function oMousePos(canvas: HTMLCanvasElement, evt: React.MouseEvent) {
  const ClientRect = canvas.getBoundingClientRect();
  return {
    //objeto
    x: Math.round(evt.clientX - ClientRect.left),
    y: Math.round(evt.clientY - ClientRect.top),
  };
}

export function getColorsStr(colorsRy: any) {
  var colorsStr = '';
  for (var i = 0; i < colorsRy.length; i++) {
    colorsStr += '[' + colorsRy[i].hex + ',' + colorsRy[i].rgb + ',' + colorsRy[i].hsl + ']';
    if (i < colorsRy.length - 1) {
      colorsStr += ',\n';
    }
  }
  return colorsStr;
}

export function getBase64(img: any, callback: any) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

export const convertBase64 = (file: any) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};

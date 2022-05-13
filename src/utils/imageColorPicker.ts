import { rgbToHex } from '.';

export const ImageColorPicker = function (imgage: HTMLImageElement, canvas: HTMLCanvasElement, callback: (hex: string) => void) {
  let x = 0,
    y = 0;

  let result_hex = '';
  let result_rgb: Uint8ClampedArray;

  imgage.addEventListener('click', (e: MouseEvent) => {
    x = e.offsetX;
    y = e.offsetY;

    canvas.width = imgage.width; // img width
    canvas.height = imgage.height; // img height

    const draweCanvas = canvas.getContext('2d');
    if (draweCanvas) draweCanvas.drawImage(imgage, 0, 0, imgage.width, imgage.height);
    if (draweCanvas) {
      result_rgb = draweCanvas.getImageData(x, y, 1, 1).data;
      const p = result_rgb;
      result_hex = rgbToHex(p[0], p[1], p[2]);

      console.log(result_hex);
      callback(result_hex);
    }
  });
};

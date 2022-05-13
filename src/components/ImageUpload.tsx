import { Button } from 'antd/lib/radio';
import { memo, useEffect, useRef, useState } from 'react';
import defaultProfile from '../assets/img/default.png';
import { convertBase64 } from '../utils';
import { ImageColorPicker } from '../utils/imageColorPicker';

const ImageUpload = () => {
  const [clickColor, setClickColor] = useState('#fff');
  const [uploadUrl, setUploadUrl] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const uploadImage = async (e: any) => {
    const base64 = (await convertBase64(e.target.files[0])) as string;
    setUploadUrl(base64);
  };

  const setColor = (color: string) => {
    console.log(color);
    setClickColor(color);
  };

  const clickImg = () => {
    console.log('clickImg');
    if (uploadUrl === '') inputRef.current?.click();
  };

  useEffect(() => {
    if (imgRef.current && canvasRef.current) {
      ImageColorPicker(imgRef.current, canvasRef.current, setColor);
    }
  }, []);

  return (
    <div>
      <canvas id="cs" ref={canvasRef}></canvas>
      <div className="profile-wrap">
        <div className="profile-container">
          <img src={uploadUrl || defaultProfile} alt="defaultProfile" ref={imgRef} onClick={clickImg} />
        </div>
        <input className="file-input" type="file" name="docx" ref={inputRef} onChange={uploadImage} />
      </div>

      <div className="click-color-container">
        <div className="click-color" style={{ backgroundColor: clickColor }}></div>
        {clickColor}
      </div>

      <Button onClick={() => setUploadUrl('')}>이미지 삭제</Button>
    </div>
  );
};

export default memo(ImageUpload);

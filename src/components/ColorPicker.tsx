import { SketchPicker } from 'react-color';
import { useState } from 'react';
import { Divider, Switch } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';

export const ColorPicker = () => {
  const [color, setColor] = useState('');
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const handleClose = () => {
    setDisplayColorPicker(false);
  };

  const handleChange = (color: any) => {
    console.log(color);
    setColor(color.hex);
  };

  return (
    <div className="color-wrap">
      <p>어울리는 색 선택</p>
      <div className="color-container">
        <div className="picker-swich" onClick={handleClick}>
          <div className="picker-current-color" style={{ backgroundColor: color }} />
        </div>
        <div>{color}</div>
      </div>

      {displayColorPicker ? (
        <div className="picker-cover">
          <div onClick={handleClose} />
          <SketchPicker color={color} onChange={handleChange} />
        </div>
      ) : null}

      <Switch checkedChildren={<CheckOutlined />} unCheckedChildren={<CloseOutlined />} />
      <Divider />
    </div>
  );
};

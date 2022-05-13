import { ColorPicker } from '../../components/ColorPicker';
import ImageUpload from '../../components/ImageUpload';
import { Row, Col, PageHeader, Divider, Button } from 'antd';
import { CategoryInput } from '../../components/CategoryInput';
import { useNavigate } from 'react-router-dom';

function Detail() {
  const navigate = useNavigate();

  return (
    <>
      <PageHeader className="site-page-header" onBack={() => navigate(-1)} title=" " subTitle="" />
      <Divider />
      <Row gutter={16}>
        <Col className="gutter-row" span={18}>
          <div className="right-content">
            <ImageUpload />
          </div>
        </Col>

        <Col className="gutter-row" span={6}>
          <CategoryInput />
          <ColorPicker />
          <ColorPicker />
          <ColorPicker />
          <ColorPicker />
          <ColorPicker />
          <ColorPicker />
          <ColorPicker />
          <ColorPicker />
          <ColorPicker />
          <ColorPicker />
          <ColorPicker />
          <ColorPicker />
          <ColorPicker />
          <ColorPicker />
          <ColorPicker />
          <ColorPicker />
          <ColorPicker />
          <ColorPicker />
          <ColorPicker />
          <ColorPicker />
        </Col>
      </Row>

      <div className="submit-btn-container">
        <Button type="primary" block>
          제출
        </Button>
      </div>
    </>
  );
}

export default Detail;

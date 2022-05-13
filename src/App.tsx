import { Row, Col, Card, Space } from 'antd';
import Meta from 'antd/lib/card/Meta';
import { Link } from 'react-router-dom';
import defaultProfile from './assets/img/default.png';

function App() {
  return (
    <Row gutter={16}>
      {[0, 0, 0, 0, 0, 0, 0].map((i) => {
        return (
          <Col span={6}>
            <Link to={'/detail'}>
              <Card hoverable style={{ width: '100%', marginBottom: 20 }} cover={<img alt="example" src={defaultProfile} />}>
                <Meta title="category" />
                <div className="card-color-container">
                  <span className="card-color" style={{ backgroundColor: 'red' }}></span>
                  <span className="card-color" style={{ backgroundColor: 'blue' }}></span>
                  <span className="card-color" style={{ backgroundColor: 'green' }}></span>
                  <span className="card-color" style={{ backgroundColor: 'gold' }}></span>
                  <span className="card-color" style={{ backgroundColor: 'gray' }}></span>
                  <span className="card-color" style={{ backgroundColor: 'yellow' }}></span>
                </div>
              </Card>
            </Link>
          </Col>
        );
      })}
    </Row>
  );
}

export default App;

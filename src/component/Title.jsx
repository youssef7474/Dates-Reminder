import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Title = ({PersonData}) => {
  return (
    <div>
    <Row style={{justifyContent:"center"}} className='py-2' >
        <Col sm="8"  >
            لديك {PersonData.length} موعيد اليوم
        </Col>
    </Row>
    </div>
  );
}

export default Title;

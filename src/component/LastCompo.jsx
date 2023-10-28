import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const LastCompo = ({hideData,viewData}) => {
  return (
    <div>
    <Row style={{justifyContent:"center"}} className='my-2'>
    <Col sm="8" style={{display:"flex",alignItems:"center",justifyContent:"space-between"}} >
      <button className='btn-style' onClick={hideData}>مسح البينات</button>
      <button className='btn-style' onClick={viewData}>عرض البينات</button>
    </Col>
  </Row>
    </div>
  );
}

export default LastCompo;

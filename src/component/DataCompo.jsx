import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const DataCompo = ({PersonData}) => {
  return (
    <div>
      

    <Row style={{justifyContent:"center"}}>
    <Col sm="8" >
      <div className='rectangle p-2'>

    {PersonData.length?(  (PersonData.map((el,idx)=>{
      return(
        <div key={idx} style={{display:"flex"}} className='border-bottom mx-3 my-4'>
        <img className='img-avatar' src='image.jpg' alt='p'></img>

        <div className='px-3'>
          <p style={{display:"inline"}} className='fs-5'>{el.name}</p>
          <p className='fs-6'> {el.date}</p>
        </div>
        </div>
      )
    }))
        ):<h1 className='p-5 text-center'>لا يوجد بينات </h1>}

       
      
      </div>
    </Col>
  </Row>




    </div>
  );
}

export default DataCompo;

import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { data } from './Data';
import Title from './component/Title';
import DataCompo from './component/DataCompo';
import LastCompo from './component/LastCompo';

const App = () => {

 

  const [PersonData,stePersonData]=useState(data)

  const hideData=()=>{
    stePersonData([])
  }

  const viewData=()=>{
    stePersonData(data)
  }

  return (
    <div className='font color-body'>
      <Container className='py-2' >

        <Title PersonData={PersonData}></Title>
      

        <DataCompo PersonData={PersonData}></DataCompo>

       <LastCompo hideData={hideData} viewData={viewData}></LastCompo>


      </Container>
    </div>
  );
}

export default App;

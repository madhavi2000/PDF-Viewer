import React from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'
import PDFExisted from './PDFExisted';

import PDFView from './PDFView'

const App = () => {
  const [Auth,setAuth]=React.useState(false);
  
  const [Existed,setExisted]=React.useState(false);
  if (Auth){
    return <PDFView/>
  }
  if (Existed){
    return <PDFExisted/>
  }
  
  return (
    <div>
      
    <div className='con'>
        
        <div className='heading'>
         <center> <h2>PDF Viewer</h2>
         <hr/>
         <br/>
         <h5>Click the buttton below, To see Upload PDF</h5>
         <Button variant="info" onClick={()=>{
           setAuth(true);
           }}>
           Upload
           </Button>
         <br/>
         <br/>
         <h5>Click the buttton below, To see existed PDF</h5>
         <Button variant="info" onClick={()=>{
           setExisted(true);
           }}>Existed</Button>
         </center>
        </div>
    </div>
    
    </div>
  )
}

export default App
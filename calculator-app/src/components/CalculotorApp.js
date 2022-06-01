
import { useState } from 'react';

function CalculatorApp() {
  const [sayı1,setsayı1]= useState("");
  const [sayı2,setsayı2]= useState("");

  const [hesaplama,sethesaplama]=useState();
  

  return (
    <div className="App border border-dark border-5 p-3 mb-2 bg-light text-dark" >
      <hr></hr>
      <h1 className="p-3 mb-2 bg-dark text-white ">Calculator App</h1>
      <hr></hr>
      
      <div className="form-floating mb-3">
        <input type="email" className="center  form-control" id="floatingInput" value={sayı1} onChange={(e)=>{setsayı1(Number(e.target.value))}} placeholder='sayı gir' />
        <label htmlFor="floatingInput">sayı giriniz..</label>
     
      </div>
      
      <div className="form-floating mb-3 ">
       <input type="email" htmlFor="floatingInput" className="form-control" id="floatingInput" value={sayı2} onChange={(e)=>{setsayı2(Number(e.target.value))}} placeholder='sayı gir' />
        <label htmlFor="floatingInput">sayı giriniz..</label>
      </div>
      

      <div  className="d-grid gap-2">
        <hr></hr>
        <button type="button" className="btn btn-primary btn btn-success" onClick={()=>{sethesaplama((sayı1+sayı2))}}  >TOPLA</button>
        <button type="button" className="btn btn-primary btn btn-success" onClick={()=>{sethesaplama(sayı1-sayı2)}}>ÇIKAR</button>
        <button type="button" className="btn btn-primary btn btn-success" onClick={()=>{sethesaplama(sayı1/sayı2)}}>BÖL</button>
        <button type="button" className="btn btn-primary btn btn-success" onClick={()=>{sethesaplama(sayı1*sayı2)}} >ÇARP</button>
      </div>
      
 
      <div  >
        <hr></hr>
        <h1 className="p-3 mb-2 bg-dark text-white "  >SONUÇ: {hesaplama}</h1>
        <hr></hr>
        </div>
    
    </div>
  );
}

export default CalculatorApp;

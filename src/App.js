import React, { useState } from 'react';
import './App.css'
function App() {
  const [value, setValue] = useState('');
  const calculate=()=>{
    try{

      if(value==="")
        {
         setValue('Error')
        }
     
      if(value!=="")
      setValue(eval(value))
     
    }catch(err){

    
      setValue('syntax error')
      
    }
  }

  return (
    <div className="container">
      <div className="calculator">
        <form action="">
          <h1>React calculator</h1>
          <div className='display'>
           <input type= "text" value={value}/>
            </div>
            <div  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop:'5px',
                    color:'grey'
                }}>{value}</div>
             <div>
            <input type="button" value="7" onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="8" onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="9" onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="+" onClick={e => setValue(value + e.target.value)}/>
          </div>
          <div>
            <input type="button" value="4" onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="5" onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="6" onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="-" onClick={e => setValue(value + e.target.value)}/>
          </div>
          <div>
            <input type="button" value="1" onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="2" onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="3" onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="*" onClick={e => setValue(value + e.target.value)}/>
          </div>
          <div>
            <input type="button" value="C" onClick={e => setValue('')}/>
            <input type="button" value="0" onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="="  onClick={calculate}/>
            <input type="button" value="/" onClick={e => setValue(value + e.target.value)}/>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
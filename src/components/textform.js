import React, { useState } from 'react'
function Textform({ heading,mode }) {
    const [text, setText] = useState('');
    function wordLength(){
      return text.split(/\s+/).filter((element)=>{return element.length!==0}).length;
    }
    const handleUpClick = () => {
        const newText = text.toUpperCase();
        // console.log(newText);

        setText(newText);
    }
    const handleLoClick = () => {
        const newText = text.toLocaleLowerCase();
        // console.log(newText);

        setText(newText);
    }
    const handleClearClick = () => {
        const newText ='';
        // console.log(newText);

        setText(newText);
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    


    return (
        <>
            <div>
                <div className={`container text-${mode==='light'?'dark':'light'}`}>
                    <h3 className={`text-${mode==='light'?'dark':'light'}`}><label htmlFor="exampleFormControlTextarea1" className="form-label">{heading}</label></h3>
                    <textarea className="form-control" id="exampleFormControlTextarea1" style={{backgroundColor:mode==='light'?'white':'rgb(34 48 52)',color:mode==='light'?'black':'white'}} value={text} onChange={handleOnChange} rows="12"></textarea>
                    <button className={`btn btn-${mode==='light'?'primary':'secondary'} mt-3 my-1`} onClick={handleUpClick}>Convert To UpperCase</button>
                    <button className={`btn btn-${mode==='light'?'primary':'secondary'} mt-3 mx-2 my-1`} onClick={handleLoClick}>Convert To LowerCase</button>
                    <button className={`btn btn-${mode==='light'?'primary':'secondary'} mt-3 mx-2 my-1`} onClick={handleClearClick}>Clear text</button>
                </div>
            </div>
            <div className={`container text-${mode==='light'?'dark':'light'}`} >
                <h3>Text analaysis</h3>
                <div className=" border rounded ">
                {/* (text.length===0)?0:( (text.charAt(text.length-1)===' ') ? text.split(" ").length-1 : (text.split(" ").length))   */}
                    <p className='mx-1'>Total number characters {text.length} and total number of words  {wordLength()}</p>
                    <p className='mx-1'>Expected time to read the text {0.008 * wordLength() *60} seconds</p>
                </div>

            </div>
            <div className={`container text-${mode==='light'?'dark':'light'} my-3`}>
                <h3>Text Preview</h3>
                <div>
                    <p className='mx-1'>
                        {(text.length===0)?'Type Something to Preview':text}
                    </p>
                </div>
            </div>
        </>
    )
}

export default Textform;
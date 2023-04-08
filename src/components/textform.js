import React, { useState } from 'react'
function Textform({ heading,mode }) {
    const [text, setText] = useState('');
    function wordLength(){
        if(text.length===0) return 0;
        else if(text.charAt(text.length-1)===' ')return text.split(" ").length-1;
        else return text.split(" ").length;

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
                <div className={`mb-3 my-3 text-${mode==='light'?'dark':'light'}`}>
                    <h3 className={`text-${mode==='light'?'dark':'light'}`}><label htmlFor="exampleFormControlTextarea1" className="form-label">{heading}</label></h3>
                    <textarea className="form-control" id="exampleFormControlTextarea1" style={{backgroundColor:mode==='light'?'white':'rgb(34 48 52)',color:mode==='light'?'black':'white'}} value={text} onChange={handleOnChange} rows="12"></textarea>
                    <button className={`btn btn-${mode==='light'?'primary':'secondary'} mt-3`} onClick={handleUpClick}>Convert To UpperCase</button>
                    <button className={`btn btn-${mode==='light'?'primary':'secondary'} mt-3 mx-2`} onClick={handleLoClick}>Convert To LowerCase</button>
                    <button className={`btn btn-${mode==='light'?'primary':'secondary'} mt-3 mx-2`} onClick={handleClearClick}>Clear text</button>
                </div>
            </div>
            <div className={`container text-${mode==='light'?'dark':'light'}`} >
                <h3>Text analaysis</h3>
                <div className="border rounded-end">
                {/* (text.length===0)?0:( (text.charAt(text.length-1)===' ') ? text.split(" ").length-1 : (text.split(" ").length))   */}
                    <p className='mx-1'>Total number characters {text.length} ansd total number of words  {wordLength()}</p>
                    <p className='mx-1'>Expected time to read the text {0.008 * text.split(" ").length *60} seconds</p>
                </div>

            </div>
            <div className={`container text-${mode==='light'?'dark':'light'} my-3`}>
                <h3>Text Preview</h3>
                <div className="border">
                    <p className='mx-1'>
                        {text}
                    </p>
                </div>
            </div>
        </>
    )
}

export default Textform;
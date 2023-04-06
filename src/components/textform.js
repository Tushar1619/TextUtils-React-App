import React, { useState } from 'react'
function Textform({ heading }) {

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
    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState('')
    return (
        <>
            <div>
                <div className="mb-3 my-3">
                    <h3><label htmlFor="exampleFormControlTextarea1" className="form-label">{heading}</label></h3>
                    <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handleOnChange} rows="12"></textarea>
                    <button className="btn btn-primary mt-3" onClick={handleUpClick}>Convert To UpperCase</button>
                    <button className="btn btn-primary mt-3 mx-2" onClick={handleLoClick}>Convert To LowerCase</button>
                </div>
            </div>
            <div className="container">
                <h3>Text analaysis</h3>
                <div className="border rounded-end">
                    <p className='mx-1'>Total number characters {text.length} ansd total number of words  {text.split(" ").length}</p>
                    <p className='mx-1'>Expected time to read the text {0.008 * text.split(" ").length *60} seconds</p>
                </div>

            </div>
            <div className="container my-3">
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
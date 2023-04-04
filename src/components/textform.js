import React,{useState} from 'react'
function Textform({heading}) {

    const handleUpClick = ()=>{
        const newText = text.toUpperCase();
        console.log(newText);

        setText(newText);
    }
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }

    const [text,setText] = useState('Enter your text here')
    return (
        <div>
            <div className="mb-3 my-3">
               <h3><label htmlFor="exampleFormControlTextarea1" className="form-label">{heading}</label></h3> 
                <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handleOnChange} rows="12"></textarea>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert To UpperCase</button>
            </div>
        </div>
    )
}

export default Textform;
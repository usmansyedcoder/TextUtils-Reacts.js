import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        // setText("You have clicked on HandleUpClick" + text);
        setText(newText);


    }
    const handleLoClick = () => {
        // console.log("Uppercase was clicked");
        let newText = text.toLowerCase();
        // setText("You have clicked on HandleUpClick" + text);
        setText(newText);
    }

    const handleOnCahnge = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }
    const handleOnCahnges = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }
    const getHexadecimal = () => {
        // console.log("Uppercase was clicked");
        let newColors = document.getElementById('color').value;
        // setText("You have clicked on HandleUpClick" + text);
        let textBox = document.getElementById('mybox').value;
        setHexaText(newColors);



    }
    const clearText = () => {
        let newText = '';
        setText(newText);



    }

    const changeFont = () => {
        let newText = '';
        setText(newText);



    }
    const copyText = () => {
        let text = document.getElementById('mybox');
        text.select();
        navigator.clipboard.writeText(text.value);




    }
    const removeExtra = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));




    }


    const [text, setText] = useState("");
    const [hexatext, setHexaText] = useState("Corresponding Hexadecimal");
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <label htmlFor="mybox" className="form-label">Example textarea</label>
                <textarea className="form-control" value={text} onChange={handleOnCahnge} id="mybox" rows="8"></textarea>

            </div>

            <button className='btn btn-primary' onClick={handleUpClick}>Convert to UpperCase</button>
            <button className='btn btn-primary mx-3' onClick={handleLoClick}>Convert to LowerCase</button>
            <button className='btn btn-primary mx-3' onClick={clearText}>Clear Text</button>
            <button className='btn btn-primary mx-3' onClick={changeFont}>Change Font</button>
            <button className='btn btn-primary mx-3' onClick={copyText}>Copy Text</button>
            <button className='btn btn-primary mx-3' onClick={removeExtra}>Remove extra spaces</button>
            <br />

            <div className='container'>
                <h1>Your Text Summary</h1>
                <p>Number of characters is {text.length} and Number of words is {text.split(" ").length}</p>
                <p>{0.008 * text.split(" ").length} Minutes required to read.</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>

            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" onClick={props.toggleMode} className="form-label">Choose color the corresponding hexadecimal value will shwown below...</label>
                <input type='color' id='color' onChange={getHexadecimal}></input>
                <input type="text" className="form-control" value={hexatext} onChange={handleOnCahnges} id="hexadecimal-input" placeholder="name@example.com" />
            </div>
        </div>
    )
}

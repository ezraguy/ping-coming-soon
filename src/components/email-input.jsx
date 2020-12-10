import React, { useState } from 'react'
import '../scss/email-input.scss'
const EmailInput = () => {
    const [userInput, setUserInput] = useState('');
    const [inputClass, setInputClass] = useState('email-input');
    const [showErr, setShowErr] = useState(false);

    const handleUserInput = (e) => {
        let input = e.currentTarget.value;
        setUserInput(input);
        setShowErr(false);
        setInputClass('email-input');
    }
    const handleSubmit = () => {
        const emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (emailReg.test(userInput))
            alert('valid')
        else {
            setInputClass('email-input input-error  ')
            setShowErr(true)
        }

    }
    return (


        <div className="email-input-wrap">
            <input type="text" placeholder="Your email address..." title="email" className={inputClass} onChange={(e) => handleUserInput(e)} value={userInput} />
            <div className="notify-btn-wrap">
                <button onClick={handleSubmit} className="notify-btn">Notify Me</button>
            </div>
            <div className="err-msg-wrap">
                {
                    showErr &&
                    <span className="err-msg">Please provide a valid email address</span>
                }
            </div>
        </div>

    );
}

export default EmailInput;
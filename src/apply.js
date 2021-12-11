import React, { useEffect } from 'react';
import './styles/apply.css'

const Apply = () => {
    useEffect(() => {
        console.log("Hello WOrld");
        setTimeout(() => {
            window.location.href = "https://forms.gle/5b8V8iNQWYLbCFQd8"
        }, 3000);
    }, [])
    return(
        <div className="containerApp">
            <h1 className="titleApply">You will be redirected soon. Please Wait</h1>
        </div>
    )
}

export default Apply
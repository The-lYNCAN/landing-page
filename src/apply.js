import React, { useEffect } from 'react';
import './styles/apply.css'

const Apply = () => {
    useEffect(() => {
        console.log("Hello WOrld");
        setTimeout(() => {
            window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSdnYhmGj903fJS9A4gzkZMF5uSEmKF2sQ5IZaiGRQC1rz5Aiw/viewform"
        }, 3000);
    }, [])
    return(
        <div className="containerApp">
            <h1 className="titleApply">You will be redirected soon. Please Wait</h1>
        </div>
    )
}

export default Apply
import React from 'react';
import img from '../../assets/img/notfound.gif';

const ErrorMessage = () => {
    return (
        <div>
             <img style={{ display: 'block', width: "100px", height: "100px", objectFit: 'contain', margin: "0 auto"}} src={img} alt="Error"/>    
        </div>
    );
};

export default ErrorMessage;
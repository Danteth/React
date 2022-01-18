import React from 'react';
import './CFooter.css';



export const CFooter = (props) =>{
    const{weather, temp, children} = props;
     let date = new Date();
    return ( 
    <div className='footerDivClass'>
        <h5 className='footerTextClass'>PPFront-end, prykładowy serwis React. Dzisiaj mamy: {date.toDateString()}
        <br/>
        Stan pogody: {weather}, temperatura: {temp}.
        <br/>
        {children}
        </h5>
        
    </div>
    );
}

// export const CFooter = () =>{
//     return React.createElement('div', {className: 'footerDivClass'}, 
//     React.createElement('h5',{id: 'footerText', className: 'footerTextClass'},
//     'PPFront-end, prykładowy serwis React. Dzisiaj mamy: '+ date.toDateString())+ 'Stan pogody');

// }


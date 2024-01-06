import React from 'react'
import '../style.css'

const Display = ({days,hours,minutes,seconds}) => {
    return (
        <div style={{textAlign:'center'}}>
            
            <table style={{color:'white',marginLeft:'480px'}}>
                <tbody>
                    <tr>
                        <th>{days}</th>&nbsp;&nbsp;
                        <th>{hours}</th>&nbsp;&nbsp;
                        <th>{minutes}</th>&nbsp;&nbsp;
                        <th>{seconds}</th>&nbsp;&nbsp;
                    </tr>
                    <tr className='colorchange3'>
                        <td>DAYS</td>&nbsp;&nbsp;
                        <td>HOURS</td>&nbsp;&nbsp;
                        <td>MINUTES</td>&nbsp;&nbsp;
                        <td>SECONDS</td>&nbsp;&nbsp;
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Display
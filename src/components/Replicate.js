import { React, useState } from 'react'
import '../style.css'
import {useEffect} from 'react'
import Display from './Display';
import { useDrag } from 'react-use-gesture'
import chrome from '../images/chrome.svg'
import logo1 from '../images/logo1.png'
import  logo2 from '../images/logo2.png';

const Replicate = () => {
    const [logoPos, setlogoPos]=useState({ x: 0, y: 0 });
    const bindLogoPos = useDrag((params)=>{
        setlogoPos({
            x: params.offset[0],
            y: params.offset[1],
        });
    });
    const endTime = new Date('February 01, 2024 00:00:00').getTime();
    const [currentTime,setcurrentTime] = useState(new Date().getTime());
    const gap = endTime - currentTime; //177670892
  
    const seconds = 1000; // in milliseconds
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;
  
    const remainingDays = Math.floor(gap / days);
    const remainingHours = Math.floor( (gap % days) / hours);
    const remainingMinutes = Math.floor( (gap % hours) / minutes);
    const remainingSeconds = Math.floor( (gap % minutes) / seconds);
  
    useEffect(()=>{
      setTimeout(()=>setcurrentTime(new Date().getTime()),1000);
    },[currentTime]) 

    return (
        <><br />
            <img src={logo1} alt="Logo" style={{width:'100px',height:'100px'}}/>
            <h1 style={{ color: 'white', display: 'inline', fontSize: '100px' }}>for </h1>

            <img src={chrome} alt="ChromeLogo" style={{width:'100px',height:'100px'}}/><span>        </span>
            <h1 className='colorchange'>& Cloud</h1><br />
            <h1 className='colorchange1' style={{ color: 'white', fontSize: '100px' }}>gaming</h1><br />
            <h6 className='colorchange2' style={{ color: 'white' }}>Join us on the launch of gartcod by <img src={logo2} alt="Logo" style={{width:'50px',height:'50px'}}/></h6><span>        </span>
            
            <br />
            <button { ...bindLogoPos()} style={{backgroundColor:'yellow',color:'black',borderRadius:'5px',height:'50px',width:'200px',
            position:'relative',top:logoPos.y,left:logoPos.x}} id="btn_claim">Claim Ticket</button><br/><br/>
            <Display days={remainingDays} 
        hours={remainingHours} minutes={remainingMinutes}
        seconds={remainingSeconds} />          
        </>
    )
}

export default Replicate
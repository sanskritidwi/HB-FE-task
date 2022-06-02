import React from 'react';
import link from '../assets/link.png'

function Header(){
    return(
        <>
            <div className='header'>
<div className='h-con'>HungerBox</div>
<div className='h-con'>Front End Coding Task</div>
<div className='h-con'><button  style={{display:'flex', width:'max-content'}}>Code<a href='https://github.com/sanskritidwi'><img src={link} alt='img'/> </a></button></div>

            </div>
        </>
    )
}

export default Header;
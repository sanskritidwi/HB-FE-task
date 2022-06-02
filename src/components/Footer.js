import React from 'react';
import linkedin from '../assets/icons8-linkedin-24.png'
import github from '../assets/icons8-github-24.png'
import angellist from '../assets/icons8-angellist-24.png'



function Footer(){
    return(
        <>
            <div className='footer'>
<div className='h-con' style={{display:'flex'}}>Submitted by : Sanskriti Dwivedi 
<a href='https://github.com/sanskritidwi'><img src={linkedin} alt='img'/> </a>
<a href='https://github.com/sanskritidwi'><img src={github} alt='img'/> </a>
<a href='https://github.com/sanskritidwi'><img src={angellist} alt='img'/> </a>

</div>
            </div>
        </>
    )
}

export default Footer;
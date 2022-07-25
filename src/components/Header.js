import React from 'react'
import '../styles/Header.css'
import github from '../assets/github.png'
import twitter from '../assets/twitter.png'
import linkedin from '../assets/linkedin.png'

export default function Header() {
  return (
    <div className='main' >
        <div className='header' style={{display:'flex',flexDirection:'row'}}>
           
           <div style={{display:'flex',flexDirection:'row'}} className='tabs'>
            
           <a href='#projects' style={{textDecoration:'none'}}><p style={{textDecoration:'none',margin:"10px"}} className='text'>Projects ></p></a>
           <a href='#skills' style={{textDecoration:'none'}}><p style={{textDecoration:'none',margin:"10px"}} className='text'>Skills ></p></a>
           <a href='#service' style={{textDecoration:'none'}}><p style={{margin:"10px"}} className='text'>Services ></p></a>
            
           </div>
           {/* <div style={{display:'flex',flexDirection:'row'}}  className='social'>
            <p style={{margin:"10px"}}>Twitter</p>
            <p style={{margin:"10px"}}>Github</p>

           </div> */}

        </div>
        <div>
        <div style={{display:'flex',flexDirection:'row'}} className='tabs2'>
            <p className='contact'>Contact me @</p>
            <a href='https://github.com/Ganeshguru5' target='_blank'><img src={github} style={{margin:"10px",width:'30px',height:'30px'}} className='texticon' /></a>
            <a href='https://twitter.com/GANESHGURU5034' target='_blank'><img src={twitter} style={{margin:"10px",width:'30px',height:'30px'}} className='texticon' /></a>
            <a href='https://www.linkedin.com/in/ganeshguru-a-ab5399176/' target='_blank'><img src={linkedin} style={{margin:"10px",width:'30px',height:'30px'}} className='texticon' /></a>
            
           </div>
           {/* <div style={{display:'flex',flexDirection:'row'}}  className='social'>
            <p style={{margin:"10px"}}>Twitter</p>
            <p style={{margin:"10px"}}>Github</p>

           </div> */}
        </div>
    </div>
  )
}


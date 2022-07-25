import React from 'react'
import '../styles/Services.css'
import happy from '../assets/happy.png'

export default function () {
  return (
    
    <div className='serviceMain' id='service'>
       
        <div className='contents'>
            <div className='content'>
               <div style={{margin:'20px',padding:'10px'}}>
                <p className='text1'>Web design</p>
                <p className='text2'>I develop feasible websites in react js , django with good user experience . </p>
                <p style={{color:'white'}}>view projects</p>
               </div>
            </div>
            <br></br>
            <div className='content'>
                <div style={{margin:'20px',padding:'10px'}}>
                <p className='text1'>Web Application development</p>
                <p className='text2'>I develop web applications with secure backend techologies like fireBase . </p>
                <p style={{color:'white'}}>view projects</p>
                </div>
            </div>

            <br></br>

            <div className='content'>
                <div style={{margin:'20px',padding:'10px'}} className='contentin'>
                <p className='text1'>Mobile application developement</p>
                <p className='text2'>I develop a full stack mobile application in react native . </p>
                <p style={{color:'white'}}>view projects</p>
                </div>
            </div>

            <br></br>

            
        </div>

        <div className='description'>
            <div>
                <p style={{color:'#4d4e52'}}>Introduce</p>
                <p style={{color:'white'}} className='myself'>Hello I am</p>
                <p style={{color:'white'}} className='myself'>Ganeshguru ✍️</p>
                <br></br>
                <p style={{color:'white'}}>Here is mah story ...</p>

                <p style={{color:'#D3D3D3',fontFamily: 'Edu TAS Beginner',fontSize:20}}>
                

I have always been good at web development. I'm a UI/UX designer, and problem solver. Kamaraj college of engineering and technology is where I'll complete my Bachelor of Engineering in Computer Science. 

Coding was more of a hobby than a career focus for me during my 2nd year of college. Initially, I struggled and was frustrated a lot. Later, coding became a habit in my day-to-day activities. I realized software engineering was for me.

JavaScript and Python are some of the programming languages I am familiar with. I also have extensive knowledge of Django, React js , React Native , Firebase and Postgresql. In terms of UI/UX, I am well acquainted with Figma. Feel free to connect with me if you are a fellow software engineer in the area! ✌️
                </p>

                <img src={happy} width='50px'/>
                <p style={{color:'white'}}>Happy to see you buddy !!!</p>
            </div>
        </div>
    </div>
    
  )
}

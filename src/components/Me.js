import React from 'react'
import '../styles/me.css'
import profile from '../assets/Profilecroped.png'
import django from '../assets/django.png'
import figma from '../assets/figma.png'
import reactjs from '../assets/reactjs.png'
import nodejs from '../assets/nodejs.png'
import ReactFloaterJs from 'react-floaterjs'
import firebase from '../assets/firebase.png'
import nextjs from '../assets/nextjs.png'

export default function Me() {
  return (
    
    <div className='memain'>
        
        <div className='halfone'>
            <div>
                <p className='domain'>Full-Stack Developer</p>
            </div>
            <div>
                <p className='quote'>Hello visitor</p>
                <p className='quote'>I am Ganeshguru 👾 </p>
            </div>
            <div>
                <p className='miner'>I design and code beautifully simple things</p>
                <p className='miner'>and I love what I do</p>
            </div>
            <div>
                <p className='chat'>HIRE ME !!</p>
            </div>
        </div>

        <div className='halftwo'>
            <div>
                <ReactFloaterJs>
                <img src={django} className='django'/>
                </ReactFloaterJs>
                <ReactFloaterJs>
                <img src={reactjs} className='reactjs'/>
                </ReactFloaterJs>
                <ReactFloaterJs>
                <img src={figma}  className='figma'/>
                </ReactFloaterJs>
                <ReactFloaterJs>
                <img src={nodejs}  className='nodejs'/>
                </ReactFloaterJs>
                <ReactFloaterJs>
                <img src={firebase}  className='firebase'/>
                </ReactFloaterJs>
                <ReactFloaterJs>
                <img src={nextjs}  className='nextjs'/>
                </ReactFloaterJs>
                
                
                
                
                
            </div>
        </div>
    </div>
  )
}

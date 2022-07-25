import React from 'react'
import '../styles/skills.css'
import reactjs from '../assets/reactjs.png'
import firebase from '../assets/firebase.png'
import nodejs from '../assets/nodejs.png'

import django from '../assets/django.png'
import python from '../assets/py.png'
import postgresql from '../assets/postgresql.png'
import ReactFloaterJs from 'react-floaterjs'
import npm from '../assets/npm.png'
import figma from '../assets/figma.png'
import nextjs from '../assets/nextjs.png'


export default function Skills() {
  return (
    <div className='SkillMain' id='skills' style={{height:'100%'}}>
        <p className='titilebar'>Skills I acquired 🚀</p>
        <div className='project'>
            
            <div className='skillDesc'>
                <p>The React library is one of my strongest skills, so I can develop both web and mobile applications using it. </p>
            </div>
            <div className='icons'>
                <ReactFloaterJs>
                <img src={reactjs} style={{width:'120px'}} className='reactjs1'/>
                </ReactFloaterJs>

            </div>
        </div>

        <div className='project'>
        <div className='icons'>
                <ReactFloaterJs>
                <img src={django} style={{width:'120px'}} className='reactjs2'/>
                </ReactFloaterJs>
                
                
        </div>
            <div className='skillDesc'>
                <p>It is my skill set to develop most realistic server-side web applications using django a Python web application frameworks</p>
            </div>
            
        </div>

        <div className='project'>
            
            <div className='skillDesc'>
                <p>It is my skill to manage data in Firebase, a NoSQL database. My Instagram clone project uses it</p>
            </div>
            <div className='icons'>
                <ReactFloaterJs>
                <img src={firebase} style={{width:'120px'}} className='django1'/>
                </ReactFloaterJs>

            </div>
        </div>

        <div className='project'>
        <div className='icons'>
                <ReactFloaterJs>
                <img src={postgresql} style={{width:'120px'}} className='reactjs2'/>
                </ReactFloaterJs>
                
                
        </div>
            <div className='skillDesc'>
                <p>Postgresql, a SQL database, is my expertise. My Banking system project uses it.</p>
            </div>
            
        </div>
        <div className='project'>
            
            <div className='skillDesc'>
                <p>I am familiar with how to manage npm packages and how to use it in a variety of projects.</p>
            </div>
            <div className='icons'>
                <ReactFloaterJs>
                <img src={npm} style={{width:'120px'}} className='django1'/>
                </ReactFloaterJs>

            </div>
        </div>
        
        
    </div>
  )
}

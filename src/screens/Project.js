import React from 'react'
import '../styles/Project.css'
import reactjs from '../assets/reactjs.png'
import firebase from '../assets/firebase.png'
import nodejs from '../assets/nodejs.png'

import django from '../assets/django.png'
import python from '../assets/py.png'
import postgresql from '../assets/postgresql.png'

import npm from '../assets/npm.png'

import ReactFloaterJs from 'react-floaterjs'
import AnimatedPage from '../AnimatedPage'
export default function Project() {
  return (
    
    <div className='projectMain' id='projects' style={{height:'100%'}}>
        <p className='titilebar'>Project I have Done 🚀</p>
        <div className='project'>
            
            <div className='projectDesc'>
                <p>Instagram will be redesigned and given a new UI across all screens.A new feature is being added anonymous chat.</p>
            </div>
            <div className='icons'>
                <ReactFloaterJs>
                <img src={reactjs} style={{width:'80px'}} className='reactjs1'/>
                </ReactFloaterJs>
                <ReactFloaterJs>
                <img src={firebase} style={{width:'80px'}} className='firebase1'/>
                </ReactFloaterJs>

                <ReactFloaterJs>
                <img src={nodejs} style={{width:'80px'}} className='nodejs1'/>
                </ReactFloaterJs>
            </div>
        </div>

        <div className='project'>
        <div className='icons'>
                <ReactFloaterJs>
                <img src={reactjs} style={{width:'80px'}} className='reactjs2'/>
                </ReactFloaterJs>
                <ReactFloaterJs>
                <img src={npm} style={{width:'80px'}} className='npm1'/>
                </ReactFloaterJs>
                
        </div>
            <div className='projectDesc'>
                <p>By using the react library, I created my own website for myself. When visitors visit my website, I hope they will have a pleasant user experience.</p>
            </div>
            
        </div>

        <div className='project'>
            
            <div className='projectDesc'>
                <p>Using the Django Python framework, I am building a web application to secure customer data for a bank.The data of every user is hashed by my application every minute using different algorithms Everyone can access the user transactions data since it is open source.Data about users is stored in the postgresql database pgAdmin.
</p>
            </div>
            <div className='icons'>
                <ReactFloaterJs>
                <img src={django} style={{width:'80px'}} className='django1'/>
                </ReactFloaterJs>

                <ReactFloaterJs>
                <img src={postgresql} style={{width:'80px'}} className='postgresql1'/>
                </ReactFloaterJs>

                <ReactFloaterJs>
                <img src={python} style={{width:'80px'}} className='python1'/>
                </ReactFloaterJs>
            </div>
        </div>
        
    </div>
   
  )
}

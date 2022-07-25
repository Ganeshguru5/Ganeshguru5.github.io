import React from 'react'
import Header from'../components/Header'
import Me from '../components/Me'
import Services from '../components/Services'
import Project from './Project'
import Skills from './Skills'


export default function Home() {
  return (
    <div>
      <div style={{ backgroundColor:'#2d2e32',}}>
        <Header />
        <Me />
      </div>
        <Services />
        <Project/>
        <Skills/>
       
    </div>
  )
}

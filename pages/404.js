import React from 'react'
import Navbar from '../layout/Navbar'

const Custom404 = () => {
  return (
    <>
    <Navbar/>
    <section className='section-padding' style={{
        height: "70vh"
    }}>
        <div className='container'>
            <h1 style={{
                
                textAlign: "center"
            }}>Page Not Found</h1>
        </div>
    </section>
    </>
  )
}

export default Custom404
import React from 'react'
import ContHero from './Sections/ContHero'
import Form from './Sections/Form'
import Video from './Sections/Video'
import Map from './Sections/Map'

const ContactUs = () => {
  return (
    <div>
      <ContHero/>
            <div className="bg-gradient-to-r from-vernoxy via-primary/50 to-vernoxy text-white h-[1px] -mt-5"></div>
        
      <Form/>
      <Video/>
      <Map/>
    </div>
  )
}

export default ContactUs

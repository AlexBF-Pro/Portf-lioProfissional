import React from 'react'
import { Container, Content } from './style'
import { FaLinkedin, FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa'
import ItemContact from '../../../components/ItemContact'

export default function Contact() {
  return (
    <Container>
      <Content>
        <ItemContact 
          IconFa={FaLinkedin} 
          LinkContact="https://www.linkedin.com/in/alex-firmiano/" 
        />
        <ItemContact 
          IconFa={FaFacebook} 
          LinkContact="https://www.facebook.com/alex.barbosa.3781995" 
        />
        <ItemContact 
          IconFa={FaInstagram} 
          LinkContact="https://www.instagram.com/alexbfirmiano/" 
        />
        <ItemContact 
          IconFa={FaEnvelope} 
          LinkContact="alexfirmiano2@gmail.com" 
        />
      </Content>
    </Container>
  )
}
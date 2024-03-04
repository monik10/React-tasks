/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import styled from "styled-components"

const Section=styled.section`
width:100%;
height:100vh;`

const Article=styled.article`
width:90%;
height:inherit;
margin:0 auto;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
`
const H1=styled.h1`
padding:10px;
color:#009688;
font-size:28px;
text-transform:uppercase;
font-style:revert-layer;
font-weight:400;
letter-spacing:1.6px;`

const Main=styled.main`
    background: #d7c2c2;
    width: 400px;
    height: auto;
    padding: 10px;
    border: 1px solid grey;
`
const Div=styled.div`
margin:10px 0;
`
const Label=styled.label`
width: 100%;
    display: block;
    padding: 5px 0;
    font-size: 14px;
    font-weight: 500;
`
const Input=styled.input`
width: 95%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #b79f9f;
    border-radius: 5px;`

const Button=styled.button`
border: 1px solid #87b9b6;
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    color: #fff;
    margin:10px 0;
    background: #009688;
    font-size:16px;
    font-weight:500;
    text-transform:uppercase;
    cursor:pointer;
    &:hover{
        background: ${({background}) => background==="#111" ?"#222":"#888"};
    }
`
const ContactForm = ({color}) => {
    console.log(color);
  return (
    <Section>
      <Article>
        <H1>Contact Form</H1>
        <Main>
<Div className="form-group">
    <Label>Email</Label>
    <Input type="text" placeholder="Enter Email"></Input>
</Div>
<Div className="form-group">
    <Label>Password</Label>
    <Input type="password" placeholder="Enter Password"></Input>
</Div>
<Div className="form-group">
    <Button background="#111">Submit</Button>
</Div>
        </Main>
      </Article>
    </Section>
  )
}

export default ContactForm

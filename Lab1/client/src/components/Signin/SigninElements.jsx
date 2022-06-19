import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Container = styled.div`
    min-height: 692px;
    position: fixed;
    bottom: 0;
    left:0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
    background: linear-gradient(
        108deg,
        #FFF 0%,
        #252438 100%
    );
`

export const FromWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;


    @media screen and (max-width: 400px){
        height: 80%;
    }
`
export const Icon = styled.img`
height: 250px;
width: 250px;
margin-bottom: 10px;

    margin-left: 32px;
    margin-top: 32px;
    text-decoration: none;
    color: #fff;
    font-weight: 700;
    font-size: 32px;

    @media screen and (max-width: 480px){
        margin-left: 16px;
        margin-top: 8px;
    }

`

export const FormContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 480px) {
        padding: 10px;
    }
`

export const Form = styled.form`
    background: #252438;
    max-width: 400px;
    height:auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin-top: 500px;
    margin: 0 auto;
    padding: 80px 32px;
    border-radius: 4px;
    border-color: #dad9e4;
    box-shadow: 0 1px 3px rgba(0, 0, 0,0.9);

    @media screen and (max-width: 400px) {
        padding: 32px 32px;
    }
`
export const FormH1 = styled.h1`
    margin-bottom: 40px;
    color: #fff;
    font-size: 20px;
    font-weight: 400;
    text-align:center;
`

export const FormLabel =styled.label`
    margin-bottom:8px;
    font-size: 14px;
    color: #fff;
`
export const FormInput =styled.input`
    padding: 16px 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 14px;
`

export const FormButton =styled.button`
    background: #FC9C09;
    padding: 16px 0;
    border: none;
    border-radius: 30px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
`



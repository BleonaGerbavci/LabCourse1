import React from 'react'
import { Container, FormButton, FormContent, FormInput, FormLabel, FromWrap, Icon,FormH1,Form } from './SigninElements'
import Logo from '../../images/logo-colored.svg'

const SignIn = () => {
  return (
    <>
        <Container>
            <FromWrap>
                <Icon  src={Logo} />
                <FormContent>
                    <Form action="#">
                        <FormH1>Kycuni me llogarine tuaj</FormH1>
                        <FormLabel htmlFor='for'>Email-i</FormLabel>
                        <FormInput type='email' required />
                        <FormLabel htmlFor='for'>Password-i</FormLabel>
                        <FormInput type='password' required />
                        <FormButton type='submit'>Kycu</FormButton>
                    </Form>
                </FormContent>
            </FromWrap>
        
        </Container>

    
    
    </>
  )
}

export default SignIn
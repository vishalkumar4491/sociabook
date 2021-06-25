import React from 'react'
import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton,FormButton2, Text, LogIn } from './SignUpElements'

const SignUp = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    
                    <FormContent>
                        <Form action="#">
                            <FormH1>Sign Up Here</FormH1>
                            <FormLabel htmlFor="for">Name</FormLabel>
                            <FormInput type="text" requied />
                            <FormLabel htmlFor="for">Email</FormLabel>
                            <FormInput type="email" requied />
                            <FormLabel htmlFor="for">Password</FormLabel>
                            <FormInput type="password" requied />
                            <FormButton type="submit">Sign Up</FormButton>
                            <FormButton2 type="submit" >Sign Up With Email</FormButton2>
                            
                            <Text>Already a User</Text>
                            <LogIn to='/signin'>
                                Sign In Here
                            </LogIn>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default SignUp

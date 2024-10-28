
import * as Yup from 'yup';

export const signUp = Yup.object({
    name:Yup.string().min(3).max(10).required('Please enter your first name'),
    email:Yup.string().email().required(' please enter your name'),
    password:Yup.string().min(8).matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,'Please enter atlest 1 special character').required('Please enter your password'),
})

export const signIn = Yup.object({
    email:Yup.string().email().required(' please enter your name'),
    password:Yup.string().min(8).required('Please enter your password'),
})
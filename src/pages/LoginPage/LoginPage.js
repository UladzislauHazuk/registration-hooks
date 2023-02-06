import { TextField, Button } from '@mui/material'
import style from './LoginPage.module.css'
import { useState } from "react"

const LoginPage = () => {
    const [form, setForm] = useState({email: '', pwd: ''});

    const changeForm = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    return(
        <div className={style['wrapper']}>
            <h1>LOGIN</h1>
            <div>
                <TextField onChange={changeForm} name='email' id="standard-basic" label="Email" variant="standard" />
            </div>
            <div>
                <TextField onChange={changeForm} name='pwd' id="standard-basic" label="Password" variant="standard" />
            </div>
            <div>
                <Button onClick={() => {
                    console.log({form})
                }} variant="outlined" >click</Button>
            </div>
        </div>
    )
}

export default LoginPage
import './SignIn.css'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { useEffect } from 'react'
import { login, reset } from '../../features/auth/authSlice'


const SignIn = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const { email, password } = formData

    const { user, isError, isSuccess, message } = useSelector(
        (state) => state.auth
    )

    useEffect(() => {
        if (isError) {
            console.log(message)
        }

        if (isSuccess || user) {
            navigate('/')
        }

        dispatch(reset())
    }, [user, isError, isSuccess, message, navigate, dispatch])

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()

        const userData = {
            email,
            password
        }

        dispatch(login(userData))
    }


    const onRegister = () => {
        navigate('/register')
    }

    return(
        <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
            <form 
                onSubmit={onSubmit}
                className="pa4 black-80"
            >
                <div className="measure">
                    <fieldset 
                        id="sign_up" 
                        className="ba b--transparent ph0 mh0"
                    >

                    <legend 
                        className="f1 fw6 ph0 mh0">
                            Sign In
                    </legend>

                    <div className="mt3">
                        <label 
                            className="db fw6 lh-copy f6" 
                            htmlFor="email-address">
                                Email
                        </label>
                        <input
                            type="text" 
                            id='email' 
                            name='email' 
                            value={email} 
                            placeholder='Enter Email' 
                            onChange={onChange}
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"  
                        />
                    </div>

                    <div 
                        className="mv3"
                    >
                        <label 
                            className="db fw6 lh-copy f6" 
                            htmlFor="password">
                                Password
                        </label>

                        <input
                            type='password'
                            id='password' 
                            name='password' 
                            value={password} 
                            placeholder='Enter Password' 
                            onChange={onChange}
                            className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                        />
                    </div>

                    </fieldset>

                    <div className="">
                        <button 
                            type='submit'
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                        >
                            Sign In
                        </button>
                    </div>

                    <div 
                        className="lh-copy mt3"
                    >
                        <p 
                            onClick={onRegister}
                            href="#0" 
                            className="f6 link dim black db pointer">
                                Don't have an account? Register.
                        </p>
                    </div>

                </div>
            </form>
        </article>
    );
}

export default SignIn
import './Register.css'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { register, reset } from '../../features/auth/authSlice'


const Register = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })

    const { name, email, password, password2 } = formData

    const { user, isError, isSuccess, message } = useSelector(
        (state) => state.auth
    )

    const onSignInClick = () => {
        navigate('/signin')
    }

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

        if (password !== password2) {
            console.log('Passwords Do Not Match')
        } else {
            const userData = {
                name, 
                email, 
                password,
            }

            dispatch(register(userData))
        }
    }

    return(
        <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
            <form 
                className="pa4 black-80"
                onSubmit={onSubmit}
            >
                <div className="measure">
                    <fieldset 
                        id="sign_up" 
                        className="ba b--transparent ph0 mh0"
                    >

                    <legend 
                        className="f1 fw6 ph0 mh0">
                            Register
                    </legend>

                    <div className="mt3">
                        <label 
                            className="db fw6 lh-copy f6" 
                            htmlFor="name"
                        >
                                Name
                        </label>
                        <input 
                            type="text" 
                            id='name' 
                            name='name' 
                            value={name} 
                            placeholder='Enter Name' 
                            onChange={onChange} 
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                        />
                    </div>

                    <div className="mt3">
                        <label 
                            className="db fw6 lh-copy f6" 
                            htmlFor="email-address"
                        >
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
                            id='password' 
                            name='password'
                            value={password} 
                            placeholder='Enter Password' 
                            onChange={onChange} 
                            type="password" 
                            className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                        />
                    </div>

                    <div 
                        className="mv3"
                    >
                        <label 
                            className="db fw6 lh-copy f6" 
                            htmlFor="password">
                                Confirm Password
                        </label>

                        <input 
                            id='password2'
                            name='password2'
                            value={password2} 
                            placeholder='Enter Password' 
                            onChange={onChange} 
                            type="password" 
                            className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                        />
                    </div>

                    </fieldset>

                    <div className="">
                        <input 
                            
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                            type="submit" 
                            value="Register" 
                        />
                    </div>

                    <div 
                        className="lh-copy mt3"
                    >
                        <p 
                            onClick={onSignInClick}
                            href="#0" 
                            className="f6 link dim black db pointer">
                                Have an account? Sign in.
                        </p>
                    </div>

                </div>
            </form>
        </article>
    );
}

export default Register
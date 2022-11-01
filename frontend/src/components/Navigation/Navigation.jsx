import './Navigation.css'
import { useNavigate, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout, reset } from '../../features/auth/authSlice'

const Navigation = () => {

    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch()

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/signin')
    }

    return (
        <nav>
            {location.pathname === "/register" || location.pathname === "/signin" 
                ? ""
                : <p
                    onClick={onLogout} 
                    className="f3 link dim black underline pa3 pointer">
                        Sign Out
                    </p>
            }
                
        </nav>
    )
}

// test

export default Navigation
import { useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import ImageLinkForm from "../../components/ImageLinkForm/ImageLinkForm"
import { reset } from '../../features/auth/authSlice'
import Logo from "../../components/Logo/Logo"
import Rank from "../../components/Rank/Rank"


const Home = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user } = useSelector((state) => state.auth)

    useEffect(() => {

        if (!user) {
            navigate('/signin')
        }

        return () => {
            dispatch(reset())
        }
    })

    return (
        <div>
            <Logo />
            <Rank />
            <ImageLinkForm />
        </div>
    )
}

export default Home
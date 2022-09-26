import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateUser } from '../../features/auth/authSlice'

const Rank = () => {

    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)

    let [entries, setEntries] = useState(user.entries === undefined ? '0' : user.entries)

    const { isError, message } = useSelector(
        (state) => state.auth
      )
  
      useEffect(() => {
  
        if (isError) {
          console.log(message)
        }
        
      }, [isError, message, dispatch])

    const onClicking = (e) => {

        e.preventDefault()
        console.log(user._id)
        console.log(entries)
        setEntries(entries++)
        dispatch(updateUser({ id: user._id, entries }))

    }

    return (
        <div>
            <div className="white f3">
                <h3>{user 
                    ? `Hello, ${user.name}, your current entry count is...`
                    : null}</h3>
            </div>

            <div 
                onClick={onClicking}>
                Button
            </div>

            <div 
                className="white f1"
            >
                {user
                ? `${user.entries}`
                : null}
            </div>
        </div>
    )
}

export default Rank
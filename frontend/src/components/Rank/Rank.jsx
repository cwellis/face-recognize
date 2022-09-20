import { useSelector } from 'react-redux'

const Rank = () => {

    const { user } = useSelector((state) => state.auth)

    return (
        <div>
            <div className="white f3">
                <h3>{user 
                    ? `Hello, ${user.name}, your current rank is...`
                    : null}</h3>
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
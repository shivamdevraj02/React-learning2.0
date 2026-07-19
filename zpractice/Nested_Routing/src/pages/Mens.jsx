

import { useNavigate } from 'react-router-dom'

const Mens = () => {
    const navigate = useNavigate()

    return (
        <>
            <h1>Mens page</h1>

            <button
                onClick={() => navigate('/')}
                style={{
                    marginTop: '50px',
                    padding: '10px 20px',
                    fontSize: '16px',
                    backgroundColor: '#a9abad',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }}
            >
                back to Home
            </button>
        </>
    )
}

export default Mens
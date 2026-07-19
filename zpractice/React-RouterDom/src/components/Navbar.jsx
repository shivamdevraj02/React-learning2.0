import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav className='navbar'>
            <div className='nav-brand'>UnMatchable</div>
            <div className='nav-links'>
                <Link className='nav-link' to='/'>Home</Link>
                <Link className='nav-link' to='/About'>About</Link>
                <Link className='nav-link' to='/Product'>Product</Link>
            </div>
        </nav>
    )
}

export default Nav

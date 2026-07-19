import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="site-nav">
            <h1>Nested Shop</h1>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/About">About</Link>
                <Link to="/Product">Product</Link>
            </div>
        </nav>
    )
}

export default Navbar;
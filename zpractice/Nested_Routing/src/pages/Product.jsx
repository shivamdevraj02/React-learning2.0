import Mens from "./Mens";
import Womens from "./Womens";
import { Link, Outlet } from "react-router-dom";

const Product = () => {
    return (
        <section className="page page-product">
            <div className="page-section">
                <h1>Product page</h1>
                <p>Choose a category to explore the latest collection.</p>
            </div>
            <nav className="product-nav">
                <Link to="/Product/Mens">Men</Link>
                <Link to="/Product/Womens">Womens</Link>
            </nav>
            <div className="page-section">
                <Outlet />
            </div>
        </section>
    )
}

export default Product;
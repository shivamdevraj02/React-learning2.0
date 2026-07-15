import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="p-3 text-bg-dark">
      <div className="container">

        <Link to="/" className="text-white text-decoration-none">
          Logo
        </Link>

        <ul className="nav">
          <li>
            <Link to="/" className="nav-link px-2 text-secondary">Home</Link>
          </li>
          <li>
            <Link to="/create-post" className="nav-link px-2 text-white">
              Create Post
            </Link>
          </li>
        </ul>

      </div>
    </header>
  );
}
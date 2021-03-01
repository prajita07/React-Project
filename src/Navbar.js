import {Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <nav className="navbar">
            <h1> Ecommerce </h1>
            <div className="links">
                <Link  to="/" style={{
                    color:"white",
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                }} >Home</Link>
                <Link to="/products" style={{
                    color:"white",
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                }}>Product</Link>
                <Link to="/addtocart"style={{
                    color:"white",
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                }}>add to cart</Link>
            </div>
        </nav>
    );
}
export default Navbar;
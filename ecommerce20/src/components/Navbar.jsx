import { Link, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useSelector } from "react-redux";

const Navbar = () => {
    // Safely get user from localStorage
    const userData = localStorage.getItem('users');
    let user = null;

    try {
        user = userData ? JSON.parse(userData) : null;
    } catch (error) {
        // console.error("Failed to parse user data:", error);
    }

    // Navigate 
    const navigate = useNavigate();

    // Logout function 
    const logout = () => {
        localStorage.removeItem('users');
        navigate("/login");
    };

    // CartItems
    const cartItems = useSelector((state) => state.cart);

    // navList Data
    const navList = (
        <ul className="flex space-x-3 text-white font-medium text-md px-5">
            {/* Home */}
            <li>
                <Link to="/">Home</Link>
            </li>
            {/* All Products */}
            <li>
                <Link to="/allproduct">All Product</Link>
            </li>
            {/* Signup */}
            {!user && (
                <li>
                    <Link to="/signup">Signup</Link>
                </li>
            )}
            {/* Login */}
            {!user && (
                <li>
                    <Link to="/login">Login</Link>
                </li>
            )}
            {/* User Dashboard */}
            {user?.role === "user" && (
                <li>
                    <Link to="/user-dashboard">User</Link>
                </li>
            )}
            {/* Admin Dashboard */}
            {user?.role === "admin" && (
                <li>
                    <Link to="/admin-dashboard">Admin</Link>
                </li>
            )}
            {/* Logout */}
            {user && (
                <li className="cursor-pointer" onClick={logout}>
                    Logout
                </li>
            )}
            {/* Cart */}
            <li>
                <Link to="/cart">
                    Cart({cartItems.length})  {/* Show the number of items */}
                </Link>
            </li>
        </ul>
    );

    return (
        <nav className="bg-pink-600 sticky top-0">
            {/* Main */}
            <div className="lg:flex lg:justify-between items-center py-3 lg:px-3">
                {/* Left */}
                <div className="left py-3 lg:py-0">
                    <Link to="/">
                        <h2 className="font-bold text-white text-2xl text-center">A.M</h2>
                    </Link>
                </div>

                {/* Right */}
                <div className="right flex justify-center mb-4 lg:mb-0">
                    {navList}
                </div>

                {/* Search Bar */}
                <SearchBar />
            </div>
        </nav>
    );
};

export default Navbar;

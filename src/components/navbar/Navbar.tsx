
import "./Navbar.scss"
export const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="navbarContainer d-flex justify-content-between">
                <div className="logo">
                    <h5>Booking.com</h5>
                </div>
                <div className="navbarList">
                    <a href="#" className="propertyLink pe-4" >List your Property</a>
                    <button className="btn-outline-primary me-2">Register</button>
                    <button className="btn-outline-primary me-1">Sign in</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
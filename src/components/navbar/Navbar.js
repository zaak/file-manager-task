import './_navbar.scss';

const Navbar = ({ children }) => {
    return (
        <div role="tablist" className="navbar">
            <div className="navbar-items">{children}</div>
        </div>
    );
};

export default Navbar;

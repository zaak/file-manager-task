import clsx from 'clsx';

const NavbarItem = ({ label, type, active, onClick }) => {
    return (
        <button
            className={clsx('navbar-item', type, active && 'active')}
            role="tab"
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default NavbarItem;

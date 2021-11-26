import './_toolbar.scss';

const Toolbar = ({ children }) => {
    return (
        <div className="toolbar">
            <div className="toolbar-buttons">{children}</div>
        </div>
    );
};

export default Toolbar;

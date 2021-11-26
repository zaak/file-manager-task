const Pagination = ({ page, setPage, totalPages }) => {
    return (
        <div className="pagination">
            <button disabled={page === 1} onClick={() => setPage(1)}>
                First page
            </button>
            <button
                disabled={page === 1}
                onClick={() => setPage(Math.max(1, page - 1))}
            >
                Previous page
            </button>
            <span>
                Page <strong>{page}</strong> of <strong>{totalPages}</strong>
            </span>
            <button
                disabled={page === totalPages}
                onClick={() => setPage(Math.min(totalPages, page + 1))}
            >
                Next page
            </button>
            <button
                disabled={page === totalPages}
                onClick={() => setPage(totalPages)}
            >
                Last page
            </button>
        </div>
    );
};

export default Pagination;

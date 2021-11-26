import { Navbar, NavbarItem } from '../components/navbar';
import { Toolbar, ToolbarButton } from '../components/toolbar';
import { Pagination } from '../components/pagination';
import { FilesPane } from '../components/filesPane';
import { createDummyFiles } from '../data/files';
import { useState } from 'react';
import './_mainview.scss';

const TOTAL_PAGES = 5;
const ELEMENTS_PER_PAGE = 50;
const categories = ['Images', 'Documents', 'Audio', 'Video', 'Other'];

const MainView = () => {
    const [category, setCategory] = useState('Images');
    const [page, setPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState(
        window.location.pathname.substr(1)
    );

    return (
        <main>
            <Navbar>
                {categories.map((name) => (
                    <NavbarItem
                        key={name}
                        label={name}
                        type="category"
                        active={category === name}
                        onClick={() => setCategory(name)}
                    />
                ))}
            </Navbar>
            <div className="right-column">
                <Toolbar>
                    <ToolbarButton label="View" icon="eye" />
                    <ToolbarButton label="Download" icon="download" />
                    <ToolbarButton label="Copy" icon="copy" />
                    <ToolbarButton label="Move" icon="file-import" />
                    <ToolbarButton label="Rename" icon="file-signature" />
                    <ToolbarButton label="Delete" icon="trash" disabled={true} />
                    <input
                        id="search"
                        placeholder="Search..."
                        type="text"
                        onChange={(e) => setSearchQuery(e.target.value)}
                        value={searchQuery}
                    />
                    <ToolbarButton label="Upload" icon="upload" />
                </Toolbar>
                {searchQuery && (
                    <div className="search-result">
                        <div>
                            Search results for: <strong>{searchQuery}</strong> <a href={searchQuery}>Share</a>
                        </div>
                    </div>
                )}
                <FilesPane
                    files={createDummyFiles(
                        category,
                        (page - 1) * ELEMENTS_PER_PAGE,
                        ELEMENTS_PER_PAGE
                    )}
                />
                <Pagination
                    page={page}
                    setPage={setPage}
                    totalPages={TOTAL_PAGES}
                />
            </div>
        </main>
    );
};

export default MainView;

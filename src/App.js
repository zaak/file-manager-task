import './App.scss';
import MainView from './views/MainView';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img
                    alt="CKEditor 5 logo"
                    src="https://ckeditor.com/docs/assets/img/ckeditor-5.svg"
                />
                <h1>CKSource recruitment task</h1>
            </header>
            <MainView />
        </div>
    );
};

export default App;

// src/Body.js

import './Body.css';
import logo from './logo.png';
import SearchForm from "./Form";

function Body() {
    return (
        <div className="Body-test">
            <img src={logo} alt="Logo" width="50%" height="auto"/>
            <SearchForm />
        </div>
    )
}
export default Body
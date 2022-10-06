import {Link } from "react-router-dom";

export default function Footer(){
    
    return(
        <div className="footer">
            <ul>
                
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/impressum">Impressum</Link>
                </li>

            </ul>
        </div>
    )
}
import {NavLink} from "react-router-dom"

export default function NavItem({path}){
    return(
    <nav>
        <NavLink to={`/${path}`}>
            {path}
        </NavLink>
    </nav>)
}
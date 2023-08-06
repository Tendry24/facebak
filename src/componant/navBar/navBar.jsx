import Logo from "../logo/logo"
import ListeActionNav from "../listeActionNav/listeActionNav";

import "./navBar.css"

const navBar = () => {
    return(
        <nav>
            <Logo />
            <ListeActionNav />
        </nav>
    )
}

export default navBar;

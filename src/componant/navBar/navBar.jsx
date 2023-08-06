import { AppBar, Button, Toolbar, IconButton, Icon } from "@mui/material";
import icon from "./logo192.png";

const navBar = () => {
    return(
        <nav>
            <AppBar position="static">
                <Toolbar style={{display: "flex", flexDirection: "row",justifyContent: "space-between"}}>
                    <Icon>
                        <img src={icon} alt="Icon" style={{ height:'100%' }} />
                    </Icon>
                    <IconButton edge='start' color="inherit" aria-label="menu">Menu</IconButton>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </nav>
    )
}

export default navBar;

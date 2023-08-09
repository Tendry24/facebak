import { AppBar, Button, Toolbar, IconButton, Icon } from "@mui/material";
import icon from "./logo192.png";
import {colors} from "../../common/colors";
import hexToRgba from "hex-to-rgba";

const navBar = () => {
    return(
        <nav>
            <AppBar position="static"
                    style={{
                        backgroundColor: colors.rgba.base(.7), // "rgba(xxx, yyy, zzz, alpha)"
                        boxShadow: "none",
                        backdropFilter: "blur(4px)"
                    }}
            >
                <Toolbar style={{display: "flex", flexDirection: "row",justifyContent: "space-between"}}>
                    <Icon>
                        <img src={icon} alt="Icon" style={{ height:'100%' }} />
                    </Icon>
                    <IconButton edge='start' color="inherit" aria-label="menu">Menu</IconButton>
                    <Button style={{
                        backgroundColor: colors.hex.gray // #1a2b3c appelé
                    }}>
                        Login
                    </Button>
                </Toolbar>
            </AppBar>
        </nav>
    )
}

export default navBar;

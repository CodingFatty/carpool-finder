import React, { useContext } from 'react';
import { AuthContext } from "./context";
import Login from './Login';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Modal from '@material-ui/core/Modal';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
}));

export default function MenuBar() {
    const classes = useStyles();
    const authContext = useContext(AuthContext);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const logoutHandler = () => {
        authContext.logout();
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Carpool Finder
                </Typography>
                    {!authContext.isLogged && (<Button color="inherit" onClick={handleOpen}>Login</Button>)}
                    {authContext.isLogged && (<Button color="inherit" onClick={logoutHandler}>Logout</Button>)}
                    <Modal
                        className={classes.modal}
                        open={open}
                        onClose={handleClose}
                    >
                        <Login closedModal={handleClose}/>
                    </Modal>
                    {/* <Button color="inherit">Sign up</Button> */}
                </Toolbar>
            </AppBar>
        </div>
    );
}
import React, { useContext } from 'react';
import { AuthContext } from "./context";
import { makeStyles } from '@material-ui/core/styles';
import FacebookLogin from 'react-facebook-login';

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        height: 400,
        backgroundColor: theme.palette.background.paper,
        // border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));


export default function Login() {
    const classes = useStyles();
    const authContext = useContext(AuthContext);

    let token = ""
    let id = ""
    const responseFacebook = (response) => {
        console.log(response);
        token = response.accessToken
        id = response.id

        //  custom token from django
        // const loginResponse = {
        //     token
        // };
        authContext.login(token)
        // result();
    }

    const result = () => {
        fetch(`https://graph.facebook.com/${id}/groups?access_token=${token}`)
            .then(res => res.json())
            .then(data => console.log(data))
    }
    // const loginHandler = () => {

    // }

    const logoutHandler = () => {
        authContext.logout();
    }

    return (
        <div className={classes.paper}>
            <div>Please use the following method to login</div>
            <FacebookLogin
                appId="3480726652047192"
                fields="name,email,picture"
                scope="groups_access_member_info"
                // onClick={componentClicked}
                callback={responseFacebook}
                icon="fa-facebook" />
        </div>
    )
};
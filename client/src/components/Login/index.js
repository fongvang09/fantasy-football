import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return(
        <button className ="my-2 loginBtn btn btn-secondary btn-sm" onClick={()=> loginWithRedirect()}>
            Log In
        </button>
    )
};

export default LoginButton;
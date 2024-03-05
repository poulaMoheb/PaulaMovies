import React, { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate, } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import jwt_Decode from 'jwt-decode';
// import * as apis from '../apis';

function NavBar() {
    let navigate = useNavigate()
    const [SearchInput, setSearchInput] = useState("")
    const [urlLocation, setUrlLoaction] = useState("")

    const viewSearch = () => {
        navigate({
            pathname: `/searchMov/${SearchInput}`
        })
    }

    // function handleCallbackResponse(response) {
    //     console.log("this is a token" + response.credential)
    //     var userObject = jwtDecode(response.credential)
    // }
    // useEffect(() => {
    //     /*global google */
    //     google.account.id.initialize({
    //         client_id: "467601357531-7s1mrl773f4f72asooo2gk53aal93kvs.apps.googleusercontent.com",
    //         callback: handleCallbackResponse
    //     });
    //     google.account.id.renderButton(
    //         document.getElementById("SignInGoogle"),
    //         { theme: "outline", size: "large" }
    //     );
    // }, [])
    useEffect(() => {
        setUrlLoaction(window.location.toString())
    }, [urlLocation])



    return (
        <nav id="navbar-example2" className="navbar navbar-black bg-black px-3">
            <div className="container h-100">
                <div className="d-flex">
                    <h2 className='poula ms-2 mt-2'>Poula</h2>
                    <h1 className='movies'>Movies</h1>
                </div>
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <NavLink className={`nav-link `} style={isActive => ({ color: isActive ? "red" : "" })} to="/">Top Rated</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" style={isActive => ({ color: isActive ? "red" : "" })} to="/">Popular</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" style={isActive => ({ color: isActive ? "red" : "" })} to="/ContactUs">Contact us</NavLink>
                    </li>
                    {/* <li className="nav-link">
                        <GoogleOAuthProvider clientId="467601357531-7s1mrl773f4f72asooo2gk53aal93kvs.apps.googleusercontent.com">
                            <GoogleLogin
                                onSuccess={credentialResponse => {
                                    const details = jwt_Decode();
                                    console.log(credentialResponse);
                                }}
                                onError={() => {
                                    console.log('Login Failed');
                                }}
                            />
                        </GoogleOAuthProvider>
                    </li> */}
                </ul>
                <form className="d-flex flex-row">
                    <input className="form-control me-2" value={SearchInput} onChange={(e) => setSearchInput(e.target.value)} type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" onClick={viewSearch} type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}

export default NavBar
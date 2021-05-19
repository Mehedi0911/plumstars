import React, { useContext, useState } from 'react';
import { Card, Container, Form } from 'react-bootstrap';
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './fire';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../../App';



if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}


const Login = () => {
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        password: '',
        email: '',
        error: '',
        success: false
    })
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);


    const handleBlur = (e) => {

        let isFormValid = true;
        if (e.target.name === 'email') {
            isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
        }

        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFormValid = isPasswordValid && passwordHasNumber;
        }
        if (e.target.name === 'cPassword') {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFormValid = isPasswordValid && passwordHasNumber;
        }
        if (isFormValid) {

            console.log('form is valid');
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
            console.log(newUserInfo);



        }
    }
    const handleSubmit = (e) => {
        if (newUser && user.password !== user.cPassword) {
            alert('Password mismatched')
        }
        if (newUser && user.email && user.password === user.cPassword) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    // Signed in 
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    setLoggedInUser(res.user);
                    updateUserName(user.name);
                    history.replace(from);


                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                    console.log(newUserInfo);

                });
        }

        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    console.log(res);
                    setUser(newUserInfo);
                    setLoggedInUser(res.user);
                    history.replace(from);
                    console.log('signup user info', res.user);

                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                    console.log(newUserInfo);


                });
        }

        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((res) => {
                const { displayName, email, photoURL } = res.user;
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL,
                    success: true
                }
                setUser(res.user);
                setLoggedInUser(res.user);
                history.replace(from);
                console.log(res.user);

                // ...
            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });
    }

    const updateUserName = name => {
        const user = firebase.auth().currentUser;

        user.updateProfile({
            displayName: name,
            // photoURL: "https://example.com/jane-q-user/profile.jpg"
        }).then(function () {
            console.log('updated successfully');
        }).catch(function (error) {
            console.log(error);
        });
    }




    return (
        <section style={{height:'100vh'}} className='container d-flex align-items-center'>

            <div className="form-holder bg-dark p-5 shadow">
                <div>
                    <h5 className="text-white"><span className="brand-text">plumbStars</span> login</h5>
                    <hr />
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="input-container text-center">
                        {
                            newUser && <input onBlur={handleBlur} type="text" name="name" id="" placeholder="Your Name" required />
                        }
                        <br />
                        <input onBlur={handleBlur} type="email" name="email" id="" placeholder="Your Email" required /> <br />
                        <input onBlur={handleBlur} type="password" name="password" id="" placeholder="Your Password" required /> <br />
                        {
                            newUser && <input onBlur={handleBlur} type="password" name="cPassword" id="" placeholder="Confirm Password" required />
                        }
                        <br />
                        <input className="create-account-btn" type="submit" value={newUser ? "Sign Up" : "Log In"} />
                    </div>
                    <p style={{ color: 'red' }}>{user.error}</p>
                    {
                        user.success && <p style={{ color: 'Green' }}>User {newUser ? "Created" : "Logged In"} Successfully</p>
                    }
                </form>
                <div className="oldUser-heading">
                    <h5>{newUser ? "Already Have an Account?" : "New Here?"}</h5>
                    <h6 onClick={() => setNewUser(!newUser)}>{newUser ? "SignIn" : "SignUp"}</h6>
                </div>

                <div className="provider-btn">
                    <button onClick={handleGoogleSignIn}>Sign In With Google</button>
                </div>
            </div>
        </section>

    );
};

export default Login;

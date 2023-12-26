"use client"
import { useState, useEffect } from "react"
import LoginLink from "./LoginLink"
import ProfileLinks from "./ProfileLinks"

export interface Iauth {
    isLogin: boolean,
    token: string
  }

const Profile = () => {
    
    const [auth, SetAuth] = useState<Iauth>({isLogin: true, token: ''});

    useEffect(() => {
        let auth : Iauth = {
            isLogin: true,
            token: ''
        }

        localStorage.setItem('auth', JSON.stringify(auth))
    })

    useEffect(() => {
        let localStorage_auth
        localStorage_auth = localStorage.getItem("auth");
        localStorage_auth = JSON.parse(localStorage_auth);

        if (!localStorage_auth || !localStorage_auth.isLogin) {
            localStorage.removeItem("auth");
        }
        else {
            SetAuth(localStorage_auth)
        }
    }, [])



    return (
        auth.isLogin ? (
            <ProfileLinks logout={SetAuth}/>
        )
        :
        (
            <LoginLink />
        )
    )
}

export default Profile
"use client";
import { logout } from "../actions";

export default function Contact(){
    return(
        <div>
            <h1>Contact Page</h1>
            <h1>Hello, user! this is Contact page</h1>
            <button onClick={logout}>Delete Cookies</button>
        </div>
    )
}
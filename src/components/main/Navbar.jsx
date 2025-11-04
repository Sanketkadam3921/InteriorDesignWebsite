
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="flex justify-between p-4 bg-gray-100">
            <h1 className="font-bold text-xl">Interior Studio</h1>
            <div className="space-x-4">
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/services">Services</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/aboutus">About</Link>
            </div>
        </nav>
    );
}

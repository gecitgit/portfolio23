import React from "react";

export default function DemoDetails({ user, pass }) {
    if (!user || !pass) return null;

    return (
        <div className="demo-details-div">
            <strong>Demo Account available:</strong><br/>
            <strong>Username: </strong>{user}<br/>
            <strong>Password: </strong>{pass}
        </div>
    )
}
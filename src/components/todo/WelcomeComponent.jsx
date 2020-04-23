import React from 'react';
import { useParams, Link } from 'react-router-dom';

export default function WelcomeComponent() {
    let {name} = useParams();
    return(
        <div>Welcome {name}. You can manage your todos <Link to="/list">here</Link>.</div>
    )

}
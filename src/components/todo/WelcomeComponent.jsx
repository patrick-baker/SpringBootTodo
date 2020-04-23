import React from 'react';
import { useParams } from 'react-router-dom';

export default function WelcomeComponent() {
    let {name} = useParams();
    return(
        <div>Welcome {name}</div>
    )

}
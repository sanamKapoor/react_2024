import React from 'react';

const One = () => {

    const arr = [
        'a', 'b', 'c', 'd', 'e'
    ]

    return <div>{
        arr.map(i => <p>{ i }</p>)
    }</div>;
};

export default One;

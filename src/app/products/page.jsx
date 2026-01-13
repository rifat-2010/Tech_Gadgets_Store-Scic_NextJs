import Link from 'next/link';
import React from 'react';

const page = async() => {
    //next js e fetch korar niyom (ekane akta fake data diye fetch kore dekano hoyese ei page e ) : 
    const data = await fetch("https://jsonplaceholder.typicode.com/users");

    const users = await data.json();
    console.log(users);

    return (
        <div>
            this is producs page.<br />

            <Link href="/products/1">Product 01</Link><br />
            <Link href="/products/2">Product 02</Link><br />
            <Link href="/products/3">Product 03</Link>
        </div>
    );
};

export default page;
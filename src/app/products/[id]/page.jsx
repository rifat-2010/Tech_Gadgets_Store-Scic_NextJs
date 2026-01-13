import Link from 'next/link';
import React from 'react';

const page = async ({params}) => {
    const { id } = await params;
    return (
        <div>
            this is product details page. {id} 
        </div>
    );
};

export default page;
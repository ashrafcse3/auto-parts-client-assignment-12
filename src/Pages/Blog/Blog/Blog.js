import React from 'react';
import AddAPost from '../AddAPost/AddAPost';
import EachPost from '../EachPost/EachPost';

const Blog = () => {
    return (
        <div className='mx-auto max-w-[1200px] p-4'>
            <h1 className='text-4xl font-bold mb-3 text-blue-900'>Blog</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                <div className='grid grid-cols-1 gap-5'>
                    <EachPost></EachPost>
                    <EachPost></EachPost>
                    <EachPost></EachPost>
                    <EachPost></EachPost>
                </div>
                <AddAPost></AddAPost>
            </div>
        </div>
    );
};

export default Blog;
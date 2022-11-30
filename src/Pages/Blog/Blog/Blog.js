import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import AddAPost from '../AddAPost/AddAPost';
import EachPost from '../EachPost/EachPost';

const Blog = () => {
    const [blogs, setBlogs] = useState();

    useEffect(() => {
        fetch('http://localhost:4000/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);
    // const { data: blogs, isLoading, refetch } = useQuery({
    //     queryKey: ['blogs'],
    //     queryFn: () => fetch('http://localhost:4000/blogs')
    //         .then(res => res.json())
    // });

    if (!blogs) {
        return <Loading></Loading>;
    }
    return (
        <div className='mx-auto max-w-[1200px] p-4'>
            <h1 className='text-4xl font-bold mb-3 text-blue-900'>Blog</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                <div className='grid grid-cols-1 gap-5'>
                    {
                        blogs && blogs.map(blog => <EachPost
                            key={blog._id}
                            blog={blog}
                        ></EachPost>)
                    }
                </div>
                <AddAPost></AddAPost>
            </div>
        </div>
    );
};

export default Blog;
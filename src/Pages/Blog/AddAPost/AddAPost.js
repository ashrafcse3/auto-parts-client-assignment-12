import React from 'react';
import { useForm } from 'react-hook-form';

const AddAPost = ({ refetch }) => {
    const { register, handleSubmit, formState: { errors }, } = useForm();

    const onSubmit = data => {
        //  make the user variable dynamic
        const postDetails = {
            user: 'admin',
            question: data.question,
            answer: data.answer,
        };
        fetch('http://localhost:4000/blogs', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(postDetails)
        })
            .then(res => res.json())
            .then(data => {
                refetch();
                console.log(data)
            });
    }

    return (
        <div>
            <h1 className='text-3xl font-bold text-blue-900'>Add a post</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Question</span>
                    </label>
                    <input {...register('question', { required: 'provide your question' })} name="question" type="text" placeholder="question" className="input input-bordered" />
                    {errors.question && <p className='text-red-600'>{errors.question?.message}</p>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Answer</span>
                    </label>
                    <input {...register('answer', { required: 'provide your answer' })} name="answer" type="text" placeholder="answer" className="input input-bordered" />
                    {errors.answer && <p className='text-red-600'>{errors.answer?.message}</p>}
                </div>
                <div className="form-control mt-6">
                    <button type='submit' className="btn bg-blue-800 text-white hover:bg-blue-900">Add this post</button>
                </div>
            </form>
        </div>
    );
};

export default AddAPost;
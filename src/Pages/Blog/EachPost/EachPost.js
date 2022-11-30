import React from 'react';

const EachPost = ({ blog: { question, answer } }) => {
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{question}</h2>
                <p>{answer}</p>
            </div>
        </div>
    );
};

export default EachPost;
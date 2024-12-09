import React, { useState } from 'react';

const LikeDislike = () => {
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);

    return (
        <div>
            <button onClick={() => setLikes(likes + 1)}>Like ({likes})</button>
            <button onClick={() => setDislikes(dislikes + 1)}>Dislike ({dislikes})</button>
        </div>
    );
};

export default LikeDislike;

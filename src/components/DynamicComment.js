import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const DynamicComment = ({ comment, replayA }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [content, setContent] = useState(comment.user.content);
    const [score, setScore] = useState(0);
    const [replay, setReply] = useState(false);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        setIsEditing(false);
        // You can add any logic here to save the updated comment to the backend
    };

    const handleDelete = () => {
        // Logic to delete the comment
        const commentElement = document.getElementById(`comment-container-${comment.id}`);
        if (commentElement) {
            commentElement.remove();
        }
    };

    const incrementScore = () => {
        setScore(score + 1);
    };

    const decrementScore = () => {
        setScore(score - 1);
    };

    useEffect(() => {
        if (replayA === true) {
            setReply(true);
        }
    }, [replayA]);

    return (
        <React.Fragment>
            <div id={`comment-container-${comment.id}`} className="flex flex-row">
                {replay && (
                    <div style={{ width: '20px' }}>
                        <hr className="h-full ml-5 mt-3 p-[2px] bg-lightGrayBlue " />
                    </div>
                )}
                
                <div className={`toDelete flex flex-col bg-white rounded-md p-4 mx-4 mt-4 ssm:max-w-xl w-[342px] ${replay ? 'mmin:w-[682px]' : 'mmin:w-[702px]'}`}>
                    <div className="flex flex-row items-center space-x-3 pb-3">
                        <Image src={comment.user.image} alt="avatar" width="30" height="30" />
                        <div className="font-bold text-darkBlue">{comment.user.username}</div>
                        <span className="p-1 bg-moderateBlue rounded-lg text-sm font-semibold text-white">YOU</span>
                        <div className="text-grayBlue text-sm">{comment.user.createdAt}</div>
                    </div>
                    <div className="text-grayBlue break-words overflow-hidden">
                        {isEditing ? (
                            <textarea 
                                value={content} 
                                onChange={(e) => setContent(e.target.value)} 
                                className="w-full h-20 p-2 text-grayBlue text-sm bg-verylightGray rounded-md"
                                placeholder="Write a comment..."
                            />
                        ) : (
                            content
                        )}
                    </div>
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-row items-center p-2 mt-3 bg-verylightGray rounded-md space-x-2">
                            <div className="cursor-pointer" onClick={incrementScore}>
                                <Image src="/images/icon-plus.svg" alt="plus-icon" width="20" height="20" />
                            </div>
                            <div className="text-moderateBlue">{score}</div>
                            <div className="cursor-pointer" onClick={decrementScore}>
                                <Image src="/images/icon-minus.svg" alt="minus-icon" width="20" height="20" />
                            </div>
                        </div>
                        <div className="flex flex-row mt-4 items-center space-x-2 delete-button cursor-pointer" onClick={handleDelete}>
                            <Image src="/images/icon-delete.svg" alt="delete-icon" width="20" height="20" />
                            <div className="text-softRed font-semibold ">Delete</div>
                        </div>
                        {isEditing ? (
                            <div className="flex flex-row mt-4 items-center space-x-2 cursor-pointer" onClick={handleSave}>
                                <Image src="/images/icon-update.svg" alt="update-icon" width="20" height="20" />
                                <div className="text-moderateBlue font-semibold">Update</div>
                            </div>
                        ) : (
                            <div className="flex flex-row mt-4 items-center space-x-2 cursor-pointer" onClick={handleEdit}>
                                <Image src="/images/icon-edit.svg" alt="edit-icon" width="20" height="20" />
                                <div className="text-moderateBlue font-semibold">Edit</div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default DynamicComment;

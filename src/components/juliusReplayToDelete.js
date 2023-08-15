import React, { useState } from "react";
import Image from "next/image";

const JuliusReplayToDeleteCard = ({ juliuSomoData }) => {
    const [juliuSomoScore, setJuliuSomoScore] = useState(juliuSomoData.score);

    // State for editing functionality
    const [isEditing, setIsEditing] = useState(false);
    const [editedContent, setEditedContent] = useState(juliuSomoData.content);

    const handleEdit = () => setIsEditing(true);

    const handleUpdate = () => {
        juliuSomoData.content = editedContent;
        setIsEditing(false);
    };

    const handleTextareaChange = (e) => setEditedContent(e.target.value);

    const handleAddScore = (user) => {
        if (user === "juliuSomo") setJuliuSomoScore(juliuSomoScore + 1);
    };

    const handleSubtractScore = (user) => {
        if (user === "juliuSomo") setJuliuSomoScore(juliuSomoScore - 1);
    };

    return (
        <React.Fragment>
            <div id="juliusReplay" className="toDelete overflow-hidden">
                <div className="flex flex-row">
                    <div className="flex-grow">
                        <hr className="h-full ml-5 mt-3  p-[2px] bg-lightGrayBlue" />
                    </div>
                    <div id="staticReplyCardJulius" className="flex flex-col bg-whitee rounded-md p-4 mx-4 mt-4 mmin:w-[680px]">
                        <div id="seg1" className="flex flex-row  items-center space-x-3 ssm:pb-3">
                            <Image src="/images/avatars/image-juliusomo.png" alt="image" width="30" height="30" />
                            <div id="title" className="font-bold text-darkBluee">{juliuSomoData.user.username}</div>
                            <span className="p-1 bg-moderateBlue rounded-lg text-sm font-semibold text-whitee">YOU</span>
                            <div id="createdAt" className="font-grayBluee text-sm font-grayBluee">1 month ago</div>
                        </div>
                        <div id="seg2">
                            {isEditing ? (
                                <textarea 
                                    value={editedContent}
                                    onChange={handleTextareaChange}
                                    className="w-full h-20 p-2 text-grayBluee text-sm bg-verylightGray rounded-md"
                                    placeholder="Edit your comment..."
                                />
                            ) : (
                                <div id="userComment" className="text-grayBluee">
                                    <span className="text-moderateBlue font-semibold">@ramsesmiron</span>
                                    {juliuSomoData.content}
                                </div>
                            )}
                        </div>
                        <div id="seg3" className="flex flex-row justify-between  ">
                            <div id="LikesSection" className="flex flex-row items-center p-2 mt-3 bg-verylightGray rounded-md space-x-2 ">
                                <Image className="cursor-pointer" src="/images/icon-plus.svg" alt="image" width="20" height="20" onClick={() => handleAddScore("juliuSomo")} />
                                <div className="text-moderateBlue">{juliuSomoScore ? juliuSomoScore : juliuSomoData.score}</div>
                                <Image className="cursor-pointer" src="/images/icon-minus.svg" alt="image" width="20" height="20" onClick={() => handleSubtractScore("juliuSomo")} />
                            </div>
                            <div className="flex mmin:ml-[430px] mmin:space-x-4 space-x-4">

                            
                            <div id="deleteStaticComment" className="flex flex-row mt-4 items-center space-x-2 delete-button cursor-pointer">
                                <Image  src="/images/icon-delete.svg" alt="image" width="20" height="20" className="delete-button cursor-pointer" />
                                <div className="text-softRed font-semibold delete-button">Delete</div>
                            </div>
                            {isEditing ? (
                                <div className="flex flex-row mt-4 items-center space-x-1 cursor-pointer">
                                    <Image  src="/images/icon-update.svg" alt="image" width="20" height="20" onClick={handleUpdate} />
                                    <div className="text-moderateBlue font-semibold" onClick={handleUpdate}>Update</div>
                                </div>
                            ) : (
                                <div className="flex flex-row mt-4 items-center space-x-2 edit-button cursor-pointer">
                                    <Image  src="/images/icon-edit.svg" alt="image" width="20" height="20" onClick={handleEdit} />
                                    <div className="text-moderateBlue font-semibold" onClick={handleEdit}>Edit</div>
                                </div>
                            )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default JuliusReplayToDeleteCard;

import React, { useState } from "react";
import Image from "next/image";
import AddCommentSection from "./addCommentSection";
import DynamicComment from "./DynamicComment";

const RamsesCard = ({ ramsesMironData }) => {
    const [ramsesMironScore, setRamsesMironScore] = useState(ramsesMironData.score);
    const [replyForRamses, setReplyForRamses] = useState(false);
    const [repliesForRamses, setRepliesForRamses] = useState([]);

    const handleAddScore = (user) => {
        if (user === "ramsesMiron") {
            setRamsesMironScore(ramsesMironScore + 1);
        }
    };

    const handleSubtractScore = (user) => {
        if (user === "ramsesMiron") {
            setRamsesMironScore(ramsesMironScore - 1);
        }
    };

    const handleReplyClick = () => {
        setReplyForRamses(true);
    };

    const handleAddReply = () => {
        let content = document.getElementById("JuliusMessage").value;
        document.getElementById("JuliusMessage").value = "";

        let currentDay = new Date().toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
        });

        let newComment = {
            id: Date.now(),
            user: {
                username: "juliusomo",
                image: "/images/avatars/image-juliusomo.png",
                content: content,
                score: 0,
                replies: [],
                createdAt: currentDay,
            },
        };

        setRepliesForRamses([...repliesForRamses, newComment]);
        setReplyForRamses(false);
    };

    return (
        <React.Fragment>
            <div className="flex flex-row">
                <div className="flex-grow">
                    <hr className="h-full ml-5 mt-3  p-[2px] bg-lightGrayBlue" />
                </div>
                <div id="staticReplyCardRamses" className="flex flex-col bg-whitee rounded-md p-4 mx-4 mt-4 mmin:w-[680px]">
                    <div id="seg1" className="flex flex-row  items-center space-x-3 ssm:pb-3">
                        <Image src="/images/avatars/image-ramsesmiron.png" alt="image" width="30" height="30" />
                        <div id="title" className="font-bold text-darkBluee">
                            {ramsesMironData.user.username}
                        </div>
                        <div id="createdAt" className="font-grayBluee text-sm font-grayBluee">
                            2 days ago
                        </div>
                    </div>
                    <div id="seg2" className="text-grayBluee">
                        <div id="userComment" className="text-grayBluee">
                            <span className="text-moderateBlue font-semibold">
                                @maxblagun 
                            </span>
                            {ramsesMironData.content}
                        </div>
                    </div>
                    <div id="seg3" className="flex flex-row justify-between ">
                        <div id="LikesSecttion" className="flex flex-row items-center p-2 mt-3 bg-verylightGray rounded-md space-x-2">
                            <Image src="/images/icon-plus.svg" alt="image" width="20" height="20" onClick={() => handleAddScore("ramsesMiron")} />
                            <div className="text-moderateBlue">
                                {ramsesMironScore ? ramsesMironScore : ramsesMironData.score}
                            </div>
                            <Image src="/images/icon-minus.svg" alt="image" width="20" height="20" onClick={() => handleSubtractScore("ramsesMiron")} />
                        </div>
                        <div className="flex flex-row mt-4 items-center space-x-2">
                            <Image src="/images/icon-reply.svg" alt="image" width="20" height="20" />
                            <div onClick={handleReplyClick} className="text-moderateBlue font-semibold">Replay</div>
                        </div>
                    </div>
                </div>
            </div>

            {replyForRamses && <AddCommentSection onAdd={handleAddReply} />}
            {repliesForRamses.map((comment) => (
                <DynamicComment key={comment.id} comment={comment} replayA={true}/>
            ))}
        </React.Fragment>
    );
};

export default RamsesCard;

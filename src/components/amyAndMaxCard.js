import React, { useState } from "react";
import Image from "next/image";
import AddCommentSection from "./addCommentSection";
import DynamicComment from "./DynamicComment";

const AmyAndMaxComponent = ({ amyRobsonData, maxBlagunData }) => {
    const [amyRobsonScore, setAmyRobsonScore] = useState(amyRobsonData.score);
    const [maxBlagunScore, setMaxBlagunScore] = useState(maxBlagunData.score);
    const [replyFor, setReplyFor] = useState(null);
    const [repliedComments, setRepliedComments] = useState([]);

    const [amyReplies, setAmyReplies] = useState([]);
    const [maxReplies, setMaxReplies] = useState([]);

    const handleAddScore = (user) => {
        switch (user) {
            case "amyRobson":
                setAmyRobsonScore(amyRobsonScore + 1);
                break;
            case "maxBlagun":
                setMaxBlagunScore(maxBlagunScore + 1);
                break;
            default:
                break;
        }
    };

    const handleSubtractScore = (user) => {
        switch (user) {
            case "amyRobson":
                setAmyRobsonScore(amyRobsonScore - 1);
                break;
            case "maxBlagun":
                setMaxBlagunScore(maxBlagunScore - 1);
                break;
            default:
                break;
        }
    };

    const handleReplyClick = (username) => {
        setReplyFor(username);
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

        if (replyFor === "amyrobsonreplay") {
            setAmyReplies([...amyReplies, newComment]);
        } else if (replyFor === "maxblagunreplay") {
            setMaxReplies([...maxReplies, newComment]);
        }
        
        setReplyFor(null);
    };

    return (
        <React.Fragment>
            <div id="staticCommentsCard" className="flex flex-col bg-whitee rounded-md ssm:p-4 ssm:mx-4 ssm:mt-4">
                <div id="seg1" className="flex flex-row  items-center space-x-3 ssm:pb-3">
                    <Image src="/images/avatars/image-amyrobson.png" alt="image" width="30" height="30" />
                    <div id="title" className="font-bold text-darkBluee">
                        {amyRobsonData.user.username}
                    </div>
                    <div id="createdAt" className="font-grayBluee text-sm font-grayBluee">2 weeks ago</div>
                </div>
                <div id="seg2" className="">
                    <div id="userComment" className="text-grayBluee">
                        {amyRobsonData.content}
                    </div>
                </div>
                <div id="seg3" className="flex flex-row justify-between ">
                    <div id="LikesSecttion" className="flex flex-row items-center p-2 mt-3 bg-verylightGray rounded-md space-x-2">
                        <Image src="/images/icon-plus.svg" alt="image" width="20" height="20" onClick={() => handleAddScore("amyRobson")} />
                        <div className="text-moderateBlue">{amyRobsonScore ? amyRobsonScore : amyRobsonData.score}</div>
                        <Image src="/images/icon-minus.svg" alt="image" width="20" height="20" onClick={() => handleSubtractScore("amyRobson")} />
                    </div>
                    <div className="flex flex-row mt-4 items-center space-x-2">
                        <Image src="/images/icon-reply.svg" alt="image" width="20" height="20" />
                        <div id="replay" onClick={() => handleReplyClick("amyrobsonreplay")} className="text-moderateBlue font-semibold">Replay</div>
                    </div>
                </div>
            </div>
            {replyFor === "amyrobsonreplay" && <AddCommentSection onAdd={handleAddReply} />}
            {amyReplies.map((comment) => (
                <DynamicComment key={comment.id} comment={comment} />
            ))}
            <div id="staticCommentsCard" className="flex flex-col bg-whitee rounded-md ssm:p-4 ssm:mx-4 ssm:mt-4">
                <div id="seg1" className="flex flex-row  items-center space-x-3 ssm:pb-3">
                    <Image src="/images/avatars/image-maxblagun.png" alt="image" width="30" height="30" />
                    <div id="title" className="font-bold text-darkBluee">{maxBlagunData.user.username}</div>
                    <div id="createdAt" className="font-grayBluee text-sm font-grayBluee">1 week ago</div>
                </div>
                <div id="seg2" className="text-grayBluee">
                    <div id="userComment">{maxBlagunData.content}</div>
                </div>
                <div id="seg3" className="flex flex-row justify-between ">
                    <div id="LikesSecttion" className="flex flex-row items-center p-2 mt-3 bg-verylightGray rounded-md space-x-2">
                        <Image src="/images/icon-plus.svg" alt="image" width="20" height="20" onClick={() => handleAddScore("maxBlagun")} />
                        <div className="text-moderateBlue">{maxBlagunScore ? maxBlagunScore : maxBlagunData.score}</div>
                        <Image src="/images/icon-minus.svg" alt="image" width="20" height="20" onClick={() => handleSubtractScore("maxBlagun")} />
                    </div>
                    <div className="flex flex-row mt-4 items-center space-x-2">
                        <Image src="/images/icon-reply.svg" alt="image" width="20" height="20" />
                        <div onClick={() => handleReplyClick("maxblagunreplay")} className="text-moderateBlue font-semibold">Replay</div>
                    </div>
                </div>
            </div>
            {replyFor === "maxblagunreplay" && <AddCommentSection onAdd={handleAddReply} />}
            {maxReplies.map((comment) => (
                <DynamicComment key={comment.id} comment={comment} />
            ))}
        </React.Fragment>
    );
};

export default AmyAndMaxComponent;

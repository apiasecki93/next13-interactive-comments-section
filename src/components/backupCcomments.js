"use client";
import React, { useState, useEffect } from "react";
import UserCard from "./UserCard";

import Image from "next/image";
// import data from "../../public/data.json";

export default function CommentSection() {
  const [data, setData] = useState(null);
  const [amyRobsonScore, setAmyRobsonScore] = useState(null);
  const [maxBlagunScore, setMaxBlagunScore] = useState(null);
  const [ramsesMironScore, setRamsesMironScore] = useState(null);
  const [juliuSomoScore, setJuliuSomoScore] = useState(null);

  const handleAddScore = (user) => {
    switch (user) {
      case "amyRobson":
        setAmyRobsonScore(amyRobsonScore + 1);
        break;
      case "maxBlagun":
        setMaxBlagunScore(maxBlagunScore + 1);
        break;
      case "ramsesMiron":
        setRamsesMironScore(ramsesMironScore + 1);
        break;
      case "juliuSomo":
        setJuliuSomoScore(juliuSomoScore + 1);
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
      case "ramsesMiron":
        setRamsesMironScore(ramsesMironScore - 1);
        break;
      case "juliuSomo":
        setJuliuSomoScore(juliuSomoScore - 1);
        break;
      default:
        break;
    }
  };

  // const handleAddComment = () => {
  //   // add comment under the latest comment
  //   let content = document.getElementById("JuliusMessage").value;

  //   let currentDay = new Date().toLocaleString("en-US", {
  //     hour: "numeric",
  //     minute: "numeric",
  //     hour12: true,
  //   });

  //   console.log(currentDay);

  //   let newComment = {
  //     id: 5,
  //     user: {
  //       username: "juliusomo",
  //       image: "/images/avatars/image-juliusomo.png",
  //       content: content,
  //       score: 0,
  //       replies: [],
  //       createdAt: currentDay,
  //     },
  //   };

  //   console.log(newComment);
  //   // check if DOM element with id staticReplyCardJulius exists if not then assign variable to staticReplyCardRamses
  //   let staticReplyCardJulius = document.getElementById(
  //     "staticReplyCardJulius"
  //   );
  //   let staticReplyCardRamses = document.getElementById(
  //     "staticReplyCardRamses"
  //   );

  //   let messageDiv = `<div
  //   id="staticReplyCardJulius"
  //   className="flex flex-col bg-whitee rounded-md ssm:p-4 ssm:mx-4 ssm:mt-4 "
  // >
  //   <div
  //     id="seg1"
  //     className="flex flex-row  items-center space-x-3 ssm:pb-3"
  //   >
  //     <Image
  //       src="/images/avatars/image-juliusomo.png"
  //       alt="image"
  //       width="30"
  //       height="30"
  //     />
  //     <div id="title" className="font-bold text-darkBluee">
  //       {juliuSomoData.user.username}
  //     </div>
  //     <span className="p-1 bg-moderateBlue rounded-lg text-sm font-semibold text-whitee">
  //       YOU
  //     </span>
  //     <div
  //       id="createdAt"
  //       className="font-grayBluee text-sm font-grayBluee"
  //     >
  //       1 month ago
  //     </div>
  //   </div>
  //   <div id="seg2" className="">
  //     <div id="userComment" className="text-grayBluee">
  //       <span className="text-moderateBlue font-semibold">
  //         @ramsesmiron{" "}
  //       </span>
  //       {juliuSomoData.content}
  //     </div>
  //   </div>
  //   <div id="seg3" className="flex flex-row justify-between ">
  //     <div
  //       id="LikesSecttion"
  //       className="flex flex-row items-center p-2 mt-3 bg-verylightGray rounded-md space-x-2"
  //     >
  //       <Image
  //         src="/images/icon-plus.svg"
  //         alt="image"
  //         width="20"
  //         height="20"
  //         onClick={() => handleAddScore("juliuSomo")}
  //       />
  //       <div className="text-moderateBlue">
  //         {newComment.user.score}
  //       </div>
  //       <Image
  //         src="/images/icon-minus.svg"
  //         alt="image"
  //         width="20"
  //         height="20"
  //         onClick={() => handleAddScore("juliuSomo")}
  //       />
  //     </div>
  //     <div className="flex flex-row mt-4 items-center space-x-2">
  //       <Image
  //         src="/images/icon-delete.svg"
  //         alt="image"
  //         width="20"
  //         height="20"
  //       />
  //       <div className="text-softRed font-semibold">Delete</div>
  //     </div>
  //     <div className="flex flex-row mt-4 items-center space-x-2">
  //       <Image
  //         src="/images/icon-edit.svg"
  //         alt="image"
  //         width="20"
  //         height="20"
  //       />
  //       <div className="text-moderateBlue font-semibold">Edit</div>
  //     </div>
  //   </div>
  // </div>
  // `;

  //   if (staticReplyCardJulius) {
  //     staticReplyCardJulius.insertAdjacentHTML("afterend", messageDiv);
  //   } else {
  //     staticReplyCardRamses.insertAdjacentHTML("afterend", messageDiv);
  //   }

  // };

  useEffect(() => {
    import("../../public/data.json")
      .then((res) => res.default)
      .then((jsonData) => {
        setData(jsonData);
        setAmyRobsonScore(jsonData.comments[0].score);
        setMaxBlagunScore(jsonData.comments[1].score);
        setRamsesMironScore(jsonData.comments[1].replies[0].score);
        setJuliuSomoScore(jsonData.comments[1].replies[1].score);
      })
      .catch((error) => console.log(error));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  let amyRobsonData = data.comments[0];
  let maxBlagunData = data.comments[1];
  let ramsesMironData = data.comments[1].replies[0];
  let juliuSomoData = data.comments[1].replies[1];
  let currentUser = data.currentUser;

  return (
    <div id="mainContainer" className="flex ">
      <div id="threeSections" className="flex flex-col pb-10">
        <div id="theirStaticComments" className="flex flex-col">
          {/* AMY ROBSON */}
          <div
            id="staticCommentsCard"
            className="flex flex-col bg-whitee rounded-md ssm:p-4 ssm:mx-4 ssm:mt-4 "
          >
            <div
              id="seg1"
              className="flex flex-row  items-center space-x-3 ssm:pb-3"
            >
              <Image
                src="/images/avatars/image-amyrobson.png"
                alt="image"
                width="30"
                height="30"
              />
              <div id="title" className="font-bold text-darkBluee">
                {amyRobsonData.user.username}
              </div>
              <div
                id="createdAt"
                className="font-grayBluee text-sm font-grayBluee"
              >
                {" "}
                2 weeks ago
              </div>
            </div>
            <div id="seg2" className="">
              <div id="userComment" className="text-grayBluee">
                {amyRobsonData.content}
              </div>
            </div>
            <div id="seg3" className="flex flex-row justify-between ">
              <div
                id="LikesSecttion"
                className="flex flex-row items-center p-2 mt-3 bg-verylightGray rounded-md space-x-2"
              >
                <Image
                  src="/images/icon-plus.svg"
                  alt="image"
                  width="20"
                  height="20"
                  onClick={() => handleAddScore("amyRobson")}
                />
                <div className="text-moderateBlue">
                  {amyRobsonScore ? amyRobsonScore : amyRobsonData.score}
                </div>
                <Image
                  src="/images/icon-minus.svg"
                  alt="image"
                  width="20"
                  height="20"
                  onClick={() => handleSubtractScore("amyRobson")}
                />
              </div>
              <div className="flex flex-row mt-4 items-center space-x-2">
                <Image
                  src="/images/icon-reply.svg"
                  alt="image"
                  width="20"
                  height="20"
                />
                <div className="text-moderateBlue font-semibold">Replay</div>
              </div>
            </div>
          </div>
          {/* MAX BLAGUN */}
          <div
            id="staticCommentsCard"
            className="flex flex-col bg-whitee rounded-md ssm:p-4 ssm:mx-4 ssm:mt-4 "
          >
            <div
              id="seg1"
              className="flex flex-row  items-center space-x-3 ssm:pb-3"
            >
              <Image
                src="/images/avatars/image-maxblagun.png"
                alt="image"
                width="30"
                height="30"
              />
              <div id="title" className="font-bold text-darkBluee">
                {maxBlagunData.user.username}
              </div>
              <div
                id="createdAt"
                className="font-grayBluee text-sm font-grayBluee"
              >
                {" "}
                1 week ago
              </div>
            </div>
            <div id="seg2" className="text-grayBluee">
              <div id="userComment">{maxBlagunData.content}</div>
            </div>
            <div id="seg3" className="flex flex-row justify-between ">
              <div
                id="LikesSecttion"
                className="flex flex-row items-center p-2 mt-3 bg-verylightGray rounded-md space-x-2"
              >
                <Image
                  src="/images/icon-plus.svg"
                  alt="image"
                  width="20"
                  height="20"
                  onClick={() => handleAddScore("maxBlagun")}
                />
                <div className="text-moderateBlue">
                  {maxBlagunScore ? maxBlagunScore : maxBlagunData.score}
                </div>
                <Image
                  src="/images/icon-minus.svg"
                  alt="image"
                  width="20"
                  height="20"
                  onClick={() => handleAddScore("maxBlagun")}
                />
              </div>
              <div className="flex flex-row mt-4 items-center space-x-2">
                <Image
                  src="/images/icon-reply.svg"
                  alt="image"
                  width="20"
                  height="20"
                />
                <div className="text-moderateBlue font-semibold">Replay</div>
              </div>
            </div>
          </div>
        </div>

        {/* RAMSES MIRON */}
        <div id="ramsesEeplay" className="overflow-hidden">
          <div className="flex flex-row">
            <div className="flex-grow">
              <hr className="h-full ml-5 mt-3  p-[2px] bg-lightGrayBlue" />
            </div>
            {/* ######################### */}
            <div
              id="staticReplyCardRamses"
              className="flex flex-col bg-whitee rounded-md ssm:p-4 ssm:mx-4 ssm:mt-4 "
            >
              <div
                id="seg1"
                className="flex flex-row  items-center space-x-3 ssm:pb-3"
              >
                <Image
                  src="/images/avatars/image-ramsesmiron.png"
                  alt="image"
                  width="30"
                  height="30"
                />
                <div id="title" className="font-bold text-darkBluee">
                  {ramsesMironData.user.username}
                </div>

                <div
                  id="createdAt"
                  className="font-grayBluee text-sm font-grayBluee"
                >
                  2 days ago
                </div>
              </div>
              <div id="seg2" className="">
                <div id="userComment" className="text-grayBluee">
                  <span className="text-moderateBlue font-semibold">
                    @maxblagun{" "}
                  </span>
                  {ramsesMironData.content}
                </div>
              </div>
              <div id="seg3" className="flex flex-row justify-between ">
                <div
                  id="LikesSecttion"
                  className="flex flex-row items-center p-2 mt-3 bg-verylightGray rounded-md space-x-2"
                >
                  <Image
                    src="/images/icon-plus.svg"
                    alt="image"
                    width="20"
                    height="20"
                    onClick={() => handleAddScore("ramsesMiron")}
                  />
                  <div className="text-moderateBlue">
                    {ramsesMironScore
                      ? ramsesMironScore
                      : ramsesMironData.score}
                  </div>
                  <Image
                    src="/images/icon-minus.svg"
                    alt="image"
                    width="20"
                    height="20"
                    onClick={() => handleAddScore("ramsesMiron")}
                  />
                </div>
                <div className="flex flex-row mt-4 items-center space-x-2">
                  <Image
                    src="/images/icon-reply.svg"
                    alt="image"
                    width="20"
                    height="20"
                  />
                  <div className="text-moderateBlue font-semibold">Replay</div>
                </div>
              </div>
            </div>

            {/* ######################### */}
          </div>
        </div>

        <div id="juliusReplay" className="overflow-hidden">
          <div className="flex flex-row">
            <div className="flex-grow">
              <hr className="h-full ml-5 mt-3  p-[2px] bg-lightGrayBlue" />
            </div>
            {/* ######################### */}
            <div
              id="staticReplyCardJulius"
              className="flex flex-col bg-whitee rounded-md ssm:p-4 ssm:mx-4 ssm:mt-4 "
            >
              <div
                id="seg1"
                className="flex flex-row  items-center space-x-3 ssm:pb-3"
              >
                <Image
                  src="/images/avatars/image-juliusomo.png"
                  alt="image"
                  width="30"
                  height="30"
                />
                <div id="title" className="font-bold text-darkBluee">
                  {juliuSomoData.user.username}
                </div>
                <span className="p-1 bg-moderateBlue rounded-lg text-sm font-semibold text-whitee">
                  YOU
                </span>
                <div
                  id="createdAt"
                  className="font-grayBluee text-sm font-grayBluee"
                >
                  1 month ago
                </div>
              </div>
              <div id="seg2" className="">
                <div id="userComment" className="text-grayBluee">
                  <span className="text-moderateBlue font-semibold">
                    @ramsesmiron{" "}
                  </span>
                  {juliuSomoData.content}
                </div>
              </div>
              <div id="seg3" className="flex flex-row justify-between ">
                <div
                  id="LikesSecttion"
                  className="flex flex-row items-center p-2 mt-3 bg-verylightGray rounded-md space-x-2"
                >
                  <Image
                    src="/images/icon-plus.svg"
                    alt="image"
                    width="20"
                    height="20"
                    onClick={() => handleAddScore("juliuSomo")}
                  />
                  <div className="text-moderateBlue">
                    {juliuSomoScore ? juliuSomoScore : juliuSomoData.score}
                  </div>
                  <Image
                    src="/images/icon-minus.svg"
                    alt="image"
                    width="20"
                    height="20"
                    onClick={() => handleAddScore("juliuSomo")}
                  />
                </div>
                <div className="flex flex-row mt-4 items-center space-x-2">
                  <Image
                    src="/images/icon-delete.svg"
                    alt="image"
                    width="20"
                    height="20"
                  />
                  <div className="text-softRed font-semibold">Delete</div>
                </div>
                <div className="flex flex-row mt-4 items-center space-x-2">
                  <Image
                    src="/images/icon-edit.svg"
                    alt="image"
                    width="20"
                    height="20"
                  />
                  <div className="text-moderateBlue font-semibold">Edit</div>
                </div>
              </div>
            </div>

            {/* ######################### */}
          </div>
        </div>

        <div id="myComment" className="flex flex-col bg-whitee mt-5 ">
          <textarea
            id="JuliusMessage"
            placeholder="Add a comment.."
            className="m-5 pt-5 pb-20 pl-5 pr-5 border border-collapse border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-moderateBlue focus:border-transparent"
          ></textarea>
          <div
            id="seg1"
            className="flex flex-row  items-center justify-between space-x-3 ssm:pb-3 px-5"
          >
            <Image
              src="/images/avatars/image-juliusomo.png"
              alt="image"
              width="30"
              height="30"
            />
            <div
              id="title"
              className=" text-whitee bg-moderateBlue items-center text-md rounded-xl py-2 px-5"
              onClick={() => handleAddComment()}
            >
              SEND
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

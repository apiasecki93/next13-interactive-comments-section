import React from "react";
import Image from "next/image";

export default function UserCard({ user }) {
  return (
    <div
      id="staticCommentsCard"
      className="flex flex-col bg-whitee rounded-md p-4 m-4"
    >
      <div className="flex flex-row items-center space-x-3 pb-3">
        <Image
          src={user.image.png || user.image}
          alt="image"
          width={30}
          height={30}
        />
        <div className="font-bold text-darkBluee">{user.username}</div>
        <div className="font-grayBluee">1 month ago</div>
      </div>
      <div className="">
        <div className="">{user.content}</div>
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-row items-center p-2 mt-3 bg-verylightGray rounded-md space-x-2">
          <Image
            src="/images/icon-plus.svg"
            alt="image"
            width={20}
            height={20}
          />
          <div>{user.score}</div>
          <Image
            src="/images/icon-minus.svg"
            alt="image"
            width={20}
            height={20}
          />
        </div>
        <div className="flex flex-row mt-4 items-center space-x-2">
          <Image
            src="/images/icon-reply.svg"
            alt="image"
            width={20}
            height={20}
          />
          <div>Reply</div>
        </div>
      </div>
    </div>
  );
}

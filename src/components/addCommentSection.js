import React, { useState } from 'react';
import Image from 'next/image';

const AddCommentSection = ({ onAdd }) => {
    return (
        <div id="myComment" className="flex flex-col bg-whitee mt-5 mmin:w-[702px] mmin:rounded-lg mmin:ml-4">
            <textarea
                id="JuliusMessage"
                placeholder="Add a comment.."
                className="m-5 pt-5 pb-20 pl-5 pr-5 border border-collapse border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-moderateBlue focus:border-transparent"
            ></textarea>
            <div id="seg1" className="flex flex-row   items-center justify-between space-x-3 ssm:pb-3 px-5 mmin:py-2">
                <Image src="/images/avatars/image-juliusomo.png" alt="image" width="40" height="40" />
                <div id="title" className=" text-whitee bg-moderateBlue items-center text-md rounded-xl py-2 px-5" onClick={onAdd}>
                    SEND
                </div>
            </div>
        </div>
    );
}

export default AddCommentSection;

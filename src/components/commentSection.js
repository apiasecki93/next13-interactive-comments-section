"use client";
import React, { useState, useEffect } from "react";
import ModuleDelete from "./moduleDelete";
import AmyAndMaxComponent from "./amyAndMaxCard";
import RamsesCard from "./ramsesCard";
import JuliusReplayToDeleteCard from "./juliusReplayToDelete";
import AddCommentSection from "./addCommentSection";
import DynamicComment from './DynamicComment';

export default function CommentSection() {
  const [data, setData] = useState(null);
  const [comments, setComments] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedComment, setSelectedComment] = useState(null);

  const handleAddComment = () => {
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
    setComments([...comments, newComment]);
  };

  const handleUpdateComment = (event) => {
    event.preventDefault();
    let commentCard = event.target.closest(".toDelete");
    let userCommentDiv = commentCard.querySelector("#userComment");
    setSelectedComment(userCommentDiv);
  };

  useEffect(() => {
    const handleEvent = (event) => {
      // Delete button functionality
      if (event.target.matches(".delete-button")) {
        event.preventDefault();
        const comment = event.target.closest(".toDelete");
        if (comment) {
          comment.remove();
        }
        return;
      }

      // Edit button functionality
      if (event.target.matches(".edit-button")) {
        event.preventDefault();

        // Hide all other active update buttons and show their edit buttons
        document.querySelectorAll(".update-button").forEach(btn => {
          btn.style.display = "none";
        });
        document.querySelectorAll(".edit-button").forEach(btn => {
          btn.style.display = "block";
        });

        const commentCard = event.target.closest(".toDelete");
        const userCommentDiv = commentCard.querySelector("#userComment");

        const updateButton = commentCard.querySelector(".update-button");
        updateButton.style.display = "block";

        const editButton = event.target;
        editButton.style.display = "none";

        const commentText = userCommentDiv.textContent;
        userCommentDiv.innerHTML = `<textarea class="w-full h-20 p-2 text-grayBlue text-sm bg-verylightGray rounded-md" placeholder="Write a comment...">${commentText}</textarea>`;
        updateButton.addEventListener("click", handleUpdateComment);
        return;
      }
    };

    document.addEventListener("click", handleEvent);

    return () => {
      document.removeEventListener("click", handleEvent);
    };
  }, []);

  const hideDeleteModal = () => {
    setShowDeleteModal(false);
  };

  const deleteComment = () => {
    console.log('Deleting comment:', selectedComment);
    hideDeleteModal();
  };

  useEffect(() => {
    import("../../public/data.json")
      .then((res) => res.default)
      .then((jsonData) => {
        setData(jsonData);
      })
      .catch((error) => console.error(error));
  }, []);

  if (!data) return <div>Loading...</div>;

  let amyRobsonData = data.comments[0];
  let maxBlagunData = data.comments[1];
  let ramsesMironData = data.comments[1].replies[0];
  let juliuSomoData = data.comments[1].replies[1];
  let currentUser = data.currentUser;

  return (
    <div id="mainContainer" className="flex relative mmin:items-center mmin:justify-center mmin:mt-[50px]">
      {showDeleteModal && <ModuleDelete className="" hideModal={hideDeleteModal} confirmDelete={deleteComment}/>}
      <div id="threeSections" className="flex flex-col pb-10 mmin:items-start mmin:justify-center ">
        <div id="theirStaticComments" className="flex flex-col mmin:items-start mmin:justify-center ">
          <AmyAndMaxComponent amyRobsonData={amyRobsonData} maxBlagunData={maxBlagunData} />
        </div>
        <RamsesCard ramsesMironData={ramsesMironData}/>
        <JuliusReplayToDeleteCard juliuSomoData={juliuSomoData}/>

        {/* Render dynamic comments */}
        {comments.map(comment => (
          <DynamicComment key={comment.id} comment={comment} />
        ))}

        <AddCommentSection onAdd={handleAddComment} />
      </div>
    </div>
  );
}

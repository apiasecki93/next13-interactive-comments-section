import React from "react";

const ModuleDelete = ({ hideModal, confirmDelete }) => {
  return (
    <div className="absolute top-0 left-0 h-full flex items-center justify-center bg-black bg-opacity-10">
      <div className="h-[225px] flex justify-center items-center bg-whitee rounded-lg p-4 mx-3">
        <div className="flex flex-col justify-center p-4">
          <h1 className="font-bold pb-4">Delete Comment</h1>
          <div>
            <h1 className="">
              Are you sure you want to delete this comment?
              This will remove the comment and cant be undone.
            </h1>
          </div>
          <div className="flex flex-row py-3 text-white justify-between font-semibold text-sm">
            <div id="cancelDelete" className="flex px-7 py-[6px] bg-grayBluee rounded-md" onClick={hideModal}>No, Cancel</div>
            <div id="confirmDelete" className="flex px-7 py-[6px] bg-softRed rounded-md" onClick={confirmDelete}>Yes, Delete</div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default ModuleDelete;

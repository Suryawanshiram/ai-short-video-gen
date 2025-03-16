import React from "react";
import Topic from "./_components/Topic";

const CreateNewVideo = () => {
  return (
    <div className="text-black dark:text-white px-4 w-full ">
      <h1 className="text-3xl font-bold">Create New Video</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-2 border border-gray-300 rounded-lg p-4">
          {/* Topic & Script */}
          <Topic />
          {/* Video Image Style */}

          {/* Voice */}

          {/* Captions */}
        </div>
        <div className="col-span-1 border border-gray-500 rounded-lg p-4">
          video Preview
        </div>
      </div>
    </div>
  );
};

export default CreateNewVideo;

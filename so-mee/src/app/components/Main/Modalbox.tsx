import React, { useState } from "react";
import "@uploadthing/react/styles.css";
import axios from "axios";
import { UploadButton } from "@/app/utils/uploadthing";

const Modalbox: any = ({ id }: any) => {
  const [postimage, setpostimage] = React.useState("");
  const [post, setpost] = React.useState("");
  const handlepostsubmit = async (e: any) => {
    e.preventDefault();
    const res = await axios.post("api/users/createpost", {
      postimage,
      post,
      id,
    });
    console.log(res);
  };
  return (
    <div>
      <dialog id="my_modal_7" className="modal my_modal_7">
        <div className="modal-box w-[80vw] h-[70vh]">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Hello!</h3>
          <form onSubmit={handlepostsubmit}>
            <textarea
              name=""
              required
              placeholder="Write here..."
              className="outline-none px-3 py-5"
              id=""
              cols={50}
              rows={12}
              onChange={(e) => setpost(e.target.value)}
            ></textarea>
            <div className="flex align-middle flex-col items-center w-100">
              <UploadButton
                appearance={{
                  button:
                    "ut-ready:bg-green-500 ut-uploading:cursor-not-allowed rounded-r-none bg-blue-500 bg-none after:bg-blue-600",
                  container: "w-max flex-row rounded-md border-cyan-300",
                  allowedContent:
                    "flex h-8 flex-col items-center justify-center bg-white px-2 text-black",
                }}
                endpoint="imageUploader"
                onClientUploadComplete={(res: any) => {
                  setpostimage(res[0].fileUrl);
                  alert("image upload successfully");
                }}
                onUploadError={(error: Error) => {
                  alert(`ERROR! ${error.message}`);
                }}
              />
            </div>
            <button
              className="btn btn-sm btn-circle btn-ghost absolute"
              onClick={() => document.getElementById("my_modal_7")?.close()}
              type="submit"
            >
              POST
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Modalbox;

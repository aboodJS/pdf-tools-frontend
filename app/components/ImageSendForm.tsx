import { useState } from "react";

function ImageSendForm() {
  async function sendImages(event) {
    const data = new FormData(event.target);
    const req = await fetch("http://localhost:3000/convert", {
      headers: { "Content-Type": "multipart/form-data" },
      method: "POST",
      body: data,
    });

    if (!req.ok) {
      throw new Error("somthing wnt wrong");
    }

    const result = await req.json();

    console.log(result);
  }
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendImages(e);
        }}
        encType="multipart/form-data"
        className="h-40 self-center grid gap-14 justify-center"
        action="http://localhost:3000/convert"
        method="post"
      >
        <input
          multiple
          className="border-2 hover:bg-gray-200 border-dashed h-36 grid content-center justify-center border-slate-500 rounded-md text-center p-4"
          type="file"
          id=""
        />
        <input
          className="bg-blue-600 text-white rounded-md w-48 justify-self-center cursor-pointer hover:bg-blue-700"
          value="convert to pdf"
          type="submit"
        />
      </form>
    </>
  );
}

export default ImageSendForm;

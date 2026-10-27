import { useState } from "react";
import ErrorBox from "./ErrorBox";
import LoadingBox from "./LoadingBox";

function ImageSendForm(props: object) {
  const [isError, setErrorState] = useState(false);
  const [errorMessage, setErrorMsg] = useState("");
  const [isLoading, setLoading] = useState(false);
  async function sendImages(event: any) {
    try {
      setLoading(true);
      setErrorState(false);
      setErrorMsg("");
      event.preventDefault();
      const data = new FormData(event.target);
      const req = await fetch(`http://localhost:3000/${props.endpoint}`, {
        method: "POST",
        body: data,
      });

      if (!req.ok) {
        throw new Error("somthing went wrong");
      }

      const result = await req
        .blob()
        .then((file) => {
          const url = window.URL.createObjectURL(file);
          const a = document.createElement("a");
          a.href = url;
          a.download = "out.pdf";
          document.body.appendChild(a);
          a.click();
          a.remove();
          window.URL.revokeObjectURL(url);
        })
        .catch((err) => {
          throw err;
        });
      setLoading(false);
    } catch (err) {
      console.log(err);
      setErrorState(true);
      setErrorMsg(err.message);
      setLoading(false);
    }
  }
  return (
    <>
      <LoadingBox state={isLoading}></LoadingBox>
      <ErrorBox msg={errorMessage} isTrue={isError}></ErrorBox>
      <form
        onSubmit={sendImages}
        encType="multipart/form-data"
        className="h-40 self-center grid gap-14 justify-center"
        method="post"
      >
        <input
          multiple
          className="border-2 hover:bg-gray-200 border-dashed h-36 grid content-center justify-center border-slate-500 rounded-md text-center p-4"
          type="file"
          id=""
          name="images"
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

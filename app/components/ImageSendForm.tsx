function ImageSendForm() {
  return (
    <>
      <form
        className="h-40 self-center grid gap-14 justify-center"
        action=""
        method="post"
      >
        <input
          className="border-2 hover:bg-gray-200 border-dashed h-36 grid content-center justify-center border-slate-500 rounded-md text-center p-4"
          type="file"
          name=""
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

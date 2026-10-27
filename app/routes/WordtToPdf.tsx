import NavBar from "~/components/NavBar";
import ImageSendForm from "~/components/ImageSendForm";

function WordToPdf() {
  return (
    <>
      <main className="h-screen">
        <NavBar></NavBar>
        <h1 className="text-center my-8 text-4xl font-extrabold">
          DOCX to PDF
        </h1>
        <ImageSendForm endpoint="word-to-pdf"></ImageSendForm>
      </main>
    </>
  );
}

export default WordToPdf;

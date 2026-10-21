import type { Route } from "./+types/home";
import ImageSendForm from "~/components/ImageSendForm";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <main className="h-screen">
        <h1 className="text-center my-8 text-4xl font-extrabold">pdf tools</h1>
        <ImageSendForm></ImageSendForm>
      </main>
    </>
  );
}

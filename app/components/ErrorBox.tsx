interface ErrorBoxProps {
  isTrue: boolean;
  msg: string;
}

export default function ErrorBox({ isTrue, msg }: ErrorBoxProps) {
  if (isTrue) {
    return <p className="text-center font-bold text-2xl">{msg}</p>;
  }

  return null;
}

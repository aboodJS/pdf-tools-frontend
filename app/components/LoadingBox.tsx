interface LoadingBoxProps {
  state: boolean;
}

export default function LoadingBox({ state }: LoadingBoxProps) {
  if (state) {
    return <p className="text-center">loading</p>;
  }

  return null;
}

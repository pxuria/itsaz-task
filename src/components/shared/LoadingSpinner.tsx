import { CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
};

interface LoadingSpinnerProps {
  color: string;
  loading: boolean;
}

const LoadingSpinner = ({ color, loading }: LoadingSpinnerProps) => {
  return (
    <ClipLoader
      loading={loading}
      cssOverride={override}
      color={color}
      size={15}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default LoadingSpinner;

import { CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
};

interface LoadingSpinnerProps {
  color: string;
  loading?: boolean;
  size?: number;
}

const LoadingSpinner = ({ color, loading, size = 15 }: LoadingSpinnerProps) => {
  return (
    <ClipLoader
      loading={loading}
      cssOverride={override}
      color={color}
      size={size}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default LoadingSpinner;

import React from "react";
import "./loadingSpinner.css";

type Props = {
  loading: boolean;
};

const LoadingSpinner = ({ loading }: Props) => (
  <div>{loading && <div className="loader" />}</div>
);

export default LoadingSpinner;

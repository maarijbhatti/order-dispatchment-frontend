import React, { ReactElement } from "react";

interface AsyncContentProps {
  content: ReactElement;
  loader: ReactElement;
  data: any;
}

const AsyncContent: React.FC<AsyncContentProps> = ({
  content,
  loader,
  data,
}) => {
  return data ? content : loader;
};

export default AsyncContent;

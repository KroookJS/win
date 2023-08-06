import React from "react";
import ContentLoader from "react-content-loader";

const PostIsLoadingMem = () => (
  <ContentLoader
    rtl
    speed={1}
    width={357}
    height={382}
    viewBox="0 0 357 382"
    backgroundColor="#d7bea7"
    foregroundColor="#d6c7c7"
  >
    <circle cx="31" cy="31" r="15" />
    <rect x="58" y="18" rx="2" ry="2" width="140" height="10" />
    <rect x="58" y="34" rx="2" ry="2" width="140" height="10" />
    <rect x="0" y="60" rx="2" ry="2" width="400" height="400" />
  </ContentLoader>
);
const PostIsLoading = React.memo(PostIsLoadingMem);
export default PostIsLoading;

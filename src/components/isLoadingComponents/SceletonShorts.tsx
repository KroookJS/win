import React, { FC } from "react";
import ContentLoader from "react-content-loader";

type TProps = {
  isHeight?: boolean;
};

const SceletonShorts: FC<TProps> = ({ isHeight }) => (
  <ContentLoader
    rtl
    speed={1}
    width={isHeight ? 172 : 112}
    height={isHeight ? 297 : 197}
    viewBox="0 0 112 197"
    backgroundColor="#998a71"
    foregroundColor="#baa88a"
  >
    <rect x="5" y="1" rx="20" ry="0" width="156" height="370" />
  </ContentLoader>
);

export default SceletonShorts;

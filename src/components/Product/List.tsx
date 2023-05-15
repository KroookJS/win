import { TChildren } from "@/types/Product";
import { Wrapper } from "@/ui/Wrraper";
import { FC } from "react";

export const List: FC<TChildren> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

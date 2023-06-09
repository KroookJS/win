import { WrapperArticle } from "@/ui/Wrraper";
import { CardImage } from "@/ui/CartStyle";

export const ImgCatigory = ({ image }: { image: string }) => {
  return (
    <WrapperArticle>
      <CardImage alt={image} src={image} style={{ height: "140px" }} />
    </WrapperArticle>
  );
};

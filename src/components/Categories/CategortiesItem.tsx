import { WrapperArticle } from "@/ui/Wrraper";
import { CardBody, CardTitle } from "@/ui/CartStyle";

export const CategortiesItem = ({ title }: { title: string }) => {
  return (
    <WrapperArticle>
      <CardBody>
        <CardTitle>{title}</CardTitle>
      </CardBody>
    </WrapperArticle>
  );
};

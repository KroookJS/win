import { getAll, getOneProduct } from "@/api/products";
import { TItemProduct } from "@/types/Product";
import { Info } from "@/components/Info";
import { Header } from "@/components/Header";
import { GetStaticProps } from "next";

export default function DetailsPage({ product }: { product: TItemProduct }) {
  return (
    <div>
      <Header />
      {product && <Info {...product} />}
    </div>
  );
}

export const getStaticPaths = async () => {
  const data = await getAll();

  const paths = data.products.map((el: TItemProduct) => ({
    params: { id: el.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params ? context.params.id : "";
  const product = await getOneProduct(String(id));

  if (!product) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      product,
    },
  };
};

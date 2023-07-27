import { getAll, getOneProduct } from "@/api/products";
import { TItemProduct } from "@/types/Product";
import { Info } from "@/components/Info";
import { Header } from "@/components/Header";
import { GetStaticProps } from "next";
import { IPost } from "@/types/Post";
import { Layout } from "@/layout/Layout";
import ComponentIsLoading from "@/components/isLoadingComponents/ComponentIsLoading";
import { useActivePage } from "@/hooks/useActivePage";

export default function DetailsPage({ post }: { post: IPost }) {
  const isActive = useActivePage();
  return isActive ? (
    <Layout
      title={post.title}
      description={post.text}
      model={post.model ? post.model[0] : post.userName}
      >
      <Info {...post} />
    </Layout>
  ) : (
    <ComponentIsLoading />
  );
}

export const getStaticPaths = async () => {
  try {
    const data = await getAll();

    const paths = data.map((el: IPost) => ({
      params: { id: el._id.toString() },
    }));

    return {
      paths,
      fallback: false,
    };
  } catch {
    return {
      props: { socials: null },
    };
  }
};

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const id = context.params ? context.params.id : "";
    const post = await getOneProduct(String(id));

    if (!post) {
      return {
        notFound: true,
      };
    }
    return {
      props: {
        post,
      },
    };
  } catch {
    return {
      props: { socials: null },
    };
  }
};

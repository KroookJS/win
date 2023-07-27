import { getRecommendation } from "@/api/recommendations";
import GetItem from "@/components/GetItem";
import { useShortsQuery } from "@/hooks/useShortsAndPostsQuery";
import { Layout } from "@/layout/Layout";

export default function DetailsPage() {
  const { data: postRec, isLoading } = useShortsQuery(
    getRecommendation,
    "getRecPosts"
  );
  return (
    <Layout>
      <h3
        style={{
          margin: 10,
          paddingBottom: 10,
          fontSize: 19,
        }}
      >
        A selection especially for you.
        <a style={{ color: "var(--colors-btn)", fontSize: 20 }}>
          {" "}
          Enjoy your viewing
        </a>
      </h3>

      <GetItem post={postRec} />
    </Layout>
  );
}

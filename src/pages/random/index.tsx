import { getRecommendation } from "@/api/recommendations";
import GetItem from "@/components/GetItem";
import { Layout } from "@/layout/Layout";
import { IPost } from "@/types/Post";
import React, { useEffect, useState } from "react";

export default function DetailsPage() {
  const [postRec, setPostRec] = useState<IPost[]>();

  useEffect(() => {
    const resProduct = async () => {
      return await getRecommendation().then((res) => setPostRec(res));
    };
    resProduct();
  }, []);
  return (
    <Layout>
      <h3 style={{ margin: 10, paddingBottom: 10, fontSize: 17 }}>
        Подборка для вас
      </h3>
      <GetItem post={postRec} />
    </Layout>
  );
}

import { getAllCategorys, getAllModel } from "@/api/categorys";
import { TopChart } from "@/components/Categories/TopChart";
import { ModelTemplates } from "@/components/templates/ModelTemplates";
import { useShortsQuery } from "@/hooks/useShortsAndPostsQuery";
import { Layout } from "@/layout/Layout";
import { useQuery } from "react-query";

export default function ModelPage() {
  /* const { data, isSuccess } = useQuery(
    ["getModel"],
    async () => await getAllModel(),
    {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnWindowFocus: true,
    }
  ); */
  const { data, isSuccess } = useShortsQuery(getAllModel, "getModel");

  const newMod = isSuccess ? data : [];
  return (
    <Layout
      title="TelePorn - Hot and Nude Pornstars in Full-Length Sex Videos &#124; TelePorn"
      description="Watch your favorite porn stars, right here, on the biggest tube of FREE PORN. Pornhub.2.0 has flocks of juicy beauties who will be naked for you 24/7!"
    >
      <TopChart />
      <ModelTemplates models={newMod} />
    </Layout>
  );
}

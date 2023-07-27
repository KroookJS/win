
import CartColumnProfile from "@/components/CartColumnProfile";
import { HeaderProfile } from "@/components/Profile/HeaderProfile";

import { usePublicated } from "@/hooks/usePublicated";
import { Layout } from "@/layout/Layout";

export default function Profile() {
  const publicate = usePublicated();

  return (
    <>
      <Layout
        title={`Your Profile in TelePorn Porn Videos - Verified Porn Star Profile &#124; TelePorn`}
        description={`Porn TelePorn.com is here! On TelePorn.com you will find free porn videos with mature women who love to fuck. Sexy nude milfs with big tits do blowjob and swallow cum. Hot porn videos with scenes of anal sex and cum filling of milf pussies will pleasantly surprise you with sexy mature crumbs!`}
      >
        <HeaderProfile />
        <CartColumnProfile publicate={publicate} />
      </Layout>
    </>
  );
}

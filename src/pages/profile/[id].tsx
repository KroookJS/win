import React from "react";
import { Layout } from "@/layout/Layout";

import { GetStaticProps } from "next/types";

import { HeaderProfile } from "@/components/Profile/HeaderProfile";
import CartColumnProfile from "@/components/CartColumnProfile";
import { getAllUsers, getUserByid } from "@/api/user";
import { IUser } from "@/api/dto/auth.dto";
import { usePublicated } from "@/hooks/usePublicated";

export default function CatigoryPage({ userData }: { userData: IUser }) {
  const publicate = usePublicated(userData.videos.join(","));
  return (
    <>
      <Layout
        title={`${userData.fullName ? userData.fullName : 'TelePorn'} Porn Videos - Verified Porn Star Profile &#124; TelePorn`}
        description={`Porn ${
          userData.fullName ? userData.fullName : "TelePorn.com"
        } is here! On Pornhub.com you will find free porn videos with mature women who love to fuck. Sexy nude milfs with big tits do blowjob and swallow cum. Hot porn videos with scenes of anal sex and cum filling of milf pussies will pleasantly surprise you with sexy mature crumbs!`}
      >
        <HeaderProfile
          avatarUser={userData.avatarUrl}
          loginUsers={userData.fullName}
          videoLength={userData.videos.length}
        />
        <CartColumnProfile publicate={publicate} />
      </Layout>
    </>
  );
}

export const getStaticPaths = async () => {
  try {
    const data = await getAllUsers();

    const paths = data.map((el: any) => ({
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
    const user = context.params ? context.params.id : "1";

    const userData = await getUserByid(String(user));

    if (!userData) {
      return {
        notFound: true,
      };
    }
    return {
      props: {
        userData,
      },
    };
  } catch {
    return {
      props: { socials: null },
    };
  }
};



import { CustomContext } from "@/contrex/TasksProvider";

import {  useContext} from "react";
import { useFavoriteQuery } from "./useShortsAndPostsQuery";

type TProps = {
    postUserId: string
}

export const usePublicated = (postUserId?: string) => {
    
    const { userCook } = useContext(CustomContext);
    const cookId = userCook ? userCook?.videos.join(",") : "";
    const resultIdPost = postUserId ? postUserId : cookId 

    const {data: publicate} = useFavoriteQuery(resultIdPost, 'getMyPublication')
    
    return publicate
}

import { getFavorite, getFavoriteTimout } from "@/api/products"


import { useQuery } from "react-query"


export const useShortsQuery = (fn:() => Promise<any[]> , name: string) => {
    return useQuery({
        queryFn:() => fn(),
        queryKey: [name],
        onError: (err) => {
            if(err instanceof Error){
                alert('Error ' + name)
            }
        },
        keepPreviousData: true,
    })
} 

export const useFavoriteQuery = (id: string, name: string) => {
        return useQuery({
            queryFn:() => getFavorite(id),
            queryKey: [name],
            onError: (err) => {
                if(err instanceof Error){
                    alert('Error Get Favorite')
                }
            },
            keepPreviousData: true,
        })
} 

export const useCast = (id: string, name: string) => {
    return useQuery({
        queryFn:() => getFavorite(id), 
        
        queryKey: [name],
        onError: (err) => {
            if(err instanceof Error){
                alert('Error Get Favorite')
            }
        },
        
        keepPreviousData: true,
    })
}
/* () => axios.get(url, { timeout: 5000 }), */
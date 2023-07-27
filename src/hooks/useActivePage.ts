import { useEffect, useState } from "react";


export const useActivePage = () => {
    const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient
}
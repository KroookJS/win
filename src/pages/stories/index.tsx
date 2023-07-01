import Slider from "@/components/Slider";
import { myStories } from "@/utils/shorts";
import axios from "axios";
import { useEffect, useState } from "react";

export default function DetailsPage() {
  const [myShorts, setMyShorts] = useState<any>([]);

  useEffect(() => {
    axios
      .get("http://45.12.74.70:4444/shorts")
      .then((res) => setMyShorts(res.data));
  }, []);
  const newMyShorts = myShorts.map((el: any) => {
    if (el.url.includes("mp")) {
      return { url: "http://45.12.74.70:4444" + el.url, type: "video" };
    } else {
      return { url: "http://45.12.74.70:4444" + el.url };
    }
  });
  console.log(newMyShorts);

  const MyCompLogik = myShorts.length ? (
    <Slider myStories={newMyShorts} />
  ) : (
    <p>Загрузка</p>
  );
  return MyCompLogik;
}

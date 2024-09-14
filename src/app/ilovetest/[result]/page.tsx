import ShareBtn from "@/src/components/ShareBtn";
import p1 from "@/public/p1.jpg";
import p2 from "@/public/p2.jpg";
import p3 from "@/public/p3.jpg";
import p4 from "@/public/p4.jpg";
import p5 from "@/public/p5.jpg";
import Image from "next/image";

export default async function TodayList({
  params,
}: {
  params: { result: string };
}) {
  let image = p1;

  switch (params.result) {
    case "p2":
      image = p2;
      break;
    case "p3":
      image = p3;
      break;
    case "p4":
      image = p4;
      break;
    case "p5":
      image = p5;
      break;
    default:
      break;
  }

  return (
    <main className="text-center">
      <div>{params.result}</div>
      <Image src={image} height={300} alt="결과 이미지" />
      <ShareBtn
        shareUrl={`https://www.vividspeak.site/ilovetest/${params.result}`}
      />
    </main>
  );
}

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex">
      {/* 左寄せコンテナ */}
      <div className="w-[60%] max-w-md pl-4">
        <Image
          src="/bug.png"
          alt="Bug"
          layout="responsive"
          width={800}
          height={1000}
        />
      </div>

      {/* 他のコンテンツ（中央寄せや右側）をここに置ける */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="title">BugHunt</div>
        <Button className="button-class">start</Button>
      </div>
    </div>
  );
}

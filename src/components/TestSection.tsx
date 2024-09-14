"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function TestSection() {
  const route = useRouter();
  const [inputValue, setInputValue] = useState("");

  const handleClickResultBtn = () => {
    route.push(`/ilovetest/${inputValue}`);
  };

  return (
    <div>
      TestSection
      <input
        placeholder="결과를 입력해주세요"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleClickResultBtn}>결과 보기</button>
    </div>
  );
}

"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { questions } from "../data/question";

export default function TestSection() {
  const route = useRouter();
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // 현재 질문 인덱스 상태

  const handleChange = (id: number, value: number) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
    setCurrentQuestionIndex((prev) => prev + 1);
  };

  const handleClickResultBtn = () => {
    if (Object.keys(answers).length !== questions.length) {
      alert("모든 질문에 답변해 주세요.");
      return;
    }

    const totalScore = Object.values(answers).reduce(
      (acc, score) => acc + score,
      0
    );
    route.push(`/ilovetest/${totalScore}`);
  };

  return (
    <div>
      {currentQuestionIndex < questions.length && (
        <div key={questions[currentQuestionIndex].id}>
          <p>{questions[currentQuestionIndex].question}</p>
          <div className="flex flex-row gap-4">
            <button
              onClick={() =>
                handleChange(
                  questions[currentQuestionIndex].id,
                  questions[currentQuestionIndex].score
                )
              }
            >
              예
            </button>
            <button
              onClick={() =>
                handleChange(
                  questions[currentQuestionIndex].id,
                  10 - questions[currentQuestionIndex].score
                )
              }
            >
              아니오
            </button>
          </div>
        </div>
      )}
      {currentQuestionIndex === questions.length && (
        <button onClick={handleClickResultBtn}>결과 보기</button>
      )}
    </div>
  );
}

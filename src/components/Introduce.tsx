import Image from "next/image";
import teacherImage from "@/public/teacher1.png";

export default function Introduce() {
  return (
    <div className="grid grid-cols-1 text-center gap-2">
      <h1 className="text-3xl">
        외국인과의 프리토킹, OPIC IH 이상을 목표로 하세요!
      </h1>
      <hr className="py-2" />
      <section className="px-6">
        <h1 className="text-2xl font-bold">개인 맞춤 영어회화 과외 프로그램</h1>
        <div className="py-5">
          <h2 className="text-xl font-bold">시험 맞춤 지도</h2>
          <p>OPIC, TOELC Speaking 등 성적 목표를 위한 맞춤형 수업</p>
          <p>고득점 전략과 실전 문제 풀이로 성적 향상</p>
        </div>
        <div className="py-5">
          <h2 className="text-xl font-bold">개인 맞춤 지도</h2>
          <p>외국인과의 자연스러운 프리토킹 연습</p>
          <p>발음 및 억양 교정</p>
        </div>
        <div className="py-5">
          <h2 className="text-xl font-bold">실전 연습</h2>
          <p>실제 시험 및 대화와 유사한 수업</p>
          <p>다양한 상황 설정과 모의시험으로 완벽 대비</p>
        </div>
        <div className="py-5">
          <h2 className="text-xl font-bold">과제 및 관리</h2>
          <p>
            개별 학습자의 필요에 맞는 맞춤형 과제를 제공하고, <br />
            정기적인 관리와 피드백을 통해 학습 진행 상황을 체크합니다.
          </p>
        </div>
      </section>
      <hr className="py-2" />
      <div className="relative">
        <div className="relative w-full h-auto">
          <Image
            src={teacherImage}
            layout="intrinsic"
            objectFit="contain"
            alt="강사 이미지"
            priority
            className="w-full h-auto object-contains"
          />
          <div className="absolute inset-0 bg-white opacity-80 h-full"></div>
          <span className="absolute bottom-1 right-2 text-black text-xs opacity-70 z-9">
            *실제 외국인들 대상 강연 사진입니다.
          </span>
          <section className="absolute inset-0 z-9 flex flex-col justify-center items-center px-6">
            <h1 className="text-3xl font-bold py-4">강사소개</h1>
            <div className="py-5">
              <h2 className="text-xl font-bold">군대 통역병 출신</h2>
              <p>다양한 국제 행사와 미군 통역 업무로 실전 회화에 능통</p>
            </div>
            <div className="py-5">
              <h2 className="text-xl font-bold">시험 준비 전문성</h2>
              <p>OPIC 등급 달성을 돕는 체계적인 준비와 고득점 전략 제공</p>
            </div>
            <div className="py-5">
              <h2 className="text-xl font-bold">독학 성공 사례</h2>
              <p>
                국내에서 <b>독학</b>으로 영어회화 마스터
              </p>
            </div>
          </section>
        </div>
      </div>
      <hr className="py-2" />
      <section className="px-6">
        <h1 className="text-3xl font-bold">수강 후기</h1>
        <div className="py-5">
          <span>수강생 이OO</span>
          <p>
            이전에 학원을 다녔지만, 수업 분위기 때문에 말을 제대로 할 수
            없었습니다. 선생님께 과외를 받으면서 완전히 달라졌습니다. 제 현재
            상황과 수준에 맞춰 수업을 진행해 주셨고, 프리토킹 실력이 눈에 띄게
            향상되었습니다. 이제는 외국인과 대화하는 것이 두렵지 않습니다.
          </p>
        </div>
        <div className="py-5">
          <span>수강생 최OO</span>
          <p>
            토익 점수가 낮아서 오픽 IH 점수를 따기까지 시간이 걸릴까 걱정했지만,
            선생님의 과제와 수업 덕분에 큰 변화를 느꼈습니다. 4회차 수업만에 IH
            등급을 달성할 수 있을 것 같아 자신감이 생겼습니다.
          </p>
        </div>
      </section>
      <hr className="py-2" />
      <section className="px-6">
        <h1 className="text-3xl font-bold">상담 신청하기</h1>
        <div className="pt-5">
          <p>관심 있으신 분들은 아래 신청폼을 통해 신청해 주세요!</p>
        </div>
        <div className="pt-2">
          <p>
            정해진 수업과 과제를 충실히 이행했음에도 실력 향상이 없을 시,{" "}
            <b>전액 환불</b>해드립니다. <br /> 실력 향상에 대한 부담 없이 시작해
            보세요!
          </p>
        </div>
      </section>
    </div>
  );
}

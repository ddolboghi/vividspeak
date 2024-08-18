import Image from "next/image";
import vividLogo from "@/public/vividLogo.svg";
import Introduce from "@/src/components/Introduce";
import RegisterForm from "@/src/components/RegisterForm";

const Page: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 p-3 flex justify-center bg-white z-10">
        <Image
          src={vividLogo}
          width={480}
          height={120}
          alt="vivid logo"
          priority
        />
      </header>
      <main className="flex-grow flex flex-col">
        <Introduce />
        <RegisterForm />
      </main>
    </div>
  );
};

export default Page;

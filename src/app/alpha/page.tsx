import Image from "next/image";
import vividLogo from "@/public/vividLogo.svg";
import Introduce from "@/src/components/Introduce";
import RegisterForm from "@/src/components/RegisterForm";

const Page: React.FC = () => {
  return (
    <main>
      <header className="p-3 flex justify-center">
        <Image
          src={vividLogo}
          width={480}
          height={120}
          alt="vivid logo"
          priority
        />
      </header>
      <Introduce />
      <RegisterForm />
    </main>
  );
};

export default Page;

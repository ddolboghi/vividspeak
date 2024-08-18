"use client";

import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { postRegisterToSupabase } from "../services/postRegisterToSupabase";
import { RocketIcon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";

export default function RegisterForm() {
  const [name, setName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await postRegisterToSupabase(name, phoneNumber);
    console.log(result);
    if (result === false) {
      alert("등록에 실패했습니다. 다시 시도해주세요.");
    } else {
      setName("");
      setPhoneNumber("");
      setShowAlert(true);

      setTimeout(() => {
        setShowAlert(false);
      }, 2500);
    }
  };

  const formatPhoneNumber = (value: string) => {
    const phoneNumber = value.replace(/[^\d]/g, "");
    if (phoneNumber.length <= 3) {
      return phoneNumber;
    } else if (phoneNumber.length <= 7) {
      return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3)}`;
    } else {
      return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(
        3,
        7
      )}-${phoneNumber.slice(7, 11)}`;
    }
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedNumber = formatPhoneNumber(e.target.value);
    setPhoneNumber(formattedNumber);
  };

  return (
    <div className="flex-shrink-0 px-4">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center p-4 gap-2 max-w-md mx-auto"
      >
        <Input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="이름"
          required
          className=""
        />
        <Input
          id="phoneNumber"
          type="tel"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          placeholder="전화번호"
          maxLength={13}
          required
        />
        <Button type="submit" className="w-full">
          신청하기
        </Button>
      </form>

      {showAlert && (
        <div className="fixed inset-0 flex items-center justify-center z-12 mx-10">
          <Alert className="bg-black text-white">
            <AlertTitle>🎉신청 완료!</AlertTitle>
            <AlertDescription>
              신청해주셔서 감사합니다.😆
              <br />
              <b>12시간</b> 이내로 연락드릴게요.
            </AlertDescription>
          </Alert>
        </div>
      )}
    </div>
  );
}

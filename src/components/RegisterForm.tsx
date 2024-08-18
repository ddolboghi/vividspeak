"use client";

import { postRegisterToSupabase } from "@/services/postRegisterToSupabase";
import { useState } from "react";

export default function RegisterForm() {
  const [name, setName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await postRegisterToSupabase(name, phoneNumber);
    console.log(result);
    if (result === false) {
      alert("등록에 실패했습니다. 다시 시도해주세요.");
    } else {
      setName("");
      setPhoneNumber("");
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
    <form onSubmit={handleSubmit}>
      <div>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="이름"
          required
        />
      </div>
      <div>
        <input
          id="phoneNumber"
          type="tel"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          placeholder="전화번호"
          maxLength={13}
          required
        />
      </div>
      <button type="submit">신청하기</button>
    </form>
  );
}

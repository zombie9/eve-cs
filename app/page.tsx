"use client";

import { Button } from "@headlessui/react";

export default function Home() {
  const handleClick = () => {
    window.location.href = "/api/login";
  };

  return (
    <div className="flex items-center justify-center w-full min-h-screen font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col gap-4 items-center">
        <h1>EVE ONLINE CHARACTER SHEET</h1>
        <Button
          className="w-[270px] h-[45px] bg-[url(./media/eve-sso-login-black-large.png)]"
          onClick={handleClick}
        ></Button>
      </div>
    </div>
  );
}

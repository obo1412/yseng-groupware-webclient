"use client";

import { Button } from "@/components/ui/button";
import * as HTTPManager from "../lib/HTTPManager";
import { redirect } from "next/navigation";

export default function Home() {
  const clickedLogout = async () => {
    const response = await HTTPManager.Logout();
    console.log(response);
    redirect("/auth");
  };

  return (
    <div>
      <div>Home Page</div>
      <div>
        <Button onClick={clickedLogout}>로그아웃</Button>
      </div>
    </div>
  );
}

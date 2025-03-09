import { useState } from "react";
import {
  Card,
  CardHeader,
  CardDescription,
  CardContent,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FcGoogle } from "react-icons/fc";
import { SiNaver } from "react-icons/si";
import { SignInFlow } from "../types";

import * as HTTPManager from "../../../lib/HTTPManager";

interface SignInCardProps {
  setState: (state: SignInFlow) => void;
}

export const SignInCard = ({ setState }: SignInCardProps) => {
  const [signInInfo, setSignInInfo] = useState({
    account: "",
    password: "",
  });

  const clickedSignIn = async () => {
    const result = await HTTPManager.SignIn(signInInfo);
    console.log(result);
    if (result.status !== 200) {
      alert("로그인에 실패하였습니다. 회원아이디와 비밀번호를 확인해주세요.");
    } else {
      setSignInInfo({
        account: "",
        password: "",
      });
      alert(result.data.msg);
    }
  };

  return (
    <Card className="w-full h-full p-8">
      <CardHeader className="px-0 pt-0">
        <CardTitle>로그인하기</CardTitle>
        <CardDescription>
          이메일을 이용하거나, 다른 서비스를 이용해서 계속하기
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-5 px-0 pb-0">
        <form className="space-y-2.5" action={clickedSignIn}>
          <Input
            disabled={false}
            value={signInInfo.account}
            onChange={(e) => {
              setSignInInfo({
                ...signInInfo,
                account: e.target.value,
              });
            }}
            placeholder="아이디"
            type="text"
            required
          />
          <Input
            disabled={false}
            value={signInInfo.password}
            onChange={(e) => {
              setSignInInfo({
                ...signInInfo,
                password: e.target.value,
              });
            }}
            placeholder="비밀번호"
            type="password"
            required
          />
          <Button type="submit" className="w-full" size={"lg"}>
            계속하기
          </Button>
        </form>
        <Separator />
        <div className="flex flex-col gap-y-2.5">
          <Button
            disabled={false}
            onClick={() => {}}
            variant={"outline"}
            size={"lg"}
            className="w-full relative"
          >
            <FcGoogle className="size-5 absolute top-3 left-2.5" />
            Google 계정으로
          </Button>
          <Button
            disabled={false}
            onClick={() => {}}
            variant={"outline"}
            size={"lg"}
            className="w-full relative"
          >
            <SiNaver className="size-5 absolute top-3 left-2.5" />
            Naver 계정으로
          </Button>
        </div>
        <p className="text-xs text-muted-foreground">
          계정이 없으신가요?&nbsp;
          <span
            onClick={() => setState("signUp")}
            className="text-sky-700 hover:underline cursor-pointer"
          >
            회원가입
          </span>
        </p>
      </CardContent>
    </Card>
  );
};

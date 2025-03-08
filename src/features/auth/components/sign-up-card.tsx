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

interface SignUpCardProps {
  setState: (state: SignInFlow) => void;
}

export const SignUpCard = ({ setState }: SignUpCardProps) => {
  const [signUpInfo, setSignUpInfo] = useState({
    account: "",
    password: "",
    confirmPassword: "",
    name: "",
  });

  const clickedSignUp = async () => {
    const result = await HTTPManager.SignUp(signUpInfo);
    if (result.status === 200) {
      setSignUpInfo({
        account: "",
        password: "",
        confirmPassword: "",
        name: "",
      });
      setState("signIn");
      alert("회원가입이 완료되었습니다. 로그인 해주세요.");
    }
  };
  return (
    <Card className="w-full h-full p-8">
      <CardHeader className="px-0 pt-0">
        <CardTitle>회원가입하기</CardTitle>
        <CardDescription>
          이메일을 이용하거나, 다른 서비스를 이용해서 계속하기
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-5 px-0 pb-0">
        <form className="space-y-2.5" action={clickedSignUp}>
          <Input
            disabled={false}
            value={signUpInfo.account}
            onChange={(e) => {
              setSignUpInfo({
                ...signUpInfo,
                account: e.target.value,
              });
            }}
            placeholder="아이디"
            type="account"
            required
          />
          <Input
            disabled={false}
            value={signUpInfo.password}
            onChange={(e) => {
              setSignUpInfo({
                ...signUpInfo,
                password: e.target.value,
              });
            }}
            placeholder="비밀번호"
            type="password"
            required
          />
          <Input
            disabled={false}
            value={signUpInfo.confirmPassword}
            onChange={(e) => {
              setSignUpInfo({
                ...signUpInfo,
                confirmPassword: e.target.value,
              });
            }}
            placeholder="비밀번호 확인"
            type="password"
            required
          />
          <Input
            disabled={false}
            value={signUpInfo.name}
            onChange={(e) => {
              setSignUpInfo({
                ...signUpInfo,
                name: e.target.value,
              });
            }}
            placeholder="이름"
            type="text"
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
          이미 아이디가 있으시다면?&nbsp;
          <span
            onClick={() => setState("signIn")}
            className="text-sky-700 hover:underline cursor-pointer"
          >
            로그인
          </span>
        </p>
      </CardContent>
    </Card>
  );
};

import { redirect } from "next/navigation";

export default function Home() {
  const auth = false;
  if (auth) {
    return <div>Home Page</div>;
  } else {
    redirect("/auth");
  }
}

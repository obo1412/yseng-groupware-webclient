import { redirect } from "next/navigation";

export default function Home(props: { auth: boolean }) {
  const auth = props.auth;
  if (auth) {
    return <div>Home Page</div>;
  } else {
    redirect("/auth");
  }
}

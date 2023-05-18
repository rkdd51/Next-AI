import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";
function Home() {
  const { user, error, isLoading } = useUser();
  console.log("user: ", user);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <div>
        <p> Welcome {user.name}! </p>
        <Image
          src="https://lh3.googleusercontent.com/a/AGNmyxaCTLHkkRKrIGoR2XfUD6xQru-1mkBjlC3FtRQgAg=s96-c"
          alt="userImage"
          width="100"
          height="100"
        />
        <Link href="/api/auth/logout">Logout</Link>
      </div>
    );
  }
  return (
    <div>
      <h1>This is Home</h1>
      <Link href="/api/auth/login">Login</Link>
    </div>
  );
}
export default Home;

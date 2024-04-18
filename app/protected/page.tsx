import { auth, signIn } from "@/auth";

export default async function Home() {
  const session = await auth();
  if (!session) {
    await login();
  }
  return (
    <>
      <h1>Protected Page</h1>
    </>
  );
}

async function login() {
  "use server";
  await signIn();
}

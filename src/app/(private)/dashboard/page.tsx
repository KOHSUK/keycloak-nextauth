import { SignOutButton } from "@/app/components";
import { auth } from "@/auth";

export default async function Page() {
  const session = await auth();

  return (
    <>
      <div>Dashboard</div>
      {session && (
        <>
          <div>
            {session.user?.name}
          </div>
          <div>
            {session.user?.email}
          </div>
        </>
      )}
      <div>
        <SignOutButton />
      </div>
    </>
  )
}
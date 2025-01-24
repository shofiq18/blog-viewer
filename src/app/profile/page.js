
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  
  if (!user) {
    redirect("/api/auth/login");
  }

  return (
    <div className="container mx-auto my-6">
      <h1 className="text-4xl font-bold text-center mt-80">Welcome to your profile, {user.name}!</h1>
    </div>
  );
}

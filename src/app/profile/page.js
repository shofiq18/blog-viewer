import React from 'react'

const Profile = () => {
  return (
    <div className='my-12'>
        <h1 className="text-3xl font-bold text-blue-500 text-center my-6">
            welcome to your profile
        </h1>
    </div>
  )
}

export default Profile

// import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
// import { redirect } from "next/navigation";

// export default async function ProfilePage() {
//   const { getUser } = getKindeServerSession();
//   const user = await getUser();
 
  
//   if (!user) {
//     redirect("/api/auth/login");
//   }

//   return (
//     <div className="container mx-auto my-6">
//       <h1 className="text-4xl font-bold text-center mt-80">Welcome to your profile, {user.name}!</h1>
//     </div>
//   );
// }

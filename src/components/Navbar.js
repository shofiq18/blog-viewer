
// import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
// import Link from "next/link";
// import React from "react";

// const Navbar = async () => {
//   const { getUser } = getKindeServerSession();
//   const user = await getUser();

//   return (
//     <nav className="flex justify-between items-center my-6 px-4">
//       <div>
//         <h1 className="text-lg font-bold">Blog</h1>
//       </div>
//       <ul className="flex gap-6">
//         <li>
//           <Link href="/" className="hover:text-blue-600">
//             Home
//           </Link>
//         </li>
//         <li>
//           <Link href="/profile" className="hover:text-blue-600">
//             Profile
//           </Link>
//         </li>
//       </ul>
//       <div>
//         {user ? (
//           <Link
//             href="/api/auth/logout"
//             className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
//           >
//             Logout
//           </Link>
//         ) : (
//           <Link
//             href="/api/auth/login"
//             className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//           >
//             Login
//           </Link>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";
import React from "react";

const Navbar = async () => {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    return (
        <div className="sticky top-0 z-50  bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-500">
            <nav className=" container mx-auto text-white shadow-lg flex justify-between items-center py-4 px-6">
                <div>
                    <h1 className="text-2xl font-bold">Blog</h1>
                </div>
                <ul className="flex gap-10">
                    <li>
                        <Link href="/" className="hover:underline">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/profile" className="hover:underline">
                            Profile
                        </Link>
                    </li>
                </ul>
                <div>
                    {user ? (
                        <Link
                            href="/api/auth/logout"
                            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors duration-300"
                        >
                            Logout
                        </Link>
                    ) : (
                        <Link
                            href="/api/auth/login"
                            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors duration-300"
                        >
                            Login
                        </Link>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;

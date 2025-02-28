import Link from "next/link";
import React from "react";

const NavLinks: React.FC = () => {
  return (
    <>
      <h2 className="text-xl font-bold mb-4">Admin</h2>
      <ul>
        <li className="mb-1">
          <Link href="/" className="text-blue-500 hover:underline">
            Home
          </Link>
        </li>
        <li className="mb-1">
          <Link href="/party" className="text-blue-500 hover:underline">
            Counter Party
          </Link>
        </li>
        <li className="mb-1">
          <Link href="/posting" className="text-blue-500 hover:underline">
            Update Cash Posting
          </Link>
        </li>
      </ul>
    </>
  );
};

export default NavLinks;

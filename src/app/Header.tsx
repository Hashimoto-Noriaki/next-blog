import Link from "next/link";
import React from 'react';

export const Header = () => {
  return (
    <header　className="py-5 px-10 border-b flex justify-between items-center">
        <div>
            <h1>
                <Link href="/">Next.js Blog</Link>
            </h1>
        </div>
        <div>
            <nav className="text-sm font-medium">
                <Link 
                    href="/articles/new"
                    className="bg-green-400 px-3 py-3 rounded-md"
                    >新規投稿</Link>
            </nav>
        </div>
        </header>
  )
}

export default Header;

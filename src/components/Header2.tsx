import { Menu } from "lucide-react";
import Link from "next/link";

export default function HeaderTwo(){

    return(
        <>
        <header className="sticky top-0 z-10 bg-white shadow">
        <div className="container mx-auto flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            YourBrand
          </Link>
          <nav className="hidden space-x-8 md:flex">
            <Link href="#features" className="text-gray-600 hover:text-gray-900">
              Features
            </Link>
            <Link href="#pricing" className="text-gray-600 hover:text-gray-900">
              Pricing
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </Link>
          </nav>
          <div className="hidden md:block">
            <Link
              href="/signup"
              className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              Sign Up
            </Link>
          </div>
          <button className="rounded-md p-2 md:hidden">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

        </>
    )
}
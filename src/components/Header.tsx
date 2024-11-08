import Link from 'next/link'
import { Bell, Mail, Search, Settings } from 'lucide-react'

export default function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-4">
      <div className="flex items-center gap-4">
        <Link href="/" className="text-2xl font-bold text-[#0095FF]">
          BBD
        </Link>
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
          <input
            type="search"
            placeholder="Search..."
            className="h-10 w-[300px] rounded-md bg-gray-50 pl-10 pr-4 text-sm outline-none focus:bg-white focus:ring-2 focus:ring-blue-100"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="rounded-full p-2 hover:bg-gray-100">
          <Settings className="h-5 w-5 text-gray-600" />
        </button>
        <button className="rounded-full p-2 hover:bg-gray-100">
          <Bell className="h-5 w-5 text-gray-600" />
        </button>
        <button className="rounded-full p-2 hover:bg-gray-100">
          <Mail className="h-5 w-5 text-gray-600" />
        </button>
        <div className="flex items-center gap-2">
          <img
            src="/placeholder.svg?height=32&width=32"
            alt="Profile"
            className="h-8 w-8 rounded-full"
          />
          <Link href='/workspace' className="rounded-md px-4 py-1.5 text-sm font-medium text-blue-700 hover:bg-blue-200">
            Workspace
          </Link>

          {/* <Link href='/workspace/dashboard' className="rounded-md px-4 py-1.5 text-sm font-medium text-blue-700 hover:bg-blue-200">
            Dashboard
          </Link> */}

          <Link href='/auth/login' className="rounded-md px-4 py-1.5 text-sm font-medium text-blue-700 hover:bg-blue-200">
            Login
          </Link>

          <Link href='/auth/register' className="rounded-md bg-[#0095FF] px-4 py-1.5 text-sm font-medium text-white hover:bg-blue-600">
            Register
          </Link>

        </div>
      </div>
    </header>
  )
}
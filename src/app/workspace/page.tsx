import Link from 'next/link'
import { Plus } from 'lucide-react'

export default function WorkspacesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Hello Edward!
          </h1>
          <p className="mt-1 text-sm text-gray-600">
            Choose a space you want to work on
          </p>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900">Workspaces</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/workspace/models"
              className="flex h-48 items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-white p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <div>
                <Plus className="mx-auto h-12 w-12 text-gray-400" />
                <span className="mt-2 block text-sm font-semibold text-gray-900">
                  Create a new workspace
                </span>
              </div>
            </Link>
            <Link
              href="/workspaces/1"
              className="flex h-48 flex-col justify-between rounded-lg bg-[#0095FF] p-6 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <div>
                <h3 className="text-xl font-semibold">Workspace 1</h3>
                <p className="mt-2 text-sm opacity-80">
                  Description of Workspace 1
                </p>
              </div>
              <div className="text-sm font-medium">
                5 members • 3 projects
              </div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
'use client'

import Link from "next/link"

export default function CreateWorkspacePage() {
  return (
    <div className="min-h-screen bg-white">

      <main className="mx-auto max-w-3xl px-4 py-8">
        <h1 className="text-4xl font-bold text-black">Create New <span className="text-[#0095FF]">Workspace</span></h1>

        <form className="mt-8 space-y-6">
          <div className="space-y-2">
            <label htmlFor="business-name" className="block text-sm font-medium text-gray-700">
              Business name
            </label>
            <input
              type="text"
              id="business-name"
              placeholder="Phoenix Travels"
              className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="business-category" className="block text-sm font-medium text-gray-700">
              Business category
            </label>
            <input
              type="text"
              id="business-category"
              placeholder="Transportations"
              className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Workspace description
            </label>
            <textarea
              id="description"
              rows={6}
              placeholder="describe your business"
              className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
            ></textarea>
          </div>

          <Link
            href='/workspace/apps'
            type="submit"
            className="px-8 py-4 mt-8 w-full rounded-lg bg-[#0095FF] py-3 text-sm font-medium text-white hover:bg-blue-600"
          >
            Create
          </Link>
        </form>
      </main>
    </div>
  )
}
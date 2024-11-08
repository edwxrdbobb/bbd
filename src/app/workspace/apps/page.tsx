'use client'
'use client'

import { useRouter } from 'next/navigation'
// import Link from 'next/link'
import { Mail, Users, FileText, Contact, Building2, FolderKanban } from 'lucide-react'

const apps = [
  { id: 'crm', name: 'CRM', icon: Users, selected: true },
  { id: 'mail', name: 'Mail', icon: Mail },
  { id: 'invoicing', name: 'Invoicing', icon: FileText },
  { id: 'contacts', name: 'Contacts', icon: Contact },
  { id: 'employees', name: 'Employees', icon: Building2 },
  { id: 'projects', name: 'Projects', icon: FolderKanban },
  { id: 'invoicing2', name: 'Invoicing', icon: FileText },
  { id: 'contacts2', name: 'Contacts', icon: Contact },
]

export default function AppsPage() {

    const router = useRouter()

    const handleSaveAndProceed = () => {
      router.push('/workspace/dashboard/')
    }

  return (
    <div className="min-h-screen bg-white">

      <main className="mx-auto max-w-7xl px-4 py-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold">Some of our most popular <span className="text-[#0095FF]">apps</span></h1>
          <p className="text-lg text-gray-600">Take your pick—we ve got you covered.</p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {apps.map((app) => (
            <div
              key={app.id}
              className={`relative rounded-lg p-6 transition-all hover:scale-105 ${
                app.selected ? 'bg-[#0095FF]' : 'bg-[#F5F9FF]'
              }`}
            >
              <div className={`mb-4 h-12 w-12 rounded-lg ${app.selected ? 'bg-white' : 'bg-[#0095FF]'} flex items-center justify-center`}>
                <app.icon className={`h-6 w-6 ${app.selected ? 'text-[#0095FF]' : 'text-white'}`} />
              </div>
              <h3 className={`text-lg font-medium ${app.selected ? 'text-white' : 'text-gray-900'}`}>
                {app.name}
              </h3>
              <div className={`absolute right-3 top-3 h-2 w-2 rounded-full ${
                app.selected ? 'bg-white' : 'bg-gray-300'
              }`}></div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-end">
          <button onClick={handleSaveAndProceed} className="rounded-lg bg-[#0095FF] px-6 py-3 text-sm font-medium text-white hover:bg-blue-600">
            Save & Proceed
          </button>
        </div>
      </main>
    </div>
  )
}
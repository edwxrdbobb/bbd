import Link from 'next/link'

const templates = [
  { id: 'blank', name: 'Blank Workspace', color: 'bg-gray-100 border-2 border-dashed border-gray-300' },
  { id: 'office', name: 'Office management', description: 'This template gives you everything you need to manage your employees', color: 'bg-pink-500' },
  { id: 'school', name: 'School management', description: 'This template gives you everything you need to manage your employees', color: 'bg-blue-500' },
  { id: 'project', name: 'Project management', description: 'This template gives you everything you need to manage your projects', color: 'bg-green-500' },
  { id: 'marketing', name: 'Marketing management', description: 'This template gives you everything you need for your marketing campaigns', color: 'bg-yellow-500' },
  { id: 'sales', name: 'Sales management', description: 'This template gives you everything you need to manage your sales pipeline', color: 'bg-red-500' },
]

export default function TemplatesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Templates</h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {templates.map((template) => (
              <Link
                key={template.id}
                href={`new/${template.id}`}
                className={`flex flex-col justify-between rounded-lg p-6 text-white transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  template.color
                }`}
              >
                <div>
                  <h3 className="text-xl font-semibold">{template.name}</h3>
                  {template.description && (
                    <p className="mt-2 text-sm opacity-80">{template.description}</p>
                  )}
                </div>
                {template.id === 'blank' && (
                  <div className="mt-4 text-center text-gray-600">
                    <span className="text-2xl font-bold">+</span>
                  </div>
                )}
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
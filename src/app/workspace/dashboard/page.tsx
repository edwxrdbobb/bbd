'use client'

import Link from 'next/link'
import { 
  ArrowDownRight,
  ArrowUpRight,
  ChevronRight,
  ClipboardList,
  FileText,
  Grid,
  HelpCircle,
  Home,
  LayoutGrid,
  Monitor,
  PieChart,
  Table,
  Users,
  FileSpreadsheet,
  Briefcase,
  FormInput,
  Files
} from 'lucide-react'

const navigationItems = [
  { icon: Home, label: 'Dashboard', href: '/dashboard', active: true },
  { icon: Users, label: 'Users', href: '/users' },
  { icon: PieChart, label: 'Analysis', href: '/analysis' },
  { icon: ClipboardList, label: 'Roles', href: '/roles' },
  { icon: FileText, label: 'Tasks', href: '/tasks', hasSubmenu: true },
  { icon: Monitor, label: 'Attendance', href: '/attendance' },
  { icon: Briefcase, label: 'Projects', href: '/projects' },
  { icon: FileSpreadsheet, label: 'Reports', href: '/reports' },
  { icon: Users, label: 'Manage Clients', href: '/clients' },
]

const featureItems = [
  { icon: Grid, label: 'Apps', href: '/apps', hasSubmenu: true },
  { icon: PieChart, label: 'Charts', href: '/charts', hasSubmenu: true },
  { icon: Briefcase, label: 'Projects', href: '/projects', hasSubmenu: true },
  { icon: LayoutGrid, label: 'Widget', href: '/widget' },
  { icon: FormInput, label: 'Forms', href: '/forms', hasSubmenu: true },
  { icon: Table, label: 'Table', href: '/table', hasSubmenu: true },
  { icon: Files, label: 'Pages', href: '/pages', hasSubmenu: true },
]

const metrics = [
  { 
    label: 'Total User', 
    value: '523', 
    icon: Users,
    change: { value: '16%', positive: true, text: 'this month' }
  },
  { 
    label: 'Active Employees', 
    value: '388', 
    icon: Users,
    change: { value: '1%', positive: false, text: 'this month' }
  },
  { 
    label: 'Active Tasks', 
    value: '189', 
    icon: Monitor
  },
]

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <div className="w-64 flex-shrink-0 border-r bg-[#F8FAFC]">
        <div className="flex h-16 items-center border-b px-4">
          <Link href="/" className="text-2xl font-bold text-[#0095FF]">
            BBD
          </Link>
        </div>

        <div className="flex h-[calc(100vh-4rem)] flex-col justify-between">
          <div className="p-4">
            <nav className="space-y-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm ${
                    item.active
                      ? 'bg-white text-[#0095FF]'
                      : 'text-gray-600 hover:bg-white hover:text-[#0095FF]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <item.icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </div>
                  {item.hasSubmenu && (
                    <ChevronRight className="h-4 w-4" />
                  )}
                </Link>
              ))}
            </nav>

            <div className="mt-8">
              <h2 className="px-3 text-xs font-semibold text-gray-400">
                OUR FEATURES
              </h2>
              <nav className="mt-4 space-y-1">
                {featureItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="flex items-center justify-between rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-white hover:text-[#0095FF]"
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className="h-5 w-5" />
                      <span>{item.label}</span>
                    </div>
                    {item.hasSubmenu && (
                      <ChevronRight className="h-4 w-4" />
                    )}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          <div className="p-4">
            <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#0095FF] px-4 py-2 text-sm font-medium text-white hover:bg-blue-600">
              <HelpCircle className="h-5 w-5" />
              Help Desk
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">

        <main className="p-6">
          <h1 className="mb-6 text-2xl font-bold text-gray-900">Dashboard</h1>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-lg border bg-white p-6 shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E7F6EC]">
                    <metric.icon className="h-6 w-6 text-[#0095FF]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">{metric.label}</p>
                    <p className="text-2xl font-semibold">{metric.value}</p>
                    {metric.change && (
                      <div className="flex items-center gap-1 text-sm">
                        {metric.change.positive ? (
                          <ArrowUpRight className="h-4 w-4 text-green-500" />
                        ) : (
                          <ArrowDownRight className="h-4 w-4 text-red-500" />
                        )}
                        <span className={metric.change.positive ? 'text-green-500' : 'text-red-500'}>
                          {metric.change.value}
                        </span>
                        <span className="text-gray-500">{metric.change.text}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
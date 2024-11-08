import Link from 'next/link'
import {  CheckCircle,  } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      
      <main className="flex-grow">
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              <div className="space-y-8">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                  Welcome to <span className="text-blue-600">YourBrand</span>
                </h1>
                <p className="text-lg text-gray-600">
                  Empower your business with our cutting-edge solutions. Streamline operations, boost productivity, and achieve your goals faster than ever before.
                </p>
                <div className="flex space-x-4">
                  <Link
                    href="/signup"
                    className="rounded-md bg-blue-600 px-6 py-3 text-base font-medium text-white hover:bg-blue-700"
                  >
                    Get Started
                  </Link>
                  <Link
                    href="#features"
                    className="rounded-md bg-gray-200 px-6 py-3 text-base font-medium text-gray-700 hover:bg-gray-300"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="relative h-64 overflow-hidden rounded-lg md:h-96">
                <img
                  src="/placeholder.svg?height=384&width=384"
                  alt="Product screenshot"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
              Our Features
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                'Intuitive Dashboard',
                'Real-time Analytics',
                'Seamless Integration',
                'Customizable Reports',
                'Secure Data Storage',
                '24/7 Customer Support',
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 text-green-500" />
                  <p className="text-lg text-gray-700">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="bg-gray-50 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
              Pricing Plans
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                { name: 'Basic', price: '$9.99', features: ['Feature 1', 'Feature 2', 'Feature 3'] },
                { name: 'Pro', price: '$19.99', features: ['All Basic features', 'Feature 4', 'Feature 5'] },
                { name: 'Enterprise', price: 'Custom', features: ['All Pro features', 'Feature 6', 'Feature 7'] },
              ].map((plan, index) => (
                <div key={index} className="rounded-lg bg-white p-8 shadow-lg">
                  <h3 className="mb-4 text-2xl font-bold">{plan.name}</h3>
                  <p className="mb-6 text-4xl font-bold text-blue-600">{plan.price}</p>
                  <ul className="mb-8 space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/signup"
                    className="block w-full rounded-md bg-blue-600 px-4 py-2 text-center text-white hover:bg-blue-700"
                  >
                    Choose Plan
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
              Contact Us
            </h2>
            <form className="mx-auto max-w-lg space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

    </div>
  )
}
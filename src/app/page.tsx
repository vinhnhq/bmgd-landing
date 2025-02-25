import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Welcome to SP-BMGD
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Discover our innovative solutions and cutting-edge products
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                href="/products"
                className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors"
              >
                View Products
              </Link>
              <Link
                href="/product-showcase"
                className="bg-white text-blue-600 px-8 py-3 rounded-full border-2 border-blue-600 hover:bg-blue-50 transition-colors"
              >
                Showcase
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <title>Performance Icon</title>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Performance</h3>
              <p className="text-gray-600 dark:text-gray-400">Lightning-fast solutions for your business needs</p>
            </div>
            <div className="p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <title>Security Icon</title>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure & Reliable</h3>
              <p className="text-gray-600 dark:text-gray-400">Enterprise-grade security for peace of mind</p>
            </div>
            <div className="p-6 text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <title>Growth Icon</title>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Scalable Solutions</h3>
              <p className="text-gray-600 dark:text-gray-400">Grow your business with confidence</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="mb-8">Explore our product lineup and find the perfect solution for your needs.</p>
          <Link
            href="/products"
            className="bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors inline-block"
          >
            Browse Products
          </Link>
        </div>
      </section>
    </div>
  );
}

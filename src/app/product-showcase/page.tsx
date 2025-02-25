import Image from "next/image";
import Link from "next/link";

export default function ProductShowcase() {
  const showcaseItems = [
    {
      id: 1,
      title: "Premium Solution A",
      description: "Our flagship product with cutting-edge features",
      image: "/placeholder-1.jpg",
      category: "Enterprise",
    },
    {
      id: 2,
      title: "Advanced System B",
      description: "Powerful system for growing businesses",
      image: "/placeholder-2.jpg",
      category: "Business",
    },
    {
      id: 3,
      title: "Smart Platform C",
      description: "Intelligent platform for modern workflows",
      image: "/placeholder-3.jpg",
      category: "Technology",
    },
  ];

  return (
    <div className="min-h-screen py-16 px-4">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Product Showcase</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Explore our featured products and solutions
        </p>
      </div>

      {/* Showcase Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {showcaseItems.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
            >
              <div className="relative h-64">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 animate-gradient-xy" />
                <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold">
                  {item.title}
                </div>
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900 rounded-full mb-2">
                  {item.category}
                </span>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {item.description}
                </p>
                <Link
                  href="/products"
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto text-center mt-20">
        <h2 className="text-3xl font-bold mb-4">Ready to dive deeper?</h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Check out our complete product catalog for detailed specifications and pricing
        </p>
        <Link
          href="/products"
          className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
        >
          View All Products
        </Link>
      </div>
    </div>
  );
}

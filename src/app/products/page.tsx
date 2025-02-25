'use client';

import { useState } from 'react';

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'enterprise', name: 'Enterprise' },
    { id: 'business', name: 'Business' },
    { id: 'technology', name: 'Technology' },
  ];

  const products = [
    {
      id: 1,
      name: 'Enterprise Suite Pro',
      category: 'enterprise',
      price: '$999/mo',
      description: 'Complete enterprise solution with advanced features',
      features: ['24/7 Support', 'Custom Integration', 'Advanced Analytics'],
    },
    {
      id: 2,
      name: 'Business Manager',
      category: 'business',
      price: '$499/mo',
      description: 'Comprehensive business management platform',
      features: ['Task Management', 'Team Collaboration', 'Resource Planning'],
    },
    {
      id: 3,
      name: 'Tech Platform Plus',
      category: 'technology',
      price: '$299/mo',
      description: 'Advanced technology platform for modern businesses',
      features: ['API Access', 'Cloud Storage', 'Real-time Sync'],
    },
    {
      id: 4,
      name: 'Enterprise Security',
      category: 'enterprise',
      price: '$799/mo',
      description: 'Enterprise-grade security solution',
      features: ['Threat Detection', 'Compliance Tools', 'Access Control'],
    },
  ];

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(product => product.category === activeCategory);

  return (
    <div className="min-h-screen py-16 px-4">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Our Products</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Choose the perfect solution for your needs
        </p>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg p-6"
            >
              <div className="mb-4">
                <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {product.description}
                </p>
              </div>
              <div className="mb-6">
                <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  {product.price}
                </span>
              </div>
              <div className="space-y-2">
                {product.features.map((feature) => (
                  <div key={`${product.id}-${feature}`} className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <title>Checkmark Icon</title>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
              <button
                type="button"
                className="w-full mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-4xl mx-auto text-center mt-20">
        <h2 className="text-3xl font-bold mb-4">Need a custom solution?</h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Contact our team to discuss your specific requirements
        </p>
        <button
          type="button"
          className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
        >
          Contact Sales
        </button>
      </div>
    </div>
  );
}

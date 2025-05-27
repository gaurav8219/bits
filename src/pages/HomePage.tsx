import React from 'react';
import HeroBanner from '../components/HeroBanner';
import ProductGrid from '../components/ProductGrid';
import { laptops, accessories, featuredDeals } from '../data/products';

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroBanner />
      
      <ProductGrid title="Latest Laptops" products={laptops.slice(0, 4)} />
      
      <div className="bg-gray-100 py-12">
        <ProductGrid title="Top Accessories" products={accessories.slice(0, 4)} />
      </div>
      
      <ProductGrid title="Deals of the Day" products={featuredDeals} />
      
    {/* Features Section */}
<section className="bg-white py-12">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      
      {/* Quality Assured */}
      <div className="text-center p-6">
        <div className="bg-[#FFE8CC] text-[#FF6B00] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Quality Assured</h3>
        <p className="text-gray-600">All products are carefully selected and quality tested</p>
      </div>

      {/* Fast Delivery */}
      <div className="text-center p-6">
        <div className="bg-[#D0F0FD] text-[#0077B6] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Fast Delivery</h3>
        <p className="text-gray-600">Quick shipping and hassle-free delivery to your doorstep</p>
      </div>

      {/* Secure Payments */}
      <div className="text-center p-6">
        <div className="bg-[#E2F0CB] text-[#2D6A4F] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Secure Payments</h3>
        <p className="text-gray-600">Multiple secure payment options for your convenience</p>
      </div>

    </div>
  </div>
</section>

      
      {/* Newsletter Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-gray-600 mb-6">Stay updated with our latest products and exclusive offers</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="input flex-grow"
                required
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
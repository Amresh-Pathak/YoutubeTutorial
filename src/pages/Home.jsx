import { Link } from 'react-router-dom';
import { FaTruck, FaShieldAlt, FaPrescriptionBottleAlt, FaArrowRight, FaPercent, FaClock } from 'react-icons/fa';
import medicines from '../data/medicines.json';
import { useCart } from '../context/CartContext';

const Home = () => {
    const { addToCart } = useCart();
    const featuredProducts = medicines.filter(p => p.rating >= 4.7).slice(0, 4);
    const categories = [
        { name: 'Pain Relief', icon: '💊', color: 'bg-blue-100 text-blue-600', border: 'border-blue-200' },
        { name: 'Cold & Flu', icon: '🧣', color: 'bg-green-100 text-green-600', border: 'border-green-200' },
        { name: 'Vitamins', icon: '🍊', color: 'bg-yellow-100 text-yellow-600', border: 'border-yellow-200' },
        { name: 'Diabetes Care', icon: '🩸', color: 'bg-red-100 text-red-600', border: 'border-red-200' },
    ];

    return (
        <div className="space-y-12 pb-16">
            {/* Hero Section - Enhanced */}
            <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
                </div>

                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                    <div className="md:w-1/2 space-y-5">
                        {/* Promotional Badge */}
                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-5 py-2.5 rounded-full font-bold text-sm shadow-lg animate-pulse">
                            <span className="text-lg">🎉</span>
                            <span>FLAT ₹200 OFF on orders above ₹999!</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                            Your Health, <br />
                            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">Our Priority</span>
                        </h1>
                        <p className="text-lg md:text-xl text-blue-50 max-w-lg leading-relaxed">
                            Trusted by over <span className="font-bold text-yellow-300">1 lakh+ families</span> across India. Get genuine medicines delivered with best prices guaranteed.
                        </p>

                        {/* Trust Badges */}
                        <div className="flex flex-wrap items-center gap-3 text-sm">
                            <div className="flex items-center gap-2 bg-white/15 px-4 py-2.5 rounded-lg backdrop-blur-md border border-white/20">
                                <span className="text-xl">✓</span>
                                <span className="font-semibold">100% Genuine</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/15 px-4 py-2.5 rounded-lg backdrop-blur-md border border-white/20">
                                <span className="text-xl">✓</span>
                                <span className="font-semibold">Licensed</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/15 px-4 py-2.5 rounded-lg backdrop-blur-md border border-white/20">
                                <span className="text-xl">🚚</span>
                                <span className="font-semibold">Pan India</span>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-3">
                            <Link
                                to="/shop"
                                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-xl text-blue-700 bg-white hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 duration-200"
                            >
                                <span className="mr-2 text-xl">🛒</span> Shop Now
                            </Link>
                            <Link
                                to="/cart"
                                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-base font-bold rounded-xl text-white hover:bg-white hover:text-blue-700 transition-all duration-200"
                            >
                                <span className="mr-2 text-xl">📋</span> Upload Prescription
                            </Link>
                        </div>
                    </div>

                    <div className="md:w-1/2 flex justify-center relative">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl opacity-20 blur-2xl"></div>
                            <img
                                src="https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&q=80&w=600"
                                alt="Pharmacy"
                                className="relative rounded-2xl shadow-2xl border-4 border-white/30 transform hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Promotional Offers Banner */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border-2 border-green-200 hover:shadow-lg transition-shadow">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-green-500 rounded-full">
                                <FaPercent className="text-white text-2xl" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 text-lg">Up to 30% OFF</h3>
                                <p className="text-sm text-gray-600">On all medicines</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border-2 border-blue-200 hover:shadow-lg transition-shadow">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-blue-500 rounded-full">
                                <FaClock className="text-white text-2xl" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 text-lg">Same Day Delivery</h3>
                                <p className="text-sm text-gray-600">In major cities</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border-2 border-purple-200 hover:shadow-lg transition-shadow">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-purple-500 rounded-full">
                                <FaShieldAlt className="text-white text-2xl" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 text-lg">100% Safe Payment</h3>
                                <p className="text-sm text-gray-600">Secure checkout</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section - Improved */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose MediCare Plus?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-md border-2 border-blue-100 hover:shadow-xl hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-1">
                        <div className="p-5 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white mb-4 shadow-lg">
                            <FaTruck size={32} />
                        </div>
                        <h3 className="font-bold text-lg mb-2 text-gray-900">Express Delivery</h3>
                        <p className="text-gray-600 text-sm">Same-day delivery in major cities across India</p>
                    </div>

                    <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-md border-2 border-green-100 hover:shadow-xl hover:border-green-300 transition-all duration-300 transform hover:-translate-y-1">
                        <div className="p-5 rounded-full bg-gradient-to-br from-green-500 to-green-600 text-white mb-4 shadow-lg">
                            <FaShieldAlt size={32} />
                        </div>
                        <h3 className="font-bold text-lg mb-2 text-gray-900">100% Authentic</h3>
                        <p className="text-gray-600 text-sm">All medicines sourced directly from manufacturers</p>
                    </div>

                    <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-md border-2 border-purple-100 hover:shadow-xl hover:border-purple-300 transition-all duration-300 transform hover:-translate-y-1">
                        <div className="p-5 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 text-white mb-4 shadow-lg">
                            <FaPrescriptionBottleAlt size={32} />
                        </div>
                        <h3 className="font-bold text-lg mb-2 text-gray-900">Easy Returns</h3>
                        <p className="text-gray-600 text-sm">7-day hassle-free returns policy</p>
                    </div>

                    <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-md border-2 border-orange-100 hover:shadow-xl hover:border-orange-300 transition-all duration-300 transform hover:-translate-y-1">
                        <div className="p-5 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 text-white mb-4 shadow-lg">
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <h3 className="font-bold text-lg mb-2 text-gray-900">Best Prices</h3>
                        <p className="text-gray-600 text-sm">Lowest prices guaranteed with cashback</p>
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-3xl font-bold text-gray-900">Popular Categories</h2>
                    <Link to="/shop" className="text-primary hover:text-blue-700 flex items-center font-semibold text-lg">
                        View All <FaArrowRight className="ml-2" />
                    </Link>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {categories.map((cat) => (
                        <Link
                            key={cat.name}
                            to={`/shop?category=${cat.name}`}
                            className={`${cat.color} ${cat.border} border-2 p-6 rounded-2xl text-center transition-all hover:shadow-xl transform hover:-translate-y-1 duration-200`}
                        >
                            <div className="text-4xl mb-3">{cat.icon}</div>
                            <h3 className="font-bold text-base">{cat.name}</h3>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Featured Products Section - Enhanced */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-3xl font-bold text-gray-900">Top Rated Products</h2>
                    <Link to="/shop" className="text-primary hover:text-blue-700 flex items-center font-semibold text-lg">
                        View All <FaArrowRight className="ml-2" />
                    </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {featuredProducts.map((product) => (
                        <div key={product.id} className="bg-white rounded-2xl shadow-md border-2 border-gray-100 overflow-hidden hover:shadow-2xl hover:border-primary transition-all duration-300 transform hover:-translate-y-2 group">
                            {/* Product Image */}
                            <div className="relative bg-gray-50 p-6">
                                {product.discount && (
                                    <span className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                                        {product.discount}% OFF
                                    </span>
                                )}
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-48 object-contain group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>

                            {/* Product Details */}
                            <div className="p-5">
                                <p className="text-xs text-gray-500 mb-1">{product.brand}</p>
                                <Link to={`/product/${product.id}`}>
                                    <h3 className="font-bold text-gray-900 hover:text-primary mb-2 line-clamp-2 text-sm">{product.name}</h3>
                                </Link>

                                {/* Rating */}
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="flex items-center bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">
                                        <span>★</span>
                                        <span className="ml-1">{product.rating}</span>
                                    </div>
                                    <span className="text-xs text-gray-500">({product.reviews})</span>
                                </div>

                                {/* Price */}
                                <div className="flex items-baseline gap-2 mb-4">
                                    <span className="text-2xl font-bold text-primary">₹{product.price.toFixed(2)}</span>
                                    {product.originalPrice && (
                                        <span className="text-sm text-gray-400 line-through">₹{product.originalPrice.toFixed(2)}</span>
                                    )}
                                </div>

                                {/* Stock & Express Delivery */}
                                <div className="flex items-center justify-between mb-4">
                                    {product.inStock ? (
                                        <span className="text-xs text-green-600 font-semibold">✓ In Stock</span>
                                    ) : (
                                        <span className="text-xs text-red-600 font-semibold">Out of Stock</span>
                                    )}
                                    {product.expressDelivery && (
                                        <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded font-semibold">⚡ Express</span>
                                    )}
                                </div>

                                {/* Add to Cart Button */}
                                <button
                                    onClick={() => addToCart(product)}
                                    className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all shadow-md hover:shadow-lg transform active:scale-95"
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">What Our Customers Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-100 hover:shadow-xl transition-all">
                                <div className="flex items-center gap-1 mb-4 text-yellow-400 text-lg">
                                    {[...Array(5)].map((_, idx) => (
                                        <span key={idx}>★</span>
                                    ))}
                                </div>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    "Excellent service and genuine medicines. Fast delivery and great prices. Highly recommended!"
                                </p>
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500"></div>
                                    <div>
                                        <p className="font-bold text-gray-900">{['Rahul Sharma', 'Priya Patel', 'Amit Singh'][i - 1]}</p>
                                        <p className="text-xs text-gray-500">Verified Customer</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;

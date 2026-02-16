import { Link } from 'react-router-dom';
import { FaTruck, FaShieldAlt, FaPrescriptionBottleAlt, FaArrowRight } from 'react-icons/fa';
import medicines from '../data/medicines.json';

const Home = () => {
    const featuredProducts = medicines.filter(p => p.rating >= 4.7).slice(0, 4);
    const categories = [
        { name: 'Pain Relief', icon: '💊', color: 'bg-blue-100 text-blue-600' },
        { name: 'Cold & Flu', icon: '🧣', color: 'bg-green-100 text-green-600' },
        { name: 'Vitamins', icon: '🍊', color: 'bg-yellow-100 text-yellow-600' },
        { name: 'Diabetes Care', icon: '🩸', color: 'bg-red-100 text-red-600' },
    ];

    return (
        <div className="space-y-16 pb-16">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="md:w-1/2 space-y-6">
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                            Your Health, <br />
                            <span className="text-blue-200">Our Priority</span>
                        </h1>
                        <p className="text-lg text-blue-100 max-w-lg">
                            Get genuine medicines, health supplements, and personal care products delivered to your doorstep. Safe, fast, and reliable.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                to="/shop"
                                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-blue-700 bg-white hover:bg-gray-50 transition-colors shadow-lg"
                            >
                                Shop Medicines
                            </Link>
                            <Link
                                to="/register"
                                className="inline-flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-full text-white hover:bg-white hover:text-blue-700 transition-colors"
                            >
                                Sign Up Now
                            </Link>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                        <img
                            src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&q=80&w=600"
                            alt="Pharmacy"
                            className="rounded-2xl shadow-2xl border-4 border-white/20"
                        />
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex items-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                        <div className="p-4 rounded-full bg-blue-50 text-blue-600 mr-4">
                            <FaTruck size={24} />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg">Fast Delivery</h3>
                            <p className="text-gray-500 text-sm">Same-day delivery in select cities</p>
                        </div>
                    </div>
                    <div className="flex items-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                        <div className="p-4 rounded-full bg-green-50 text-green-600 mr-4">
                            <FaShieldAlt size={24} />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg">Secure Payment</h3>
                            <p className="text-gray-500 text-sm">100% secure checkout process</p>
                        </div>
                    </div>
                    <div className="flex items-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                        <div className="p-4 rounded-full bg-purple-50 text-purple-600 mr-4">
                            <FaPrescriptionBottleAlt size={24} />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg">Genuine Meds</h3>
                            <p className="text-gray-500 text-sm">Sourced directly from manufacturers</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-8">
                    <h2 className="text-3xl font-bold text-gray-900">Popular Categories</h2>
                    <Link to="/shop" className="text-primary hover:text-blue-700 flex items-center font-medium">
                        View All <FaArrowRight className="ml-2" />
                    </Link>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {categories.map((cat) => (
                        <Link
                            key={cat.name}
                            to={`/shop?category=${encodeURIComponent(cat.name)}`}
                            className="group block"
                        >
                            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow group-hover:-translate-y-1 duration-300">
                                <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center text-3xl mb-4 ${cat.color}`}>
                                    {cat.icon}
                                </div>
                                <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">{cat.name}</h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Featured Products */}
            <section className="bg-gray-50 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-end mb-8">
                        <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
                        <Link to="/shop" className="text-primary hover:text-blue-700 flex items-center font-medium">
                            View All <FaArrowRight className="ml-2" />
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {featuredProducts.map((product) => (
                            <div key={product.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
                                <div className="relative h-48 bg-white p-4 flex items-center justify-center group">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="h-full object-contain group-hover:scale-105 transition-transform duration-300"
                                    />
                                    {product.prescriptionRequired && (
                                        <span className="absolute top-2 right-2 bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded">
                                            Rx
                                        </span>
                                    )}
                                </div>
                                <div className="p-4">
                                    <p className="text-xs text-gray-500 mb-1">{product.category}</p>
                                    <Link to={`/product/${product.id}`}>
                                        <h3 className="font-bold text-gray-900 mb-1 hover:text-primary truncate">{product.name}</h3>
                                    </Link>
                                    <p className="text-sm text-gray-600 mb-3 truncate">{product.description}</p>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <span className="text-lg font-bold text-primary">₹{product.price.toFixed(2)}</span>
                                            {product.originalPrice && (
                                                <span className="text-sm text-gray-400 line-through ml-2">₹{product.originalPrice.toFixed(2)}</span>
                                            )}
                                        </div>
                                        <Link
                                            to={`/product/${product.id}`}
                                            className="p-2 bg-blue-50 text-primary rounded-full hover:bg-primary hover:text-white transition-colors"
                                        >
                                            <FaArrowRight />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">What Our Customers Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                            <div className="flex items-center gap-1 text-yellow-400 mb-4">
                                {'★'.repeat(5)}
                            </div>
                            <p className="text-gray-600 mb-6 italic">
                                "Amazing service! The delivery was super fast and the packaging was excellent. Highly recommended for all medical needs."
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                                <div>
                                    <p className="font-semibold text-gray-900">{['Rahul Sharma', 'Priya Patel', 'Amit Singh'][i - 1]}</p>
                                    <p className="text-xs text-gray-500">Verified Customer</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;

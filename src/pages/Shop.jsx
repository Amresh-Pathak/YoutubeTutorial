import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import medicines from '../data/medicines.json';
import { useCart } from '../context/CartContext';

const Shop = () => {
    const { addToCart } = useCart();
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [priceRange, setPriceRange] = useState([0, 1000]);
    const [sortBy, setSortBy] = useState('popular');
    const [searchQuery, setSearchQuery] = useState('');

    const categories = ['All', ...new Set(medicines.map(m => m.category))];

    const filterMedicines = () => {
        let filtered = medicines;

        // Category filter
        if (selectedCategory !== 'All') {
            filtered = filtered.filter(m => m.category === selectedCategory);
        }

        // Price filter
        filtered = filtered.filter(m => m.price >= priceRange[0] && m.price <= priceRange[1]);

        // Search filter
        if (searchQuery) {
            filtered = filtered.filter(m =>
                m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                m.brand.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        // Sort
        if (sortBy === 'price-low') filtered.sort((a, b) => a.price - b.price);
        else if (sortBy === 'price-high') filtered.sort((a, b) => b.price - a.price);
        else if (sortBy === 'name') filtered.sort((a, b) => a.name.localeCompare(b.name));
        else filtered.sort((a, b) => b.rating - a.rating);

        return filtered;
    };

    const filteredProducts = filterMedicines();

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Shop Medicines</h1>
            <p className="text-gray-600 mb-8">Browse our wide range of authentic medicines</p>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Filters Sidebar */}
                <div className="lg:w-1/4">
                    <div className="bg-white p-6 rounded-2xl shadow-md border-2 border-gray-100 sticky top-4">
                        <h3 className="text-lg font-bold mb-4 text-gray-900">Filters</h3>

                        {/* Search */}
                        <div className="mb-6">
                            <label className="block text-sm font-semibold mb-2">Search</label>
                            <input
                                type="text"
                                placeholder="Search medicines..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary"
                            />
                        </div>

                        {/* Category Filter */}
                        <div className="mb-6">
                            <h4 className="font-semibold mb-3">Category</h4>
                            <div className="space-y-2">
                                {categories.map(cat => (
                                    <button
                                        key={cat}
                                        onClick={() => setSelectedCategory(cat)}
                                        className={`w-full text-left px-4 py-2 rounded-lg transition-all ${selectedCategory === cat
                                                ? 'bg-primary text-white font-semibold shadow-md'
                                                : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                                            }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Price Filter */}
                        <div>
                            <h4 className="font-semibold mb-3">Price Range</h4>
                            <input
                                type="range"
                                min="0"
                                max="1000"
                                value={priceRange[1]}
                                onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                            />
                            <div className="flex justify-between text-sm text-gray-600 mt-2 font-semibold">
                                <span>₹0</span>
                                <span>₹{priceRange[1]}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Products Grid */}
                <div className="lg:w-3/4">
                    {/* Sort and Results Count */}
                    <div className="flex justify-between items-center mb-6 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                        <p className="text-gray-600 font-semibold">
                            <span className="text-primary text-xl">{filteredProducts.length}</span> Products Found
                        </p>
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary font-semibold"
                        >
                            <option value="popular">Most Popular</option>
                            <option value="price-low">Price: Low to High</option>
                            <option value="price-high">Price: High to Low</option>
                            <option value="name">Name</option>
                        </select>
                    </div>

                    {filteredProducts.length === 0 ? (
                        <div className="text-center py-16 bg-gray-50 rounded-2xl">
                            <p className="text-2xl text-gray-400 mb-2">😔</p>
                            <p className="text-gray-600 font-semibold">No products found</p>
                            <p className="text-gray-500 text-sm">Try adjusting your filters</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredProducts.map((product) => (
                                <div key={product.id} className="bg-white rounded-2xl shadow-md border-2 border-gray-100 overflow-hidden hover:shadow-2xl hover:border-primary transition-all duration-300 transform hover:-translate-y-2 group">
                                    {/* Product Image */}
                                    <div className="relative bg-gray-50 p-6">
                                        {product.discount && (
                                            <span className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg z-10">
                                                {product.discount}% OFF
                                            </span>
                                        )}
                                        {product.prescriptionRequired && (
                                            <span className="absolute top-3 right-3 bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full shadow-md z-10">
                                                Rx Required
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
                    )}
                </div>
            </div>
        </div>
    );
};

export default Shop;

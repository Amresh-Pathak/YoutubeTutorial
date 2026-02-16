import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { FaFilter, FaSortAmountDown } from 'react-icons/fa';
import medicines from '../data/medicines.json';
import { useCart } from '../context/CartContext';

const Shop = () => {
    const [searchParams] = useSearchParams();
    const categoryParam = searchParams.get('category');
    const searchParam = searchParams.get('search');

    const [selectedCategory, setSelectedCategory] = useState(categoryParam || 'All');
    const [priceRange, setPriceRange] = useState([0, 1000]);
    const [sortBy, setSortBy] = useState('popularity');
    const { addToCart } = useCart();

    const categories = ['All', ...new Set(medicines.map(m => m.category))];

    const filteredProducts = useMemo(() => {
        return medicines
            .filter(product => {
                const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
                const matchesSearch = !searchParam || product.name.toLowerCase().includes(searchParam.toLowerCase());
                const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
                return matchesCategory && matchesSearch && matchesPrice;
            })
            .sort((a, b) => {
                if (sortBy === 'price-low') return a.price - b.price;
                if (sortBy === 'price-high') return b.price - a.price;
                if (sortBy === 'popularity') return b.reviews - a.reviews;
                return 0;
            });
    }, [selectedCategory, searchParam, priceRange, sortBy]);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row gap-8">
                {/* Sidebar Filters */}
                <div className="w-full md:w-64 space-y-8">
                    <div>
                        <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                            <FaFilter className="text-primary" /> Filters
                        </h3>

                        {/* Category Filter */}
                        <div className="mb-6">
                            <h4 className="font-medium mb-3">Category</h4>
                            <div className="space-y-2">
                                {categories.map(cat => (
                                    <label key={cat} className="flex items-center space-x-2 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="category"
                                            checked={selectedCategory === cat}
                                            onChange={() => setSelectedCategory(cat)}
                                            className="text-primary focus:ring-primary h-4 w-4"
                                        />
                                        <span className="text-gray-700">{cat}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Price Filter */}
                        <div>
                            <h4 className="font-medium mb-3">Price Range</h4>
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={priceRange[1]}
                                onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                            />
                            <div className="flex justify-between text-sm text-gray-600 mt-2">
                                <span>₹0</span>
                                <span>₹{priceRange[1]}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Product Grid */}
                <div className="flex-1">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-gray-900">
                            {selectedCategory === 'All' ? 'All Medicines' : selectedCategory}
                            <span className="text-sm font-normal text-gray-500 ml-2">
                                ({filteredProducts.length} items)
                            </span>
                        </h2>

                        <div className="flex items-center gap-2">
                            <FaSortAmountDown className="text-gray-500" />
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="border-gray-300 rounded-md text-sm focus:ring-primary focus:border-primary p-2 border"
                            >
                                <option value="popularity">Popularity</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                            </select>
                        </div>
                    </div>

                    {filteredProducts.length === 0 ? (
                        <div className="text-center py-12">
                            <h3 className="text-lg font-medium text-gray-900">No products found</h3>
                            <p className="text-gray-500">Try adjusting your search or filters.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredProducts.map((product) => (
                                <div key={product.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                                    <div className="relative h-48 p-4 group">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                                        />
                                        {product.prescriptionRequired && (
                                            <span className="absolute top-2 right-2 bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded">
                                                Rx Required
                                            </span>
                                        )}
                                    </div>
                                    <div className="p-4">
                                        <p className="text-xs text-gray-500 mb-1">{product.category}</p>
                                        <Link to={`/product/${product.id}`}>
                                            <h3 className="font-semibold text-gray-900 hover:text-primary mb-2 line-clamp-1">{product.name}</h3>
                                        </Link>
                                        <div className="flex items-center justify-between mt-4">
                                            <span className="text-lg font-bold text-primary">₹{product.price.toFixed(2)}</span>
                                            <button
                                                onClick={() => addToCart(product)}
                                                className="px-4 py-2 bg-blue-50 text-blue-600 font-medium rounded-lg hover:bg-primary hover:text-white transition-colors text-sm"
                                            >
                                                Add to Cart
                                            </button>
                                        </div>
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

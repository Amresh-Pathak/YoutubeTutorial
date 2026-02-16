import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaStar, FaShoppingCart, FaTruck, FaShieldAlt } from 'react-icons/fa';
import medicines from '../data/medicines.json';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
    const { id } = useParams();
    const { addToCart } = useCart();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState('description');

    useEffect(() => {
        const found = medicines.find(p => p.id === parseInt(id));
        setProduct(found);
        window.scrollTo(0, 0);
    }, [id]);

    if (!product) {
        return <div className="p-12 text-center text-gray-500">Product not found</div>;
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Breadcrumb */}
            <nav className="text-sm text-gray-500 mb-8">
                <Link to="/" className="hover:text-primary">Home</Link> /
                <Link to="/shop" className="hover:text-primary mx-1">Shop</Link> /
                <span className="text-gray-900 mx-1">{product.name}</span>
            </nav>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                {/* Product Image */}
                <div className="bg-white rounded-2xl p-8 border border-gray-100 flex items-center justify-center">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="max-h-96 object-contain"
                    />
                </div>

                {/* Product Info */}
                <div className="space-y-6">
                    <div>
                        <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full mb-2">
                            {product.category}
                        </span>
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="flex text-yellow-400 text-sm">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} className={i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'} />
                                ))}
                            </div>
                            <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
                        </div>
                        <p className="text-xl font-bold text-primary mb-1">₹{product.price.toFixed(2)}</p>
                        {product.prescriptionRequired && (
                            <div className="bg-red-50 text-red-600 px-4 py-2 rounded-lg text-sm font-medium border border-red-100 inline-block">
                                ⚠️ Prescription Required for purchase
                            </div>
                        )}
                    </div>

                    <p className="text-gray-600 leading-relaxed">
                        {product.description}
                    </p>

                    <div className="border-t border-b border-gray-200 py-6 space-y-4">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center border border-gray-300 rounded-lg">
                                <button
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                                >
                                    -
                                </button>
                                <span className="px-3 py-1 text-gray-900 min-w-[2rem] text-center">{quantity}</span>
                                <button
                                    onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                                    className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                                >
                                    +
                                </button>
                            </div>
                            <button
                                onClick={() => addToCart(product, quantity)}
                                className="flex-1 bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                            >
                                <FaShoppingCart /> Add to Cart
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                            <FaTruck className="text-primary" /> Free Delivery over ₹500
                        </div>
                        <div className="flex items-center gap-2">
                            <FaShieldAlt className="text-primary" /> Genuine Product
                        </div>
                    </div>
                </div>
            </div>

            {/* Product Details Tabs */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="flex border-b border-gray-200">
                    {['description', 'usage', 'reviews'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-8 py-4 font-medium text-sm capitalize transition-colors ${activeTab === tab
                                ? 'border-b-2 border-primary text-primary bg-blue-50/50'
                                : 'text-gray-500 hover:text-gray-700'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
                <div className="p-8">
                    {activeTab === 'description' && (
                        <div className="space-y-4">
                            <h3 className="font-bold text-lg">Product Details</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <span className="font-semibold block text-gray-900">Brand</span>
                                    <span className="text-gray-600">{product.brand}</span>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <span className="font-semibold block text-gray-900">Composition</span>
                                    <span className="text-gray-600">{product.details.composition}</span>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <span className="font-semibold block text-gray-900">Side Effects</span>
                                    <span className="text-gray-600">{product.details.sideEffects.join(', ')}</span>
                                </div>
                            </div>
                        </div>
                    )}
                    {activeTab === 'usage' && (
                        <div className="space-y-4">
                            <h3 className="font-bold text-lg">Dosage & Administration</h3>
                            <p className="text-gray-600">{product.details.dosage}</p>
                            <div className="bg-yellow-50 text-yellow-800 p-4 rounded-lg border border-yellow-100">
                                <strong>Note:</strong> Always consult your physician before starting any new medication.
                            </div>
                        </div>
                    )}
                    {activeTab === 'reviews' && (
                        <div className="text-center py-8 text-gray-500">
                            No reviews yet. Be the first to review this product!
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;

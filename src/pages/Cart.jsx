import { Link } from 'react-router-dom';
import { FaTrash, FaArrowLeft, FaFilePrescription, FaCreditCard } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';

const Cart = () => {
    const { cart, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();
    const { user } = useAuth();

    const handleCheckout = () => {
        if (!user) {
            toast.error('Please login to continue checkout');
            return;
        }
        toast.success('Proceeding to checkout...');
        // In a real app, this would navigate to a checkout page
        // For now, we'll simulate a completed order
        setTimeout(() => {
            clearCart();
            toast.success("Order Placed Successfully!")
        }, 2000)
    };

    const hasPrescriptionItems = cart.some(item => item.prescriptionRequired);

    if (cart.length === 0) {
        return (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
                <div className="mb-6">
                    <img
                        src="https://illustrations.popsy.co/amber/medical-research.svg"
                        alt="Empty Cart"
                        className="w-64 h-64 mx-auto opacity-50"
                    />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
                <p className="text-gray-500 mb-8">Looks like you haven't added any medicines yet.</p>
                <Link
                    to="/shop"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-blue-700"
                >
                    <FaArrowLeft className="mr-2" /> Continue Shopping
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Cart Items */}
                <div className="lg:col-span-2 space-y-4">
                    {cart.map((item) => (
                        <div key={item.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex gap-4">
                            <div className="w-24 h-24 flex-shrink-0 bg-gray-50 rounded-lg p-2">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div className="flex-1 flex flex-col justify-between">
                                <div>
                                    <div className="flex justify-between items-start">
                                        <h3 className="font-semibold text-gray-900 line-clamp-1">{item.name}</h3>
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="text-red-500 hover:text-red-700 p-1"
                                        >
                                            <FaTrash />
                                        </button>
                                    </div>
                                    <p className="text-sm text-gray-500">{item.brand}</p>
                                    {item.prescriptionRequired && (
                                        <span className="text-xs text-red-600 font-medium bg-red-50 px-2 py-0.5 rounded inline-block mt-1">
                                            Rx Required
                                        </span>
                                    )}
                                </div>
                                <div className="flex justify-between items-end mt-2">
                                    <div className="flex items-center border border-gray-300 rounded-lg h-8">
                                        <button
                                            onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                                            className="px-2 text-gray-600 hover:bg-gray-100 h-full flex items-center"
                                        >
                                            -
                                        </button>
                                        <span className="px-2 text-gray-900 text-sm font-medium w-8 text-center">{item.quantity}</span>
                                        <button
                                            onClick={() => updateQuantity(item.id, Math.min(item.stock, item.quantity + 1))}
                                            className="px-2 text-gray-600 hover:bg-gray-100 h-full flex items-center"
                                        >
                                            +
                                        </button>
                                    </div>
                                    <span className="font-bold text-primary">₹{(item.price * item.quantity).toFixed(2)}</span>
                                </div>
                            </div>
                        </div>
                    ))}

                    {hasPrescriptionItems && (
                        <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mt-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white rounded-full text-primary shadow-sm">
                                    <FaFilePrescription size={24} />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-gray-900 mb-1">Prescription Required</h3>
                                    <p className="text-sm text-gray-600 mb-4">
                                        Some items in your cart require a valid prescription. Please upload it before checkout.
                                    </p>
                                    <label className="block w-full">
                                        <span className="sr-only">Choose file</span>
                                        <input
                                            type="file"
                                            className="block w-full text-sm text-gray-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                        file:bg-blue-100 file:text-blue-700
                        hover:file:bg-blue-200
                      "
                                            accept=".jpg,.png,.pdf"
                                        />
                                    </label>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sticky top-24">
                        <h2 className="text-lg font-bold text-gray-900 mb-6">Order Summary</h2>
                        <div className="space-y-4 text-sm">
                            <div className="flex justify-between text-gray-600">
                                <span>Subtotal</span>
                                <span>₹{cartTotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-gray-600">
                                <span>Shipping</span>
                                <span className="text-green-600">Free</span>
                            </div>
                            <div className="flex justify-between text-gray-600">
                                <span>Tax (Mainly 0%)</span>
                                <span>₹0.00</span>
                            </div>
                            <div className="h-px bg-gray-200 my-4" />
                            <div className="flex justify-between text-lg font-bold text-gray-900">
                                <span>Total</span>
                                <span>₹{cartTotal.toFixed(2)}</span>
                            </div>
                        </div>

                        <button
                            onClick={handleCheckout}
                            className="w-full mt-8 bg-primary text-white py-3 rounded-xl font-bold shadow-lg shadow-blue-500/30 hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
                        >
                            <FaCreditCard /> Proceed to Checkout
                        </button>
                        <p className="text-center text-xs text-gray-400 mt-4">
                            Secure checkout powered by Stripe (Mock)
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;

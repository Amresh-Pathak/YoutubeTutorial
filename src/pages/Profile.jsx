import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaPhone, FaMapMarkerAlt, FaEnvelope, FaBoxOpen, FaHistory } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
    const { user } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, [user, navigate]);

    if (!user) return null;

    // Mock Orders
    const orders = [
        { id: '#ORD-7829', date: 'Oct 24, 2023', total: 45.50, status: 'Delivered', items: 3 },
        { id: '#ORD-8291', date: 'Nov 12, 2023', total: 125.00, status: 'Processing', items: 5 },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* User Info Card */}
                <div className="md:col-span-1">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center">
                        <div className="relative inline-block mb-4">
                            <img
                                src={user.avatar}
                                alt={user.name}
                                className="w-32 h-32 rounded-full border-4 border-blue-50 mx-auto"
                            />
                            <span className="absolute bottom-2 right-2 bg-green-500 w-4 h-4 rounded-full border-2 border-white"></span>
                        </div>
                        <h2 className="text-xl font-bold text-gray-900 mb-1">{user.name}</h2>
                        <p className="text-gray-500 text-sm mb-6">Patient ID: 89234912</p>

                        <div className="space-y-4 text-left">
                            <div className="flex items-center gap-3 text-gray-600">
                                <FaEnvelope className="text-gray-400" />
                                <span>{user.email}</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-600">
                                <FaPhone className="text-gray-400" />
                                <span>{user.phone || '+1 (555) 000-0000'}</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-600">
                                <FaMapMarkerAlt className="text-gray-400" />
                                <span>{user.address || '123 Health Street, NY'}</span>
                            </div>
                        </div>

                        <button className="w-full mt-6 px-4 py-2 border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors">
                            Edit Profile
                        </button>
                    </div>
                </div>

                {/* Dashboard Content */}
                <div className="md:col-span-2 space-y-6">
                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-blue-50 rounded-xl p-6 flex items-center gap-4">
                            <div className="p-3 bg-white rounded-lg text-blue-600">
                                <FaBoxOpen size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Total Orders</p>
                                <p className="text-2xl font-bold text-gray-900">12</p>
                            </div>
                        </div>
                        <div className="bg-green-50 rounded-xl p-6 flex items-center gap-4">
                            <div className="p-3 bg-white rounded-lg text-green-600">
                                <FaHistory size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Pending</p>
                                <p className="text-2xl font-bold text-gray-900">1</p>
                            </div>
                        </div>
                    </div>

                    {/* Recent Orders */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                            <h3 className="font-bold text-lg text-gray-900">Recent Orders</h3>
                            <button className="text-primary text-sm font-medium hover:underline">View All</button>
                        </div>
                        <div className="divide-y divide-gray-100">
                            {orders.map((order) => (
                                <div key={order.id} className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors">
                                    <div>
                                        <p className="font-semibold text-gray-900">{order.id}</p>
                                        <p className="text-sm text-gray-500">{order.date} • {order.items} Items</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-bold text-gray-900">₹{order.total.toFixed(2)}</p>
                                        <span className={`inline-block px-2 py-1 text-xs rounded-full ${order.status === 'Delivered' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                                            }`}>
                                            {order.status}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;

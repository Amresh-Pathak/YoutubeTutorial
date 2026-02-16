import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-12 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="col-span-1 md:col-span-1">
                        <Link to="/" className="text-2xl font-bold text-white flex items-center gap-2 mb-4">
                            <span className="text-3xl text-primary">+</span> MediCare Plus
                        </Link>
                        <p className="text-gray-400 text-sm mb-6">
                            Your trusted online pharmacy for authentic medicines, health products, and expert advice. Delivered to your doorstep with care.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><FaFacebook size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><FaTwitter size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><FaInstagram size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><FaLinkedin size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
                            <li><Link to="/shop" className="hover:text-primary transition-colors">Shop Medicines</Link></li>
                            <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                            <li><Link to="/blog" className="hover:text-primary transition-colors">Health Blog</Link></li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Categories</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link to="/shop?category=Pain Relief" className="hover:text-primary transition-colors">Pain Relief</Link></li>
                            <li><Link to="/shop?category=Cold & Flu" className="hover:text-primary transition-colors">Cold & Flu</Link></li>
                            <li><Link to="/shop?category=Vitamins" className="hover:text-primary transition-colors">Vitamins & Supplements</Link></li>
                            <li><Link to="/shop?category=Diabetes Care" className="hover:text-primary transition-colors">Diabetes Care</Link></li>
                            <li><Link to="/shop?category=Personal Care" className="hover:text-primary transition-colors">Personal Care</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li className="flex items-start gap-3">
                                <FaMapMarkerAlt className="mt-1 text-primary" />
                                <span>123, Health Avenue, Bandra West,<br />Mumbai, Maharashtra 400050</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <FaPhone className="text-primary" />
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <FaEnvelope className="text-primary" />
                                <span>support@medicareplus.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} MediCare Plus. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

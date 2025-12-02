import {
  Image,
  Users,
  Clock,
  BarChart3,
  ShoppingCart,
  Zap,
  Globe,
  Send,
  Camera,
  Mic,
  Smile,
  MoreHorizontal,
} from 'lucide-react';
import FashionLogo from '../../assests/fashion_store_logo.png';
import SummerDress from '../../assests/summer_dress_coral.png';
import ElectronicsLogo from '../../assests/electronics_store_logo.png';
import Iphone15 from '../../assests/iphone15.png';
import Color1 from '../../assests/color1.png';
import Color2 from '../../assests/color2.png';
import Color3 from '../../assests/color3.png';

const UseCases = () => {
  return (
    <div className="mt-20">
      <div className="text-center mb-16">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          See komoChat in Action
        </h3>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Real business scenarios where our AI agents transform customer
          interactions into sales opportunities through natural conversations
        </p>
      </div>

      <div className="space-y-12">
        {/* E-commerce Product Inquiry Use Case */}
        <div className="bg-blue-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border border-blue-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center mr-3 sm:mr-4">
                  <Image className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-gray-900">
                  E-commerce Product Inquiry
                </h4>
              </div>

              {/* Messenger-style Chat Interface */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                {/* Chat Header */}
                <div className="bg-blue-600 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3 overflow-hidden">
                      <img
                        src={FashionLogo}
                        alt="Fashion Store"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">Fashion Store</p>
                      <p className="text-xs text-blue-100">
                        Online • 2 min ago
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="p-1 hover:bg-white/10 rounded">
                      <Camera className="w-4 h-4" />
                    </button>
                    <button className="p-1 hover:bg-white/10 rounded">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
                  {/* Customer Message */}
                  <div className="flex justify-end">
                    <div className="bg-blue-500 text-white rounded-2xl rounded-br-md px-4 py-2 max-w-xs">
                      <p className="text-sm">
                        Hi! I saw this dress on Instagram. Do you have it in
                        size M and what colors are available?
                      </p>
                    </div>
                  </div>

                  {/* Image Message */}
                  <div className="flex justify-end">
                    <div className="bg-blue-500 text-white rounded-2xl rounded-br-md px-4 py-2">
                      <div className="w-48 h-32 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                        <img
                          src={SummerDress}
                          alt="Product"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  {/* AI Response */}
                  <div className="flex justify-start">
                    <div className="bg-gray-100 text-gray-900 rounded-2xl rounded-bl-md px-4 py-2 max-w-xs">
                      <p className="text-sm">
                        Perfect choice! That's our bestselling summer dress. I
                        have it in size M in navy blue and coral pink. The coral
                        would look amazing with your skin tone based on your
                        profile. Would you like me to reserve one while you
                        decide? I can also show you our matching accessories
                        that other customers love with this dress.
                      </p>
                    </div>
                  </div>

                  {/* Product Suggestions */}
                  <div className="flex justify-start">
                    <div className="bg-gray-100 rounded-2xl rounded-bl-md p-3 max-w-xs">
                      <div className="flex space-x-2">
                        <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                          <img
                            src={SummerDress}
                            alt="Summer Dress"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <p className="text-xs font-semibold text-gray-900">
                            Summer Dress - Coral
                          </p>
                          <p className="text-xs text-gray-600">
                            Size M • $89.99
                          </p>
                          <p className="text-xs text-blue-600">In Stock</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quick Reply Buttons */}
                  <div className="flex justify-start">
                    <div className="bg-gray-100 rounded-2xl rounded-bl-md p-3">
                      <div className="flex space-x-2">
                        <button className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full">
                          Reserve Now
                        </button>
                        <button className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full">
                          Show More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Chat Input */}
                <div className="border-t border-gray-200 p-4">
                  <div className="flex items-center space-x-2">
                    <button className="p-2 hover:bg-gray-100 rounded-full">
                      <Smile className="w-5 h-5 text-gray-400" />
                    </button>
                    <div className="flex-1 bg-gray-100 rounded-full px-4 py-2">
                      <input
                        type="text"
                        placeholder="Type a message..."
                        className="bg-transparent w-full text-sm outline-none"
                      />
                    </div>
                    <button className="p-2 hover:bg-gray-100 rounded-full">
                      <Mic className="w-5 h-5 text-gray-400" />
                    </button>
                    <button className="p-2 bg-blue-500 text-white rounded-full">
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h5 className="text-lg font-semibold text-gray-900 mb-4">
                Performance Metrics
              </h5>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <div className="flex items-center justify-center mb-2">
                    <Clock className="w-5 h-5 text-blue-600 mr-2" />
                  </div>
                  <p className="text-2xl font-bold text-blue-600">&lt;10s</p>
                  <p className="text-sm text-gray-600">Smart Reply Timing</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <div className="flex items-center justify-center mb-2">
                    <BarChart3 className="w-5 h-5 text-green-600 mr-2" />
                  </div>
                  <p className="text-2xl font-bold text-green-600">+65%</p>
                  <p className="text-sm text-gray-600">Conversion Rate</p>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-xl">
                  <div className="flex items-center justify-center mb-2">
                    <ShoppingCart className="w-5 h-5 text-purple-600 mr-2" />
                  </div>
                  <p className="text-2xl font-bold text-purple-600">+40%</p>
                  <p className="text-sm text-gray-600">Average Order Value</p>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-xl">
                  <div className="flex items-center justify-center mb-2">
                    <Users className="w-5 h-5 text-orange-600 mr-2" />
                  </div>
                  <p className="text-2xl font-bold text-orange-600">95%</p>
                  <p className="text-sm text-gray-600">Customer Satisfaction</p>
                </div>
              </div>

              {/* AI Processing Flow */}
              <div className="mt-6 p-4 bg-blue-600 rounded-xl text-white">
                <p className="text-sm text-blue-100 mb-3 font-semibold">
                  AI Response Flow
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <p>ImageAgent recognizes the specific Product</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <p>Checks real-time inventory and product details</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <p>Identifies Products get full details</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <p>Generates personalized chat response</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Image Request Use Case */}
        <div className="bg-teal-50 rounded-3xl p-8 md:p-12 border border-teal-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center mr-4">
                  <Image className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900">
                  Product Image Requests
                </h4>
              </div>

              {/* Messenger-style Chat Interface */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                {/* Chat Header */}
                <div className="bg-teal-600 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3 overflow-hidden">
                      <img
                        src={ElectronicsLogo}
                        alt="Electronics Store"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">Electronics Store</p>
                      <p className="text-xs text-teal-100">
                        Online • 1 min ago
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="p-1 hover:bg-white/10 rounded">
                      <Camera className="w-4 h-4" />
                    </button>
                    <button className="p-1 hover:bg-white/10 rounded">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
                  {/* Customer Message */}
                  <div className="flex justify-end">
                    <div className="bg-teal-500 text-white rounded-2xl rounded-br-md px-4 py-2 max-w-xs">
                      <p className="text-sm">
                        Can you show me images of the latest iPhone models? I
                        want to see the different colors available.
                      </p>
                    </div>
                  </div>

                  {/* AI Processing Indicator */}
                  <div className="flex justify-start">
                    <div className="bg-gray-100 text-gray-900 rounded-2xl rounded-bl-md px-4 py-2">
                      <div className="flex items-center space-x-2">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div
                            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                            style={{ animationDelay: '0.1s' }}
                          ></div>
                          <div
                            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                            style={{ animationDelay: '0.2s' }}
                          ></div>
                        </div>
                        <span className="text-sm">
                          Finding product images...
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* AI Response */}
                  <div className="flex justify-start">
                    <div className="bg-gray-100 text-gray-900 rounded-2xl rounded-bl-md px-4 py-2 max-w-xs">
                      <p className="text-sm">
                        Absolutely! Here are the latest iPhone models with all
                        available colors. I've included both front and back
                        views so you can see the full design.
                      </p>
                    </div>
                  </div>

                  {/* Product Images Grid */}
                  <div className="flex justify-start">
                    <div className="bg-gray-100 rounded-2xl rounded-bl-md p-3 max-w-xs">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="relative">
                          <div className="w-20 h-20 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
                            <img
                              src={Iphone15}
                              alt="iPhone 15 Pro"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <span className="text-xs text-gray-500 block mt-1 text-center">
                            iPhone 15 Pro
                          </span>
                        </div>
                        <div className="relative">
                          <div className="w-20 h-20 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
                            <img
                              src={Color1}
                              alt="Natural Titanium"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <span className="text-xs text-gray-500 block mt-1 text-center">
                            Natural Titanium
                          </span>
                        </div>
                        <div className="relative">
                          <div className="w-20 h-20 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
                            <img
                              src={Color2}
                              alt="Blue Titanium"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <span className="text-xs text-gray-500 block mt-1 text-center">
                            Blue Titanium
                          </span>
                        </div>
                        <div className="relative">
                          <div className="w-20 h-20 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
                            <img
                              src={Color3}
                              alt="White Titanium"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <span className="text-xs text-gray-500 block mt-1 text-center">
                            White Titanium
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="flex justify-start">
                    <div className="bg-gray-100 rounded-2xl rounded-bl-md p-3 max-w-xs">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-semibold">
                            iPhone 15 Pro
                          </span>
                          <span className="text-xs text-green-600">
                            In Stock
                          </span>
                        </div>
                        <div className="text-xs text-gray-600">
                          <p>• Available Colors: Natural, Blue, White, Black</p>
                          <p>• Storage: 128GB, 256GB, 512GB, 1TB</p>
                          <p>• Starting at $999</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quick Reply Buttons */}
                  <div className="flex justify-start">
                    <div className="bg-gray-100 rounded-2xl rounded-bl-md p-3">
                      <div className="flex space-x-2">
                        <button className="bg-teal-500 text-white text-xs px-3 py-1 rounded-full">
                          View Details
                        </button>
                        <button className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full">
                          More Colors
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Chat Input */}
                <div className="border-t border-gray-200 p-4">
                  <div className="flex items-center space-x-2">
                    <button className="p-2 hover:bg-gray-100 rounded-full">
                      <Smile className="w-5 h-5 text-gray-400" />
                    </button>
                    <div className="flex-1 bg-gray-100 rounded-full px-4 py-2">
                      <input
                        type="text"
                        placeholder="Type a message..."
                        className="bg-transparent w-full text-sm outline-none"
                      />
                    </div>
                    <button className="p-2 bg-teal-500 text-white rounded-full">
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h5 className="text-lg font-semibold text-gray-900 mb-4">
                Performance Metrics
              </h5>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-teal-50 rounded-xl">
                  <div className="flex items-center justify-center mb-2">
                    <Clock className="w-5 h-5 text-teal-600 mr-2" />
                  </div>
                  <p className="text-2xl font-bold text-teal-600">&lt;2s</p>
                  <p className="text-sm text-gray-600">Image Response Time</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <div className="flex items-center justify-center mb-2">
                    <BarChart3 className="w-5 h-5 text-green-600 mr-2" />
                  </div>
                  <p className="text-2xl font-bold text-green-600">+45%</p>
                  <p className="text-sm text-gray-600">Engagement Rate</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <div className="flex items-center justify-center mb-2">
                    <Image className="w-5 h-5 text-blue-600 mr-2" />
                  </div>
                  <p className="text-2xl font-bold text-blue-600">1000+</p>
                  <p className="text-sm text-gray-600">Product Images</p>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-xl">
                  <div className="flex items-center justify-center mb-2">
                    <Users className="w-5 h-5 text-orange-600 mr-2" />
                  </div>
                  <p className="text-2xl font-bold text-orange-600">92%</p>
                  <p className="text-sm text-gray-600">Customer Satisfaction</p>
                </div>
              </div>

              {/* AI Processing Flow */}
              <div className="mt-6 p-4 bg-teal-600 rounded-xl text-white">
                <p className="text-sm text-teal-100 mb-3 font-semibold">
                  AI Processing Flow
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <p>ChatAgent understands product image request</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <p>Searches product database for matching images</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <p>Retrieves high-quality product photos and details</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <p>Organizes images in user-friendly grid format</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Multi-Business Agency Use Case */}
        <div className="bg-purple-50 rounded-3xl p-8 md:p-12 border border-purple-100">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mr-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900">
                Multi-Business Agency Management
              </h4>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See how marketing agencies use komoChat by Qbexel to manage
              multiple client accounts with consistent, brand-appropriate
              responses across different industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <ShoppingCart className="w-5 h-5 text-blue-600" />
              </div>
              <h5 className="font-semibold text-gray-900 mb-2">
                Fashion Retailer
              </h5>
              <p className="text-sm text-gray-600 mb-4">
                AI maintains trendy, fashion-forward tone while handling size
                inquiries and style recommendations.
              </p>
              <div className="text-xs text-gray-500">
                <p>• Brand voice: Trendy & Enthusiastic</p>
                <p>• Avg response: 1.8s</p>
                <p>• Conversion: +72%</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-5 h-5 text-teal-600" />
              </div>
              <h5 className="font-semibold text-gray-900 mb-2">
                Home Services
              </h5>
              <p className="text-sm text-gray-600 mb-4">
                Professional, reassuring tone for emergency calls and service
                bookings with technical expertise.
              </p>
              <div className="text-xs text-gray-500">
                <p>• Brand voice: Professional & Reliable</p>
                <p>• Avg response: 2.1s</p>
                <p>• Booking rate: +58%</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-5 h-5 text-orange-600" />
              </div>
              <h5 className="font-semibold text-gray-900 mb-2">
                Restaurant Chain
              </h5>
              <p className="text-sm text-gray-600 mb-4">
                Friendly, appetizing language for menu questions and
                reservations across multiple locations.
              </p>
              <div className="text-xs text-gray-500">
                <p>• Brand voice: Friendly & Appetizing</p>
                <p>• Avg response: 1.5s</p>
                <p>• Order value: +45%</p>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-white rounded-xl p-6 text-center">
            <h5 className="font-semibold text-gray-900 mb-2">
              Agency Dashboard Metrics
            </h5>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              <div>
                <p className="text-2xl font-bold text-purple-600">12</p>
                <p className="text-sm text-gray-600">Active Clients</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-green-600">50K+</p>
                <p className="text-sm text-gray-600">Monthly Conversations</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-600">+60%</p>
                <p className="text-sm text-gray-600">Avg Conversion Lift</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-orange-600">97%</p>
                <p className="text-sm text-gray-600">Client Retention</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCases;

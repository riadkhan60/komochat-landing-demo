import {
  Search,
  Image,
  MessageCircle,
  Database,
  Users,
  BarChart3,
} from 'lucide-react';

const AdvancedCapabilities = () => {
  return (
    <div className="mt-20">
      <div className="text-center mb-16">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Advanced Agent Capabilities
        </h3>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Our agents go beyond basic responses with intelligent product
          suggestions, visual content sharing, and proactive customer engagement
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Product Suggestion Agent */}
        <div className="group bg-blue-50 rounded-2xl p-6 sm:p-8 border border-blue-200 card-hover">
          <div className="flex items-center mb-4 sm:mb-6">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mr-4">
              <Search className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-xl font-bold text-gray-900">
              Smart Product Suggestions
            </h4>
          </div>
          <p className="text-gray-600 mb-6">
            Chat agents analyze customer preferences and conversation history to
            suggest relevant products with personalized recommendations.
          </p>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="text-sm text-gray-700">
                Context-aware recommendations
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="text-sm text-gray-700">
                Cross-selling opportunities
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="text-sm text-gray-700">
                Seasonal product matching
              </span>
            </div>
          </div>
        </div>

        {/* Visual Content Agent */}
        <div className="group bg-purple-50 rounded-2xl p-6 sm:p-8 border border-purple-200 card-hover">
          <div className="flex items-center mb-4 sm:mb-6">
            <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mr-4">
              <Image className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-xl font-bold text-gray-900">
              Visual Content Sharing
            </h4>
          </div>
          <p className="text-gray-600 mb-6">
            Agents automatically send product images, size charts, and visual
            guides when customers ask for specific information or comparisons.
          </p>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
              <span className="text-sm text-gray-700">
                Automatic image sharing
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
              <span className="text-sm text-gray-700">
                Size and color comparisons
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
              <span className="text-sm text-gray-700">
                Product lifestyle images
              </span>
            </div>
          </div>
        </div>

        {/* Proactive Engagement Agent */}
        <div className="group bg-brand-50 rounded-2xl p-6 sm:p-8 border border-brand-200 card-hover">
          <div className="flex items-center mb-4 sm:mb-6">
            <div className="w-12 h-12 bg-brand-600 rounded-xl flex items-center justify-center mr-4">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-xl font-bold text-gray-900">
              Proactive Engagement
            </h4>
          </div>
          <p className="text-gray-600 mb-6">
            Agents initiate conversations based on customer behavior, abandoned
            carts, and personalized follow-ups to drive engagement and sales.
          </p>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-brand-600 rounded-full"></div>
              <span className="text-sm text-gray-700">
                Abandoned cart recovery
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-brand-600 rounded-full"></div>
              <span className="text-sm text-gray-700">
                Personalized follow-ups
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-brand-600 rounded-full"></div>
              <span className="text-sm text-gray-700">Seasonal promotions</span>
            </div>
          </div>
        </div>

        {/* Inventory Management Agent */}
        <div className="group bg-orange-50 rounded-2xl p-6 sm:p-8 border border-orange-200 card-hover">
          <div className="flex items-center mb-4 sm:mb-6">
            <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center mr-4">
              <Database className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-xl font-bold text-gray-900">
              Real-time Inventory
            </h4>
          </div>
          <p className="text-gray-600 mb-6">
            Agents provide real-time stock information, alternative suggestions,
            and restock notifications to ensure accurate customer expectations.
          </p>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
              <span className="text-sm text-gray-700">Live stock checking</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
              <span className="text-sm text-gray-700">
                Alternative suggestions
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
              <span className="text-sm text-gray-700">
                Restock notifications
              </span>
            </div>
          </div>
        </div>

        {/* Customer Support Agent */}
        <div className="group bg-green-50 rounded-2xl p-6 sm:p-8 border border-green-200 card-hover">
          <div className="flex items-center mb-4 sm:mb-6">
            <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mr-4">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-xl font-bold text-gray-900">
              Customer Support
            </h4>
          </div>
          <p className="text-gray-600 mb-6">
            Agents handle complex customer inquiries, return requests, and
            technical support with detailed explanations and step-by-step
            guidance.
          </p>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-600 rounded-full"></div>
              <span className="text-sm text-gray-700">
                Return & exchange handling
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-600 rounded-full"></div>
              <span className="text-sm text-gray-700">
                Technical troubleshooting
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-600 rounded-full"></div>
              <span className="text-sm text-gray-700">
                Escalation to human agents
              </span>
            </div>
          </div>
        </div>

        {/* Analytics & Insights Agent */}
        <div className="group bg-indigo-50 rounded-2xl p-6 sm:p-8 border border-indigo-200 card-hover">
          <div className="flex items-center mb-4 sm:mb-6">
            <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center mr-4">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-xl font-bold text-gray-900">
              Analytics & Insights
            </h4>
          </div>
          <p className="text-gray-600 mb-6">
            Agents provide business insights, sales analytics, and customer
            behavior patterns to help optimize marketing strategies and
            inventory decisions.
          </p>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
              <span className="text-sm text-gray-700">
                Sales performance tracking
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
              <span className="text-sm text-gray-700">
                Customer behavior analysis
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
              <span className="text-sm text-gray-700">
                Inventory optimization
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedCapabilities;

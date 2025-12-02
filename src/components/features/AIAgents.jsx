import {
  MessageCircle,
  Image,
  ShoppingCart,
  Brain,
  Database,
  Search,
  Eye,
  Users,
  BarChart3,
} from 'lucide-react';

const AIAgents = () => {
  // Three AI Agents - the core of komoChat by Qbexel
  const aiAgents = [
    {
      name: 'Chat Agent',
      description: 'Smart context-aware conversations with perfect memory',
      icon: MessageCircle,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      headerBg: 'bg-blue-600',
      capabilities: [
        {
          icon: Brain,
          title: 'Intent Recognition',
          description: 'Understands customer needs from natural language',
        },
        {
          icon: Database,
          title: 'Conversation Memory',
          description: 'Remembers customer history and preferences',
        },
        {
          icon: Search,
          title: 'Smart RAG',
          description: 'Context-aware product recommendations',
        },
      ],
    },
    {
      name: 'Image Agent',
      description: 'Visual intelligence for product recognition and matching',
      icon: Image,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
      headerBg: 'bg-purple-600',
      capabilities: [
        {
          icon: Eye,
          title: 'Image Recognition',
          description: 'Identifies products from customer photos',
        },
        {
          icon: Search,
          title: 'Product Similarity',
          description: 'Finds matching or similar items in inventory',
        },
        {
          icon: ShoppingCart,
          title: 'Visual Commerce',
          description: 'Converts images to purchase opportunities',
        },
      ],
    },
    {
      name: 'Order Agent',
      description: 'Order confirmation and customer data management',
      icon: ShoppingCart,
      color: 'text-teal-600',
      bgColor: 'bg-teal-100',
      headerBg: 'bg-teal-600',
      capabilities: [
        {
          icon: Database,
          title: 'Order Confirmation',
          description: 'Confirms orders and records in database',
        },
        {
          icon: Users,
          title: 'Customer Data Management',
          description: 'Captures phone, address, and order details',
        },
        {
          icon: BarChart3,
          title: 'Order Tracking',
          description: 'Tracks order status and delivery updates',
        },
      ],
    },
  ];

  return (
    <div>
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Meet Your
          <span className="text-primary-600"> Smart AI Agents</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Each agent specializes in different types of customer interactions,
          working together to create the most human-like AI experience possible.
        </p>
      </div>

      {/* AI Agents Showcase */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
        {aiAgents.map((agent, index) => {
          const IconComponent = agent.icon;
          return (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-gray-200 card-hover bg-white md:col-span-1 lg:col-span-1"
              style={{
                ...(index === 2 && {
                  gridColumn: 'md:col-span-2 lg:col-span-1',
                }),
              }}
            >
              {/* Agent Header */}
              <div
                className={`${agent.headerBg} p-6 sm:p-8 text-white relative`}
              >
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 opacity-20">
                  <IconComponent className="w-12 h-12 sm:w-16 sm:h-16" />
                </div>
                <div
                  className={`w-12 h-12 sm:w-16 sm:h-16 ${agent.bgColor} rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 interactive`}
                >
                  <IconComponent
                    className={`w-6 h-6 sm:w-8 sm:h-8 ${agent.color}`}
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2">
                  {agent.name}
                </h3>
                <p className="text-white/90 leading-relaxed text-sm sm:text-base">
                  {agent.description}
                </p>
              </div>

              {/* Agent Capabilities */}
              <div className="p-6 sm:p-8">
                <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 sm:mb-6">
                  Key Capabilities
                </h4>
                <div className="space-y-3 sm:space-y-4">
                  {agent.capabilities.map((capability, capIndex) => {
                    const CapabilityIcon = capability.icon;
                    return (
                      <div
                        key={capIndex}
                        className="flex items-start space-x-3 group/capability"
                      >
                        <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/capability:bg-gray-200 transition-colors duration-200">
                          <CapabilityIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-600" />
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-900 mb-1 text-sm sm:text-base">
                            {capability.title}
                          </h5>
                          <p className="text-xs sm:text-sm text-gray-600">
                            {capability.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AIAgents;

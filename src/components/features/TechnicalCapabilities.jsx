import {
  Globe,
  Zap,
  Brain,
  Users,
  Clock,
  BarChart3,
  Database,
} from 'lucide-react';

const TechnicalCapabilities = () => {
  const technicalCapabilities = [
    {
      icon: Globe,
      title: 'Enterprise Scalability',
      description:
        'Handle 10,000+ concurrent users across multiple businesses simultaneously',
      details: [
        'Auto-scaling infrastructure',
        'Sub-second response times at scale',
        '99.9% uptime guarantee',
        'Global CDN distribution',
      ],
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
    },
    {
      icon: Zap,
      title: 'Multi-Modal Processing',
      description:
        'Seamlessly handle text, images, and voice in one unified conversation flow',
      details: [
        'Real-time image recognition',
        'Natural language processing',
        'Voice-to-text conversion',
        'Cross-modal context retention',
      ],
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
    },
    {
      icon: Brain,
      title: 'Smart Context-Aware RAG',
      description:
        'Intelligent retrieval that understands conversation history and business context',
      details: [
        'Dynamic knowledge base updates',
        'Conversation memory integration',
        'Business-specific data training',
        'Contextual response generation',
      ],
      color: 'text-teal-600',
      bgColor: 'bg-teal-50',
      borderColor: 'border-teal-200',
    },
    {
      icon: Users,
      title: 'Multi-Business Support',
      description: `Personalized to align with brand's tone, language, and visual style`,
      details: [
        'Isolated business environments',
        'Custom brand Messages Trainning',
        'Cross-client analytics dashboard',
      ],
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
    },
  ];

  return (
    <div className="bg-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 mb-16 sm:mb-20">
      <div className="text-center mb-8 sm:mb-12">
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
          Enterprise-Grade Technical Capabilities
        </h3>
        <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
          Built for scale, designed for performance, optimized for results. Our
          platform handles enterprise demands while maintaining the human touch
          that sets us apart.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {technicalCapabilities.map((capability, index) => {
          const IconComponent = capability.icon;
          return (
            <div
              key={index}
              className={`group bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 border-2 ${capability.borderColor} card-hover`}
            >
              <div className="flex items-start space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                <div
                  className={`w-12 h-12 sm:w-16 sm:h-16 ${capability.bgColor} rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 interactive`}
                >
                  <IconComponent
                    className={`w-6 h-6 sm:w-8 sm:h-8 ${capability.color}`}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                    {capability.title}
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {capability.description}
                  </p>
                </div>
              </div>

              <div className="space-y-2 sm:space-y-3">
                {capability.details.map((detail, detailIndex) => (
                  <div
                    key={detailIndex}
                    className="flex items-center space-x-3"
                  >
                    <div
                      className={`w-2 h-2 ${capability.color.replace(
                        'text-',
                        'bg-',
                      )} rounded-full flex-shrink-0`}
                    ></div>
                    <p className="text-xs sm:text-sm text-gray-700">{detail}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Performance Stats */}
      <div className="mt-8 sm:mt-12 bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg">
        <h4 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-6 sm:mb-8">
          Platform Performance at Scale
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-3">
              <Users className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
            </div>
            <p className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1">
              10K+
            </p>
            <p className="text-xs sm:text-sm text-gray-600">Concurrent Users</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-3">
              <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
            </div>
            <p className="text-2xl sm:text-3xl font-bold text-green-600 mb-1">
              &lt;10s
            </p>
            <p className="text-xs sm:text-sm text-gray-600">
              Smart Reply Timing
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-100 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-3">
              <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />
            </div>
            <p className="text-2xl sm:text-3xl font-bold text-purple-600 mb-1">
              99.9%
            </p>
            <p className="text-xs sm:text-sm text-gray-600">Uptime SLA</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-100 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-3">
              <Database className="w-6 h-6 sm:w-8 sm:h-8 text-orange-600" />
            </div>
            <p className="text-2xl sm:text-3xl font-bold text-orange-600 mb-1">
              10+
            </p>
            <p className="text-xs sm:text-sm text-gray-600">
              Languages Supported
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalCapabilities;

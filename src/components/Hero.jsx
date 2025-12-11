import { Button } from '@/components/ui/button.jsx';
import {
  ArrowRight,
  Brain,
  Clock,
  Zap,
  CheckCircle2,
  MessageSquare,
} from 'lucide-react';
import { motion } from 'framer-motion';
import FacebookLogo from '../assests/facebook-logo.png';
import InstagramLogo from '../assests/instagram.png';
import WhatsAppLogo from '../assests/WhatsApp.svg.webp';
import MessengerLogo from '../assests/Facebook_Messenger_logo_2025.svg.png';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-20 lg:pt-0 pb-20 lg:pb-24 2xl:pb-32"
    >
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary-50/50 rounded-full blur-[100px] mix-blend-multiply animate-blob" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-secondary-50/50 rounded-full blur-[100px] mix-blend-multiply animate-blob animation-delay-2000" />
        <div className="absolute -bottom-32 left-1/3 w-[500px] h-[500px] bg-accent-50/50 rounded-full blur-[100px] mix-blend-multiply animate-blob animation-delay-4000" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Column: Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-start mb-6"
            >
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-sm font-medium shadow-sm">
                <Zap className="w-3.5 h-3.5 mr-2 fill-primary-500 text-primary-500" />
                Next-Gen Social Automation
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight leading-[1.1] mb-6"
            >
              The AI Agent <br />
              <span className="text-brand-600">That Feels Human</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Transform your customer engagement with 24/7 intelligent
              automation. It remembers context, understands nuance, and responds
              with genuine personality.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <a
                href="https://www.youtube.com/shorts/E8cqkUPk8-c"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-brand-600 hover:bg-brand-700 text-white px-8 py-6 text-lg rounded-2xl shadow-lg shadow-brand-500/25 transition-all duration-300 hover:scale-105"
                >
                  Watch Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
              <a
                href="https://wa.me/+8801982780739?text=Hi! I'm interested in komoChat by Qbexel. Can you tell me more about it?"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-2 border-gray-200 text-gray-700 hover:border-brand-600 hover:text-brand-600 px-8 py-6 text-lg rounded-2xl bg-white/50 backdrop-blur-sm transition-all duration-300 hover:scale-105"
                >
                  Try komoChat
                </Button>
              </a>
            </motion.div>

            {/* Trust/Social Proof */}
            <motion.div
              variants={itemVariants}
              className="border-t border-gray-200/60 pt-8"
            >
              <p className="text-sm text-gray-500 font-medium mb-4 uppercase tracking-wider">
                Seamlessly Integrates With
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-4">
                {[
                  {
                    name: 'Facebook',
                    logo: FacebookLogo,
                    color: 'text-blue-600',
                    hoverColor: 'hover:text-blue-700',
                  },
                  {
                    name: 'Instagram',
                    logo: InstagramLogo,
                    color: 'text-pink-600',
                    hoverColor: 'hover:text-pink-700',
                  },
                  {
                    name: 'WhatsApp',
                    logo: WhatsAppLogo,
                    color: 'text-green-600',
                    hoverColor: 'hover:text-green-700',
                  },
                  {
                    name: 'Messenger',
                    logo: MessengerLogo,
                    color: 'text-blue-500',
                    hoverColor: 'hover:text-blue-600',
                  },
                ].map((platform) => (
                  <motion.div
                    key={platform.name}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className={`flex items-center gap-2 p-3 rounded-xl bg-white/60 backdrop-blur-sm border border-gray-200/50 shadow-sm cursor-default ${platform.color} ${platform.hoverColor} transition-all duration-300`}
                  >
                    <img
                      src={platform.logo}
                      alt={platform.name}
                      className="w-6 h-6 object-contain"
                    />
                    <span className="text-sm font-semibold">
                      {platform.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Visual/Features */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 grid gap-6 max-w-md ml-auto">
              {/* Feature Card 1 */}
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-6 bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 flex items-start gap-4"
              >
                <div className="p-3 bg-primary-50 rounded-xl">
                  <Brain className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    Contextual Memory
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Remembers past conversations and preferences for a
                    continuous experience.
                  </p>
                </div>
              </motion.div>

              {/* Feature Card 2 */}
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-6 bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 flex items-start gap-4 ml-12"
              >
                <div className="p-3 bg-secondary-50 rounded-xl">
                  <MessageSquare className="w-6 h-6 text-secondary-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    Natural Dialogue
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Uses advanced NLP to understand intent and respond like a
                    human agent.
                  </p>
                </div>
              </motion.div>

              {/* Feature Card 3 */}
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-6 bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 flex items-start gap-4"
              >
                <div className="p-3 bg-accent-50 rounded-xl">
                  <Clock className="w-6 h-6 text-accent-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    24/7 Availability
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Always on, handling thousands of conversations
                    simultaneously without fatigue.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Decorative Elements behind cards */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary-50/30 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

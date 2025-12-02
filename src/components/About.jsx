import { Target, Eye, Heart, Lightbulb, Users, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Human-AI Synergy',
      description:
        'We believe the best results come from combining human creativity, empathy, and intuition with AI efficiency, memory, and scalability.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description:
        'Pushing the boundaries of AI technology to create solutions that feel genuinely human and make a meaningful difference.',
    },
    {
      icon: Users,
      title: 'Customer-Centricity',
      description:
        "Every feature we build is designed with our customers' success in mind, ensuring their customers feel heard and valued.",
    },
    {
      icon: Shield,
      title: 'Transparency',
      description:
        'Open communication about how our AI works, honest practices, and clear value delivery in everything we do.',
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section id="about" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Story: The Vision Behind
            <span className="text-primary-600"> komoChat</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We believe in amplifying human potential through AI that feels
            genuinely human, making every social media conversation meaningful
            and natural.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl shadow-gray-200/50 border border-gray-100"
          >
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center mr-5">
                <Target className="w-7 h-7 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed">
              To amplify human potential by creating AI agents that feel
              genuinely human. We empower businesses to provide exceptional
              customer experiences through intelligent automation that enhances
              rather than replaces human creativity, empathy, and connection.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl shadow-gray-200/50 border border-gray-100"
          >
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-secondary-100 rounded-2xl flex items-center justify-center mr-5">
                <Eye className="w-7 h-7 text-secondary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed">
              To create a world where every social media conversation feels
              human, natural, and meaningful. We envision businesses of all
              sizes having access to AI that remembers, understands, and
              responds with the warmth and intelligence of human interaction,
              available 24/7.
            </p>
          </motion.div>
        </div>

        {/* Human-AI Synergy Philosophy Section */}
        <div className="mb-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Human Creativity Meets AI Efficiency
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The magic happens when human insight combines with artificial
              intelligence. We don't replace the human touch—we amplify it.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Human Creativity Side */}
              <div className="bg-primary-50 p-8 md:p-12">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center mr-4 shadow-lg shadow-primary-600/30">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-primary-900">
                    Human Creativity
                  </h4>
                </div>
                <div className="space-y-5">
                  {[
                    'Empathy and emotional intelligence in every interaction',
                    'Creative problem-solving for unique customer needs',
                    'Intuitive understanding of context and nuance',
                    'Authentic relationship building and trust',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                      <p className="text-lg text-primary-900/80 font-medium">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* AI Efficiency Side */}
              <div className="bg-secondary-50 p-8 md:p-12">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-secondary-600 rounded-xl flex items-center justify-center mr-4 shadow-lg shadow-secondary-600/30">
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-secondary-900">
                    AI Efficiency
                  </h4>
                </div>
                <div className="space-y-5">
                  {[
                    '24/7 availability without fatigue or breaks',
                    'Perfect memory of every customer interaction',
                    'Instant access to product knowledge and history',
                    'Scalable to handle thousands of conversations',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className="w-2 h-2 bg-secondary-600 rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                      <p className="text-lg text-secondary-900/80 font-medium">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom section with quote */}
            <div className="bg-primary-900 p-8 md:p-10 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-10"></div>
              <p className="relative z-10 text-xl md:text-2xl text-white font-medium italic leading-relaxed max-w-4xl mx-auto">
                "The future belongs to businesses that seamlessly blend human
                insight with artificial intelligence, creating experiences that
                feel both personal and perfectly efficient."
              </p>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our Values
            </h3>
            <p className="text-lg text-gray-600">
              The principles that guide everything we do
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                  className="text-center group p-6 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-primary-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="bg-white rounded-3xl p-10 md:p-14 shadow-2xl shadow-primary-900/5 max-w-5xl mx-auto border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-primary-50 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-secondary-50 rounded-full blur-3xl opacity-50"></div>

            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Ready to Experience Human-Like AI?
              </h3>
              <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                Join forward-thinking businesses using komoChat by Qbexel to
                create meaningful customer connections that feel genuinely
                human.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md sm:max-w-none mx-auto">
                <a
                  href="https://www.youtube.com/shorts/E8cqkUPk8-c"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="w-full sm:w-auto bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
                    Watch Demo
                  </button>
                </a>
                <a
                  href="mailto:qbexel@gmail.com?subject=Sales Inquiry - komoChat by Qbexel"
                  className="w-full sm:w-auto"
                >
                  <button className="w-full sm:w-auto border-2 border-gray-200 text-gray-700 hover:border-primary-600 hover:text-primary-600 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:bg-gray-50">
                    Contact Sales
                  </button>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button.jsx';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  Calendar,
  CheckCircle,
  Facebook,
  Linkedin,
} from 'lucide-react';
import { getCalApi } from '@calcom/embed-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({});
      cal('ui', {
        styles: { branding: { brandColor: '#2563eb' } },
        hideEventTypeDetails: false,
        layout: 'month_view',
      });
    })();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send form data to FormSubmit.co
      const response = await fetch(
        'https://formsubmit.co/ajax/qbexel@gmail.com',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
            _captcha: false, // Disable captcha
            _template: 'table', // Use table template for better formatting
          }),
        },
      );

      if (!response.ok) {
        throw new Error('Form submission failed');
      }

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      setSubmitSuccess(true);
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      alert(
        'Failed to send message. Please try again or email us directly at qbexel@gmail.com',
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get in Touch with
            <span className="text-primary-600"> komoChat by Qbexel</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to see how our human-like AI agents can transform your social
            media business? Schedule a demo or contact our sales team to get
            started.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">
              Ready to Transform Your Business?
            </h3>

            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
              <div className="flex items-start">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg sm:rounded-xl flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                    Email Us
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600">
                    qbexel@gmail.com
                  </p>
                  <p className="text-sm sm:text-base text-gray-600">
                    admin@qbexel.com
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-100 rounded-lg sm:rounded-xl flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                    Call Us
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600">
                    +880 1982-780739
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500">
                    Mon-Fri, 9AM-6PM EST
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-lg sm:rounded-xl flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                    Visit Us
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600">
                    Sontosh 1902
                  </p>
                  <p className="text-sm sm:text-base text-gray-600">
                    Tangail Sadar, Tangail
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <h4 className="text-base sm:text-lg font-semibold text-gray-900">
                Quick Actions
              </h4>

              <div className="flex flex-col gap-3">
                <button
                  data-cal-link="qbexel"
                  data-cal-config='{"layout":"month_view"}'
                  className="bg-primary-600 hover:bg-primary-700 text-white flex items-center justify-center w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 smooth-hover"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Demo
                </button>
                <a href="callto:+8801982780739" className="w-full block">
                  <Button
                    variant="outline"
                    className="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white flex items-center justify-center transition-all duration-200 w-full smooth-hover"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Contact Sales
                  </Button>
                </a>
                <a
                  href="https://wa.me/8801982780739"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block"
                >
                  <Button
                    variant="outline"
                    className="border-2 border-gray-300 text-gray-700 hover:border-teal-600 hover:text-teal-600 flex items-center justify-center transition-all duration-200 w-full smooth-hover"
                  >
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Live Chat (WhatsApp)
                  </Button>
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Follow Us
              </h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/qbexel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-all duration-200 interactive"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/company/104429970"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center text-white hover:bg-blue-800 transition-all duration-200 interactive"
                  aria-label="Follow us on LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
              Send Us a Message
            </h3>

            <form
              onSubmit={handleSubmit}
              className="space-y-4 sm:space-y-6"
              action="https://formsubmit.co/qbexel@gmail.com"
              method="POST"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-base min-h-[44px]"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-base min-h-[44px]"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-base min-h-[44px]"
                  placeholder="What can we help you with?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none text-base min-h-[100px]"
                  placeholder="Tell us more about your needs..."
                />
              </div>

              <Button
                type="submit"
                loading={isSubmitting}
                disabled={isSubmitting}
                className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {!isSubmitting && <Send className="w-5 h-5 mr-2" />}
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>

              {submitSuccess && (
                <div className="flex items-center justify-center text-green-600 font-medium animate-fade-in-up">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Message sent successfully! We'll get back to you soon.
                </div>
              )}
            </form>

            <p className="text-sm text-gray-500 mt-4 text-center">
              We typically respond within 24 hours during business days.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

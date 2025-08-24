import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BrainCircuitIcon, 
  RocketIcon, 
  SparklesIcon, 
  CheckCircleIcon,
  ArrowRightIcon,
  PlayCircleIcon,
  MicrophoneIcon,
  VideoIcon,
  FileTextIcon,
  ShareIcon,
  BarChart3Icon,
  ShieldCheckIcon
} from 'lucide-react';

const LandingPage = () => {
  const features = [
    {
      icon: <BrainCircuitIcon className="h-8 w-8 text-primary-600" />,
      title: "AI-Powered Research",
      description: "Comprehensive market research and trend analysis using advanced AI algorithms"
    },
    {
      icon: <FileTextIcon className="h-8 w-8 text-primary-600" />,
      title: "Content Creation",
      description: "Generate high-quality articles, blog posts, and written content with AI assistance"
    },
    {
      icon: <MicrophoneIcon className="h-8 w-8 text-primary-600" />,
      title: "Podcast Production",
      description: "Complete podcast episode creation from script to show notes and audio instructions"
    },
    {
      icon: <VideoIcon className="h-8 w-8 text-primary-600" />,
      title: "Video Production",
      description: "Professional video scripts, shot lists, and production guidelines for any platform"
    },
    {
      icon: <ShareIcon className="h-8 w-8 text-primary-600" />,
      title: "Multi-Platform Publishing",
      description: "Seamlessly publish content across multiple platforms with optimized formatting"
    },
    {
      icon: <ShieldCheckIcon className="h-8 w-8 text-primary-600" />,
      title: "Fact Checking",
      description: "Automated fact-checking and verification to ensure content accuracy and reliability"
    }
  ];

  const benefits = [
    "Reduce content creation time by 80%",
    "Maintain consistent brand voice across all platforms",
    "Scale content production without compromising quality",
    "Data-driven insights for better audience engagement",
    "Automated workflow management and optimization",
    "Professional-grade content across all formats"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <BrainCircuitIcon className="h-8 w-8 text-primary-600" />
              <span className="text-xl font-bold text-gray-900">AI Content Studio</span>
            </div>
            <Link 
              to="/dashboard" 
              className="btn-primary flex items-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-primary-600 rounded-full blur-xl opacity-20 animate-pulse-slow"></div>
                <div className="relative bg-primary-600 rounded-full p-4">
                  <SparklesIcon className="h-12 w-12 text-white" />
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
              AI-Powered Content
              <span className="block text-primary-600">Production Pipeline</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-slide-up">
              Transform your content strategy with our comprehensive AI system. From market research 
              to multi-platform publishing, create professional content at scale with unprecedented efficiency.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
              <Link to="/dashboard" className="btn-primary text-lg px-8 py-3 flex items-center space-x-2">
                <RocketIcon className="h-5 w-5" />
                <span>Start Creating</span>
              </Link>
              <button className="btn-secondary text-lg px-8 py-3 flex items-center space-x-2">
                <PlayCircleIcon className="h-5 w-5" />
                <span>Watch Demo</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Complete Content Production Suite
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to create, optimize, and distribute professional content across all platforms
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="card hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Why Choose AI Content Studio?
              </h2>
              <p className="text-primary-100 text-lg mb-8">
                Our advanced AI pipeline transforms how you create and distribute content, 
                delivering professional results with minimal effort.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircleIcon className="h-6 w-6 text-primary-200 flex-shrink-0" />
                    <span className="text-primary-100">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">80%</div>
                    <div className="text-primary-200 text-sm">Time Saved</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">10x</div>
                    <div className="text-primary-200 text-sm">Content Output</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">95%</div>
                    <div className="text-primary-200 text-sm">Accuracy Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">24/7</div>
                    <div className="text-primary-200 text-sm">Availability</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Content Strategy?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of content creators who are already using AI to scale their production 
            and reach larger audiences with professional-quality content.
          </p>
          <Link 
            to="/dashboard" 
            className="inline-flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors duration-200"
          >
            <span>Start Your Free Trial</span>
            <ArrowRightIcon className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <BrainCircuitIcon className="h-6 w-6 text-primary-600" />
              <span className="text-lg font-semibold text-gray-900">AI Content Studio</span>
            </div>
            <div className="text-gray-600 text-sm">
              © 2025 AI Content Studio. Powered by Portia SDK.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BrainCircuitIcon,
  SearchIcon,
  FileTextIcon,
  MicrophoneIcon,
  VideoIcon,
  CheckCircleIcon,
  PlayIcon,
  SettingsIcon,
  ArrowLeftIcon,
  SparklesIcon,
  LoaderIcon
} from 'lucide-react';
import MarketResearchForm from '../components/MarketResearchForm';
import ContentPlanningForm from '../components/ContentPlanningForm';
import ArticleWritingForm from '../components/ArticleWritingForm';
import PodcastProductionForm from '../components/PodcastProductionForm';
import VideoProductionForm from '../components/VideoProductionForm';
import FactCheckingForm from '../components/FactCheckingForm';
import MasterPipelineForm from '../components/MasterPipelineForm';

type ActiveTab = 'market-research' | 'content-planning' | 'article-writing' | 'podcast-production' | 'video-production' | 'fact-checking' | 'master-pipeline';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>('master-pipeline');
  const [isProcessing, setIsProcessing] = useState(false);

  const tabs = [
    {
      id: 'master-pipeline' as ActiveTab,
      name: 'Master Pipeline',
      icon: <SparklesIcon className="h-5 w-5" />,
      description: 'Complete content production pipeline'
    },
    {
      id: 'market-research' as ActiveTab,
      name: 'Market Research',
      icon: <SearchIcon className="h-5 w-5" />,
      description: 'Comprehensive market analysis and trends'
    },
    {
      id: 'content-planning' as ActiveTab,
      name: 'Content Planning',
      icon: <SettingsIcon className="h-5 w-5" />,
      description: 'Strategic content calendar and planning'
    },
    {
      id: 'article-writing' as ActiveTab,
      name: 'Article Writing',
      icon: <FileTextIcon className="h-5 w-5" />,
      description: 'AI-powered article creation and optimization'
    },
    {
      id: 'podcast-production' as ActiveTab,
      name: 'Podcast Production',
      icon: <MicrophoneIcon className="h-5 w-5" />,
      description: 'Complete podcast episode production'
    },
    {
      id: 'video-production' as ActiveTab,
      name: 'Video Production',
      icon: <VideoIcon className="h-5 w-5" />,
      description: 'Professional video content creation'
    },
    {
      id: 'fact-checking' as ActiveTab,
      name: 'Fact Checking',
      icon: <CheckCircleIcon className="h-5 w-5" />,
      description: 'Automated content verification and validation'
    }
  ];

  const renderActiveForm = () => {
    const commonProps = { isProcessing, setIsProcessing };
    
    switch (activeTab) {
      case 'master-pipeline':
        return <MasterPipelineForm {...commonProps} />;
      case 'market-research':
        return <MarketResearchForm {...commonProps} />;
      case 'content-planning':
        return <ContentPlanningForm {...commonProps} />;
      case 'article-writing':
        return <ArticleWritingForm {...commonProps} />;
      case 'podcast-production':
        return <PodcastProductionForm {...commonProps} />;
      case 'video-production':
        return <VideoProductionForm {...commonProps} />;
      case 'fact-checking':
        return <FactCheckingForm {...commonProps} />;
      default:
        return <MasterPipelineForm {...commonProps} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
                <ArrowLeftIcon className="h-5 w-5" />
                <span>Back to Home</span>
              </Link>
              <div className="h-6 w-px bg-gray-300"></div>
              <div className="flex items-center space-x-2">
                <BrainCircuitIcon className="h-8 w-8 text-primary-600" />
                <span className="text-xl font-bold text-gray-900">AI Content Studio</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              {isProcessing && (
                <div className="flex items-center space-x-2 text-primary-600">
                  <LoaderIcon className="h-4 w-4 animate-spin" />
                  <span className="text-sm font-medium">Processing...</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="card sticky top-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Content Tools</h2>
              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full text-left p-3 rounded-lg transition-colors duration-200 ${
                      activeTab === tab.id
                        ? 'bg-primary-50 text-primary-700 border border-primary-200'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={activeTab === tab.id ? 'text-primary-600' : 'text-gray-400'}>
                        {tab.icon}
                      </div>
                      <div>
                        <div className="font-medium">{tab.name}</div>
                        <div className="text-xs text-gray-500 mt-1">{tab.description}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="card">
              <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  {tabs.find(tab => tab.id === activeTab)?.name}
                </h1>
                <p className="text-gray-600">
                  {tabs.find(tab => tab.id === activeTab)?.description}
                </p>
              </div>
              
              {renderActiveForm()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
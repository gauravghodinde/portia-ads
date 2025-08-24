import React, { useState } from 'react';
import { SparklesIcon, RocketIcon } from 'lucide-react';
import { submitMasterPipeline } from '../services/api';

interface MasterPipelineFormProps {
  isProcessing: boolean;
  setIsProcessing: (processing: boolean) => void;
}

const MasterPipelineForm: React.FC<MasterPipelineFormProps> = ({ isProcessing, setIsProcessing }) => {
  const [formData, setFormData] = useState({
    project_name: 'AI Marketing Guide 2025',
    primary_topic: 'AI-powered content marketing strategies',
    target_audience: 'Digital marketers and business owners aged 25-45',
    content_formats: ['article', 'podcast', 'video', 'social_media'],
    publishing_platforms: ['wordpress', 'youtube', 'linkedin', 'twitter'],
    brand_guidelines: 'Professional, approachable, data-driven tone with blue/white color scheme',
    project_deadline: '2025-09-01',
    approval_level: 'medium'
  });
  const [result, setResult] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    try {
      const response = await submitMasterPipeline(formData);
      setResult(JSON.stringify(response, null, 2));
    } catch (error) {
      setResult(`Error: ${error}`);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleMultiSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: prev[name as keyof typeof prev].includes(value)
        ? (prev[name as keyof typeof prev] as string[]).filter(item => item !== value)
        : [...(prev[name as keyof typeof prev] as string[]), value]
    }));
  };

  const contentFormatOptions = [
    { value: 'article', label: 'Articles & Blog Posts' },
    { value: 'podcast', label: 'Podcast Episodes' },
    { value: 'video', label: 'Video Content' },
    { value: 'social_media', label: 'Social Media Posts' },
    { value: 'newsletter', label: 'Email Newsletters' },
    { value: 'infographic', label: 'Infographics' }
  ];

  const platformOptions = [
    { value: 'wordpress', label: 'WordPress' },
    { value: 'youtube', label: 'YouTube' },
    { value: 'linkedin', label: 'LinkedIn' },
    { value: 'twitter', label: 'Twitter/X' },
    { value: 'instagram', label: 'Instagram' },
    { value: 'facebook', label: 'Facebook' },
    { value: 'tiktok', label: 'TikTok' },
    { value: 'medium', label: 'Medium' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2 text-primary-600">
        <SparklesIcon className="h-6 w-6" />
        <h2 className="text-xl font-semibold">Master Content Production Pipeline</h2>
      </div>

      <div className="bg-gradient-to-r from-primary-50 to-blue-50 border border-primary-200 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <RocketIcon className="h-5 w-5 text-primary-600 mt-0.5" />
          <div>
            <h4 className="text-sm font-medium text-primary-900">Complete Content Pipeline</h4>
            <p className="text-sm text-primary-700 mt-1">
              This master pipeline will execute the complete content production process: market research, 
              content planning, creation across multiple formats, fact-checking, and multi-platform publishing.
            </p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="label">Project Name</label>
          <input
            type="text"
            name="project_name"
            value={formData.project_name}
            onChange={handleInputChange}
            className="input-field"
            placeholder="Enter a name for your content project"
            required
          />
        </div>

        <div>
          <label className="label">Primary Topic</label>
          <input
            type="text"
            name="primary_topic"
            value={formData.primary_topic}
            onChange={handleInputChange}
            className="input-field"
            placeholder="Main topic for content creation"
            required
          />
        </div>

        <div>
          <label className="label">Target Audience</label>
          <textarea
            name="target_audience"
            value={formData.target_audience}
            onChange={handleInputChange}
            rows={3}
            className="input-field"
            placeholder="Describe your target audience demographics and interests"
            required
          />
        </div>

        <div>
          <label className="label">Content Formats</label>
          <div className="grid grid-cols-2 gap-3 mt-2">
            {contentFormatOptions.map(option => (
              <label key={option.value} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.content_formats.includes(option.value)}
                  onChange={() => handleMultiSelectChange('content_formats', option.value)}
                  className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                />
                <span className="text-sm text-gray-700">{option.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="label">Publishing Platforms</label>
          <div className="grid grid-cols-2 gap-3 mt-2">
            {platformOptions.map(option => (
              <label key={option.value} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.publishing_platforms.includes(option.value)}
                  onChange={() => handleMultiSelectChange('publishing_platforms', option.value)}
                  className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                />
                <span className="text-sm text-gray-700">{option.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="label">Brand Guidelines</label>
          <textarea
            name="brand_guidelines"
            value={formData.brand_guidelines}
            onChange={handleInputChange}
            rows={3}
            className="input-field"
            placeholder="Describe your brand voice, style, and visual guidelines"
            required
          />
        </div>

        <div>
          <label className="label">Project Deadline</label>
          <input
            type="date"
            name="project_deadline"
            value={formData.project_deadline}
            onChange={handleInputChange}
            className="input-field"
            required
          />
        </div>

        <div>
          <label className="label">Approval Level</label>
          <select
            name="approval_level"
            value={formData.approval_level}
            onChange={handleInputChange}
            className="input-field"
          >
            <option value="low">Low - Minimal human oversight</option>
            <option value="medium">Medium - Standard review process</option>
            <option value="high">High - Extensive human review</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={isProcessing}
          className="btn-primary w-full flex items-center justify-center space-x-2 text-lg py-3"
        >
          <RocketIcon className="h-5 w-5" />
          <span>{isProcessing ? 'Running Master Pipeline...' : 'Launch Complete Pipeline'}</span>
        </button>
      </form>

      {result && (
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Pipeline Results</h3>
          <div className="bg-gray-50 rounded-lg p-4 overflow-auto max-h-96">
            <pre className="text-sm text-gray-700 whitespace-pre-wrap">{result}</pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default MasterPipelineForm;
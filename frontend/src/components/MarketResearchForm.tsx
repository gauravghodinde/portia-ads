import React, { useState } from 'react';
import { SearchIcon, TrendingUpIcon } from 'lucide-react';
import { submitMarketResearch } from '../services/api';

interface MarketResearchFormProps {
  isProcessing: boolean;
  setIsProcessing: (processing: boolean) => void;
}

const MarketResearchForm: React.FC<MarketResearchFormProps> = ({ isProcessing, setIsProcessing }) => {
  const [formData, setFormData] = useState({
    topic: 'AI in Healthcare',
    target_audience: 'Healthcare professionals, hospital administrators, medical researchers',
    competitor_domains: ['healthitnews.com', 'medicalfuturist.com'],
    research_depth: 'comprehensive'
  });
  const [result, setResult] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    try {
      const response = await submitMarketResearch(formData);
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

  const handleCompetitorDomainsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const domains = e.target.value.split('\n').filter(domain => domain.trim());
    setFormData(prev => ({
      ...prev,
      competitor_domains: domains
    }));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2 text-primary-600">
        <SearchIcon className="h-6 w-6" />
        <h2 className="text-xl font-semibold">Market Research Configuration</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="label">Research Topic</label>
          <input
            type="text"
            name="topic"
            value={formData.topic}
            onChange={handleInputChange}
            className="input-field"
            placeholder="e.g., AI in Healthcare"
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
          <label className="label">Competitor Domains (one per line)</label>
          <textarea
            value={formData.competitor_domains.join('\n')}
            onChange={handleCompetitorDomainsChange}
            rows={4}
            className="input-field"
            placeholder="healthitnews.com&#10;medicalfuturist.com"
          />
        </div>

        <div>
          <label className="label">Research Depth</label>
          <select
            name="research_depth"
            value={formData.research_depth}
            onChange={handleInputChange}
            className="input-field"
          >
            <option value="basic">Basic</option>
            <option value="comprehensive">Comprehensive</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={isProcessing}
          className="btn-primary w-full flex items-center justify-center space-x-2"
        >
          <TrendingUpIcon className="h-5 w-5" />
          <span>{isProcessing ? 'Analyzing Market...' : 'Start Market Research'}</span>
        </button>
      </form>

      {result && (
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Research Results</h3>
          <div className="bg-gray-50 rounded-lg p-4 overflow-auto max-h-96">
            <pre className="text-sm text-gray-700 whitespace-pre-wrap">{result}</pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default MarketResearchForm;
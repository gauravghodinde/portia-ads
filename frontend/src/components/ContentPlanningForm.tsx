import React, { useState } from 'react';
import { CalendarIcon, SettingsIcon } from 'lucide-react';
import { submitContentPlanning } from '../services/api';

interface ContentPlanningFormProps {
  isProcessing: boolean;
  setIsProcessing: (processing: boolean) => void;
}

const ContentPlanningForm: React.FC<ContentPlanningFormProps> = ({ isProcessing, setIsProcessing }) => {
  const [formData, setFormData] = useState({
    research_summary: 'AI healthcare market research data showing growth trends and opportunities',
    content_goals: 'Establish thought leadership in AI healthcare, drive engagement from healthcare professionals',
    brand_guidelines: 'Professional yet approachable tone, evidence-based content',
    publishing_frequency: '3x per week'
  });
  const [result, setResult] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    try {
      const response = await submitContentPlanning(formData);
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

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2 text-primary-600">
        <CalendarIcon className="h-6 w-6" />
        <h2 className="text-xl font-semibold">Content Planning Configuration</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="label">Research Summary</label>
          <textarea
            name="research_summary"
            value={formData.research_summary}
            onChange={handleInputChange}
            rows={4}
            className="input-field"
            placeholder="Provide market research insights and findings"
            required
          />
        </div>

        <div>
          <label className="label">Content Goals</label>
          <textarea
            name="content_goals"
            value={formData.content_goals}
            onChange={handleInputChange}
            rows={3}
            className="input-field"
            placeholder="Define your content marketing objectives"
            required
          />
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
          <label className="label">Publishing Frequency</label>
          <select
            name="publishing_frequency"
            value={formData.publishing_frequency}
            onChange={handleInputChange}
            className="input-field"
          >
            <option value="daily">Daily</option>
            <option value="3x per week">3x per week</option>
            <option value="2x per week">2x per week</option>
            <option value="weekly">Weekly</option>
            <option value="bi-weekly">Bi-weekly</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={isProcessing}
          className="btn-primary w-full flex items-center justify-center space-x-2"
        >
          <SettingsIcon className="h-5 w-5" />
          <span>{isProcessing ? 'Creating Content Plan...' : 'Generate Content Strategy'}</span>
        </button>
      </form>

      {result && (
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Content Plan Results</h3>
          <div className="bg-gray-50 rounded-lg p-4 overflow-auto max-h-96">
            <pre className="text-sm text-gray-700 whitespace-pre-wrap">{result}</pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentPlanningForm;
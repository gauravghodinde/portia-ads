import React, { useState } from 'react';
import { MicrophoneIcon, RadioIcon } from 'lucide-react';
import { submitPodcastProduction } from '../services/api';

interface PodcastProductionFormProps {
  isProcessing: boolean;
  setIsProcessing: (processing: boolean) => void;
}

const PodcastProductionForm: React.FC<PodcastProductionFormProps> = ({ isProcessing, setIsProcessing }) => {
  const [formData, setFormData] = useState({
    episode_topic: 'AI in Healthcare: The Future of Medical Diagnosis',
    source_content: 'AI is revolutionizing healthcare by improving diagnostic accuracy and reducing medical errors...',
    target_duration: 25,
    host_style: 'conversational',
    episode_number: '001'
  });
  const [result, setResult] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    try {
      const response = await submitPodcastProduction(formData);
      setResult(JSON.stringify(response, null, 2));
    } catch (error) {
      setResult(`Error: ${error}`);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === 'target_duration') {
      setFormData(prev => ({
        ...prev,
        [name]: parseInt(value) || 0
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2 text-primary-600">
        <MicrophoneIcon className="h-6 w-6" />
        <h2 className="text-xl font-semibold">Podcast Production Configuration</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="label">Episode Topic</label>
          <input
            type="text"
            name="episode_topic"
            value={formData.episode_topic}
            onChange={handleInputChange}
            className="input-field"
            placeholder="Enter the main topic for your podcast episode"
            required
          />
        </div>

        <div>
          <label className="label">Source Content</label>
          <textarea
            name="source_content"
            value={formData.source_content}
            onChange={handleInputChange}
            rows={4}
            className="input-field"
            placeholder="Provide source material or research content for the episode"
            required
          />
        </div>

        <div>
          <label className="label">Target Duration (minutes)</label>
          <input
            type="number"
            name="target_duration"
            value={formData.target_duration}
            onChange={handleInputChange}
            className="input-field"
            min="5"
            max="120"
            required
          />
        </div>

        <div>
          <label className="label">Host Style</label>
          <select
            name="host_style"
            value={formData.host_style}
            onChange={handleInputChange}
            className="input-field"
          >
            <option value="conversational">Conversational</option>
            <option value="professional">Professional</option>
            <option value="energetic">Energetic</option>
            <option value="educational">Educational</option>
          </select>
        </div>

        <div>
          <label className="label">Episode Number</label>
          <input
            type="text"
            name="episode_number"
            value={formData.episode_number}
            onChange={handleInputChange}
            className="input-field"
            placeholder="e.g., 001, S01E01"
            required
          />
        </div>

        <button
          type="submit"
          disabled={isProcessing}
          className="btn-primary w-full flex items-center justify-center space-x-2"
        >
          <RadioIcon className="h-5 w-5" />
          <span>{isProcessing ? 'Producing Podcast...' : 'Generate Podcast Episode'}</span>
        </button>
      </form>

      {result && (
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Podcast Production Results</h3>
          <div className="bg-gray-50 rounded-lg p-4 overflow-auto max-h-96">
            <pre className="text-sm text-gray-700 whitespace-pre-wrap">{result}</pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default PodcastProductionForm;
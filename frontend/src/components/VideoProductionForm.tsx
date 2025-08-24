import React, { useState } from 'react';
import { VideoIcon, CameraIcon } from 'lucide-react';
import { submitVideoProduction } from '../services/api';

interface VideoProductionFormProps {
  isProcessing: boolean;
  setIsProcessing: (processing: boolean) => void;
}

const VideoProductionForm: React.FC<VideoProductionFormProps> = ({ isProcessing, setIsProcessing }) => {
  const [formData, setFormData] = useState({
    video_topic: 'AI-Powered Medical Diagnosis Explained',
    target_platform: 'youtube',
    video_length: '8-10 minutes',
    video_style: 'educational',
    brand_guidelines: 'Professional blue theme, modern fonts, clean graphics'
  });
  const [result, setResult] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    try {
      const response = await submitVideoProduction(formData);
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
        <VideoIcon className="h-6 w-6" />
        <h2 className="text-xl font-semibold">Video Production Configuration</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="label">Video Topic</label>
          <input
            type="text"
            name="video_topic"
            value={formData.video_topic}
            onChange={handleInputChange}
            className="input-field"
            placeholder="Enter the main topic for your video"
            required
          />
        </div>

        <div>
          <label className="label">Target Platform</label>
          <select
            name="target_platform"
            value={formData.target_platform}
            onChange={handleInputChange}
            className="input-field"
          >
            <option value="youtube">YouTube</option>
            <option value="tiktok">TikTok</option>
            <option value="instagram">Instagram</option>
            <option value="linkedin">LinkedIn</option>
            <option value="twitter">Twitter</option>
          </select>
        </div>

        <div>
          <label className="label">Video Length</label>
          <select
            name="video_length"
            value={formData.video_length}
            onChange={handleInputChange}
            className="input-field"
          >
            <option value="30-60 seconds">30-60 seconds</option>
            <option value="1-3 minutes">1-3 minutes</option>
            <option value="3-5 minutes">3-5 minutes</option>
            <option value="5-8 minutes">5-8 minutes</option>
            <option value="8-10 minutes">8-10 minutes</option>
            <option value="10-15 minutes">10-15 minutes</option>
            <option value="15+ minutes">15+ minutes</option>
          </select>
        </div>

        <div>
          <label className="label">Video Style</label>
          <select
            name="video_style"
            value={formData.video_style}
            onChange={handleInputChange}
            className="input-field"
          >
            <option value="educational">Educational</option>
            <option value="entertainment">Entertainment</option>
            <option value="tutorial">Tutorial</option>
            <option value="documentary">Documentary</option>
            <option value="promotional">Promotional</option>
          </select>
        </div>

        <div>
          <label className="label">Brand Guidelines</label>
          <textarea
            name="brand_guidelines"
            value={formData.brand_guidelines}
            onChange={handleInputChange}
            rows={3}
            className="input-field"
            placeholder="Describe your brand colors, fonts, style preferences"
            required
          />
        </div>

        <button
          type="submit"
          disabled={isProcessing}
          className="btn-primary w-full flex items-center justify-center space-x-2"
        >
          <CameraIcon className="h-5 w-5" />
          <span>{isProcessing ? 'Creating Video Plan...' : 'Generate Video Production Plan'}</span>
        </button>
      </form>

      {result && (
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Video Production Results</h3>
          <div className="bg-gray-50 rounded-lg p-4 overflow-auto max-h-96">
            <pre className="text-sm text-gray-700 whitespace-pre-wrap">{result}</pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoProductionForm;
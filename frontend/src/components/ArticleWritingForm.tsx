import React, { useState } from 'react';
import { FileTextIcon, PenToolIcon } from 'lucide-react';
import { submitArticleWriting } from '../services/api';

interface ArticleWritingFormProps {
  isProcessing: boolean;
  setIsProcessing: (processing: boolean) => void;
}

const ArticleWritingForm: React.FC<ArticleWritingFormProps> = ({ isProcessing, setIsProcessing }) => {
  const [formData, setFormData] = useState({
    topic: 'AI-Powered Medical Diagnosis: Transforming Healthcare in 2025',
    target_keywords: ['AI medical diagnosis', 'artificial intelligence healthcare', 'AI diagnostics'],
    word_count_target: 1500,
    audience_level: 'intermediate',
    content_angle: 'Practical implementation guide for healthcare professionals'
  });
  const [result, setResult] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    try {
      const response = await submitArticleWriting(formData);
      setResult(JSON.stringify(response, null, 2));
    } catch (error) {
      setResult(`Error: ${error}`);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === 'word_count_target') {
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

  const handleKeywordsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const keywords = e.target.value.split('\n').filter(keyword => keyword.trim());
    setFormData(prev => ({
      ...prev,
      target_keywords: keywords
    }));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2 text-primary-600">
        <FileTextIcon className="h-6 w-6" />
        <h2 className="text-xl font-semibold">Article Writing Configuration</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="label">Article Topic</label>
          <input
            type="text"
            name="topic"
            value={formData.topic}
            onChange={handleInputChange}
            className="input-field"
            placeholder="Enter the main topic for your article"
            required
          />
        </div>

        <div>
          <label className="label">Target Keywords (one per line)</label>
          <textarea
            value={formData.target_keywords.join('\n')}
            onChange={handleKeywordsChange}
            rows={4}
            className="input-field"
            placeholder="AI medical diagnosis&#10;artificial intelligence healthcare&#10;AI diagnostics"
            required
          />
        </div>

        <div>
          <label className="label">Word Count Target</label>
          <input
            type="number"
            name="word_count_target"
            value={formData.word_count_target}
            onChange={handleInputChange}
            className="input-field"
            min="500"
            max="5000"
            required
          />
        </div>

        <div>
          <label className="label">Audience Level</label>
          <select
            name="audience_level"
            value={formData.audience_level}
            onChange={handleInputChange}
            className="input-field"
          >
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>

        <div>
          <label className="label">Content Angle</label>
          <textarea
            name="content_angle"
            value={formData.content_angle}
            onChange={handleInputChange}
            rows={3}
            className="input-field"
            placeholder="Describe the unique angle or approach for this article"
            required
          />
        </div>

        <button
          type="submit"
          disabled={isProcessing}
          className="btn-primary w-full flex items-center justify-center space-x-2"
        >
          <PenToolIcon className="h-5 w-5" />
          <span>{isProcessing ? 'Writing Article...' : 'Generate Article'}</span>
        </button>
      </form>

      {result && (
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Article Results</h3>
          <div className="bg-gray-50 rounded-lg p-4 overflow-auto max-h-96">
            <pre className="text-sm text-gray-700 whitespace-pre-wrap">{result}</pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArticleWritingForm;
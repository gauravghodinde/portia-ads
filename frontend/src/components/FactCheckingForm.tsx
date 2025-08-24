import React, { useState } from 'react';
import { CheckCircleIcon, ShieldCheckIcon } from 'lucide-react';
import { submitFactChecking } from '../services/api';

interface FactCheckingFormProps {
  isProcessing: boolean;
  setIsProcessing: (processing: boolean) => void;
}

const FactCheckingForm: React.FC<FactCheckingFormProps> = ({ isProcessing, setIsProcessing }) => {
  const [formData, setFormData] = useState({
    content_to_verify: `AI in healthcare is projected to reach $613.81 billion by 2034, growing at a CAGR of 37%.
Currently, 100% of healthcare systems use AI for clinical documentation.
Studies show that 46% of patients use AI symptom checkers for mental health concerns.
The FDA has approved over 1250 AI-based medical devices as of 2024.`,
    verification_level: 'thorough'
  });
  const [result, setResult] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    try {
      const response = await submitFactChecking(formData);
      setResult(JSON.stringify(response, null, 2));
    } catch (error) {
      setResult(`Error: ${error}`);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2 text-primary-600">
        <CheckCircleIcon className="h-6 w-6" />
        <h2 className="text-xl font-semibold">Fact Checking Configuration</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="label">Content to Verify</label>
          <textarea
            name="content_to_verify"
            value={formData.content_to_verify}
            onChange={handleInputChange}
            rows={8}
            className="input-field"
            placeholder="Paste the content you want to fact-check here..."
            required
          />
        </div>

        <div>
          <label className="label">Verification Level</label>
          <select
            name="verification_level"
            value={formData.verification_level}
            onChange={handleInputChange}
            className="input-field"
          >
            <option value="basic">Basic</option>
            <option value="thorough">Thorough</option>
            <option value="comprehensive">Comprehensive</option>
          </select>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <ShieldCheckIcon className="h-5 w-5 text-blue-600 mt-0.5" />
            <div>
              <h4 className="text-sm font-medium text-blue-900">Fact-Checking Process</h4>
              <p className="text-sm text-blue-700 mt-1">
                Our AI will extract factual claims, verify them against authoritative sources, 
                and provide a detailed verification report with confidence scores and citations.
              </p>
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={isProcessing}
          className="btn-primary w-full flex items-center justify-center space-x-2"
        >
          <ShieldCheckIcon className="h-5 w-5" />
          <span>{isProcessing ? 'Verifying Content...' : 'Start Fact Check'}</span>
        </button>
      </form>

      {result && (
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Fact Check Results</h3>
          <div className="bg-gray-50 rounded-lg p-4 overflow-auto max-h-96">
            <pre className="text-sm text-gray-700 whitespace-pre-wrap">{result}</pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default FactCheckingForm;
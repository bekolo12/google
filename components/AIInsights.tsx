import React, { useState } from 'react';
import { Transaction } from '../types';
import { analyzeFinances } from '../services/geminiService';
import { Sparkles, RefreshCcw, Loader2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface AIInsightsProps {
  transactions: Transaction[];
}

const AIInsights: React.FC<AIInsightsProps> = ({ transactions }) => {
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    setLoading(true);
    const result = await analyzeFinances(transactions);
    setAnalysis(result);
    setLoading(false);
  };

  return (
    <div className="p-4 md:p-8 max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center p-3 bg-indigo-100 rounded-full mb-4">
            <Sparkles className="w-8 h-8 text-indigo-600" />
        </div>
        <h2 className="text-3xl font-bold text-slate-900 mb-2">AI Financial Advisor</h2>
        <p className="text-slate-500 max-w-lg mx-auto">
          Unlock personalized insights about your spending habits, potential savings, and financial health score powered by Gemini.
        </p>
      </div>

      {!analysis && !loading && (
        <div className="flex justify-center">
            <button
            onClick={handleAnalyze}
            className="group relative inline-flex items-center justify-center px-8 py-4 font-semibold text-white transition-all duration-200 bg-indigo-600 rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 shadow-xl shadow-indigo-600/30"
            >
            <span className="mr-2 text-lg">Generate Analysis</span>
            <Sparkles className="w-5 h-5 group-hover:animate-pulse" />
            </button>
        </div>
      )}

      {loading && (
        <div className="flex flex-col items-center justify-center py-12">
          <Loader2 className="w-12 h-12 text-indigo-600 animate-spin mb-4" />
          <p className="text-slate-600 font-medium animate-pulse">Analyzing your transaction history...</p>
        </div>
      )}

      {analysis && !loading && (
        <div className="bg-white rounded-2xl shadow-xl border border-indigo-100 overflow-hidden animation-fade-in-up">
            <div className="bg-indigo-600 px-6 py-4 flex justify-between items-center">
                <h3 className="text-white font-bold text-lg flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-indigo-200" />
                    Insight Report
                </h3>
                <button 
                    onClick={handleAnalyze}
                    className="text-indigo-100 hover:text-white hover:bg-indigo-500/50 p-2 rounded-lg transition-colors"
                    title="Regenerate"
                >
                    <RefreshCcw className="w-4 h-4" />
                </button>
            </div>
            <div className="p-8 prose prose-indigo max-w-none text-slate-700">
                <ReactMarkdown
                    components={{
                        h1: ({node, ...props}) => <h1 className="text-2xl font-bold text-slate-900 mb-4" {...props} />,
                        h2: ({node, ...props}) => <h2 className="text-xl font-bold text-slate-800 mt-6 mb-3 pb-2 border-b border-slate-100" {...props} />,
                        strong: ({node, ...props}) => <strong className="font-bold text-indigo-700" {...props} />,
                        ul: ({node, ...props}) => <ul className="list-disc pl-5 space-y-2 mb-4" {...props} />,
                        li: ({node, ...props}) => <li className="text-slate-700" {...props} />,
                        p: ({node, ...props}) => <p className="mb-4 leading-relaxed" {...props} />
                    }}
                >
                    {analysis}
                </ReactMarkdown>
            </div>
        </div>
      )}
    </div>
  );
};

export default AIInsights;
import React from 'react';
import { LayoutDashboard, Receipt, BrainCircuit, Wallet } from 'lucide-react';
import { View } from '../types';

interface SidebarProps {
  currentView: View;
  onNavigate: (view: View) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, onNavigate }) => {
  const navItems = [
    { view: View.DASHBOARD, label: 'Dashboard', icon: LayoutDashboard },
    { view: View.TRANSACTIONS, label: 'Transactions', icon: Receipt },
    { view: View.INSIGHTS, label: 'AI Advisor', icon: BrainCircuit },
  ];

  return (
    <div className="hidden md:flex flex-col w-64 bg-slate-900 text-white min-h-screen p-4">
      <div className="flex items-center gap-2 mb-8 px-2">
        <Wallet className="w-8 h-8 text-blue-400" />
        <h1 className="text-xl font-bold tracking-tight">FinSight AI</h1>
      </div>
      
      <nav className="flex-1 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.view;
          return (
            <button
              key={item.view}
              onClick={() => onNavigate(item.view)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
                isActive 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/50' 
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="mt-auto px-4 py-4 bg-slate-800/50 rounded-xl">
        <p className="text-xs text-slate-400 mb-1">Total Balance</p>
        <p className="text-lg font-bold text-white">$4,235.00</p>
      </div>
    </div>
  );
};

export default Sidebar;
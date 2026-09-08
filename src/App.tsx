import React, { useState } from 'react';
import { Header } from './components/layout/Header';
import { BottomNav } from './components/layout/BottomNav';
import { ShopPage } from './components/shop/ShopPage';
import { Home, PieChart, User, ShieldCheck, ArrowUpRight } from 'lucide-react';

export function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'shop' | 'portfolio' | 'profile'>('shop');

  return (
    <div className="min-h-screen bg-[#0A0E17] text-slate-100 flex flex-col font-sans">
      <Header />

      <div className="flex-1">
        {activeTab === 'shop' && <ShopPage />}

        {activeTab === 'home' && (
          <div className="max-w-4xl mx-auto px-4 py-12 text-center space-y-6">
            <div className="w-16 h-16 rounded-3xl bg-brand-500/10 text-brand-400 border border-brand-500/20 flex items-center justify-center mx-auto shadow-glow-teal">
              <Home className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-extrabold text-white">Welcome to 1Fi Dashboard</h2>
            <p className="text-sm text-slate-400 max-w-md mx-auto">
              Your instant credit line backed by mutual funds & securities.
            </p>
            <div className="inline-flex items-center space-x-2 bg-[#121824] p-4 rounded-2xl border border-slate-800 text-xs">
              <ShieldCheck className="w-5 h-5 text-brand-400" />
              <span className="text-slate-300">Ready to shop? Switch to the <strong className="text-brand-400 font-bold">Shop</strong> tab to explore 1Fi Marketplace.</span>
            </div>
          </div>
        )}

        {activeTab === 'portfolio' && (
          <div className="max-w-4xl mx-auto px-4 py-12 text-center space-y-6">
            <div className="w-16 h-16 rounded-3xl bg-brand-500/10 text-brand-400 border border-brand-500/20 flex items-center justify-center mx-auto shadow-glow-teal">
              <PieChart className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-extrabold text-white">Your Pledged Portfolio</h2>
            <p className="text-sm text-slate-400 max-w-md mx-auto">
              Mutual Fund Portfolio Value: <strong className="text-white">₹3,40,000</strong>
            </p>
            <div className="bg-[#121824] p-6 rounded-2xl border border-slate-800 max-w-sm mx-auto text-left space-y-2 text-xs">
              <div className="flex justify-between text-slate-400">
                <span>Pledged Funds:</span>
                <span className="font-semibold text-white">Axis Bluechip & Nippon India</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Sanctioned Credit Line:</span>
                <span className="font-bold text-brand-400">₹1,50,000</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'profile' && (
          <div className="max-w-4xl mx-auto px-4 py-12 text-center space-y-6">
            <div className="w-16 h-16 rounded-3xl bg-brand-500/10 text-brand-400 border border-brand-500/20 flex items-center justify-center mx-auto shadow-glow-teal">
              <User className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-extrabold text-white">User Profile & AutoPay</h2>
            <p className="text-sm text-slate-400 max-w-md mx-auto">
              Tejupriya K. • Verified KYC Tier-1
            </p>
            <div className="bg-[#121824] p-4 rounded-2xl border border-slate-800 max-w-sm mx-auto text-xs text-slate-400">
              1Fi AutoPay Status: <strong className="text-emerald-400">Active (HDFC Bank ****4912)</strong>
            </div>
          </div>
        )}
      </div>

      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}

export default App;

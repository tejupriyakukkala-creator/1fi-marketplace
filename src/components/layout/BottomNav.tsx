import React from 'react';
import { Home, ShoppingBag, PieChart, User } from 'lucide-react';

interface BottomNavProps {
  activeTab: 'home' | 'shop' | 'portfolio' | 'profile';
  onTabChange: (tab: 'home' | 'shop' | 'portfolio' | 'profile') => void;
}

interface NavItem {
  id: 'home' | 'shop' | 'portfolio' | 'profile';
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onTabChange }) => {
  const navItems: NavItem[] = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'shop', label: 'Shop', icon: ShoppingBag, badge: 'Marketplace' },
    { id: 'portfolio', label: 'Portfolio', icon: PieChart },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#0A0E17]/95 backdrop-blur-lg border-t border-slate-800/80 px-2 py-2">
      <div className="max-w-md mx-auto flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`relative flex flex-col items-center py-1 px-4 rounded-xl transition-all duration-200 ${
                isActive ? 'text-brand-400 font-semibold' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {isActive && (
                <div className="absolute -top-2 w-8 h-1 bg-brand-500 rounded-full shadow-glow-teal"></div>
              )}
              <Icon className={`w-5 h-5 mb-0.5 ${isActive ? 'text-brand-400' : 'text-slate-400'}`} />
              <span className="text-[11px]">{item.label}</span>
              {item.badge && (
                <span className="absolute -top-1 right-1 px-1 py-0.2 bg-brand-500/20 text-brand-400 text-[9px] font-bold rounded-full border border-brand-500/30">
                  NEW
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

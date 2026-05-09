import React from 'react';

export default function SearchBox({ value, onChange, placeholder = "Type something..." }) {
  return (
    <div className="relative w-full group">
      <input 
        placeholder={placeholder} 
        value={value}
        onChange={onChange}
        className="w-full py-3 pl-11 pr-4 text-sm text-on-surface bg-surface-container-low/50 backdrop-blur-md border border-white/10 rounded-xl outline-none focus:outline-none focus:ring-0 transition-all duration-300 hover:border-primary/50 focus:border-primary/50 focus:bg-surface-container-low focus:shadow-[0_0_20px_rgba(78,222,163,0.15)] placeholder:text-on-surface-variant/50" 
        type="text" 
      />
      
      {/* Icon */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant transition-colors duration-300 group-focus-within:text-primary pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4">
          <path strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" />
        </svg>
      </div>
    </div>
  );
}

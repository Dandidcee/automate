import React from 'react';

export default function ExpandableSearch({ value, onChange, placeholder = "Search" }) {
  return (
    <div className="relative box-border w-full flex justify-end">
      {/* Checkbox acting as the toggle switch */}
      <input 
        type="checkbox" 
        defaultChecked 
        className="peer absolute right-[10px] top-[10px] z-10 w-[30px] h-[30px] cursor-pointer appearance-none outline-none" 
      />
      
      {/* Main container */}
      <div className="box-border relative h-[50px] flex flex-row-reverse items-center justify-start rounded-full bg-surface-container-low border border-outline-variant/50 transition-all duration-300 w-full peer-checked:w-[50px] peer-checked:border-outline-variant/30">
        
        {/* Search Icon */}
        <div className="box-border flex items-center justify-center w-[50px] h-full transition-all duration-300 shrink-0">
          <svg 
            viewBox="0 0 512 512" 
            height="1.3em" 
            xmlns="http://www.w3.org/2000/svg" 
            className="fill-on-surface-variant transition-colors group-hover:fill-primary"
          >
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
          </svg>
        </div>
        
        {/* Search Input */}
        <input 
          type="text" 
          placeholder={placeholder} 
          value={value}
          onChange={onChange}
          className="box-border h-full bg-transparent border-none outline-none text-on-surface placeholder:text-on-surface-variant/50 transition-all duration-300 w-full pl-5 peer-checked:w-0 peer-checked:p-0 peer-checked:opacity-0 opacity-100" 
        />
      </div>
    </div>
  );
}

import React, { useState, useEffect } from 'react';

export const Dropdown: React.FunctionComponent<any> = ({
  title = 'Select',
  icon,
  showCaret = true,
  className = '',
  buttonClassName = '',
  align = 'right',
  children,
}) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.removeEventListener('click', unregisterClickAway);
      document.addEventListener('click', unregisterClickAway);
    }
  }, [open]);

  const unregisterClickAway = () => {
    setOpen(false);
    document.removeEventListener('click', unregisterClickAway);
  };

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setOpen(!open)}
        type="button"
        className={`flex text-sm px-2 rounded-md hover:text-white focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition ease-in-out duration-150 ${buttonClassName}`}
      >
        {icon}
        {title}
        {/* { showCaret && <FaCaretDown className="text-md mt-1 ml-1" /> } */}
      </button>
      {open && (
        <div
          className={`origin-top-right absolute ${align === 'right' &&
            'right-0'} ${align === 'left' &&
            'left-0'} mt-1 mr-3 w-64 rounded-md shadow-lg z-50 bg-white`}
        >
          <div className="rounded-md bg-white shadow-xs">
            <div className="py-1">{children}</div>
          </div>
        </div>
      )}
    </div>
  );
};

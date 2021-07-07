import React, { useState, useEffect } from 'react';

interface DropdownProps {
  opener: React.ReactNode;
  className?: string;
  buttonHoverClassName?: string;
  align?: string;
}

export const Dropdown: React.FunctionComponent<DropdownProps> = ({
  opener,
  className = 'relative',
  buttonHoverClassName,
  align = 'right',
  children,
}) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      registerClickAway();
    }
  }, [open]);

  const registerClickAway = () => {
    document.removeEventListener('click', unregisterClickAway);
    document.addEventListener('click', unregisterClickAway);
  };

  const unregisterClickAway = () => {
    setOpen(false);
    document.removeEventListener('click', unregisterClickAway);
  };

  buttonHoverClassName = buttonHoverClassName || 'hover:text-white';

  return (
    <div className={className}>
      <button
        onClick={() => setOpen(!open)}
        type="button"
        className={`flex p-2 text-sm rounded-md ${buttonHoverClassName} focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition ease-in-out duration-150`}
      >
        {opener}
      </button>
      <div
        className={`${
          open ? 'block' : 'hidden'
        } origin-top-right absolute ${align === 'right' &&
          'right-0'} ${align === 'left' &&
          'left-0'} mt-1 mr-3 w-64 rounded-md shadow-lg z-50`}
      >
        <div className="rounded-md bg-gray-800 shadow-xs">
          <div className="py-1">{children}</div>
        </div>
      </div>
    </div>
  );
};

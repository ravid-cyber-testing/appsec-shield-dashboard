import React, { ReactNode } from 'react';

export type SecurityLevel = 'critical' | 'high' | 'medium' | 'low' | 'secure';

export type SecurityCardProps = {
  label: string;
  value: number | string;
  icon: ReactNode;
  securityLevel?: SecurityLevel;
  tooltip?: string;
  formatter?: 'percentage' | 'number' | 'currency';
};

const formatValue = (value: number | string, formatter?: 'percentage' | 'number' | 'currency') => {
  if (typeof value === 'string') return value;
  
  switch (formatter) {
    case 'percentage':
      return `${value}%`;
    case 'currency':
      return `$${value.toLocaleString()}`;
    case 'number':
    default:
      return value.toLocaleString();
  }
};

const getSecurityLevelColor = (level?: SecurityLevel) => {
  switch (level) {
    case 'critical':
      return 'bg-red-100 text-red-700';
    case 'high':
      return 'bg-orange-100 text-orange-700';
    case 'medium':
      return 'bg-yellow-100 text-yellow-700';
    case 'low':
      return 'bg-blue-100 text-blue-700';
    case 'secure':
      return 'bg-green-100 text-green-700';
    default:
      return 'bg-gray-100 text-gray-700';
  }
};

const SecurityCard: React.FC<SecurityCardProps> = ({
  label,
  value,
  icon,
  securityLevel,
  tooltip,
  formatter
}) => {
  const securityLevelColor = getSecurityLevelColor(securityLevel);
  
  return (
    <div className="relative flex w-full items-center gap-4 rounded-lg bg-white px-6 py-8 text-gray-950 shadow-sm transition-all hover:shadow-md">
      <div className={`rounded-lg p-4 ${securityLevelColor}`} data-testid="icon">
        {icon}
      </div>
      <div className="peer flex flex-col">
        <p className="text-xl font-medium" data-testid="value">
          {formatValue(value, formatter)}
        </p>
        <p className="text-sm text-gray-500">{label}</p>
      </div>
      {tooltip && (
        <div className="absolute right-2 top-2 cursor-help">
          <div className="group relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 24 24"
              className="text-gray-400"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10z"
              ></path>
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M12 8v5"
              ></path>
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11.995 16h.009"
              ></path>
            </svg>
            <div className="absolute right-0 top-0 z-10 hidden w-64 rounded-md bg-gray-900 p-2 text-xs text-white group-hover:block">
              {tooltip}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SecurityCard;
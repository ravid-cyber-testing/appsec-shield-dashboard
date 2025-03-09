import React from 'react';
import SecurityCard, { SecurityLevel } from './SecurityCard';

export type SecurityMetric = {
  id: string;
  label: string;
  value: number | string;
  securityLevel: SecurityLevel;
  tooltip?: string;
  formatter?: 'percentage' | 'number' | 'currency';
};

export type SecurityDashboardProps = {
  title: string;
  description?: string;
  metrics: SecurityMetric[];
};

const getIconForMetric = (metricId: string) => {
  const icons: Record<string, React.ReactNode> = {
    vulnerabilities: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
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
    ),
    compliance: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M22 10v5c0 5-2 7-7 7H9c-5 0-7-2-7-7V9c0-5 2-7 7-7h5"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M22 10h-4c-3 0-4-1-4-4V2l8 8z"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M7 13h6M7 17h4"
        ></path>
      </svg>
    ),
    encryption: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7z"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M16.28 13.61c-.15.15-.34.27-.54.36-.2.09-.42.14-.65.13-.23-.01-.44-.07-.64-.18-.2-.11-.37-.25-.51-.43-.13-.18-.23-.39-.29-.62-.06-.23-.07-.47-.03-.7.04-.24.13-.46.26-.66.13-.2.3-.37.5-.5.2-.13.42-.22.66-.26.23-.04.47-.03.7.03.23.06.44.16.62.29.18.14.32.31.43.51.11.2.17.41.18.64.01.23-.04.45-.13.65-.09.2-.21.39-.36.54zM10.45 13.61c-.15.15-.34.27-.54.36-.2.09-.42.14-.65.13-.23-.01-.44-.07-.64-.18-.2-.11-.37-.25-.51-.43-.13-.18-.23-.39-.29-.62-.06-.23-.07-.47-.03-.7.04-.24.13-.46.26-.66.13-.2.3-.37.5-.5.2-.13.42-.22.66-.26.23-.04.47-.03.7.03.23.06.44.16.62.29.18.14.32.31.43.51.11.2.17.41.18.64.01.23-.04.45-.13.65-.09.2-.21.39-.36.54zM8.5 17.5h7"
        ></path>
      </svg>
    ),
    accessControl: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M6 10V8c0-3.31 1-6 6-6s6 2.69 6 6v2M12 18.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M17 22H7c-4 0-5-1-5-5v-2c0-4 1-5 5-5h10c4 0 5 1 5 5v2c0 4-1 5-5 5z"
        ></path>
      </svg>
    ),
    networkSecurity: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M5.54 11.12c-4.68.33-4.68 7.14 0 7.47h1.92M5.59 11.12C2.38 2.19 15.92-1.38 17.47 8c4.33.55 6.08 6.32 2.8 9.19-1 .91-2.29 1.41-3.64 1.4h-.09"
        ></path>
      </svg>
    ),
    default: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7z"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M12 15a3 3 0 100-6 3 3 0 000 6z"
        ></path>
      </svg>
    )
  };

  return icons[metricId] || icons.default;
};

const SecurityDashboard: React.FC<SecurityDashboardProps> = ({
  title,
  description,
  metrics
}) => {
  return (
    <div className="w-full rounded-lg bg-gray-50 p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
        {description && <p className="mt-1 text-sm text-gray-500">{description}</p>}
      </div>
      
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {metrics.map(metric => (
          <SecurityCard
            key={metric.id}
            label={metric.label}
            value={metric.value}
            securityLevel={metric.securityLevel}
            tooltip={metric.tooltip}
            formatter={metric.formatter}
            icon={getIconForMetric(metric.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default SecurityDashboard;
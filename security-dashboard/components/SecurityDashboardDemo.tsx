import React from 'react';
import SecurityDashboard, { SecurityMetric } from './SecurityDashboard';

const SecurityDashboardDemo: React.FC = () => {
  // Sample security metrics data
  const securityMetrics: SecurityMetric[] = [
    {
      id: 'vulnerabilities',
      label: 'Critical Vulnerabilities',
      value: 3,
      securityLevel: 'critical',
      tooltip: 'Number of critical vulnerabilities detected in your infrastructure',
      formatter: 'number'
    },
    {
      id: 'compliance',
      label: 'Compliance Score',
      value: 87,
      securityLevel: 'medium',
      tooltip: 'Overall compliance score based on industry standards',
      formatter: 'percentage'
    },
    {
      id: 'encryption',
      label: 'Encryption Coverage',
      value: 94,
      securityLevel: 'secure',
      tooltip: 'Percentage of data protected with encryption',
      formatter: 'percentage'
    },
    {
      id: 'accessControl',
      label: 'Access Control',
      value: 'At Risk',
      securityLevel: 'high',
      tooltip: 'Current status of access control policies'
    },
    {
      id: 'networkSecurity',
      label: 'Network Security',
      value: 'Stable',
      securityLevel: 'secure',
      tooltip: 'Current status of network security'
    },
    {
      id: 'securitySpending',
      label: 'Security Budget',
      value: 25000,
      securityLevel: 'low',
      tooltip: 'Current security budget allocation',
      formatter: 'currency'
    }
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-8 text-2xl font-bold text-gray-900">AppSec Shield Dashboard</h1>
      
      <SecurityDashboard
        title="Security Overview"
        description="Real-time security metrics and status indicators"
        metrics={securityMetrics}
      />
      
      <div className="mt-8 rounded-lg bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-xl font-semibold text-gray-900">Security Recommendations</h2>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start gap-2">
            <span className="mt-1 text-red-500">●</span>
            <span>Address the 3 critical vulnerabilities in your cloud infrastructure</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 text-orange-500">●</span>
            <span>Review and update access control policies</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 text-yellow-500">●</span>
            <span>Improve compliance score by implementing missing security controls</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SecurityDashboardDemo;
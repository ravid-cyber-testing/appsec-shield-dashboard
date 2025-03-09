import React from 'react';
import Head from 'next/head';
import SecurityDashboardDemo from '../security-dashboard/components/SecurityDashboardDemo';

export default function Home() {
  return (
    <div>
      <Head>
        <title>AppSec Shield Dashboard</title>
        <meta name="description" content="A futuristic application security dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gray-100">
        <SecurityDashboardDemo />
      </main>
    </div>
  );
}
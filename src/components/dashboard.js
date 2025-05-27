// src/components/dashboard.js

import React, { useEffect, useState } from 'react';

// Fibonacci logic
const fibonacci = (n) => {
  const seq = [0, 1];
  for (let i = 2; i < n; i++) {
    seq.push(seq[i - 1] + seq[i - 2]);
  }
  return seq.slice(0, n);
};

const Dashboard = () => {
  const [fibData, setFibData] = useState([]);
  const [highlight, setHighlight] = useState(null);
  const [systemMessage, setSystemMessage] = useState('🚀 System initialized.');
  const [testResults, setTestResults] = useState(null);

  useEffect(() => {
    const data = fibonacci(12);
    setFibData(data);
    let i = 0;
    const interval = setInterval(() => {
      setHighlight(data[i]);
      i = (i + 1) % data.length;
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  // Future: Hook this to test result endpoint or CLI
  useEffect(() => {
    // simulate test result injection
    setTimeout(() => {
      setTestResults("✅ All systems passed last CI test.");
    }, 3000);
  }, []);

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white font-sans">
      <h1 className="text-3xl font-bold mb-6 text-yellow-300">🌀 EmpireOS Fibonacci Dashboard</h1>

      {/* Fibonacci display grid */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        {fibData.map((num, idx) => (
          <div
            key={idx}
            className={`rounded-xl p-4 shadow-xl text-center text-lg transition-transform duration-500 ${
              num === highlight ? 'bg-yellow-500 scale-110 text-black' : 'bg-gray-800'
            }`}
          >
            {num}
          </div>
        ))}
      </div>

      {/* System Message Section */}
      <div className="bg-gray-800 p-4 rounded-lg shadow-inner mb-4">
        <h2 className="text-lg text-yellow-400 font-semibold mb-2">🧠 System Message</h2>
        <p className="text-sm text-gray-300">{systemMessage}</p>
      </div>

      {/* CI Test Status Display */}
      <div className="bg-gray-800 p-4 rounded-lg shadow-inner mb-4">
        <h2 className="text-lg text-green-400 font-semibold mb-2">✅ Test Report Status</h2>
        <p className="text-sm text-gray-300">
          {testResults || '⌛ Awaiting test report...'}
        </p>
      </div>

      {/* Voice Command Status (placeholder) */}
      <div className="bg-gray-800 p-4 rounded-lg shadow-inner">
        <h2 className="text-lg text-blue-400 font-semibold mb-2">🎙️ Voice Command Console</h2>
        <p className="text-sm text-gray-400">Ready for next voice trigger. (Module pending activation)</p>
      </div>

      <p className="mt-6 text-sm text-gray-500">
        Fibonacci-driven visualization cycles every 1.5s to reflect core logic behavior.
      </p>
    </div>
  );
};

export default Dashboard;

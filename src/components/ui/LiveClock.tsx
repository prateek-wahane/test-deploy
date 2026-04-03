'use client';

import { useEffect, useState } from 'react';

interface LiveClockProps {
  timezone: string;
  label: string;
}

export default function LiveClock({ timezone, label }: LiveClockProps) {
  const [time, setTime] = useState('');

  useEffect(() => {
    function updateTime() {
      const now = new Date();
      const formatted = now.toLocaleTimeString('en-GB', {
        timeZone: timezone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      });
      setTime(formatted);
    }

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [timezone]);

  return (
    <div className="flex items-center gap-2 text-sm text-slate-400">
      <span className="font-mono text-slate-900 tabular-nums">{time || '--:--:--'}</span>
      <span>{label}</span>
    </div>
  );
}

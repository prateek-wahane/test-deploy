import type { Office } from '@/types';

export const offices: Office[] = [
  {
    city: 'London',
    country: 'United Kingdom',
    address: '71-75 Shelton Street, Covent Garden, London WC2H 9JQ, United Kingdom',
    timezone: 'Europe/London',
    timezoneLabel: 'GMT/BST',
  },
  {
    city: 'Dubai',
    country: 'United Arab Emirates',
    address: 'Business Bay, The Opus Tower, Floor 12, Dubai, United Arab Emirates',
    timezone: 'Asia/Dubai',
    timezoneLabel: 'GST (UTC+4)',
  },
  {
    city: 'Bangalore',
    country: 'India',
    address: 'Embassy TechVillage, Outer Ring Road, Devarabisanahalli, Bengaluru 560103, India',
    timezone: 'Asia/Kolkata',
    timezoneLabel: 'IST (UTC+5:30)',
  },
];

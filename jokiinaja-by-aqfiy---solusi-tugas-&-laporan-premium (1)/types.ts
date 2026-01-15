
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  // Fix: Added import React from 'react' to resolve React.ReactNode namespace
  icon: React.ReactNode;
  priceStart?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

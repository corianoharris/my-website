declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || '';

// Log page views
export const pageview = (url: string) => {
  if (
    typeof window !== 'undefined' &&
    "G-HMV3QD2MD0" &&
    process.env.NODE_ENV === 'production'
  ) {
    window.gtag('config', 'G-HMV3QD2MD0', {
      page_path: url,
    });
  }
};

interface GtagEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

// Log custom events
export const event = ({ action, category, label, value }: GtagEvent) => {
  if (
    typeof window !== 'undefined' &&
    GA_TRACKING_ID &&
    process.env.NODE_ENV === 'production'
  ) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Log exceptions
export const exception = (description: string) => {
  if (
    typeof window !== 'undefined' &&
    GA_TRACKING_ID &&
    process.env.NODE_ENV === 'production'
  ) {
    window.gtag('event', 'exception', {
      description,
    });
  }
};
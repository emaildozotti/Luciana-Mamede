export interface FAQItem {
  question: string;
  answer: string;
}

export interface Review {
  text: string;
  author: string; // implied anonymous
}

// Declaration for AOS since we are loading it via CDN in index.html
declare global {
  interface Window {
    AOS: {
      init: (options?: any) => void;
      refresh: () => void;
    };
  }
}

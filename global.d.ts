import 'react';

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'chat-widget': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & { [key: string]: unknown };
    }
  }
}

export {};
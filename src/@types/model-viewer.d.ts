declare global {
    namespace JSX {
      interface IntrinsicElements {
        'model-viewer': ModelViewerJSX & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
      }
    }
  }
  
  interface ModelViewerJSX {
    src?: string
    ar?: boolean
    'ar-modes'?: string
    'camera-controls'?: boolean
    poster?: string
    'shadow-intensity'?: string
    autoplay?: boolean
    'auto-rotate'?: boolean
    'camera-orbit'?: string
    'field-of-view'?: string
  }
  
  export {}  // Necesario para que TypeScript trate esto como un módulo
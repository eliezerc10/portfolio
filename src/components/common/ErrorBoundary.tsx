import { Component, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import './ErrorBoundary.css';

interface Props {
  children: ReactNode;
  translations?: {
    title: string;
    message: string;
    button: string;
  };
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundaryClass extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    // Log error to console in development
    console.error('Error caught by boundary:', error, errorInfo);
    
    // In production, you could send to error tracking service
    // Example: Sentry.captureException(error);
  }

  handleReset = (): void => {
    this.setState({
      hasError: false,
      error: null
    });
    globalThis.location.reload();
  };

  render(): ReactNode {
    if (this.state.hasError) {
      const { title, message, button } = this.props.translations || {
        title: 'Oops! Something went wrong',
        message: "We're sorry, but something unexpected happened. Please try refreshing the page.",
        button: 'Refresh Page'
      };

      return (
        <div className="error-boundary">
          <div className="error-boundary-content">
            <h1>{title}</h1>
            <p className="error-message">
              {message}
            </p>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="error-details">
                <summary>Error Details (Development Only)</summary>
                <pre>{this.state.error.toString()}</pre>
              </details>
            )}
            <button className="error-boundary-btn" onClick={this.handleReset}>
              {button}
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export const ErrorBoundary: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { t } = useTranslation();
  
  return (
    <ErrorBoundaryClass
      translations={{
        title: t('error.title'),
        message: t('error.message'),
        button: t('error.button')
      }}
    >
      {children}
    </ErrorBoundaryClass>
  );
};

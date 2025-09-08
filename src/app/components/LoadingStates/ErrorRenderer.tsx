import { ErrorType } from '@/app/types/ErrorType';
import { TimeoutError, HttpError, NetworkError, EmptyDataError } from './ErrorComponents';

interface ErrorRendererProps {
    errorType: ErrorType;
    onRetry: () => void;
}

export default function ErrorRenderer({ errorType, onRetry }: ErrorRendererProps) {
    switch (errorType) {
        case 'timeout':
            return <TimeoutError onRetry={onRetry} />;
        case 'http-error':
            return <HttpError onRetry={onRetry} />;
        case 'network-error':
            return <NetworkError onRetry={onRetry} />;
        case 'empty-data':
            return <EmptyDataError onRetry={onRetry} />;
        default:
            return <HttpError onRetry={onRetry} />; // Fallback to generic error
    }
}

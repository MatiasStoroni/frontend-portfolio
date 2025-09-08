interface ErrorComponentProps {
    onRetry: () => void;
}

const ErrorIcon = ({ children, bgColor }: { children: React.ReactNode; bgColor: string }) => (
    <div className={`w-16 h-16 ${bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
        {children}
    </div>
);

const ErrorLayout = ({ 
    icon, 
    title, 
    message, 
    buttonText = "Try Again", 
    buttonColor = "bg-red-700 hover:bg-red-800",
    onRetry,
    children 
}: {
    icon: React.ReactNode;
    title: string;
    message: string;
    buttonText?: string;
    buttonColor?: string;
    onRetry: () => void;
    children?: React.ReactNode;
}) => (
    <section className="bg-slate-800 py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto flex items-center justify-center min-h-[300px]">
            <div className="text-center">
                {icon}
                <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
                <p className="text-slate-400 mb-4">{message}</p>
                {children}
                <button
                    onClick={onRetry}
                    className={`px-6 py-2 ${buttonColor} text-white rounded-lg transition-colors`}
                >
                    {buttonText}
                </button>
            </div>
        </div>
    </section>
);

export function TimeoutError({ onRetry }: ErrorComponentProps) {
    return (
        <ErrorLayout
            icon={
                <ErrorIcon bgColor="bg-red-600/20">
                    <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </ErrorIcon>
            }
            title="Connection Timeout"
            message="The server is taking longer than expected to respond"
            buttonColor="bg-orange-700 hover:bg-orange-800"
            onRetry={onRetry}
        >
            <p className="text-slate-500 text-sm mb-6">
                This usually happens when the service is starting up for the first time
            </p>
        </ErrorLayout>
    );
}

export function HttpError({ onRetry }: ErrorComponentProps) {
    return (
        <ErrorLayout
            icon={
                <ErrorIcon bgColor="bg-red-600/20">
                    <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                </ErrorIcon>
            }
            title="Data Unavailable"
            message="Data couldn't be fetched. Please try again in a few minutes"
            buttonColor="bg-red-700 hover:bg-red-800"
            onRetry={onRetry}
        />
    );
}

export function NetworkError({ onRetry }: ErrorComponentProps) {
    return (
        <ErrorLayout
            icon={
                <ErrorIcon bgColor="bg-blue-600/20">
                    <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                              d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                    </svg>
                </ErrorIcon>
            }
            title="Connection Issue"
            message="Unable to connect to the server. Please check your internet connection"
            buttonColor="bg-blue-700 hover:bg-blue-800"
            onRetry={onRetry}
        />
    );
}

export function EmptyDataError({ onRetry }: ErrorComponentProps) {
    return (
        <ErrorLayout
            icon={
                <ErrorIcon bgColor="bg-yellow-600/20">
                    <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                </ErrorIcon>
            }
            title="Content Being Updated"
            message="Portfolio content is currently being updated. Please check back soon"
            buttonText="Refresh"
            buttonColor="bg-yellow-700 hover:bg-yellow-800"
            onRetry={onRetry}
        />
    );
}
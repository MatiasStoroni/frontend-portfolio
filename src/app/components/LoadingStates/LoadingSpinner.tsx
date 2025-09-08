interface LoadingSpinnerProps {
    retryCount: number;
}

export default function LoadingSpinner({ retryCount }: LoadingSpinnerProps) {
    const progress = Math.min((retryCount / 6) * 100, 100);

    return (
        <section className="bg-slate-800 py-16 px-6 md:px-20">
            <div className="max-w-6xl mx-auto flex items-center justify-center min-h-[300px]">
                <div className="text-center">
                    <div className="w-12 h-12 border-4 border-orange-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <h3 className="text-white text-lg font-semibold mb-2">Loading Portfolio</h3>
                    <p className="text-slate-400 mb-2">
                        Starting service... ({retryCount}/6)
                    </p>
                    <div className="w-64 bg-slate-700 rounded-full h-2 mx-auto mb-2">
                        <div
                            className="bg-orange-600 h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                    <p className="text-slate-500 text-sm">
                        This may take up to 60 seconds on first load
                    </p>
                </div>
            </div>
        </section>
    );
}
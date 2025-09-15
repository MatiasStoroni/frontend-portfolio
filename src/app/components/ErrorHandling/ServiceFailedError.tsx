export default function ServiceFailedError() {
    return (
        <section className="bg-slate-800 py-16 px-6 md:px-20">
            <div className="max-w-6xl mx-auto flex items-center justify-center min-h-[300px]">
                <div className="text-center">
                    <div className="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                    </div>
                    <h3 className="text-white text-xl font-semibold mb-2">Service Unavailable</h3>
                    <p className="text-slate-400 mb-4">Sorry, couldn’t connect to the server. Please try again in a few minutes.</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="px-4 py-2 bg-orange-700 hover:bg-orange-800 text-white rounded-lg transition-colors"
                    >
                        Try Again
                    </button>
                </div>
            </div>
        </section>
    );
}
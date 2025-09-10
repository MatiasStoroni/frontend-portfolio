export default function EmptyDataError() {
    return (
        <section className="bg-slate-800 py-16 px-6 md:px-20">
            <div className="max-w-6xl mx-auto flex items-center justify-center min-h-[300px]">
                <div className="text-center">
                    <div className="w-16 h-16 bg-yellow-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                        </svg>
                    </div>

                    <h3 className="text-white text-xl font-semibold mb-2">Content Being Updated</h3>
                    <p className="text-slate-400 mb-4">Portfolio content is currently being updated. Please check back soon</p>

                    <button
                        onClick={() => window.location.reload()}
                        className="px-6 py-2 bg-yellow-700 hover:bg-yellow-800 text-white rounded-lg transition-colors font-medium"
                    >
                        Refresh
                    </button>
                </div>
            </div>
        </section>
    );
}
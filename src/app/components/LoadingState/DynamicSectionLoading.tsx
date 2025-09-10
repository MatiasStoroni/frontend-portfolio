export default function DynamicSectionLoading({ retryCount }: { retryCount: number }) {
    return (
        <section className="bg-slate-800 py-16 px-6 md:px-20">
            <div className="max-w-6xl mx-auto flex items-center justify-center min-h-[300px]">
                <div className="text-center">
                    <div className="w-12 h-12 border-4 border-orange-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <h3 className="text-white text-lg font-semibold mb-2">Loading Content</h3>
                    <p className="text-slate-400 animate-pulse">
                        Starting service... (Retries: {retryCount}/6)
                    </p>
                    <p className="text-slate-400 animate-pulse">
                        This process can take up to 60 seconds.
                    </p>
                </div>
            </div>
        </section>
    );
}
/** @format */
"use client";

import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Presentation from "./components/Presentation";
import Projects from "./components/Projects";
import { getWholePageData } from "./api/getPageData";

// Loading component for dynamic sections
function DynamicSectionLoading({ retryCount }: { retryCount: number }) {
    return (
        <section className="bg-slate-800 py-16 px-6 md:px-20">
            <div className="max-w-6xl mx-auto flex items-center justify-center min-h-[300px]">
                <div className="text-center">
                    <div className="w-12 h-12 border-4 border-orange-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <h3 className="text-white text-lg font-semibold mb-2">Loading Content</h3>
                    <p className="text-slate-400 animate-pulse">
                        Starting service... (Retries: {retryCount}/5)
                    </p>
                    <p className="text-slate-400 animate-pulse">
                        This process can take up to 50 seconds.
                    </p>
                </div>
            </div>
        </section>
    );
}

// Error component for API connection failures
function ServiceFailedError() {
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
                    <p className="text-slate-400 mb-4">Service failed to start after 5 attempts</p>
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

// Error component for empty data
function EmptyDataError() {
    return (
        <section className="bg-slate-800 py-16 px-6 md:px-20">
            <div className="max-w-6xl mx-auto flex items-center justify-center min-h-[300px]">
                <div className="text-center">
                    <div className="w-16 h-16 bg-yellow-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                        </svg>
                    </div>
                    <h3 className="text-white text-xl font-semibold mb-2">No Content Available</h3>
                    <p className="text-slate-400 mb-4">The service is running but no portfolio data was found</p>
                    <div className="space-y-2 text-sm text-slate-500">
                        <p>This could mean:</p>
                        <ul className="text-left max-w-xs mx-auto space-y-1">
                            <li>• Database is empty</li>
                            <li>• Content is being updated</li>
                            <li>• Data migration in progress</li>
                        </ul>
                    </div>
                    <button
                        onClick={() => window.location.reload()}
                        className="mt-4 px-4 py-2 bg-yellow-700 hover:bg-yellow-800 text-white rounded-lg transition-colors"
                    >
                        Refresh Page
                    </button>
                </div>
            </div>
        </section>
    );
}

export default function Home() {
    const [pageData, setPageData] = useState({
        users: [],
        educations: [],
        experiences: [],
        projects: [],
    });
    const [isLoading, setIsLoading] = useState(true);
    const [retryCount, setRetryCount] = useState(0);
    const [errorType, setErrorType] = useState<'none' | 'service-failed' | 'empty-data'>('none');

    useEffect(() => {
        const fetchAllDataWithRetry = async () => {
            // backend can take up to 50 seconds to start
            const maxRetries = 6;
            const retryDelay = 10000; // 10 seconds between retries

            let lastSuccessfulResponse = null;

            for (let attempt = 1; attempt <= maxRetries; attempt++) {
                try {
                    setRetryCount(attempt);
                    const allData = await getWholePageData();

                    // Store the last successful API response
                    lastSuccessfulResponse = allData;

                    // API worked, check if we have actual data
                    const hasUsers = allData?.users && allData.users.length > 0;

                    // If we have at least users data (minimum requirement), success!
                    if (hasUsers) {
                        setPageData(allData);
                        setIsLoading(false);
                        setErrorType('none');
                        return;
                    }

                    // API responded but no data - continue retrying until maxRetries
                    console.log(`Attempt ${attempt}: API responded but returned empty data, retrying...`);

                } catch (error) {
                    console.log(`Attempt ${attempt} failed:`, error);
                }

                if (attempt < maxRetries) {
                    await new Promise(resolve => setTimeout(resolve, retryDelay));
                }
            }

            // All retries exhausted - determine error type
            setIsLoading(false);

            if (lastSuccessfulResponse?.users != undefined) {
                // API was working but consistently returned empty data
                setErrorType('empty-data');
            } else {
                // API never responded successfully
                setErrorType('service-failed');
            }
        };

        fetchAllDataWithRetry();
    }, []);

    return (
        <main>
            <header className="sticky top-0 z-50 bg-slate-900 shadow">
                <Header />
            </header>

            <div>
                {/* Always show Presentation */}
                <Presentation />

                {/* Show loading, content, or errors */}
                {isLoading ? (
                    <DynamicSectionLoading retryCount={retryCount} />
                ) : errorType === 'service-failed' ? (
                    <ServiceFailedError />
                ) : errorType === 'empty-data' ? (
                    <EmptyDataError />
                ) : (
                    // Only show dynamic content after successful API load with data
                    <div className="animate-fade-in">
                        <About user={pageData.users[0]} />
                        <Experience experiences={pageData.experiences} />
                        <Education educations={pageData.educations} />
                        <Projects projects={pageData.projects} />
                    </div>
                )}

                {/* Always show Contact */}
                <Contact />
            </div>

            <footer className="text-center text-sm bg-black text-slate-400 py-2">
                © 2025 Matías Storoni. All rights reserved.
            </footer>

            {/* Custom CSS for fade-in animation */}
            <style jsx>{`
                @keyframes fade-in {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .animate-fade-in {
                    animation: fade-in 0.6s ease-out;
                }
            `}</style>
        </main>
    );
}
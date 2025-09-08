"use client";

import { useEffect } from "react";
import PageLayout from "./components/Layout/PageLayout";
import Presentation from "./components/Presentation";
import Contact from "./components/Contact";
import LoadingSpinner from "./components/LoadingStates/LoadingSpinner";
import ErrorRenderer from "./components/LoadingStates/ErrorRenderer";
import { usePortfolioData } from "./hooks/usePortfolioData";
import PortfolioContent from "./components/PortfolioContent";

export default function Home() {
    const { pageData, isLoading, retryCount, errorType, fetchData } = usePortfolioData();

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <PageLayout>
            {/* Always show Presentation */}
            <Presentation />

            {/* Dynamic content based on loading state */}
            {isLoading ? (
                <LoadingSpinner retryCount={retryCount} />
            ) : errorType !== 'none' ? (
                <ErrorRenderer errorType={errorType} onRetry={fetchData} />
            ) : (
                <PortfolioContent pageData={pageData} />
            )}

            {/* Always show Contact */}
            <Contact />
        </PageLayout>
    );
}
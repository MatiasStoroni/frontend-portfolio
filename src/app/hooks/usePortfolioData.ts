import { useState, useCallback } from 'react';
import { getWholePageData } from '../api/getPageData';
import { ErrorType, PageData } from '../types/ErrorType';
import { getErrorType } from '../utils/ErrorHandler';

interface UsePortfolioDataReturn {
    pageData: PageData;
    isLoading: boolean;
    retryCount: number;
    errorType: ErrorType;
    fetchData: () => Promise<void>;
}

export function usePortfolioData(): UsePortfolioDataReturn {
    const [pageData, setPageData] = useState<PageData>({
        users: [],
        educations: [],
        experiences: [],
        projects: [],
    });
    const [isLoading, setIsLoading] = useState(true);
    const [retryCount, setRetryCount] = useState(0);
    const [errorType, setErrorType] = useState<ErrorType>('none');

    const fetchData = useCallback(async () => {
        const maxRetries = 6;
        const retryDelay = 10000; // 10 seconds between retries

        let lastSuccessfulResponse = null;
        let lastError = null;

        // Reset states when starting fetch
        setIsLoading(true);
        setErrorType('none');
        setRetryCount(0);

        for (let attempt = 1; attempt <= maxRetries; attempt++) {
            try {
                setRetryCount(attempt);

                // Add a timeout to the fetch to handle hanging requests
                const controller = new AbortController();
                const timeoutId = setTimeout(() => controller.abort(), 15000); // 15 second timeout per request

                const allData = await getWholePageData();

                clearTimeout(timeoutId);
                lastSuccessfulResponse = allData;

                // Check if we have actual data
                const hasUsers = allData?.users && allData.users.length > 0;

                if (hasUsers) {
                    setPageData(allData);
                    setIsLoading(false);
                    setErrorType('none');
                    return;
                }

                console.log(`Attempt ${attempt}: API responded but returned empty data, retrying...`);
                lastError = new Error('Empty data returned');

            } catch (error) {
                console.log(`Attempt ${attempt} failed:`, error);
                lastError = error;
            }

            // Wait before next retry (except on last attempt)
            if (attempt < maxRetries) {
                await new Promise(resolve => setTimeout(resolve, retryDelay));
            }
        }

        // All retries exhausted - determine error type
        setIsLoading(false);

        // Check if we got empty data (API worked but no content)
        if (lastSuccessfulResponse && lastSuccessfulResponse.users !== undefined && lastSuccessfulResponse.users.length === 0) {
            setErrorType('empty-data');
        } else {
            // Determine error type based on the last error
            setErrorType(getErrorType(lastError, lastSuccessfulResponse !== null));
        }
    }, []);

    return {
        pageData,
        isLoading,
        retryCount,
        errorType,
        fetchData
    };
}
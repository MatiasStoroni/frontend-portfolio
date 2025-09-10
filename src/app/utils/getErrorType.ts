export default function getErrorType(error: any, hasSuccessfulResponse: boolean) {
    // Check if it's a timeout (no successful response after all retries)
    if (!hasSuccessfulResponse) {
        // Could be network issues, server not responding, or actual timeouts
        if (error?.message?.toLowerCase().includes('timeout') ||
            error?.name === 'TimeoutError' ||
            error?.code === 'ECONNABORTED') {
            return 'timeout';
        }
        // Network errors (no internet, DNS issues, etc.)
        if (error?.message?.toLowerCase().includes('network') ||
            error?.message?.toLowerCase().includes('fetch') ||
            !navigator.onLine) {
            return 'network-error';
        }
        // Default to timeout for unresponsive servers during startup
        return 'timeout';
    }

    // Check for HTTP status errors
    if (error?.status || error?.response?.status) {
        return 'http-error';
    }

    return 'timeout';
}
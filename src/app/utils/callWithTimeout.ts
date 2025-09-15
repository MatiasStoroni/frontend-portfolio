export async function callWithTimeout<T>(
    apiCall: (signal?: AbortSignal) => Promise<T>,
    timeoutMs: number
): Promise<T> {
    const controller = new AbortController();

    // Set timeout
    const timeoutId = setTimeout(() => {
        controller.abort();
    }, timeoutMs);

    try {
        const result = await apiCall(controller.signal);
        clearTimeout(timeoutId);
        return result;
    } catch (error) {
        clearTimeout(timeoutId);

        if (error instanceof DOMException && error.name === 'AbortError') {
            throw new Error(`Request timed out after ${timeoutMs / 1000} seconds`);
        }
        throw error;
    }
}
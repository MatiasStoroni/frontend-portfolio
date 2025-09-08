export type ErrorType = 'none' | 'timeout' | 'http-error' | 'network-error' | 'empty-data';

export interface PageData {
    users: any[];
    educations: any[];
    experiences: any[];
    projects: any[];
}
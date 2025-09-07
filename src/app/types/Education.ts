export interface EducationType {
    id: number;
    title: string;
    yearCompleted: number;
    description: string
    resource?: EducationResource;
    project?: EducationProject;
}

export interface EducationResource { 
    id: number;
    type: string;
    url: string;
}

export interface EducationProject {
    id: number;
    title: string;
    summary: string;
    techStack: string[];
}
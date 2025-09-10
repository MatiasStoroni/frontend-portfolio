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
import DynamicSectionLoading from "./components/LoadingState/DynamicSectionLoading";
import ServiceFailedError from "./components/ErrorHandling/ServiceFailedError";
import { User } from "./types/User";
import { EducationType } from "./types/Education";
import { ExperienceType } from "./types/Experience";
import { ProjectType } from "./types/Project";
import EmptyDataError from "./components/ErrorHandling/EmptyDataError";

interface PageData {
    users: User[];
    educations: EducationType[];
    experiences: ExperienceType[];
    projects: ProjectType[];
}

export default function Home() {
    const [pageData, setPageData] = useState<PageData>();
    const [isLoading, setIsLoading] = useState(true);
    const [retryCount, setRetryCount] = useState(0);
    const [errorType, setErrorType] = useState<'none' | 'service-failed'>('none');

    const fetchAllDataWithRetry = async () => {
        for (let i = 0; i <= 6; i++) {
            setRetryCount(i);
            setIsLoading(true);

            try {
                const res = await getWholePageData();
                setPageData(res);

                // If we got valid data -> return
                if (res?.users && res.users.length > 0) {
                    setIsLoading(false);
                    setErrorType('none');
                    return;
                }

            } catch (error) {
                console.log(`Attempt ${i + 1} failed:`, error);
            }

            if (i < 6) {
                await new Promise(resolve => setTimeout(resolve, 8000)); // 8 seconds
            }
        }
        setErrorType('service-failed');
        setIsLoading(false);
    };

    useEffect(() => {
        fetchAllDataWithRetry();
    }, []);


    const renderContent = () => {
        if (isLoading) {
            return <DynamicSectionLoading retryCount={retryCount} />;
        }

        if (pageData?.users[0] == undefined) {
            return <EmptyDataError />;
        }
        switch (errorType) {
            case 'service-failed':
                return <ServiceFailedError />;

            case 'none':
                return (
                    <div className="animate-fade-in">
                        <About user={pageData?.users?.[0]} />
                        <Experience experiences={pageData?.experiences || []} />
                        <Education educations={pageData?.educations || []} />
                        <Projects projects={pageData?.projects || []} />
                    </div>
                );

            default:
                // Fallback for any unexpected error type
                return <ServiceFailedError />;
        }
    };



    return (
        <main>
            <header className="sticky top-0 z-50 bg-slate-900 shadow">
                <Header />
            </header>

            <div>
                {/* Always show Presentation */}
                <Presentation />

                {renderContent()}

                {/* Always show Contact */}
                <Contact />
            </div>

            <footer className="text-center text-sm bg-black text-slate-400 py-2">
                © 2025 Matías Storoni. All rights reserved.
            </footer>
        </main>
    );
}
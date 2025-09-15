/** @format */
"use client";

import { useEffect, useState } from "react";
import About from "./components/portfolioContent/About";
import Education from "./components/portfolioContent/Education";
import Experience from "./components/portfolioContent/Experience";
import Projects from "./components/portfolioContent/Projects";
import { getWholePageData } from "./api/getPageData";
import DynamicSectionLoading from "./components/LoadingState/DynamicSectionLoading";
import ServiceFailedError from "./components/ErrorHandling/ServiceFailedError";
import { User } from "./types/User";
import { EducationType } from "./types/Education";
import { ExperienceType } from "./types/Experience";
import { ProjectType } from "./types/Project";
import toast, { Toaster } from "react-hot-toast";
import { callWithTimeout } from "./utils/callWithTimeout";

interface PageData {
    users: User[];
    educations: EducationType[];
    experiences: ExperienceType[];
    projects: ProjectType[];
}

export default function Home() {
    const [pageData, setPageData] = useState<PageData>();
    const [isLoading, setIsLoading] = useState(true);

    const fetchAllData = async () => {

        setIsLoading(true);

        try {
            const res = await getWholePageData();
            setPageData(res);

            // If we got valid data -> return
            if (res) {
                setIsLoading(false);
                toast.success("Data fetched succesfully!")
                return;
            }

        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false)
        }
    };

    useEffect(() => {
        fetchAllData();
    }, []);

    if (isLoading) {
        return <DynamicSectionLoading />;
    }

    if (pageData === undefined) {
        return <ServiceFailedError />
    }

    return (
        <>
            <Toaster
                toastOptions={{
                    style: {
                        backgroundColor: 'rgba(34, 197, 94, 0.2)',
                        color: 'white',
                    }
                }}
                containerStyle={{
                    top: 10,
                }}
            />
            <div className="animate-fade-in">
                <About user={pageData?.users?.[0]} />
                <Experience experiences={pageData?.experiences || []} />
                <Education educations={pageData?.educations || []} />
                <Projects projects={pageData?.projects || []} />
            </div>
        </>
    );
}
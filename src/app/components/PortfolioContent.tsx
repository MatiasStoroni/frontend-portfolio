import { PageData } from "../types/ErrorType";
import About from "./About";
import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";

interface PortfolioContentProps {
    pageData: PageData;
}

export default function PortfolioContent({ pageData }: PortfolioContentProps) {
    return (
        <div className="animate-fade-in">
            <About user={pageData.users[0]} />
            <Experience experiences={pageData.experiences} />
            <Education educations={pageData.educations} />
            <Projects projects={pageData.projects} />
        </div>
    );
}
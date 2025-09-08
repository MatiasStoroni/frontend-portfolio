import Header from "../Header";

interface PageLayoutProps {
    children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
    return (
        <main>
            <header className="sticky top-0 z-50 bg-slate-900 shadow">
                <Header />
            </header>

            <div>{children}</div>

            <footer className="text-center text-sm bg-black text-slate-400 py-2">
                © 2025 Matías Storoni. All rights reserved.
            </footer>
        </main>
    );
}
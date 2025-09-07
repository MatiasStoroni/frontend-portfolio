const BASE_URL = process.env.BACKEND_URL!

async function getUsers() {
    try {
        const res = await fetch(`${BASE_URL}/users`, { cache: "no-store" });
        return res.json();
    } catch (error) {
        console.log("Error fetching User data:", error);
    }
}

async function getEducations() {
    try {
        const res = await fetch(`${BASE_URL}/educations`, { cache: "no-store" });
        return res.json();
    } catch (error) {
        console.log("Error fetching Education data:", error);
    }
}

async function getExperiences() {
    try {
        const res = await fetch(`${BASE_URL}/experiences`, { cache: "no-store" });
        return res.json();
    } catch (error) {
        console.log("Error fetching Experience data:", error);
    }
}


async function getProjects() {
    try {
        const res = await fetch(`${BASE_URL}/projects`, { cache: "no-store" });
        return res.json();
    } catch (error) {
        console.log("Error fetching Projects data:", error);
    }
}

export async function getWholePageData() {
    console.log("Fetching all page data concurrently...");
    try {
        const [users, educations, experiences, projects] = await Promise.all([
            getUsers(),
            getEducations(),
            getExperiences(),
            getProjects()
        ]);

        console.log("All data fetched successfully.");
        return { users, educations, experiences, projects };
    } catch (error) {
        console.log("An error occurred while fetching all page data:", error);
    }
}

// Example usage to test the function:
getWholePageData().then(data => {
    console.log("Combined Page Data:", data);
});

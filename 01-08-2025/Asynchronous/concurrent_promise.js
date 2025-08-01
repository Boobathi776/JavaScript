async function fetchAllDataConcurrently() {
    const usersPromise = fetch("http://localhost:3000/users/1").then(res => res.json());
    const projectsPromise = fetch("http://localhost:4000/projects/1").then(res => res.json());
    const tasksPromise = fetch("http://localhost:5000/tasks/1").then(res => res.json());

    try {
        const [users, projects, tasks] = await Promise.all([
            usersPromise,
            projectsPromise,
            tasksPromise
        ]);

        console.log("✅ Users:", users);
        console.log("✅ Projects:", projects);
        console.log("✅ Tasks:", tasks);
    } catch (error) {
        console.error("❌ Failed to fetch data:", error);
    }
}

fetchAllDataConcurrently();

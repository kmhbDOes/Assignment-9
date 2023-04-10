import { useLoaderData } from "react-router-dom";

async function homeLoader1() {
    const response = await fetch("category.json");
    const data = await response.json();
    return ({ category: data });
}

async function homeLoader2() {
    const response = await fetch("jobInfo.json");
    const data = await response.json();
    return ({ articles: data });
}

export { homeLoader1, homeLoader2 }
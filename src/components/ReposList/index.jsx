import { useEffect, useState } from "react";

const ReposList = () => {
    const [respos, setRepos] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/cieliocas/repos')
        .then(res => res.json())
        .then(resJson => {
            setRepos(resJson);
        
        })
    }, []);

    return (
        <ul>
            <li>Repositório</li>
        </ul>
    );
}

export default ReposList;


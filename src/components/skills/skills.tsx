import { useEffect, useState } from "react";
import { SkillsProps } from "./skills.types";

export const Skills = (props: SkillsProps) => {
    const { skills } = props;
    const [isLoggedIn, setIsLoggedIn]=useState(false);

    useEffect(()=>{
        setTimeout(()=>{
            setIsLoggedIn(true)
        }, 500);
    }, []);

    return (
        <>
            <ul>
                {skills.map((skill) => {
                    return <li key={skill}>{skill}</li>
                })}
            </ul>
            {isLoggedIn ? (
                <button>Start learning</button>
            ) : (
                <button onClick={()=>setIsLoggedIn(true)}>Login</button>
            )}
        </>
    );
};
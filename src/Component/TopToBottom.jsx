import React, { useEffect, useState } from "react";

const TopToBottom = () => {
    const [scrollPercent, setScrollPercent] = useState(0);
    
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercentage = (scrollTop / scrollHeight) * 100;
            setScrollPercent(scrollPercentage);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <div className="TopToBottom">
                <a href="/">{scrollPercent.toFixed(0)}%</a>
            </div>
        </>
    );
};

export default TopToBottom;

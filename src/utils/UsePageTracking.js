import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const UsePageTracking = () => {
    const location = useLocation();

    useEffect(() => {
        // track pageview with gtag / react-ga / react-ga4, for example:
        window.gtag("event", "page_view", {
        page_path: location.pathname + location.search,
        });
    }, [location]);
};

export default UsePageTracking;
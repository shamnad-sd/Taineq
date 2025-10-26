'use client'
import React, { createContext, useContext, useEffect, useState } from "react";
import { ApiUrl } from "@/utils/urls";

const SiteContext = createContext();

export const SiteProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [headerMenu, setHeaderMenu] = useState(null);
    const [homePageData, setHomePageData] = useState(null);
    const [contactPageData, setContactPageData] = useState(null);
    const [signagePageData, setSignagePageData] = useState(null);
    const [itsPageData, setItsPageData] = useState(null);
    const [productsPageData, setProductsPageData] = useState(null);

    // Fetch menu data using native fetch
    async function fetchMenuData() {
        setLoading(true);
        try {
            const [
                headerMenuResponse, 
                contactDataResponse, 
                homePageResponse,
                signagePageResponse,
                itsPageResponse,
                productsPageResponse
            ] = await Promise.all([
                fetch(`${ApiUrl}/wp-json/custom/v1/menus/header`),
                fetch(`${ApiUrl}/wp-json/wp/v2/pages/691`),
                fetch(`${ApiUrl}/wp-json/wp/v2/pages/541`),
                fetch(`${ApiUrl}/wp-json/wp/v2/pages/647`),
                fetch(`${ApiUrl}/wp-json/wp/v2/pages/650`),
                fetch(`${ApiUrl}/wp-json/wp/v2/pages/652`),
            ]);

            // Check if all responses are ok
            if (!headerMenuResponse.ok || !contactDataResponse.ok || !homePageResponse.ok || 
                !signagePageResponse.ok || !itsPageResponse.ok || !productsPageResponse.ok) {
                throw new Error('One or more API requests failed');
            }

            // Parse JSON data
            const [
                headerMenuData, 
                contactPageData, 
                homePageData,
                signagePageData,
                itsPageData,
                productsPageData
            ] = await Promise.all([
                headerMenuResponse.json(),
                contactDataResponse.json(),
                homePageResponse.json(),
                signagePageResponse.json(),
                itsPageResponse.json(),
                productsPageResponse.json(),
            ]);

            // Set state with fetched data
            setHeaderMenu(headerMenuData);
            setContactPageData(contactPageData);
            setHomePageData(homePageData);
            setSignagePageData(signagePageData);
            setItsPageData(itsPageData);
            setProductsPageData(productsPageData);
            
            setError(null);
        } catch (error) {
            console.error('Fetch error:', error);
            setError("Failed to fetch menu data");
            setHeaderMenu(null);
            setHomePageData(null);
            setContactPageData(null);
            setSignagePageData(null);
            setItsPageData(null);
            setProductsPageData(null);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchMenuData();
    }, []);

    return (
        <SiteContext.Provider
            value={{
                headerMenu,
                homePageData,
                contactPageData,
                signagePageData,
                itsPageData,
                productsPageData,
                loading,
                error,
            }}>
            {children}
        </SiteContext.Provider>
    );
};

export const useSiteContext = () => {
    const context = useContext(SiteContext);
    if (context === undefined) {
        throw new Error('useSiteContext must be used within a SiteProvider');
    }
    return context;
};

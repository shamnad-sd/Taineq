import React from 'react'
import Header from './UI/Header';
import { ApiUrl } from '@/utils/urls';

const HeaderMain = async () => {

    const Header_main = await fetch(`${ApiUrl}/wp-json/custom/v1/menus/header`,
        {
            next: { revalidate: 60 },
        })
    const HeaderData = await Header_main.json();





    let HomeData = await fetch(`${ApiUrl}/wp-json/wp/v2/pages/658`, {
        next: { revalidate: 60 },
    });

    let HomePageData = await HomeData.json();

    return (
        <div>
            <Header
                HomePageData={HomePageData}
                HeaderData={HeaderData}
                // SignageData={SignageData}
                // ItsData={ItsData}
                // ProductsData={ProductsData}
            />
        </div>
    )
}

export default HeaderMain
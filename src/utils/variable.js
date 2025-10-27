import { ApiUrl } from "./urls";

// export const hostName = "smtp.gmail.com";
// export const portNumber = 587;
// export const emailUsername = "shamnadsdofficial@gmail.com";
// export const emailPassword = "pkhvpdfdfgkazzvj";
// export const siteEmail = "shamnad2nk@gmail.com";
// export const siteFromEmail = "shamnad2nk@gmail.com";

//EMAIL
export const hostName = process.env.NEXT_PUBLIC_HOST_NAME;
export const portNumber = process.env.NEXT_PUBLIC_PORT_NUMBER;
export const emailUsername = process.env.NEXT_PUBLIC_EMAIL_USERNAME;
export const emailPassword = process.env.NEXT_PUBLIC_EMAIL_PASSWORD;
export const siteEmail = process.env.NEXT_PUBLIC_SITE_EMAIL;
export const siteFromEmail = process.env.NEXT_PUBLIC_SITE_FROM_EMAIL;


export const siteName = "Taineq";
export const siteLogo = `${ApiUrl}/wp-content/uploads/2025/10/TAINEQ-final-logo-1.png`
export const copyright = `© ${new Date().getFullYear()} Taineq.`;


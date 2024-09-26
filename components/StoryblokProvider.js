/** 1. Tag it as a client component */
"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

/** Import your components */
import Page from "./Page";
import Teaser from "./Teaser";
import Feature from "./Feature";
import Grid from "./Grid";
import PagePdf from "./PagePdf";
import FundPDF from "./FundPDF";
import School from "./School";
import Sections from "./Sections";

const components = {
    feature: Feature,
    grid: Grid,
    teaser: Teaser,
    page: Page,
    page_pdf: PagePdf,
    Fund_pdf: FundPDF,
    school: School,
    coursedata: Sections,


};
/** 2. Initialize it as usual */
storyblokInit({
    accessToken: "3tTraCQpgwM7tNdzNCICNAtt",
    use: [apiPlugin],
    components
});
console.log("Storyblok provider")

export default function StoryblokProvider({ children }) {
    
    return children;
}
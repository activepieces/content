import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    const title = "Google API Disclosure - Activepieces";
    return {
        title: title,
        icons: "/favicon.ico",
        openGraph: {
            title: title,
            siteName: "Activepieces",
            images: [
                {
                    url: "https://www.activepieces.com/meta1.png",
                    width: 1200,
                    height: 630,
                    alt: "Activepieces",
                },
            ],
            url: "https://www.activepieces.com",
        }
    };
}

export default async function GoogleDisclosure() {
    return (
        <div className="container mx-auto p-4 text-white pt-10 lg:pt-20 h-[57vh]">
            <h1 className="text-3xl font-bold">Google API Disclosure</h1>
            <p className="mt-2"><strong>Last updated:</strong> December 2, 2022</p>
            <p className="mt-4">Activepieces&apos; use and transfer to any other app of information received from Google APIs will adhere to the Google API Services User Data Policy, including the Limited Use requirements.</p>
        </div>
    );
}

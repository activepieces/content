
import { Metadata } from "next";
import { PricingMainSection } from "../../components/pricing-page/PricingMainSection";
import { FAQsSection } from "../../components/pricing-page/FAQsSection";
import { AutomateWithActivepieces } from "../../components/animated-curtains/AutomateWithActivepieces";
import { FeaturesSection } from "../../components/pricing-page/FeaturesSection";

export async function generateMetadata(): Promise<Metadata> {
  const title = "Pricing - Activepieces";
  const description = "Activepieces Pricing Automate your work for free with Activepieces. Use it on the cloud or self host it on your machine. Our pricing is designed to be fair for everyone to start and grow seamlessly."
  return {
    title: title,
    description: description,
    icons: "/favicon.ico",
    openGraph: {
      title: title,
      description: description,
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

export default async function PricingPage() {

  return (
    <>
      <PricingMainSection></PricingMainSection>
      <FeaturesSection></FeaturesSection>
      <FAQsSection></FAQsSection>
      <AutomateWithActivepieces ></AutomateWithActivepieces>
    </>
  );
}



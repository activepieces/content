
import { Metadata } from "next";
import { PricingMainSection } from "../../components/pricing-page/PricingMainSection";
import { FeaturesSection } from "../../components/pricing-page/FeaturesSection";

export const metadata: Metadata = {
  title: 'Activepieces - Pricing',
  icons: "/favicon.ico",
}
export default async function PricingPage() {

  return (
    <>

      <PricingMainSection></PricingMainSection>
      <FeaturesSection></FeaturesSection>
    </>
  );
}



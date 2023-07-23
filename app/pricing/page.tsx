
import { Metadata } from "next";
import PricingCard from "../../components/PricingCard";

export const metadata: Metadata = {
  title: 'Activepieces - Pricing',
  icons: "/favicon.ico",
}
const businessPlans = [{ "tasks": 5000, "price": "115" }, { "tasks": 10000, "price": "125" }, { "tasks": 25000, "price": "155" }, { "tasks": 50000, "price": "200" }, { "tasks": 100000, "price": "275" }, { "tasks": 200000, "price": "400" }, { "tasks": 500000, "price": "600" }]
const proPlans = [{ "tasks": 5000, "price": "15" }, { "tasks": 10000, "price": "25" }, { "tasks": 25000, "price": "55" }, { "tasks": 50000, "price": "100" }, { "tasks": 100000, "price": "175" }, { "tasks": 200000, "price": "300" }, { "tasks": 500000, "price": "500" }];
const hobbyistFeats = ["Unlimited users", "Instant triggers", "15 mins update time", "3 connected accounts", "Community support"]
const proFeats = ["1 user", "Instant triggers", "5 mins update time", "10 connected accounts", "Chat and email support"]
const businessFeats = ["5 user", "Instant triggers", "1 mins update time", "∞ connected accounts", "Chat and email support"]
export default async function PricingPage() {

  return (
    <main>
      <section className="container mx-auto py-[80px] px-4 md:px-0">
        <h1 className="text-white text-white text-[50px] text-center md:font-bold leading-[60px] lg:text-[80px] mb-[40px]">
          Kiss manual work good bye
        </h1>
        <h2 className="text-center text-[16px] lg:text-[22px] text-white mb-[80px] ">
          Enjoy our pricing model where tasks get cheaper as you grow!
        </h2>
        <div className="flex flex-wrap lg:flex-nowrap gap-[30px] justify-center">
          <PricingCard bgClass="bg-[#FFE0A3]" categoryName="Hobbyist" features={hobbyistFeats} free={true} plans={[{ price: '0', tasks: 100 }]}></PricingCard>
          <PricingCard bgClass="bg-[#DAFD78]" categoryName="Pro" features={proFeats} free={false} plans={proPlans}></PricingCard>
          <PricingCard bgClass="bg-[#C0EEFD]" categoryName="Business" features={businessFeats} free={false} plans={businessPlans}></PricingCard>
        </div>
      </section>
    </main>

  );
}



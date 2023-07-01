import React from 'react';
import Head from 'next/head';

const pricingData = [
    {
        title: 'Starter',
        price: 9.99,
        features: ['10,000 requests/month', 'Email support'],
    },
    {
        title: 'Pro',
        price: 29.99,
        features: ['100,000 requests/month', 'Priority email support'],
    },
    {
        title: 'Enterprise',
        price: 99.99,
        features: ['1,000,000 requests/month', '24/7 phone support'],
    },
];

const PricingPage: React.FC = () => {
    return (
        <>
            <Head>
                <title>SaaS Pricing | My Company</title>
            </Head>
            <div className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Simple, transparent pricing
                    </h1>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500">
                        Choose the plan that works for you.
                    </p>
                    <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
                        {pricingData.map((pricing) => (
                            <PricingCard key={pricing.title} pricing={pricing} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default PricingPage;


interface PricingCardProps {
    pricing: {
        title: string;
        price: number;
        features: string[];
    };
}

const PricingCard: React.FC<PricingCardProps> = ({ pricing }) => {
    return (
        <div className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200">
            <div className="px-4 py-5 sm:px-6">
                <h2 className="text-lg leading-6 font-medium text-gray-900">{pricing.title}</h2>
                <p className="mt-1 text-sm text-gray-500">{`$${pricing.price}/month`}</p>
            </div>
            <div className="px-4 py-5 sm:p-6">
                <ul className="space-y-4">
                    {pricing.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                            <div className="flex-shrink-0">
                                <svg
                                    className="h-5 w-5 text-green-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M3.707 10.293a1 1 0 010-1.414l5-5a1 1 0 011.414 0l10 10a1 1 0 01-1.414 1.414l-9.293-9.293-3.293 3.293a1 1 0 01-1.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                            <p className="ml-3 text-sm leading-5 text-gray-700">{feature}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="px-4 py-4 sm:px-6">
                <a
                    href="#"
                    className="block text-center w-full rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white hover:bg-green-500 focus:outline-none focus:bg-green-500 transition duration-150 ease-in-out"
                >
                    Buy now
                </a>
            </div>
        </div>
    );
};


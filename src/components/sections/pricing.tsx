import React from 'react';
import { Button } from "~/components/ui/button";
import { CheckCheck } from "lucide-react";

export default function PricingSection() {
    const pricingTiers = [
        {
            title: "Free",
            price: "Free",
            features: [
                "Unlimited Scholarship Opportunities",
                "Readiness Assessment",
                "Limited Application Resources"
            ],
            ctaText: "Checkout Free Package",
            highlight: false
        },
        {
            title: "Basic",
            price: "$40",
            features: [
                "5 guidance sessions - 45 min each",
                "Individual/Group Sessions",
                "Complete within 3 weeks"
            ],
            ctaText: "Checkout Basic Package",
            highlight: false,
            includesLower: "All Free Services"
        },
        {
            title: "End-to-End",
            price: "$100",
            features: [
                "5 Guided Sessions - Unlimited",
                "Document Creation & Reviews",
                "Interview Preparation"
            ],
            ctaText: "Checkout End-to-End Package",
            highlight: true,
            includesLower: "All Basic Services"
        },
        {
            title: "Stand Alone",
            price: "Varies",
            features: [
                "Document Reviews",
                "Flexible Options",
                "Pay Per Service"
            ],
            ctaText: "Checkout Stand Alone Package",
            highlight: false,
            includesLower: "Stand Alone Services"
        }
    ];

    return (
        <div className="w-full mx-auto bg-secondary px-5 py-16 text-gray-800">
            <div className="text-center max-w-4xl mx-auto mb-16">
                <h1 className="text-5xl md:text-6xl font-bold mb-5">Our Pricing Packages</h1>
                <h3 className="text-xl font-medium">We provide suitable pricing for your specific needs</h3>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
                {pricingTiers.map((tier, index) => (
                    <div key={index} className={`w-full sm:w-64 bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 ${tier.highlight ? 'ring-4 ring-purple-500' : ''}`}>
                        <div className={`p-6 ${tier.highlight ? 'bg-purple-600 text-white' : 'bg-purple-100'}`}>
                            <h2 className="text-2xl font-bold text-center mb-2">{tier.title}</h2>
                            <p className="text-3xl font-bold text-center">{tier.price}</p>
                            {tier.highlight && <p className="text-center text-purple-200 mt-2">Recommended</p>}
                        </div>
                        <div className="p-6">
                            <ul className="mb-6 space-y-4">
                                {tier.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-start">
                                        <CheckCheck className="text-purple-500 mr-2 mt-1 flex-shrink-0" size={16} />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            {tier.includesLower && (
                                <div className="bg-secondary opacity-65 text-black text-sm p-2 rounded-md mb-6">
                                    * {tier.includesLower}
                                </div>
                            )}
                            <Button 
                                variant={tier.highlight ? "default" : "outline"}
                                className={`w-full ${tier.highlight ? 'bg-purple-600 hover:bg-purple-700' : 'text-purple-600 border-purple-600 hover:bg-purple-50 p-3'}`}
                            >
                                {tier.ctaText}
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
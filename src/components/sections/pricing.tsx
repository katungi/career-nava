import { CheckCheck } from 'lucide-react';
import { Button } from '~/components/ui/button';

export default function PricingSection() {
  const pricingTiers = [
    {
      title: 'Free',
      price: 'Free',
      features: [
        'Unlimited Scholarship Opportunities',
        'Readiness Assessment',
        'Limited Application Resources',
      ],
      ctaText: 'Checkout Free Package',
      highlight: false,
    },
    {
      title: 'Basic',
      price: '$40',
      features: [
        '5 guidance sessions - 45 min each',
        'Individual/Group Sessions',
        'Complete within 3 weeks',
      ],
      ctaText: 'Checkout Package',
      highlight: false,
      includesLower: 'All Free Services',
    },
    {
      title: 'End-to-End',
      price: '$100',
      features: [
        '5 Guided Sessions - Unlimited',
        'Document Creation & Reviews',
        'Interview Preparation',
      ],
      ctaText: 'Checkout Package',
      highlight: true,
      includesLower: 'All Basic Services',
    },
    {
      title: 'Stand Alone',
      price: 'Varies',
      features: ['Document Reviews', 'Flexible Options', 'Pay Per Service'],
      ctaText: 'Checkout Package',
      highlight: false,
      includesLower: 'Stand Alone Services',
    },
  ];

  return (
    <div className="mx-auto w-full bg-secondary px-5 py-16 text-gray-800">
      <div className="mx-auto mb-16 max-w-4xl text-center">
        <h1 className="mb-5 font-bold text-5xl md:text-6xl">
          Our Pricing Packages
        </h1>
        <h3 className="font-medium text-xl">
          We provide suitable pricing for your specific needs
        </h3>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {pricingTiers.map((tier, index) => (
          <div
            key={index}
            className={`w-full transform overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:scale-105 sm:w-64 ${tier.highlight ? 'ring-4 ring-purple-500' : ''}`}
          >
            <div
              className={`p-6 ${tier.highlight ? 'bg-purple-600 text-white' : 'bg-purple-100'}`}
            >
              <h2 className="mb-2 text-center font-bold text-2xl">
                {tier.title}
              </h2>
              <p className="text-center font-bold text-3xl">{tier.price}</p>
              {tier.highlight && (
                <p className="mt-2 text-center text-purple-200">Recommended</p>
              )}
            </div>
            <div className="p-6">
              <ul className="mb-6 space-y-4">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <CheckCheck
                      className="mt-1 mr-2 flex-shrink-0 text-purple-500"
                      size={16}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              {tier.includesLower && (
                <div className="mb-6 rounded-md bg-secondary p-2 text-black text-sm opacity-65">
                  * {tier.includesLower}
                </div>
              )}
              <Button
                variant={tier.highlight ? 'default' : 'outline'}
                className={`w-full ${tier.highlight ? 'bg-purple-600 hover:bg-purple-700' : 'border-purple-600 p-3 text-purple-600 hover:bg-purple-50'}`}
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

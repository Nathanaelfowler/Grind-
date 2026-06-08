import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Open Gym",
    price: "100",
    features: [
      "24/7 Facility Access",
      "Powerlifting Equipment",
      "Strongman Area",
      "Locker & Showers"
    ],
    recommended: false
  },
  {
    name: "Grind Elite",
    price: "149",
    features: [
      "Everything in Open Gym",
      "Unlimited Group Classes",
      "Monthly Form Check",
      "Nutrition Guidelines",
      "Grind App Access"
    ],
    recommended: true
  },
  {
    name: "1-on-1 Coaching",
    price: "399",
    features: [
      "2x Weekly Personal Training",
      "Bespoke Programming",
      "Macro Meal Planning",
      "Priority Support Line",
      "Full Facility Access"
    ],
    recommended: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-background border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand font-black tracking-[0.2em] uppercase text-[10px] mb-3">
            Membership
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-text-main uppercase tracking-tighter">
            Commit To The Grind
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-slate-900/40 border p-8 flex flex-col h-full ${
                plan.recommended ? 'border-brand shadow-[0_0_30px_rgba(255,222,0,0.1)] md:-py-4 md:scale-105 z-10' : 'border-border-subtle'
              }`}
            >
              {plan.recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand text-black px-4 py-1 text-[10px] font-black tracking-[0.2em] uppercase">
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-8">
                <h4 className="text-xl font-bold text-text-main uppercase tracking-tight mb-2">{plan.name}</h4>
                <div className="flex justify-center items-end">
                  <span className="text-slate-500 text-2xl font-bold">$</span>
                  <span className="text-5xl font-black text-text-main">{plan.price}</span>
                  <span className="text-slate-500 font-light text-sm mb-1 ml-1">/mo</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="w-5 h-5 text-brand mr-3 flex-shrink-0" />
                    <span className="text-slate-300 font-light text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 text-[10px] font-black tracking-[0.2em] uppercase transition-colors ${
                plan.recommended 
                  ? 'bg-brand hover:bg-yellow-400 text-black' 
                  : 'border border-brand text-brand hover:bg-brand hover:text-black'
              }`}>
                Select Plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

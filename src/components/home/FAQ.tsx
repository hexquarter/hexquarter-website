import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Are you a Bitcoin development agency?",
    a: "No. HexQuarter is a decentralized systems engineering studio. Bitcoin and Nostr are the foundations we converged on after a decade across the broader decentralized stack — but the work is architecture, not a single protocol.",
  },
  {
    q: "Who do you typically work with?",
    a: "Founders, CTOs and product leaders building payment systems, identity systems, communication systems or decentralized application infrastructure. Teams that need a senior architect, not a junior contractor.",
  },
  {
    q: "Do you work with Ethereum or other chains?",
    a: "We have a decade of experience across Ethereum, DeFi and Web3 infrastructure, which is why we recommend Bitcoin and Nostr today. We will help you evaluate a migration path honestly, but new builds happen on Bitcoin and Nostr.",
  },
  {
    q: "How do engagements usually start?",
    a: "Most teams begin with the €1,500 Architecture Review. It is the cheapest way to get a senior, decade-long perspective on your system before committing to a larger build.",
  },
  {
    q: "What does an Implementation Project look like?",
    a: "Scoped per project, starting at €7,500. Typical scopes: Lightning payment integration, Nostr identity layer, relay infrastructure, or end-to-end decentralized backends. Always shipped, never just specced.",
  },
  {
    q: "Do you offer fractional CTO or ongoing advisory?",
    a: "Yes, for a small number of teams per quarter. Mention it on the contact form and we will see if there is a fit.",
  },
];

export const FAQ = () => {
  return (
    <section className="px-5 lg:px-20 py-20 border-b border-muted-foreground/30">
      <div className="grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4 flex flex-col gap-5">
          <h3 className="font-mono uppercase tracking-widest text-xs text-primary">FAQ</h3>
          <h2 className="font-[Cal_Sans] text-4xl lg:text-5xl">
            Common questions before <span className="text-primary">we talk.</span>
          </h2>
          <p className="text-sm text-muted-foreground">
            If your question is not here, the contact form is the right next step.
          </p>
        </div>
        <div className="lg:col-span-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-muted-foreground/20">
                <AccordionTrigger className="text-left font-[Cal_Sans] text-xl lg:text-2xl hover:text-primary hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

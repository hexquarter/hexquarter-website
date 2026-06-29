import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Who do you typically work with?",
    a: "Founders and teams building products where ownership of identity, payments, audience, or data is a core requirement."
  },
  {
    q: "When is this the right architecture?",
    a: "When user ownership is a core requirement—identity, payments, data, or communication—not an optional feature. If your product depends on long-term portability and independence from platforms, open protocols reduce future dependency risk."
  },
  {
    q: "How do engagements usually start?",
    a: "With an Architecture Review. We evaluate your product, constraints, and system design before any implementation."
  },
  {
    q: "What does an Implementation Project look like?",
    a: "We design and build production systems around payments, identity, communication, and data ownership. Scoped per project with clear deliverables."
  },
  {
    q: "Do you offer ongoing support ?",
    a: "Yes. Through a Fractional Protocol Architect role for teams that need continuous architectural guidance."
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

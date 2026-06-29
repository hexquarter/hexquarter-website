import { Check, Quote, Star } from "lucide-react";
import { BsLinkedin } from "react-icons/bs";

const offers = [
  {
    name: 'Identity',
    items: [
      'Passwordless login',
      'Portable user identity',
      'No platform lock-in'
    ]
  },
  {
    name: 'Payment',
    items: [
      'Bitcoin',
      'Lightning',
      'Global settlement',
      'Micropayments',
      'Self custody'
    ]
  },
  {
    name: 'Audience',
    items: [
      'Content ownership',
      'Subscribers ownership',
      'Communication ownership',
      'No algorithm risk'
    ]
  },
  {
    name: 'Data',
    items: [
      'Portable data',
      'Interoperability',
      'Long-term resilience',
      'Open protocols'
    ]
  }
]

export const Ownership = () => {
  return (
    <section className="px-20 py-10">
      <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-5 ">
          <h3 className="font-mono uppercase tracking-widest text-xs text-primary">We help you own</h3>
          <h2 className="font-[Cal_Sans] text-4xl lg:text-6xl">
            Ownership is becoming <br />a competitive advantage.
          </h2>
        </div>

        <div className="flex flex-col gap-2 text-muted-foreground">
          <p>Most internet businesses still depend on platforms they don't control.</p>
          <ul className="ml-4">
            <li className="list-disc">Logins belong to Google.</li>
            <li className="list-disc">Payments belong to Stripe.</li>
            <li className="list-disc">Audiences belong to social networks.</li>
            <li className="list-disc">Data belongs to SaaS vendors.</li>
          </ul>

          <p className="text-white border-l-4 border-l-violet-400 pl-2">When those platforms change the rules, your business changes too.
            <br />
            We design systems where ownership stays with you and your users.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-5">
          {offers.map((o, i) => (
            <div
              key={i}
              className={`border border-muted-foreground/40 bg-card p-8 flex flex-col gap-6 hover:bg-white/5 transition duration-500`}
            >
              <div className="flex flex-col gap-3">
                <h3 className="font-[Cal_Sans] text-3xl">{o.name}</h3>
              </div>

              <div className="flex flex-col gap-3 border-t border-muted-foreground/10 pt-4">
                <ul className="flex flex-col gap-2">
                  {o.items.map((item, i) => (
                    <li key={i} className="flex gap-2 items-start text-sm">
                      <Check className={`h-3 w-3 mt-1 shrink-0`} />
                      <span className="text-foreground/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="grid grid-cols-2 lg:grid-cols-6 border border-muted-foreground/20">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`p-6 lg:p-8 flex flex-col gap-2 border-muted-foreground/20 ${
                i < 3 ? "border-r" : ""
              } ${i < 2 ? "border-b lg:border-b-0" : ""}`}
            >
              <p className="font-[Cal_Sans] text-4xl lg:text-5xl text-primary">{s.value}</p>
              <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">
                {s.label}
              </p>
            </div>
          ))}
        </div> */}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

        </div>

        {/* <div className="flex flex-col gap-5">
          <p className="font-mono uppercase tracking-widest text-[10px] text-muted-foreground">
            // Protocols & networks we ship on
          </p>
          <div className="flex flex-wrap gap-3">
            {featured.map((f) => (
              <div
                key={f}
                className="px-4 py-2 border border-muted-foreground/30 font-mono text-xs text-muted-foreground hover:text-primary hover:border-primary transition"
              >
                {f}
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

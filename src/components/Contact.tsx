import { ArrowRight } from "lucide-react";
import { FormEvent, useRef, useState } from "react";
import posthog from "posthog-js";
import { Eyebrow } from "@/components/Primitives";

export const Contact = () => {
  const [status, setStatus] = useState<"success" | "error" | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus(undefined);
    setLoading(true);

    const formData = new FormData(formRef.current as HTMLFormElement);
    const name = formData.get("name");
    const service = formData.get("service") as string;
    formData.append("subject", `${name} sent a message from the website`);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(Object.fromEntries(formData)),
    });
    setLoading(false);

    if (!res.ok) {
      setStatus("error");
      posthog.capture("contact_form_error", { service_category: service });
      return;
    }

    setStatus("success");
    posthog.capture("contact_form_submitted", { service_category: service });
  };

  const field =
    "p-3 bg-background border border-border text-sm focus:outline-none focus:border-foreground transition-colors";
  const labelCls = "font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground";

  return (
    <div id="contact" className="px-5 lg:px-12 pt-28 lg:pt-36 pb-24">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-5 flex flex-col gap-6">
          <Eyebrow>Start a conversation</Eyebrow>
          <h1 className="font-display text-4xl lg:text-6xl font-semibold leading-[1]">
            Tell us what you&apos;re building.
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Share the problem, the constraints and where you are today. We&apos;ll reply with an
            honest read on the architecture — including whether blockchain is the right foundation
            at all.
          </p>
          <div className="flex flex-col gap-3 pt-4 border-t border-border">
            <a
              href="mailto:build@hexquarter.com"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
            >
              <ArrowRight className="h-3 w-3" /> build@hexquarter.com
            </a>
            <p className="text-sm text-muted-foreground">Typical reply time: 1–2 business days.</p>
          </div>
        </div>

        <form
          ref={formRef}
          className="lg:col-span-7 flex flex-col gap-6"
          method="post"
          onSubmit={handleSubmit}
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <span className={labelCls}>Your name</span>
              <input type="text" placeholder="Jane Doe" className={field} required name="name" />
            </div>
            <div className="flex flex-col gap-2">
              <span className={labelCls}>Email</span>
              <input
                type="text"
                placeholder="you@company.com"
                className={field}
                required
                name="email_npub"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <span className={labelCls}>What do you need?</span>
            <select className={field} required name="service" defaultValue="">
              <option value="" disabled>
                Select a category…
              </option>
              <option value="architecture">Blockchain architecture</option>
              <option value="decentralized-systems">Decentralized systems engineering</option>
              <option value="bitcoin">Bitcoin / Lightning infrastructure</option>
              <option value="nostr">Nostr / identity & coordination</option>
              <option value="stablecoins">Stablecoins & digital assets</option>
              <option value="advisory">Technical advisory</option>
              <option value="other">Something else</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <span className={labelCls}>Project context</span>
            <textarea
              className={field}
              rows={5}
              placeholder="What are you building? What stage are you at? What decision are you trying to make?"
              required
              name="details"
            />
          </div>

          <div className="flex flex-col gap-4">
            <button
              type="submit"
              disabled={loading}
              className="w-fit bg-primary text-primary-foreground border border-primary px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.16em] hover:bg-background hover:text-foreground transition-colors duration-300 disabled:opacity-60"
            >
              {loading ? "Sending…" : "Send message"}
            </button>
            {status === "error" && (
              <p className="text-sm text-destructive">
                Something went wrong. Please retry, or email{" "}
                <a href="mailto:build@hexquarter.com" className="underline">
                  build@hexquarter.com
                </a>
                .
              </p>
            )}
            {status === "success" && (
              <p className="text-sm">Thank you — your message is in. We&apos;ll reply shortly.</p>
            )}
          </div>

          <input type="hidden" name="access_key" value="b7a2eddf-6572-49e3-8975-ccd60fcc6227" />
          <input type="hidden" name="from_name" value="HexQuarter Contact" />
        </form>
      </div>
    </div>
  );
};

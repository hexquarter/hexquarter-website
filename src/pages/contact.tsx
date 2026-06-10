import { PageShell } from "@/components/PageShell";
import { Contact } from "@/components/Contact";

const ContactPage = () => {
  return (
    <PageShell
      title="Contact — HexQuarter"
      description="Tell us what you're building on Bitcoin, Lightning or Nostr. We'll reply with an honest read."
    >
      <Contact />
    </PageShell>
  );
};

export default ContactPage;

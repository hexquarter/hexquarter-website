import { PageShell } from "@/components/PageShell";
import { Contact } from "@/components/Contact";

const ContactPage = () => (
  <PageShell
    title="Start a Project — HexQuarter Blockchain Engineering"
    description="Tell us what you're building. We'll reply with an honest read on the architecture, the protocol choice and the path to production."
  >
    <Contact />
  </PageShell>
);

export default ContactPage;

import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { PageShell } from "@/components/PageShell";
import { CTALink } from "@/components/Primitives";

const NotFoundPage = () => {
  const router = useRouter();

  useEffect(() => {
    console.error("404: route not found:", router.asPath);
  }, [router.asPath]);

  return (
    <PageShell title="Page not found — HexQuarter" description="This page does not exist.">
      <section className="px-5 lg:px-12 pt-36 pb-32 flex flex-col gap-8">
        <p className="label">Error 404</p>
        <h1 className="font-display text-5xl lg:text-7xl font-semibold">Page not found.</h1>
        <p className="text-muted-foreground text-lg max-w-xl">
          The page you were looking for doesn&apos;t exist or has moved.
        </p>
        <div className="flex flex-wrap gap-4">
          <CTALink href="/">Back to home</CTALink>
          <CTALink href="/expertise" variant="ghost">
            Explore expertise
          </CTALink>
        </div>
      </section>
    </PageShell>
  );
};

export default NotFoundPage;

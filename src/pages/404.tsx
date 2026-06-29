import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Header from "@/components/Header";

const NotFoundPage = () => {
  const router = useRouter();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", router.asPath);
  }, [router.asPath]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="flex flex-col gap-10 m-20">
        <section className="hex-section">
          <div className="hex-container">
            <h1 className="mb-4 text-4xl font-bold">404</h1>
            <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
            <Link href="/" className="text-primary hover:underline hover:text-primary/90">
              <button className="border cursor-pointer border-white/30 hover:bg-white hover:text-muted-foreground px-4 py-2 text-white uppercase font-mono text-xs ">Return to Home</button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default NotFoundPage;

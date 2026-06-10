import Head from "next/head";
import { ReactNode } from "react";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";

type Props = {
  title: string;
  description: string;
  children: ReactNode;
};

export const PageShell = ({ title, description, children }: Props) => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <Header />
      <main className="flex flex-col flex-1 pt-20">{children}</main>
      <Footer />
    </div>
  );
};

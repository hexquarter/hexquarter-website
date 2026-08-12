import { ExpertisePage } from "@/components/ExpertisePage";
import { expertise } from "@/data/expertise";

const item = expertise.find((e) => e.slug === "bitcoin")!;

const Page = () => <ExpertisePage item={item} />;

export default Page;

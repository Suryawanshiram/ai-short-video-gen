import Header from "@/components/organisms/Header";
import Hero from "@/components/organisms/Hero";

export default function Home() {
  return (
    <div className="px-4 py-6 flex w-full flex-col">
      {/* Header */}
      <div className="">
        <Header />
      </div>
      {/* Hero */}
      <div className="">
        <Hero />
      </div>
    </div>
  );
}

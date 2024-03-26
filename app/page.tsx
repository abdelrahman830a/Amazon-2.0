import Banner from "@/components/Banner";
import Header from "@/components/Header";
import ProductFeed from "@/components/ProductFeed";

export default function Home() {
  return (
    <div className="bg-gray-100">
      {/* Header */}
      <Header />

      {/* Main */}
      <main className="mx-auto max-w-screen-2xl">
        {/* Banner */}
        <Banner />
        {/* ProductFeed */}
        <ProductFeed />
      </main>
    </div>
  );
}

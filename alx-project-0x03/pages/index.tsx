// pages/index.tsx
import Layout from "@/components/layouts/Layout";

export default function Home() {
  return (
    <Layout>
      <section className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Splash App
        </h1>
        <p className="text-lg text-gray-600">This is your home page content!</p>
      </section>
    </Layout>
  );
}

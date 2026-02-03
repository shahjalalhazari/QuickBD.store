import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <section className="bg-primary text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          আপনার সব প্রয়োজন,
এখন এক ঠিকানায়।
        </h1>
      </section>


      <section className="max-w-7xl mx-auto p-6 grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold text-accent text-xl mb-2">Fast Delivery</h3>
          <p className="text-warning">Nationwide fast shipping.</p>
        </div>


        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold text-purple text-xl mb-2">Secure Payment</h3>
          <p className="text-secondary">100% secure payment system.</p>
        </div>


        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold text-heading-color text-xl mb-2">Trusted Sellers</h3>
          <p className="text-body-color">Verified sellers across Bangladesh.</p>
        </div>
      </section>
    </main>
  );
}

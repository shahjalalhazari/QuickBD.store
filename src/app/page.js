import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-light">
<section className="bg-primary text-white py-20 text-center">
<h1 className="text-4xl md:text-5xl font-bold mb-4">
Welcome to QuickBD.store
</h1>
<p className="font-hind text-lg text-red">
বাংলাদেশের বিশ্বস্ত অনলাইন শপিং প্ল্যাটফর্ম
</p>
</section>


<section className="max-w-7xl mx-auto p-6 grid md:grid-cols-3 gap-6">
<div className="bg-white p-6 rounded-xl shadow">
<h3 className="font-semibold text-green text-xl mb-2">Fast Delivery</h3>
<p className="text-blue">Nationwide fast shipping.</p>
</div>


<div className="bg-white p-6 rounded-xl shadow">
<h3 className="font-semibold text-purple text-xl mb-2">Secure Payment</h3>
<p className="text-secondary">100% secure payment system.</p>
</div>


<div className="bg-white p-6 rounded-xl shadow">
<h3 className="font-semibold text-dark-black text-xl mb-2">Trusted Sellers</h3>
<p className="text-body-text">Verified sellers across Bangladesh.</p>
</div>
</section>
</main>
  );
}

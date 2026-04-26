// components/Hero.tsx
export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      
      <h1 className="text-4xl md:text-6xl font-bold max-w-3xl">
        Next.js Web Development Services in India
      </h1>

      <p className="mt-5 text-gray-400 max-w-xl">
        We build fast, scalable and SEO-optimized websites using modern technologies.
      </p>

      <div className="mt-8 flex gap-4">
        <a
          href="/contact"
          className="bg-white text-black px-6 py-3 rounded-lg"
        >
          Get a Website
        </a>

        <a
          href="/services"
          className="border border-white px-6 py-3 rounded-lg"
        >
          View Services
        </a>
      </div>
    </section>
  );
}
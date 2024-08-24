/* eslint-disable react/no-unescaped-entities */
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";

import { title, subtitle } from "@/components/primitives";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-6 py-16 md:py-20 bg-cover bg-center relative">
      {/* Overlay for Blur Effect */}
      <div className="absolute inset-0 backdrop-blur-sm" />

      <div className="relative inline-block max-w-xl text-center">
        <h1 className={title()}>Rent&nbsp;</h1>
        <h1 className={title()}>Mini Football&nbsp;</h1>
        <h1 className={title()}>Stadiums Near You.</h1>
        <h2 className={subtitle({ class: "mt-4 text-lg" })}>
          Find the perfect field for your next match and book it instantly.
        </h2>
      </div>

      <div className="relative flex gap-4 mt-8">
        <Link
          className={buttonStyles({
            radius: "full",
            variant: "solid",
            size: "lg",
            class: "px-10 py-4 text-xl",
          })}
          href="/rent"
        >
          Rent Now
        </Link>
      </div>

      <div className="relative mt-12 text-center">
        <h3 className="text-xl font-semibold">Why Choose Us?</h3>
        <p className="mt-4 text-lg">
          We offer a wide range of football stadiums with easy booking,
          transparent pricing, and no hidden fees. Whether you're looking for a
          quick game or a weekend tournament, we've got you covered.
        </p>
      </div>

      <div className="relative mt-12 flex flex-col md:flex-row gap-6 justify-center">
        <div className="text-center p-6 rounded-lg shadow-md bg-white/10">
          <h4 className="text-lg font-semibold">Wide Selection</h4>
          <p className="mt-2">
            Choose from various fields across multiple locations to find the one
            that fits your needs.
          </p>
        </div>
        <div className="text-center p-6 rounded-lg shadow-md bg-white/10">
          <h4 className="text-lg font-semibold">Easy Booking</h4>
          <p className="mt-2">
            Book your stadium in just a few clicks with our user-friendly
            interface.
          </p>
        </div>
        <div className="text-center p-6 rounded-lg shadow-md bg-white/10">
          <h4 className="text-lg font-semibold">Transparent Pricing</h4>
          <p className="mt-2">
            Know exactly what you're paying for with our transparent pricing
            structure.
          </p>
        </div>
      </div>
    </section>
  );
}

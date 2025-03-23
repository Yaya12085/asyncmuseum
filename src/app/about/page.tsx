"use client";
import Container from "@/components/container";
import Image from "next/image";
export default function About() {
  return (
    <Container>
      <div className="flex flex-col md:flex-row gap-4">
        <Image
          src="https://images.metmuseum.org/CRDImages/dp/web-large/DP889132.jpg"
          alt="About"
          width={500}
          height={500}
          className="rounded-lg"
        />
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">À propos de AsyncMuseum</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </p>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold">Contact</h2>
            <p>Email: info@example.com</p>
            <p>Phone: +123 456 7890</p>
            <p>Address: 123 Main St, Anytown, USA</p>
          </div>
        </div>
      </div>
    </Container>
  );
}

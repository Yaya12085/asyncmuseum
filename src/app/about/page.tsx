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
          width={1500}
          height={0}
          className="rounded-lg"
        />
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            À propos de AsyncMuseum
          </h1>

          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              AsyncMuseum est une plateforme numérique innovante qui rend
              l&apos;art accessible à tous. Notre mission est de démocratiser
              l&apos;accès aux œuvres d&apos;art en créant une expérience
              immersive et éducative en ligne.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-4 text-gray-900 dark:text-gray-100">
              Notre Vision
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Nous croyons que l&apos;art devrait être accessible à tous,
              partout et à tout moment. En utilisant les dernières technologies,
              nous créons des expériences virtuelles qui permettent aux
              visiteurs de découvrir et d&apos;apprécier des œuvres d&apos;art
              du monde entier.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-4 text-gray-900 dark:text-gray-100">
              Ce Que Nous Offrons
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
              <li>
                Accès à des milliers d&apos;œuvres d&apos;art numérisées en
                haute définition
              </li>
              <li>Visites virtuelles guidées de collections exclusives</li>
              <li>Contenu éducatif et historique détaillé pour chaque œuvre</li>
              <li>Interface intuitive adaptée à tous les publics</li>
            </ul>
          </div>

          <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Contactez-nous
            </h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-600 dark:text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:contact@asyncmuseum.com"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  contact@asyncmuseum.fr
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-600 dark:text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">
                  +33 (0)1 01 01 01 01
                </span>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-600 dark:text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <address className="not-italic text-gray-700 dark:text-gray-300">
                  15 Rue de la Culture
                  <br />
                  75001 Paris, France
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

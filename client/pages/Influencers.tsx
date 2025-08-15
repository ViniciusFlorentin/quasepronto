import { Link } from "react-router-dom";

export default function Influencers() {
  return (
    <div className="min-h-screen bg-eclipse-light flex items-center justify-center">
      <div className="text-center max-w-2xl mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-funnel text-eclipse-dark mb-6">
          Nossos Influenciadores
        </h1>
        <p className="text-xl text-eclipse-gray font-funnel mb-8">
          Esta página está sendo desenvolvida. Em breve você poderá conhecer
          todos os nossos influenciadores agenciados.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-eclipse-purple text-eclipse-white font-funnel text-base px-8 py-4 rounded-full hover:bg-opacity-90 transition-opacity"
        >
          Voltar ao início
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="w-5 h-5"
          >
            <path
              d="M20 12H4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15 17C15 17 20 13.3176 20 12C20 10.6824 15 7 15 7"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}

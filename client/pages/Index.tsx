import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const RotatingText = () => {
  const texts = [
    "criadores de conteúdo",
    "grandes marcas",
    "criatividade e resultado",
    "influência e estratégia",
    "conteúdo e audiência"
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <span className="text-eclipse-purple-bg transition-all duration-500">
      {texts[currentIndex]}
    </span>
  );
};

const ServiceCard = ({ icon, title, description, className = "" }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}) => (
  <div className={`bg-eclipse-dark p-8 md:p-16 rounded-2xl md:rounded-3xl flex flex-col gap-6 ${className}`}>
    <div className="w-12 h-12 bg-eclipse-light rounded-full flex items-center justify-center shadow-[0_0_0_4px_#DB9EFF]">
      {icon}
    </div>
    <div className="space-y-4">
      <h3 className="text-eclipse-purple-light font-funnel text-xl md:text-2xl font-bold leading-tight">
        {title}
      </h3>
      <p className="text-eclipse-light font-funnel text-sm md:text-base leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

const StatCard = ({ value, label }: { value: string; label: string }) => (
  <div className="relative w-full h-[170px]">
    {/* Background card with border */}
    <div className="absolute inset-0 bg-transparent border border-eclipse-border-purple rounded-2xl"></div>

    {/* Top highlight border */}
    <div className="absolute inset-0 bg-transparent border-t-2 border-eclipse-purple-light rounded-2xl"></div>

    {/* Content */}
    <div className="relative z-10 p-8 h-full flex flex-col justify-between">
      <div className="text-eclipse-purple-light font-funnel text-4xl md:text-5xl lg:text-6xl font-bold leading-none">
        {value}
      </div>
      <div className="text-eclipse-white font-funnel text-base md:text-lg leading-tight">
        {label}
      </div>
    </div>
  </div>
);

const AgencyCard = ({ name, description, image, socials }: {
  name: string;
  description: string;
  image: string;
  socials: string[];
}) => (
  <div className="bg-eclipse-light-purple border-2 border-eclipse-dark rounded-2xl p-8 space-y-8 min-w-[400px] md:min-w-[500px]">
    <div className="flex gap-8">
      <img 
        src={image} 
        alt={name}
        className="w-32 h-32 md:w-40 md:h-40 rounded-2xl object-cover"
      />
      <div className="flex-1 space-y-6">
        <div className="space-y-4">
          <h3 className="text-eclipse-dark font-funnel text-2xl md:text-3xl font-bold">
            {name}
          </h3>
          <p className="text-eclipse-dark font-funnel text-sm md:text-base leading-relaxed">
            {description}
          </p>
        </div>
        <div className="flex gap-2">
          {socials.map((social, index) => (
            <div key={index} className="w-8 h-8 bg-eclipse-dark rounded-lg"></div>
          ))}
        </div>
      </div>
    </div>
    <button className="w-full bg-eclipse-purple text-eclipse-white font-funnel text-base px-6 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-opacity-90 transition-opacity">
      Ver mídia kit
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M20 12H4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15 17C15 17 20 13.3176 20 12C20 10.6824 15 7 15 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  </div>
);

export default function Index() {
  return (
    <div className="min-h-screen bg-eclipse-light">
      {/* Hero Section */}
      <section className="bg-eclipse-dark relative overflow-hidden min-h-screen">
        {/* Background lighting effects */}
        <div className="absolute inset-0">
          <div className="absolute -top-32 -left-32 w-[455px] h-[455px] bg-eclipse-purple rounded-full blur-[250px]"></div>
          <div className="absolute -bottom-32 -right-32 w-[455px] h-[455px] bg-eclipse-purple rounded-full blur-[250px]"></div>
        </div>

        {/* Background decorative line */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[2821px] h-[388px] pointer-events-none">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/284c943875036b0638b53cb06462c16a14739a8e?width=5641"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* Navigation */}
        <nav className="relative z-10 flex items-center justify-between px-6 md:px-24 py-8 h-28">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/dc8b6fd3223942cb1bcbc3b8f10ba997e005676f?width=222"
            alt="Eclipse Logo"
            className="w-[111px] h-[33px]"
          />

          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-eclipse-white font-funnel text-lg hover:text-eclipse-purple-light transition-colors">
              Inicio
            </Link>
            <Link to="/influencers" className="text-eclipse-white font-funnel text-lg hover:text-eclipse-purple-light transition-colors">
              Nossos influenciadores
            </Link>
            <Link to="/team" className="text-eclipse-white font-funnel text-lg hover:text-eclipse-purple-light transition-colors">
              Nosso time
            </Link>
            <Link to="/about" className="text-eclipse-white font-funnel text-lg hover:text-eclipse-purple-light transition-colors">
              Sobre nós
            </Link>
          </div>

          <button className="bg-eclipse-purple text-eclipse-white font-funnel text-base px-6 py-4 rounded-full flex items-center gap-2 h-12 hover:bg-opacity-90 transition-opacity">
            Solicitar orçamento
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-6 h-6">
              <path d="M20.0001 11.9998H4.00012" stroke="#FDFCFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M15.0003 17C15.0003 17 20.0002 13.3176 20.0002 12C20.0002 10.6824 15.0002 7 15.0002 7" stroke="#FDFCFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col justify-center items-center px-6 md:px-0 pb-24 pt-16 text-center min-h-[788px]">
          <div className="max-w-4xl mx-auto space-y-26">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 border border-eclipse-purple rounded-full mb-10">
              <span className="text-eclipse-purple-bg font-alliance text-sm uppercase tracking-wide leading-none">
                Inovação, criatividade e performance
              </span>
            </div>

            {/* Main Content */}
            <div className="space-y-4 mb-10">
              {/* Title */}
              <div className="max-w-[708px] mx-auto">
                <h1 className="text-eclipse-white font-funnel text-4xl md:text-6xl lg:text-7xl font-normal leading-[110%] mb-4">
                  Somos a conexão entre
                </h1>

                {/* Static Text */}
                <div className="text-eclipse-purple-bg font-funnel text-4xl md:text-6xl lg:text-7xl font-normal leading-[110%]">
                  criadores de conteúdo
                </div>
              </div>

              {/* Subtitle */}
              <p className="text-eclipse-gray font-funnel text-lg md:text-xl leading-[140%] max-w-2xl mx-auto pt-6">
                Elevamos a sua marca para o próximo nível.
              </p>
            </div>

            {/* Special Button */}
            <div className="inline-flex p-1 rounded-full border-t border-eclipse-purple mb-10">
              <button className="flex items-center gap-2 group">
                <span className="flex items-center h-12 px-6 rounded-full bg-eclipse-purple text-eclipse-white font-funnel text-base font-medium leading-none transition-colors duration-300 group-hover:bg-[#7B34FF]">
                  Agende uma call com nosso time
                </span>

                <div className="flex justify-center items-center w-12 h-12 rounded-full bg-eclipse-purple flex-shrink-0 transition-colors duration-300 group-hover:bg-[#7B34FF]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M20.0001 11.9998H4.00012" stroke="#FDFCFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15.0003 17C15.0003 17 20.0002 13.3176 20.0002 12C20.0002 10.6824 15.0002 7 15.0002 7" stroke="#FDFCFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center justify-center gap-4">
              <div className="flex -space-x-3">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/f799985afc1f3e9e73459bb3a4abcc87b1d9e8ea?width=64"
                  alt=""
                  className="w-8 h-8 rounded-full border border-eclipse-dark"
                />
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/159d45e0a55b9acf6f55942e16fffa0f72027abf?width=64"
                  alt=""
                  className="w-8 h-8 rounded-full border border-eclipse-dark"
                />
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/a479d3154381e084be27a79b6581e4a58e3f1984?width=64"
                  alt=""
                  className="w-8 h-8 rounded-full border border-eclipse-dark"
                />
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/7913815472d86e70f8a1e56f3727a8be6fca0c1e?width=64"
                  alt=""
                  className="w-8 h-8 rounded-full border border-eclipse-dark"
                />
              </div>
              <span className="text-eclipse-white font-funnel text-base leading-[140%]">
                Parcerias que geram visibilidade, engajamento e vendas.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-6 md:px-24 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-end justify-between gap-8 mb-16">
            <div className="space-y-6">
              <h2 className="text-eclipse-dark font-funnel text-4xl md:text-6xl font-normal leading-tight">
                Nossos<br />serviços
              </h2>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-eclipse-light-purple rounded-full flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-eclipse-dark">
                  <path d="M14.0218 2.7239C14.2611 3.03528 14.296 3.45789 14.111 3.8043C13.3324 5.26249 12.8906 6.92805 12.8906 8.69976C12.8906 14.4489 17.5511 19.1094 23.3002 19.1094C25.0719 19.1094 26.7375 18.6676 28.1956 17.889C28.542 17.704 28.9647 17.7389 29.276 17.9782C29.5875 18.2176 29.7299 18.6169 29.6403 18.9993C28.2075 25.1132 22.7212 29.6666 16.1692 29.6666C8.52789 29.6666 2.33337 23.4721 2.33337 15.8308C2.33337 9.2787 6.88677 3.79256 13.0007 2.35968C13.3831 2.27006 13.7824 2.41254 14.0218 2.7239Z" fill="currentColor"/>
                </svg>
              </div>
              <p className="text-eclipse-gray font-funnel text-lg md:text-xl max-w-sm">
                Conheça as soluções que oferecemos para conectar marcas, criadores e resultados em diferentes plataformas.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              className="lg:col-span-1 rounded-t-[4rem] rounded-br-2xl rounded-bl-2xl"
              icon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-eclipse-dark">
                  <path d="M2.3569 2.78113C2.52359 2.45513 2.85886 2.25 3.225 2.25H8.1C8.41308 2.25 8.70711 2.40034 8.89041 2.65415L13.5354 9.08571L20.0856 2.53557C20.4663 2.15481 21.0837 2.15481 21.4644 2.53557C21.8452 2.91633 21.8452 3.53367 21.4644 3.91443L14.6919 10.687L21.5654 20.2041C21.7798 20.501 21.8098 20.8929 21.6431 21.2189C21.4764 21.5449 21.1411 21.75 20.775 21.75H15.9C15.5869 21.75 15.2929 21.5997 15.1096 21.3459L10.4646 14.9143L3.91443 21.4644C3.53367 21.8452 2.91634 21.8452 2.53557 21.4644C2.15481 21.0837 2.15481 20.4663 2.53557 20.0856L9.30811 13.313L2.43459 3.79585C2.22022 3.49903 2.19021 3.10713 2.3569 2.78113Z" fill="currentColor"/>
                </svg>
              }
              title="Facilitando o marketing pelo Twitter"
              description="No X, transformamos ideias em resultados. Somos especialistas em ampliar o alcance das suas campanhas e levar sua marca para novas redes e públicos."
            />
            
            <ServiceCard
              icon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-eclipse-dark">
                  <path d="M11.1525 1.31827C11.2667 1.25339 11.4052 1.253 11.6823 1.25222L11.8881 1.25161C12.8696 1.24865 13.8524 1.24568 14.833 1.28283C15.2678 1.29931 15.4853 1.30755 15.5666 1.45848C15.648 1.60941 15.5338 1.79812 15.3055 2.17554L12.9793 6.02089C12.8368 6.25655 12.7655 6.37438 12.6512 6.43884C12.5368 6.50329 12.3991 6.50329 12.1237 6.50329H8.67266C8.35944 6.50329 8.20282 6.50329 8.14538 6.40183C8.08793 6.30037 8.16851 6.16608 8.32966 5.8975L10.825 1.73861C10.9672 1.50164 11.0383 1.38314 11.1525 1.31827Z" fill="currentColor"/>
                </svg>
              }
              title="Conteúdo profissional para sua marca"
              description="Impulsione seus resultados com uma estratégia de conteúdo dinâmica, que prende a atenção, fortalece sua marca e mantém seu público engajado."
            />
            
            <ServiceCard
              icon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-eclipse-dark">
                  <path fillRule="evenodd" clipRule="evenodd" d="M3.25 10.9286C3.25 6.1356 7.16751 2.25012 12 2.25012C16.8325 2.25012 20.75 6.1356 20.75 10.9286C20.75 12.5077 20.3239 13.9911 19.5788 15.2685C19.3099 15.7295 18.7152 15.887 18.2504 15.6204C17.7857 15.3537 17.6268 14.7638 17.8957 14.3029C18.4742 13.311 18.8056 12.1596 18.8056 10.9286C18.8056 7.20071 15.7586 4.17867 12 4.17867C8.2414 4.17867 5.19444 7.20071 5.19444 10.9286C5.19444 12.1596 5.52583 13.311 6.10431 14.3029C6.37317 14.7638 6.21435 15.3537 5.74957 15.6204C5.28479 15.887 4.69005 15.7295 4.42119 15.2685C3.67612 13.9911 3.25 12.5077 3.25 10.9286Z" fill="currentColor"/>
                </svg>
              }
              title="Criação de campanhas e textos persuasivos"
              description="Adaptamos cada campanha ao seu público e às exigências de cada plataforma, garantindo uma comunicação eficaz e a expansão da sua marca."
            />
            
            <div className="lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ServiceCard
                icon={
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-eclipse-dark">
                    <path d="M16.999 11.9704C16.999 12.5227 16.5513 12.9704 15.999 12.9704C15.8307 12.9704 15.6722 12.9288 15.533 12.8554C15.5101 12.8433 15.4896 12.8273 15.4712 12.809L14.1681 11.5114C14.0604 11.4041 13.8895 11.3947 13.7689 11.4872C11.3507 13.3419 8.86807 14.2442 6.80123 14.6632C5.38063 14.9512 4.15687 15.0112 3.28244 14.9984C2.99883 14.9943 2.75131 14.9825 2.54501 14.9683C2.37972 14.9569 2.25895 14.81 2.27482 14.6451L2.40894 13.2515C2.42481 13.0866 2.57131 12.9661 2.73666 12.9766C2.89837 12.9869 3.09118 12.9954 3.31153 12.9986C4.06968 13.0097 5.14769 12.9577 6.40387 12.7031C8.14149 12.3508 10.2209 11.6114 12.276 10.1066C12.4225 9.99939 12.4363 9.78692 12.3077 9.65883L11.15 8.50604C11.1293 8.48541 11.1114 8.462 11.0986 8.43568C11.0348 8.30399 10.999 8.15619 10.999 8.00001C10.999 7.44773 11.4467 7.00001 11.999 7.00001H14.0532C14.4775 6.99993 14.8891 6.99985 15.2286 7.04514C15.6104 7.0961 16.0471 7.2202 16.4106 7.58101C16.7751 7.94284 16.9015 8.37929 16.9533 8.76183C16.9992 9.10024 16.9991 9.51023 16.999 9.93069V11.9704Z" fill="currentColor"/>
                  </svg>
                }
                title="Relacionamentos que impulsionam resultados"
                description="Fazemos o match entre criadores e marcas alinhadas em valores e objetivos, fortalecendo cada parceria com propósito e resultado."
              />
              
              <ServiceCard
                className="rounded-t-2xl rounded-bl-2xl rounded-br-[4rem]"
                icon={
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-eclipse-dark">
                    <path fillRule="evenodd" clipRule="evenodd" d="M3.25006 10.9286C3.25006 6.1356 7.16757 2.25012 12.0001 2.25012C16.8326 2.25012 20.7501 6.1356 20.7501 10.9286C20.7501 12.5077 20.324 13.9911 19.5789 15.2685C19.31 15.7295 18.7153 15.887 18.2505 15.6204C17.7858 15.3537 17.6269 14.7638 17.8958 14.3029C18.4743 13.311 18.8057 12.1596 18.8057 10.9286C18.8057 7.20071 15.7587 4.17867 12.0001 4.17867C8.24146 4.17867 5.1945 7.20071 5.1945 10.9286C5.1945 12.1596 5.52589 13.311 6.10437 14.3029C6.37323 14.7638 6.21441 15.3537 5.74963 15.6204C5.28485 15.887 4.69011 15.7295 4.42125 15.2685C3.67618 13.9911 3.25006 12.5077 3.25006 10.9286Z" fill="currentColor"/>
                  </svg>
                }
                title="Parceiros de conteúdo"
                description="Gerenciamos perfis de influenciadores com suporte completo para ampliar seu alcance, influência e desempenho em campanhas publicitárias."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-eclipse-dark relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-32 right-32 w-96 h-96 bg-eclipse-purple rounded-full blur-[150px] opacity-40"></div>
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-eclipse-purple rounded-full blur-[150px] opacity-40"></div>
        </div>
        
        <div className="relative z-10 px-6 md:px-24 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-20">
              <h2 className="text-eclipse-white font-funnel text-4xl md:text-6xl font-normal leading-tight">
                Alcance que se <span className="text-eclipse-purple-light">traduz em resultado</span>
              </h2>
              <p className="text-eclipse-gray font-funnel text-lg md:text-xl max-w-md">
                Estes <span className="text-eclipse-purple-light">números são mensais</span> e refletem nosso alcance de forma transparente.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard value="+17M" label="Visualizações no YouTube" />
              <StatCard value="+85M" label="Visualizações no Instagram" />
              <StatCard value="+3.5B" label="Impressões no Twitter" />
              <StatCard value="+3.1M" label="Seguidores nas mídias" />
            </div>
          </div>
        </div>
      </section>

      {/* Agency Section */}
      <section className="px-6 md:px-24 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <h2 className="text-eclipse-dark font-funnel text-4xl md:text-5xl font-normal">
              Agenciados
            </h2>
            <div className="flex gap-2">
              <div className="w-6 h-2 bg-eclipse-purple rounded-full"></div>
              <div className="w-2 h-2 bg-eclipse-purple-light rounded-full"></div>
              <div className="w-2 h-2 bg-eclipse-purple-light rounded-full"></div>
              <div className="w-2 h-2 bg-eclipse-purple-light rounded-full"></div>
            </div>
          </div>
          
          <div className="relative">
            {/* Left Arrow */}
            <button className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-eclipse-light-purple rounded-full flex items-center justify-center hover:bg-opacity-80 transition-all">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-eclipse-dark rotate-180">
                <path fillRule="evenodd" clipRule="evenodd" d="M3 12C3 12.5523 3.4477 13 4 13H20C20.5523 13 21 12.5523 21 12C21 11.4477 20.5523 11 20 11H4C3.4477 11 3 11.4477 3 12Z" fill="currentColor"/>
                <path d="M18.9721 12C18.8788 11.8452 18.6832 11.5671 18.4693 11.3251C18.0436 10.8432 17.4568 10.2928 16.8443 9.76105C16.2368 9.23357 15.6263 8.74365 15.166 8.38437C14.9363 8.20515 14.54 7.90576 14.4068 7.80521C13.9622 7.47768 13.8672 6.85173 14.1947 6.40706C14.5222 5.96236 15.1482 5.86736 15.5929 6.19487L15.5966 6.19767C15.741 6.30672 16.1597 6.62291 16.3964 6.80767C16.8735 7.18002 17.5131 7.69303 18.1555 8.25084C18.793 8.80434 19.4563 9.4216 19.9681 10.0008C20.2229 10.2892 20.4614 10.5918 20.6415 10.8906C20.8051 11.162 20.9999 11.5568 20.9999 12C20.9999 12.4431 20.8051 12.838 20.6415 13.1094C20.4614 13.4082 20.2229 13.7108 19.9681 13.9992C19.4563 14.5784 18.793 15.1957 18.1555 15.7492C17.5131 16.307 16.8735 16.82 16.3964 17.1923C16.1597 17.3771 15.7413 17.6931 15.5969 17.8021L15.5929 17.8051C15.1482 18.1326 14.5222 18.0376 14.1947 17.5929C13.8672 17.1483 13.9622 16.5223 14.4068 16.1948C14.54 16.0942 14.9363 15.7948 15.166 15.6156C15.6263 15.2564 16.2368 14.7664 16.8443 14.2389C17.4568 13.7072 18.0436 13.1568 18.4693 12.6749C18.6832 12.4329 18.8788 12.1548 18.9721 12Z" fill="currentColor"/>
              </svg>
            </button>

            {/* Right Arrow */}
            <button className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-eclipse-light-purple rounded-full flex items-center justify-center hover:bg-opacity-80 transition-all">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-eclipse-dark">
                <path fillRule="evenodd" clipRule="evenodd" d="M21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12Z" fill="currentColor"/>
                <path d="M18.9721 12C18.8788 11.8452 18.6832 11.5671 18.4693 11.3251C18.0436 10.8432 17.4568 10.2928 16.8443 9.76105C16.2368 9.23357 15.6263 8.74365 15.166 8.38437C14.9363 8.20515 14.54 7.90576 14.4068 7.80521C13.9622 7.47768 13.8672 6.85173 14.1947 6.40706C14.5222 5.96236 15.1482 5.86736 15.5929 6.19487L15.5966 6.19767C15.741 6.30672 16.1597 6.62291 16.3964 6.80767C16.8735 7.18002 17.5131 7.69303 18.1555 8.25084C18.793 8.80434 19.4563 9.4216 19.9681 10.0008C20.2229 10.2892 20.4614 10.5918 20.6415 10.8906C20.8051 11.162 20.9999 11.5568 20.9999 12C20.9999 12.4431 20.8051 12.838 20.6415 13.1094C20.4614 13.4082 20.2229 13.7108 19.9681 13.9992C19.4563 14.5784 18.793 15.1957 18.1555 15.7492C17.5131 16.307 16.8735 16.82 16.3964 17.1923C16.1597 17.3771 15.7413 17.6931 15.5969 17.8021L15.5929 17.8051C15.1482 18.1326 14.5222 18.0376 14.1947 17.5929C13.8672 17.1483 13.9622 16.5223 14.4068 16.1948C14.54 16.0942 14.9363 15.7948 15.166 15.6156C15.6263 15.2564 16.2368 14.7664 16.8443 14.2389C17.4568 13.7072 18.0436 13.1568 18.4693 12.6749C18.6832 12.4329 18.8788 12.1548 18.9721 12Z" fill="currentColor"/>
              </svg>
            </button>

            {/* Cards Container */}
            <div className="flex gap-6 overflow-x-auto pb-6 px-16">
              <AgencyCard
                name="Zanfa"
                description="Zanfa é dono de um perfil humorístico extremamente engajado na rede social X. Mesmo com 300 mil seguidores, a conta tem uma das maiores impressões do site brasileiro."
                image="https://cdn.builder.io/api/v1/image/assets%2Feeff4ffa78ca40febc9ed7df855c59ad%2Faf784448682d87d935193676a63b6244601109b2"
                socials={["twitter", "facebook", "instagram"]}
              />
              <AgencyCard
                name="Filipe Leme"
                description="Zanfa é dono de um perfil humorístico extremamente engajado na rede social X. Mesmo com 300 mil seguidores, a conta tem uma das maiores impressões do site brasileiro."
                image="https://cdn.builder.io/api/v1/image/assets%2Feeff4ffa78ca40febc9ed7df855c59ad%2Ff2f042bf36a1fd9fdaba96792374c642e8200ec6"
                socials={["twitter", "youtube", "tiktok"]}
              />
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button className="text-eclipse-dark font-funnel text-base px-6 py-3 border-b border-eclipse-purple flex items-center gap-2 mx-auto hover:text-eclipse-purple transition-colors">
              Ver todos os influenciadores
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                <path d="M20 12H4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15 17C15 17 20 13.3176 20 12C20 10.6824 15 7 15 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-eclipse-light flex justify-center items-center px-6 md:px-24 py-20">
        <div className="max-w-7xl mx-auto w-full">
          <div
            className="flex w-full max-w-[1248px] h-[392px] p-12 rounded-3xl mx-auto relative overflow-hidden"
            style={{
              backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2Feeff4ffa78ca40febc9ed7df855c59ad%2Ff0be1220924c437e8f979f9df7a7ee18?format=webp&width=800')`,
              backgroundColor: '#0C0B0E',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="flex flex-col items-start gap-12 max-w-[611px] relative z-10">
              <h2 className="text-eclipse-white font-funnel text-3xl md:text-4xl font-normal leading-[110%] m-0">
                Empresas, influenciadores e freelancers, vamos conversar?
              </h2>

              <p className="text-eclipse-gray font-funnel text-lg font-normal leading-[140%] m-0">
                Uma parceria <span className="text-eclipse-purple-light">estratégica para alcançar resultados</span> e fortalecer a sua presença digital.
              </p>

              {/* Special Button with LED effect */}
              <div className="inline-flex p-1 rounded-full border-t border-[#A352FF] border-b border-[#2d0b59] border-l border-[#2d0b59] border-r border-[#2d0b59] shadow-[0px_0px_12px_-4px_#A352FF]">
                <button className="flex items-center gap-2 text-decoration-none group">
                  <span className="flex items-center h-12 px-6 rounded-full bg-eclipse-purple text-eclipse-white font-funnel text-base font-medium leading-[100%] transition-colors duration-300 group-hover:bg-[#7B34FF]">
                    Agende uma call com nosso time
                  </span>

                  <div className="flex justify-center items-center w-12 h-12 rounded-full bg-eclipse-purple flex-shrink-0 transition-colors duration-300 group-hover:bg-[#7B34FF]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M20.0001 11.9998H4.00012" stroke="#FDFCFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M15.0003 17C15.0003 17 20.0002 13.3176 20.0002 12C20.0002 10.6824 15.0002 7 15.0002 7" stroke="#FDFCFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-eclipse-dark to-purple-900 px-6 md:px-24 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="text-eclipse-white font-funnel text-xl font-bold mb-8">
              ECLIPSE
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4">
              <h3 className="text-eclipse-gray font-funnel text-xs uppercase">
                Institucional
              </h3>
              <div className="space-y-3">
                <Link to="/agency" className="text-eclipse-white font-funnel text-base block hover:text-eclipse-purple-light transition-colors">
                  Agenciados
                </Link>
                <Link to="/about" className="text-eclipse-white font-funnel text-base block hover:text-eclipse-purple-light transition-colors">
                  Sobre nós
                </Link>
                <Link to="/team" className="text-eclipse-white font-funnel text-base block hover:text-eclipse-purple-light transition-colors">
                  Nosso time
                </Link>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-eclipse-gray font-funnel text-xs uppercase">
                Contato
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-purple-800 rounded-full flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-eclipse-white">
                      <path fillRule="evenodd" clipRule="evenodd" d="M8.89798 2.12547C7.75709 2.09684 6.90951 2.09685 5.76863 2.12547L5.72497 2.12657C4.8445 2.14864 4.12007 2.1668 3.53618 2.26836C2.91647 2.37615 2.39758 2.58607 1.9581 3.02668C1.52091 3.46498 1.31158 3.97569 1.20554 4.5856C1.10601 5.15797 1.09095 5.8643 1.07272 6.71916L1.07178 6.76314C1.05936 7.34531 1.05937 7.65442 1.0718 8.23653L1.07274 8.28051C1.09096 9.13539 1.10602 9.84169 1.20554 10.4141C1.31159 11.024 1.52092 11.5347 1.9581 11.973C2.39759 12.4136 2.91647 12.6235 3.53619 12.7313C4.12008 12.8329 4.84451 12.851 5.72497 12.8731L5.76864 12.8742C6.90951 12.9028 7.75709 12.9028 8.89798 12.8742L8.94161 12.8731C9.82209 12.851 10.5465 12.8328 11.1305 12.7313C11.7501 12.6235 12.269 12.4136 12.7085 11.973C13.1457 11.5347 13.3551 11.024 13.461 10.4141C13.5606 9.84169 13.5757 9.13539 13.5939 8.28051L13.5948 8.23653C13.6072 7.65436 13.6072 7.34531 13.5948 6.76314L13.5939 6.71922C13.5757 5.86433 13.5606 5.15797 13.461 4.5856C13.355 3.97569 13.1457 3.46498 12.7085 3.02668C12.4616 2.77908 12.1895 2.60433 11.8886 2.4796C11.8428 2.45461 11.7937 2.43576 11.7425 2.42373C11.5502 2.35591 11.3464 2.30593 11.1304 2.26836C10.5465 2.1668 9.82209 2.14864 8.94161 2.12657L8.89798 2.12547ZM12.3965 5.66251C12.3852 5.42596 12.3795 5.30769 12.2939 5.26047C12.2083 5.21325 12.1029 5.27291 11.8923 5.39223L9.42152 6.79225C8.66336 7.22182 8.02222 7.49984 7.33319 7.49984C6.64415 7.49984 6.00299 7.22182 5.24488 6.79225L2.77423 5.39236C2.56364 5.27304 2.45834 5.21337 2.37268 5.26059C2.28703 5.30781 2.28138 5.42609 2.2701 5.66264C2.2549 5.98144 2.24665 6.35102 2.23732 6.78799C2.22524 7.35354 2.22525 7.64614 2.23733 8.21168C2.25676 9.12168 2.27149 9.73943 2.35416 10.2148C2.432 10.6626 2.56186 10.9285 2.78401 11.1512C3.00386 11.3717 3.27346 11.5037 3.73621 11.5842C4.22515 11.6693 4.86287 11.6868 5.79792 11.7102C6.91925 11.7383 7.74735 11.7383 8.86869 11.7102C9.80372 11.6868 10.4415 11.6693 10.9304 11.5842C11.3931 11.5037 11.6627 11.3717 11.8826 11.1512C12.1047 10.9285 12.2346 10.6626 12.3125 10.2148C12.3951 9.73943 12.4099 9.12168 12.4293 8.21168C12.4414 7.64614 12.4414 7.35354 12.4293 6.78799C12.42 6.35096 12.4117 5.98134 12.3965 5.66251Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <span className="text-eclipse-white font-funnel text-base">
                    agencia@eclipseroad.com
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-purple-800 rounded-full flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-eclipse-white">
                      <path fillRule="evenodd" clipRule="evenodd" d="M7.3333 1.229C3.87003 1.229 1.06248 4.03655 1.06248 7.49985C1.06248 8.36371 1.23741 9.18784 1.55418 9.93783C1.63728 10.1346 1.6933 10.2676 1.73072 10.3697C1.76888 10.474 1.77424 10.5117 1.77492 10.5213C1.7787 10.5761 1.76484 10.6506 1.67026 11.0042L1.07735 13.2201C1.03696 13.371 1.08014 13.532 1.19062 13.6425C1.30111 13.753 1.46212 13.7962 1.61306 13.7558L3.82901 13.1629C4.18253 13.0683 4.25701 13.0545 4.31179 13.0583C4.32151 13.0589 4.3592 13.0643 4.46341 13.1024C4.56559 13.1399 4.69854 13.1959 4.8953 13.279C5.64534 13.5957 6.46945 13.7707 7.3333 13.7707C10.7966 13.7707 13.6041 10.9631 13.6041 7.49985C13.6041 4.03655 10.7966 1.229 7.3333 1.229Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <span className="text-eclipse-white font-funnel text-base">
                    (18) 99740 - 3693
                  </span>
                </div>
                <p className="text-eclipse-white font-funnel text-sm">
                  Atendimento de Seg à Sex das 09h às 18h.
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-eclipse-gray font-funnel text-xs uppercase">
                Redes sociais
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-purple-800 rounded-full"></div>
                  <span className="text-eclipse-white font-funnel text-base">
                    Twitter
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-purple-800 rounded-full"></div>
                  <span className="text-eclipse-white font-funnel text-base">
                    Instagram
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-purple-800 rounded-full"></div>
                  <span className="text-eclipse-white font-funnel text-base">
                    LinkedIn
                  </span>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <button className="w-full bg-eclipse-purple text-eclipse-white font-funnel text-base px-6 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-opacity-90 transition-opacity">
                Solicitar orçamento
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                  <path d="M20 12H4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15 17C15 17 20 13.3176 20 12C20 10.6824 15 7 15 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="w-full text-eclipse-white font-funnel text-base px-6 py-3 border-b border-eclipse-purple flex items-center justify-center gap-2 hover:text-eclipse-purple-light transition-colors">
                Agendar uma call nosso time
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                  <path d="M20 12H4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15 17C15 17 20 13.3176 20 12C20 10.6824 15 7 15 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
          
          <div className="pt-8 border-t border-purple-800">
            <p className="text-eclipse-gray font-funnel text-xs">
              Eclipse Road © 2025 Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

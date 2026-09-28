import React, { useRef, useEffect, useState, ReactNode } from 'react';
import { Phone, MapPin, Sparkles, CheckCircle2, ArrowRight, ExternalLink } from 'lucide-react';

// 스크롤 애니메이션 컴포넌트
interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const Reveal: React.FC<RevealProps> = ({ children, className = "", delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.01, rootMargin: '0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-200 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export const ConsultationForm: React.FC = () => {
  const handlePhoneClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 1024;
    if (!isMobile) {
      e.preventDefault();
      window.open('https://naver.me/GuCYbZUe', '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="consultation" className="py-12 md:py-16 bg-purple-800 text-white scroll-mt-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-900/30 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* Left Text */}
          <div className="space-y-6">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold mb-3 backdrop-blur-sm border border-white/15">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                실시간 교육 상담 접수 중
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-4 tracking-tight">
                망설이지 마세요.<br/>
                교육 전문가가 <br/>
                <span className="text-white drop-shadow-sm">친절하게 안내해드립니다.</span>
              </h2>

              <p className="text-base md:text-lg font-medium text-white/90 mb-6 leading-relaxed">
                국비지원 자격 여부부터 취업·교육과정까지<br/>
                <span className="border-b-2 border-white pb-0.5 font-bold">100% 무료로 상담해드립니다.</span>
              </p>
              
              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white text-purple-800 rounded-2xl flex items-center justify-center shadow-lg shadow-black/20 shrink-0">
                    <Phone size={22} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white/70">교육문의</p>
                    <a 
                      href="tel:16619726" 
                      onClick={handlePhoneClick}
                      title="클릭 시 온라인 상담 신청 페이지로 이동합니다"
                      className="text-2xl md:text-3xl font-black block hover:text-purple-200 transition-colors cursor-pointer"
                    >
                      1661-9726
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white text-purple-800 rounded-2xl flex items-center justify-center shadow-lg shadow-black/20 shrink-0">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white/70">교육장소</p>
                    <p className="text-lg md:text-xl font-bold">한국직업능력교육원 안산</p>
                  </div>
                </div>
              </div>

              <p className="font-bold text-base mt-6 text-white/95">여러분의 새로운 시작을 진심으로 응원합니다!</p>
            </Reveal>
          </div>

          {/* Right: Newly created Consultation Application CTA Card & Button */}
          <Reveal delay={150} className="w-full">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden flex flex-col items-center text-center">
              {/* Subtle inner decorative glow */}
              <div className="absolute -top-16 -right-16 w-44 h-44 bg-purple-400/20 rounded-full blur-2xl pointer-events-none"></div>
              <div className="absolute -bottom-16 -left-16 w-44 h-44 bg-indigo-400/20 rounded-full blur-2xl pointer-events-none"></div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 text-white text-xs font-bold mb-4 backdrop-blur-md border border-white/20 shadow-sm">
                <Sparkles size={14} className="text-amber-300 animate-spin" style={{ animationDuration: '4s' }} />
                <span>수강료 국비지원</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
                간편 온라인 상담 신청
              </h3>
              
              <p className="text-sm sm:text-base text-white/85 mb-6 max-w-md leading-relaxed">
                국비지원 혜택 안내부터 커리큘럼, 취업 연계까지<br className="hidden sm:inline" />
                전문 컨설턴트가 1:1 맞춤형으로 상담해 드립니다.
              </p>

              {/* Feature Points */}
              <div className="w-full max-w-md space-y-2.5 mb-8 text-left bg-black/25 p-4 sm:p-5 rounded-2xl border border-white/10">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-white/95">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                  <span>교육비 95~100% 국비지원</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-white/95">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                  <span>매월 훈련장려금 최대 지원 혜택</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-white/95">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                  <span>비전공자 맞춤 기초 지도 및 1:1 취업 매칭</span>
                </div>
              </div>

              {/* Consultation Application Button */}
              <a
                href="https://naver.me/GuCYbZUe"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full max-w-md inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 text-zinc-950 font-black text-lg sm:text-xl py-4 px-8 rounded-2xl shadow-[0_10px_30px_rgba(251,191,36,0.35)] hover:shadow-[0_15px_40px_rgba(251,191,36,0.55)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                <span>상담신청하기</span>
                <ArrowRight size={22} className="group-hover:translate-x-1.5 transition-transform" />
              </a>

              <p className="text-[11px] sm:text-xs text-white/70 mt-3.5 flex items-center gap-1.5">
                <ExternalLink size={12} />
                <span>클릭 시 네이버 간편 상담 신청 페이지(새창)로 이동합니다</span>
              </p>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
};

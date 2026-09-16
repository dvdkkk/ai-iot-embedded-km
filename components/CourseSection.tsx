import React, { useRef, useState, useEffect, ReactNode } from 'react';
import { 
  Code2, 
  Terminal, 
  Database, 
  Cpu, 
  Layers, 
  Radio, 
  Server, 
  Camera, 
  LayoutDashboard, 
  Sprout, 
  CheckCircle2, 
  Sparkles,
  ArrowRight,
  Boxes
} from 'lucide-react';

// Animation Component
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
      { threshold: 0.05, rootMargin: '0px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

interface CurriculumStepItem {
  step: string;
  stepNum: number;
  title: string;
  category: string;
  icon: any;
  items: string[];
  techStack: string;
  badgeColor: string;
  isProject?: boolean;
}

const curriculumData: CurriculumStepItem[] = [
  {
    step: "STEP 1",
    stepNum: 1,
    title: "프로그래밍 실습",
    category: "기초 프로그래밍",
    icon: Terminal,
    items: [
      "프로그래밍 기초 요소 학습",
      "파일 조작과 문서 탐색",
      "오픈소스 활용 및 실습"
    ],
    techStack: "프로그래밍 언어, HTML5, CSS3, JavaScript",
    badgeColor: "from-blue-500/20 to-indigo-500/20 text-blue-400 border-blue-500/30"
  },
  {
    step: "STEP 2",
    stepNum: 2,
    title: "서버 프로그래밍과 데이터베이스 구현",
    category: "백엔드 & DB",
    icon: Database,
    items: [
      "서버프로그래밍 기초 요소",
      "데이터베이스 구현과 관리",
      "서버와 데이터베이스 실습"
    ],
    techStack: "서버와 데이터베이스 실습, SQL, JQuery",
    badgeColor: "from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/30"
  },
  {
    step: "STEP 3",
    stepNum: 3,
    title: "임베디드 시스템과 펌웨어 프로그래밍",
    category: "임베디드 펌웨어",
    icon: Cpu,
    items: [
      "펌웨어 프로그래밍 기초",
      "마이크로컨트롤러 기반 프로그래밍",
      "센서와 액추에이터 활용"
    ],
    techStack: "아두이노, 센서 IF 신호처리, MCU 프로그래밍 실습, Server / Client / Serial 통신 터미널 GUI 프로그램",
    badgeColor: "from-purple-500/20 to-pink-500/20 text-purple-400 border-purple-500/30"
  },
  {
    step: "STEP 4",
    stepNum: 4,
    title: "애플리케이션개발언어",
    category: "알고리즘 & 자료구조",
    icon: Layers,
    items: [
      "자료구조 파악",
      "알고리즘 파악 및 실습"
    ],
    techStack: "자료구조 파악, 알고리즘 파악 및 실습, HTML5, CSS3, JavaScript",
    badgeColor: "from-amber-500/20 to-orange-500/20 text-amber-400 border-amber-500/30"
  },
  {
    step: "STEP 5",
    stepNum: 5,
    title: "임베디드시스템과 라즈베리파이 활용",
    category: "SBC & MCU 응용",
    icon: Radio,
    items: [
      "라즈베리파이로 프로그래밍",
      "센서 및 데이터 활용",
      "MCU(STM32, ESP32) 활용"
    ],
    techStack: "라즈베리파이, USB Web 카메라 영상처리 제어 프로그램 개발 실습",
    badgeColor: "from-rose-500/20 to-pink-500/20 text-rose-400 border-rose-500/30"
  },
  {
    step: "STEP 6",
    stepNum: 6,
    title: "리눅스 기초와 활용",
    category: "임베디드 리눅스",
    icon: Server,
    items: [
      "리눅스 환경구축",
      "리눅스 운영체제 소개와 기본 명령어",
      "파일 시스템 관리 및 권한 설정"
    ],
    techStack: "ESP32 펌웨어 제어 프로그램 실습, UART / USART 시리얼 통신 제어 프로그램 개발 실습",
    badgeColor: "from-cyan-500/20 to-blue-500/20 text-cyan-400 border-cyan-500/30"
  },
  {
    step: "STEP 7",
    stepNum: 7,
    title: "컴퓨터 비전 활용",
    category: "AI & 영상인식",
    icon: Camera,
    items: [
      "컴퓨터 비전 기초",
      "OpenCV 활용 프로그래밍",
      "응용 프로젝트",
      "딥러닝을 통한 이미지 분류",
      "확장된 이미지 처리 기술"
    ],
    techStack: "OpenCV활용 프로그래밍 실습, 영상처리 및 인식 프로그램 개발 실습",
    badgeColor: "from-violet-500/20 to-purple-500/20 text-violet-400 border-violet-500/30"
  },
  {
    step: "STEP 8",
    stepNum: 8,
    title: "웹 대시보드 디자인과 활용",
    category: "IoT 관제 & 대시보드",
    icon: LayoutDashboard,
    items: [
      "웹 프론트엔드 기초",
      "데이터 시각화와 대시보드 구현"
    ],
    techStack: "데이터 시각화와 대시보드 구현 실습, Network 소켓 통신 프로그램 실습",
    badgeColor: "from-indigo-500/20 to-cyan-500/20 text-indigo-400 border-indigo-500/30"
  },
  {
    step: "STEP 9",
    stepNum: 9,
    title: "SmartFarm 통합 IOT관리 시스템 개발프로젝트",
    category: "최종 캡스톤 프로젝트",
    icon: Sprout,
    items: [
      "SmartFarm제작",
      "컴퓨터비전 SmartFarm제작",
      "화재감지 모니터링시스템 SmartFarm제작"
    ],
    techStack: "스마트팜 제작, 컴퓨터비전 스마트팜 제작, 화재감지 모니터링 시스템 스마트팜 제작",
    badgeColor: "from-purple-500/30 to-emerald-500/30 text-purple-300 border-purple-400/50",
    isProject: true
  }
];

export const CourseSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'phase1' | 'phase2' | 'phase3'>('all');

  const filteredSteps = curriculumData.filter((item) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'phase1') return item.stepNum >= 1 && item.stepNum <= 3;
    if (activeTab === 'phase2') return item.stepNum >= 4 && item.stepNum <= 6;
    if (activeTab === 'phase3') return item.stepNum >= 7 && item.stepNum <= 9;
    return true;
  });

  return (
    <section id="courses" className="py-24 bg-black relative overflow-hidden border-b border-zinc-900">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-950/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <Reveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 mb-6 shadow-sm">
            <Code2 size={16} />
            <span className="text-xs font-bold tracking-widest uppercase">커리큘럼</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 leading-tight tracking-tight">
            전문가로 성장하는<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-purple-200 to-indigo-300">
              실무완성 커리큘럼
            </span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            기초 프로그래밍부터 하드웨어 MCU 펌웨어 제어, 리눅스, AI 컴퓨터 비전, 최종 스마트팜 IoT 통합 시스템까지 9단계로 완성합니다.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'all'
                  ? 'bg-purple-900 text-white border border-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.3)]'
                  : 'bg-zinc-900/80 text-gray-400 hover:text-white border border-white/5'
              }`}
            >
              전체 로드맵 (STEP 1 ~ 9)
            </button>
            <button
              onClick={() => setActiveTab('phase1')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'phase1'
                  ? 'bg-purple-900 text-white border border-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.3)]'
                  : 'bg-zinc-900/80 text-gray-400 hover:text-white border border-white/5'
              }`}
            >
              기초 프로그래밍 & 펌웨어 (STEP 1~3)
            </button>
            <button
              onClick={() => setActiveTab('phase2')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'phase2'
                  ? 'bg-purple-900 text-white border border-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.3)]'
                  : 'bg-zinc-900/80 text-gray-400 hover:text-white border border-white/5'
              }`}
            >
              MCU 응용 & 리눅스 (STEP 4~6)
            </button>
            <button
              onClick={() => setActiveTab('phase3')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'phase3'
                  ? 'bg-purple-900 text-white border border-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.3)]'
                  : 'bg-zinc-900/80 text-gray-400 hover:text-white border border-white/5'
              }`}
            >
              컴퓨터비전 & 스마트팜 프로젝트 (STEP 7~9)
            </button>
          </div>
        </Reveal>

        {/* 9-Step Curriculum Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredSteps.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Reveal key={item.step} delay={index * 80}>
                <div 
                  className={`h-full flex flex-col justify-between rounded-3xl p-6 sm:p-7 transition-all duration-300 group relative overflow-hidden ${
                    item.isProject 
                      ? 'bg-gradient-to-b from-purple-950/40 via-zinc-900/90 to-zinc-900 border-2 border-purple-500/50 shadow-[0_0_30px_rgba(168,85,247,0.15)] md:col-span-2 lg:col-span-3' 
                      : 'bg-zinc-900/60 border border-white/10 hover:border-purple-500/40 hover:bg-zinc-900/90'
                  }`}
                >
                  {/* Subtle Card Accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl pointer-events-none"></div>

                  <div>
                    {/* Card Top: Step Badge & Category */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 border border-white/10">
                        <span className="text-xs font-black text-purple-400 tracking-wider">
                          {item.step}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-xs font-semibold text-gray-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                        {item.category}
                      </div>
                    </div>

                    {/* Step Title with Icon */}
                    <div className="flex items-start gap-3.5 mb-5">
                      <div className={`p-2.5 rounded-2xl shrink-0 transition-transform group-hover:scale-105 ${
                        item.isProject 
                          ? 'bg-purple-900 text-purple-200 border border-purple-400/40' 
                          : 'bg-zinc-800 text-purple-300 border border-white/5'
                      }`}>
                        <IconComponent size={22} />
                      </div>
                      <div>
                        <h3 className={`font-black tracking-tight leading-snug ${
                          item.isProject ? 'text-xl sm:text-2xl text-white' : 'text-lg sm:text-xl text-white'
                        }`}>
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    {/* Curriculum Bullet Points */}
                    <div className="space-y-2.5 mb-6 pt-2 border-t border-white/5">
                      {item.items.map((sub, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-sm text-gray-300">
                          <CheckCircle2 size={15} className="text-purple-400 shrink-0 mt-0.5" />
                          <span className="leading-snug">{sub}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Practical Tech Stack Box */}
                  <div className="mt-4 pt-4 border-t border-white/10 bg-black/40 rounded-2xl p-3.5 border border-white/5">
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <Sparkles size={13} className="text-purple-400" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-purple-300">
                        실습 및 핵심 스택
                      </span>
                    </div>
                    <p className="text-xs font-medium text-gray-300 leading-relaxed break-keep">
                      {item.techStack}
                    </p>
                  </div>

                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Education Inquiry Button */}
        <Reveal className="w-full mt-20 flex justify-center">
          <a
            href="#consultation"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-purple-800 via-purple-700 to-indigo-800 text-white font-bold text-base sm:text-lg px-8 sm:px-10 py-4 rounded-full shadow-[0_0_30px_rgba(147,51,234,0.35)] hover:shadow-[0_0_45px_rgba(147,51,234,0.6)] hover:scale-105 transition-all duration-300"
          >
            <span>과정 상담 및 국비지원 신청하기</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </Reveal>

      </div>
    </section>
  );
};

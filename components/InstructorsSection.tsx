import React, { useRef, useState, useEffect, ReactNode } from 'react';
import { User, Award, Briefcase, BookOpen } from 'lucide-react';

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
      { threshold: 0.1, rootMargin: '0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

interface InstructorCardProps {
  instructor: {
    name: string;
    title: string;
    subtitle: string;
    image: string;
    experience: string[];
    lectures: string[];
  };
  idx: number;
}

const InstructorCard: React.FC<InstructorCardProps> = ({ instructor, idx }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <Reveal delay={idx * 200} className="bg-zinc-900/50 border border-white/10 rounded-3xl overflow-hidden hover:border-purple-500/30 transition-all group shadow-xl">
      <div className="flex flex-col md:flex-row h-full">
        
        {/* Image Section */}
        <div className="md:w-2/5 min-h-[280px] md:min-h-[380px] relative overflow-hidden bg-gradient-to-b from-zinc-800 to-zinc-900 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent z-10 md:bg-gradient-to-r md:from-transparent md:to-zinc-900/80"></div>
          
          {!imgError ? (
            <img 
              src={instructor.image} 
              alt={`강사 ${instructor.name}`} 
              className="w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
              loading="lazy"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="flex flex-col items-center justify-center p-6 text-center z-0 w-full h-full bg-gradient-to-br from-purple-950/40 via-zinc-900 to-black">
              <div className="w-20 h-20 rounded-full bg-purple-900/40 border border-purple-500/40 flex items-center justify-center text-purple-300 mb-3 shadow-lg">
                <User size={40} />
              </div>
              <span className="text-lg font-bold text-white">{instructor.name} 강사</span>
              <span className="text-xs text-purple-300/80 mt-1">전문 훈련교사</span>
            </div>
          )}

          <div className="absolute bottom-4 left-4 z-20 md:bottom-auto md:top-4">
            <div className="bg-purple-900/90 border border-purple-400/40 text-purple-100 text-xs font-bold px-3 py-1 rounded-full inline-block backdrop-blur-md shadow-lg">
              대표 강사
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-center">
          <h3 className="text-2xl font-black text-white mb-1 flex items-end gap-2">
            {instructor.name} <span className="text-sm font-medium text-gray-400 mb-1">강사</span>
          </h3>
          <h4 className="text-purple-400 font-bold mb-4 text-sm md:text-base">{instructor.title}</h4>
          
          <p className="text-gray-300 text-sm font-medium leading-relaxed whitespace-pre-line mb-6 border-l-2 border-purple-500/50 pl-3">
            {instructor.subtitle}
          </p>

          <div className="space-y-5">
            <div>
              <h5 className="flex items-center gap-2 text-xs md:text-sm font-bold text-white mb-2.5 bg-white/5 inline-flex px-3 py-1 rounded-lg">
                <Briefcase size={14} className="text-purple-400" />
                실무 경력 사항
              </h5>
              <ul className="space-y-1.5">
                {instructor.experience.map((exp, i) => (
                  <li key={i} className="text-xs text-gray-400 flex items-start gap-2 break-keep">
                    <span className="text-purple-400/60 mt-0.5">•</span>
                    <span>{exp}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="flex items-center gap-2 text-xs md:text-sm font-bold text-white mb-2.5 bg-white/5 inline-flex px-3 py-1 rounded-lg">
                <BookOpen size={14} className="text-purple-400" />
                {instructor.name === "금기종" ? "대외활동" : "강의 경력 사항"}
              </h5>
              <ul className="space-y-1.5">
                {instructor.lectures.map((lec, i) => (
                  <li key={i} className="text-xs text-gray-400 flex items-start gap-2 break-keep">
                    <span className="text-purple-400/60 mt-0.5">•</span>
                    <span>{lec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </Reveal>
  );
};

export const InstructorsSection: React.FC = () => {
  const instructors = [
    {
      name: "송명규",
      title: "최상위권 스펙의 IT 전문 강사",
      subtitle: "최고의 실무 경력을 가진 IT 일타 강사!\n전문가 조차 모르는 실무 알려드리겠습니다",
      image: "https://postfiles.pstatic.net/MjAyNjAzMTJfNTgg/MDAxNzczMjk1MDMwMjM2.Vx5ZR8vecyy6aTm0SR5kvonsBNN0lNSO1oI7_fGC2bwg.cQH69XmBeQEX8m3kLiJAuhMzbu_KY39VEP62Pd5t388g.JPEG/SE-8541b277-2ff2-482b-b3d5-efe832b1012b.jpg?type=w966",
      experience: [
        "(주)아이준 - 방사능&지진 모니터링 시스템 개발",
        "(주)세드나 - 무선화재 감지기 개발",
        "(주)명진크리스텍 - 분광분석기 시스템 개발",
        "(주)원다레이저 - 부설연구소 / MCU-Lab - 부설연구소 등",
        "한국전자통신연구원 - 에어러블 생체신호 측정 시스템 개발"
      ],
      lectures: [
        "現 한국직업능력교육원 훈련교사",
        "前 고려대 HRD 센터, 지역산업맞춤인력양성사업, IoT/펌웨어 과정",
        "前 한밭대 HRD 센터, 4차 산업 선도 인력양성사업, IoT 과정 외 다수",
        "前 동아마이스터고, 전자과 프로젝트, 전국 기능경기대회 기술지도",
        "前 평택마이스터고, AVR 마이크로프로세서 펌웨어 프로그램 교육"
      ]
    },
    {
      name: "금기종",
      title: "최고 수준의 코딩/프로그래밍 전문 강사",
      subtitle: "컴퓨터의 모든 것을 아는 프로그래밍 강사!\n비전공자도 경력자로 만들어드리겠습니다",
      image: "https://postfiles.pstatic.net/MjAyNjAzMTJfMTMz/MDAxNzczMjg5MTA2MTU3.mCZpTMNleuOn-F8RH85VO5I1kRBaQRxINc3Leuhhk_Ig.PktDGP1UXDBn0P35hKH6lohzJC92ZEA6nz2_tYqtemwg.JPEG/%EA%B8%88%EA%B8%B0%EC%A2%85_%EA%B0%95%EC%82%AC.jpg?type=w966",
      experience: [
        "국민은행 - 서버 시스템 프로그램 개발",
        "경영 기술 개발원 - 교육 프로그램 개발 및 강의",
        "(주)컴테크 - 솔루션 개발 팀장",
        "(주)노블커뮤니케이션 - 사내 프로그램 개발"
      ],
      lectures: [
        "LG전자 MC사업본부 개발자 Java Android 위촉 강의",
        "C/C++를 활용한 교육 개발 시스템 - 논문 집필"
      ]
    }
  ];

  return (
    <section id="instructors" className="py-24 bg-zinc-950 text-white border-b border-zinc-900">
      <div className="container mx-auto px-4">
        
        <Reveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 mb-6">
            <User size={16} />
            <span className="text-xs font-bold tracking-widest uppercase">Instructors</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            베테랑 <span className="text-purple-400">강사진 소개</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            실무 경험과 강의 노하우를 모두 갖춘 최고의 전문가들이 여러분을 이끕니다.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {instructors.map((instructor, idx) => (
            <InstructorCard key={idx} instructor={instructor} idx={idx} />
          ))}
        </div>

      </div>
    </section>
  );
};

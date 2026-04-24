import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

const features = [
  {
    icon: '🤖',
    title: 'AI Chat Assistant',
    desc: 'Ask any election question and get instant, clear, non-partisan answers',
    path: '/chat',
  },
  {
    icon: '🗓️',
    title: 'Interactive Timeline',
    desc: 'Explore every phase of the election process from announcement to results',
    path: '/timeline',
  },
  {
    icon: '👣',
    title: 'Step-by-Step Guide',
    desc: "First time voter? We'll walk you through every step from registration to casting your vote",
    path: '/steps',
  },
  {
    icon: '🧠',
    title: 'Knowledge Quiz',
    desc: 'Test your election knowledge with our interactive quizzes across multiple difficulty levels',
    path: '/quiz',
  },
  {
    icon: '📖',
    title: 'Election Glossary',
    desc: 'Look up any election term with simple, clear definitions and AI explanations',
    path: '/glossary',
  },
  {
    icon: '🌍',
    title: 'Compare Systems',
    desc: 'Explore how different countries conduct their elections and compare systems',
    path: '/compare',
  },
];

function useCountUp(target: number) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry?.isIntersecting || hasAnimated.current) return;
        hasAnimated.current = true;
        const duration = 1200;
        const start = performance.now();

        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          setValue(Math.round(target * progress));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.3 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [target]);

  return { value, ref };
}

function StatCard({ icon, target, suffix, label }: { icon: string; target: number; suffix: string; label: string }) {
  const { value, ref } = useCountUp(target);
  return (
    <div ref={ref} className="text-center">
      <p className="text-2xl font-bold text-navy">{icon} {value}{suffix}</p>
      <p className="text-sm text-slate-500 mt-1">{label}</p>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="hero-gradient text-white py-20 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Understand Your Vote. Shape Your Future.
            </h1>
            <p className="text-slate-200 text-lg mt-5 max-w-xl">
              ElectEd makes learning about elections simple, interactive and engaging for every citizen
            </p>
            <div className="flex flex-wrap gap-3 mt-7">
              <Link to="/chat">
                <Button variant="accent" size="lg" leftIcon={<MessageCircle className="w-5 h-5" />}>
                  Ask AI Assistant
                </Button>
              </Link>
              <Link to="/steps">
                <Button variant="secondary" size="lg" className="border-white text-white hover:bg-white hover:text-navy">
                  Start Learning
                </Button>
              </Link>
            </div>
          </div>
          <div className="bg-white/10 border border-white/20 rounded-3xl p-8 backdrop-blur-sm">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-orange-200/40 to-blue-200/40 flex items-center justify-center text-center">
              <div>
                <p className="text-7xl mb-2" aria-hidden="true">🧑‍💼🗳️</p>
                <p className="text-slate-100 font-semibold">Indian voter with ballot</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white border-b border-slate-100 py-10 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard icon="🗳️" target={970} suffix=" Million+" label="Eligible Voters in India" />
          <StatCard icon="🏛️" target={543} suffix="" label="Lok Sabha Constituencies" />
          <StatCard icon="📅" target={5} suffix=" years" label="Elections cycle" />
          <StatCard icon="✅" target={100} suffix="%" label="Free & Non-partisan" />
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-navy text-center mb-10">Explore ElectEd Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature) => (
              <Link key={feature.path} to={feature.path} className="group">
                <Card hover className="h-full p-6">
                  <p className="text-3xl mb-3" aria-hidden="true">{feature.icon}</p>
                  <h3 className="text-lg font-bold text-navy mb-2">{feature.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{feature.desc}</p>
                  <p className="text-sm font-semibold text-orange mt-4 inline-flex items-center gap-1">
                    Explore <ArrowRight className="w-3.5 h-3.5" />
                  </p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-white border-y border-slate-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-navy text-center mb-8">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              'Choose a topic you want to learn about',
              'Explore interactive content and AI explanations',
              'Test your knowledge with quizzes',
            ].map((item, index) => (
              <div key={item} className="border border-slate-200 rounded-xl p-5 bg-slate-50">
                <p className="text-sm font-bold text-orange mb-2">Step {index + 1}</p>
                <p className="text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-navy text-center mb-8">What Learners Say</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <blockquote className="bg-white border border-slate-200 rounded-xl p-5 text-slate-700">
              "Finally understood how EVM works!" — First-time voter
            </blockquote>
            <blockquote className="bg-white border border-slate-200 rounded-xl p-5 text-slate-700">
              "The timeline feature is brilliant" — College student
            </blockquote>
            <blockquote className="bg-white border border-slate-200 rounded-xl p-5 text-slate-700">
              "Great resource for teaching civics" — Teacher
            </blockquote>
          </div>
        </div>
      </section>

    </div>
  );
}

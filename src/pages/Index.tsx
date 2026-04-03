import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const CHEREMUKHA_IMG = "https://cdn.poehali.dev/projects/13ac3431-8be6-43ae-9b05-653727179c8c/files/0cbb4b12-00e0-46c7-b3e3-75eb40227a3a.jpg";
const ROOTS_IMG = "https://cdn.poehali.dev/projects/13ac3431-8be6-43ae-9b05-653727179c8c/files/fd8651a3-5461-4a0c-88ad-b9ac95fe7041.jpg";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return { ref, inView };
}

const themes = [
  {
    icon: "🌸",
    title: "Цветение",
    desc: "Как черёмуха расцветает после долгой зимы, так и мы учимся открываться — радости, близости, новому опыту.",
  },
  {
    icon: "🌿",
    title: "Корни",
    desc: "Уходить глубже в себя, находить точку опоры. Исследовать, откуда мы пришли и что нас держит.",
  },
  {
    icon: "🍃",
    title: "Принятие",
    desc: "Переживать то, что есть, не убегая. Учиться быть с болью, тревогой и неопределённостью.",
  },
  {
    icon: "🌧",
    title: "Дождь",
    desc: "Горе, потеря, переходы. Разрешить себе оплакивать и двигаться дальше, не теряя себя.",
  },
  {
    icon: "🌤",
    title: "Контакт",
    desc: "Встреча с другим. Близость, уязвимость, границы — живой опыт прямо в пространстве группы.",
  },
  {
    icon: "🌱",
    title: "Рост",
    desc: "Замечать изменения в себе — тихие, как первая зелень. Поддерживать то, что начинает прорастать.",
  },
];

const forWhom = [
  "Чувствуете одиночество и хочется живого контакта",
  "Хотите лучше понимать себя и своих близких",
  "Переживаете тревогу, усталость или опустошённость",
  "Проходите через перемены и ищете поддержку",
  "Хотите исследовать свои отношения в безопасной среде",
  "Любопытны к гештальт-подходу и групповой работе",
];

const faqs = [
  {
    q: "Что такое гештальт-группа?",
    a: "Это пространство живого опыта. В отличие от лекций или тренингов, здесь не учат — здесь замечают, исследуют, встречаются. Терапевты создают условия, в которых можно безопасно быть собой и получать обратную связь от других участников.",
  },
  {
    q: "Нужен ли опыт личной терапии?",
    a: "Нет. Группа открыта для всех, независимо от опыта. Важно только желание быть честным с собой и уважение к другим участникам.",
  },
  {
    q: "Придётся ли говорить о личном перед всеми?",
    a: "Нет обязаловки. Каждый выбирает, сколько делиться. Но обычно люди обнаруживают, что в поддерживающей среде открываться становится гораздо проще и ценнее.",
  },
  {
    q: "Сколько человек в группе?",
    a: "От 6 до 10 участников — это оптимальный размер для настоящего контакта. Не потеряетесь в толпе, но и не останетесь один на один с терапевтом.",
  },
  {
    q: "Как проходит встреча?",
    a: "Встреча длится около двух часов. Нет заранее заданной программы — мы идём за тем, что живо здесь и сейчас. Может быть разговор, упражнение, тишина или неожиданное открытие.",
  },
  {
    q: "Можно ли прийти один раз и посмотреть?",
    a: "Да, вы можете прийти на пробную встречу. Однако глубина групповой работы раскрывается со временем — первая сессия даст ощущение атмосферы, а настоящие изменения приходят в процессе.",
  },
];

function AnimSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
    >
      {children}
    </div>
  );
}

export default function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen" style={{ background: "hsl(38,30%,97%)", color: "hsl(25,25%,28%)" }}>

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={CHEREMUKHA_IMG}
            alt="Черёмуха"
            className="w-full h-full object-cover"
            style={{ filter: "brightness(0.55) saturate(0.8)" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(30,22,15,0.35) 0%, rgba(30,22,15,0.55) 60%, hsl(38,30%,97%) 100%)",
            }}
          />
        </div>

        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <p
            className="font-golos text-sm tracking-[0.25em] uppercase mb-6 opacity-0-init animate-fade-in"
            style={{ color: "hsl(290,25%,88%)", animationFillMode: "forwards" }}
          >
            Терапевтическая группа
          </p>
          <h1
            className="font-cormorant text-7xl md:text-9xl font-light italic mb-6 opacity-0-init animate-fade-up"
            style={{ color: "hsl(38,40%,96%)", animationFillMode: "forwards", lineHeight: 1.05 }}
          >
            Черёмуха
          </h1>
          <p
            className="font-golos text-lg md:text-xl font-light leading-relaxed mb-10 opacity-0-init animate-fade-up delay-300"
            style={{ color: "hsl(38,30%,85%)", animationFillMode: "forwards" }}
          >
            Пространство, где можно быть собой.<br />
            Встретить других. Найти точку опоры.
          </p>
          <a
            href="#contact"
            className="opacity-0-init animate-fade-up delay-500 inline-block font-golos text-sm tracking-widest uppercase px-8 py-4 transition-all duration-300 hover:scale-105"
            style={{
              background: "hsl(290,18%,72%)",
              color: "hsl(25,25%,18%)",
              borderRadius: "2px",
              animationFillMode: "forwards",
            }}
          >
            Записаться
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" style={{ color: "hsl(38,30%,80%)" }}>
          <Icon name="ChevronDown" size={24} />
        </div>
      </section>

      {/* О ГРУППЕ */}
      <section className="py-24 px-6" style={{ background: "hsl(38,30%,97%)" }}>
        <div className="max-w-3xl mx-auto">
          <AnimSection>
            <p className="font-golos text-xs tracking-[0.2em] uppercase mb-4" style={{ color: "hsl(290,18%,60%)" }}>
              О группе
            </p>
            <h2 className="font-cormorant text-5xl md:text-6xl font-light italic mb-8" style={{ color: "hsl(145,22%,28%)" }}>
              Почему черёмуха?
            </h2>
            <p className="font-golos text-lg font-light leading-[1.9] mb-6" style={{ color: "hsl(25,20%,38%)" }}>
              Черёмуха цветёт коротко и мощно. Её аромат невозможно не заметить.
              Она растёт у воды, на границе — там, где встречаются разные стихии.
              Её корни уходят глубоко, давая устойчивость в любую непогоду.
            </p>
            <p className="font-golos text-lg font-light leading-[1.9]" style={{ color: "hsl(25,20%,38%)" }}>
              Именно эти образы лежат в основе нашей группы: <em>цветение, укоренённость, встреча, граница</em>.
              Здесь мы работаем с тем, что живо прямо сейчас — с чувствами, контактом,
              отношениями — в безопасном и поддерживающем пространстве.
            </p>
          </AnimSection>
        </div>
      </section>

      {/* ТЕМЫ */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={ROOTS_IMG}
            alt="Корни"
            className="w-full h-full object-cover"
            style={{ filter: "brightness(0.3) saturate(0.6)" }}
          />
          <div className="absolute inset-0" style={{ background: "rgba(20,15,10,0.6)" }} />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <AnimSection>
            <p className="font-golos text-xs tracking-[0.2em] uppercase mb-4" style={{ color: "hsl(290,25%,75%)" }}>
              Основные темы
            </p>
            <h2 className="font-cormorant text-5xl md:text-6xl font-light italic mb-16" style={{ color: "hsl(38,40%,93%)" }}>
              Что мы исследуем
            </h2>
          </AnimSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {themes.map((t, i) => (
              <AnimSection key={i}>
                <div
                  className="p-7 rounded-sm transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    backdropFilter: "blur(4px)",
                  }}
                >
                  <div className="text-3xl mb-4">{t.icon}</div>
                  <h3 className="font-cormorant text-2xl font-light italic mb-3" style={{ color: "hsl(38,40%,93%)" }}>
                    {t.title}
                  </h3>
                  <p className="font-golos text-base font-light leading-relaxed" style={{ color: "hsl(38,20%,72%)" }}>
                    {t.desc}
                  </p>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* КОМУ ПОДОЙДЁТ */}
      <section className="py-24 px-6" style={{ background: "hsl(290,20%,96%)" }}>
        <div className="max-w-3xl mx-auto">
          <AnimSection>
            <p className="font-golos text-xs tracking-[0.2em] uppercase mb-4" style={{ color: "hsl(290,18%,55%)" }}>
              Кому подходит
            </p>
            <h2 className="font-cormorant text-5xl md:text-6xl font-light italic mb-12" style={{ color: "hsl(145,22%,28%)" }}>
              Группа для вас, если...
            </h2>
          </AnimSection>
          <div className="space-y-5">
            {forWhom.map((item, i) => (
              <AnimSection key={i}>
                <div className="flex items-start gap-4">
                  <div
                    className="w-1.5 h-1.5 rounded-full mt-3 flex-shrink-0"
                    style={{ background: "hsl(290,18%,65%)" }}
                  />
                  <p className="font-golos text-lg font-light leading-relaxed" style={{ color: "hsl(25,20%,38%)" }}>
                    {item}
                  </p>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* ТЕРАПЕВТЫ */}
      <section className="py-24 px-6" style={{ background: "hsl(38,30%,97%)" }}>
        <div className="max-w-4xl mx-auto">
          <AnimSection>
            <p className="font-golos text-xs tracking-[0.2em] uppercase mb-4" style={{ color: "hsl(290,18%,60%)" }}>
              Ведущие
            </p>
            <h2 className="font-cormorant text-5xl md:text-6xl font-light italic mb-16" style={{ color: "hsl(145,22%,28%)" }}>
              Гештальт-терапевты
            </h2>
          </AnimSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Юлия Воропаева */}
            <AnimSection>
              <div>
                <div
                  className="mb-7 overflow-hidden"
                  style={{ borderRadius: "4px", width: "220px", height: "270px" }}
                >
                  <img
                    src="https://cdn.poehali.dev/projects/13ac3431-8be6-43ae-9b05-653727179c8c/bucket/0e359573-3500-4ec5-a3f1-d24eb47ee092.jpg"
                    alt="Юлия Воропаева"
                    className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <h3 className="font-cormorant text-3xl font-light italic mb-1" style={{ color: "hsl(25,25%,28%)" }}>
                  Юлия Воропаева
                </h3>
                <p className="font-golos text-sm mb-5" style={{ color: "hsl(290,18%,55%)" }}>
                  Новосибирск · Опыт более 5 лет
                </p>
                <div className="space-y-2.5">
                  {[
                    "Клинический психолог",
                    "Аккредитованный гештальт-терапевт, супервизор",
                    "Психолог по психосоматике и репродуктивным запросам",
                    "Семейный системный терапевт",
                  ].map((spec, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <div
                        className="w-1 h-1 rounded-full mt-[9px] flex-shrink-0"
                        style={{ background: "hsl(290,18%,65%)" }}
                      />
                      <p className="font-golos text-sm font-light leading-relaxed" style={{ color: "hsl(25,20%,42%)" }}>
                        {spec}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimSection>

            {/* Геннадий Авилов */}
            <AnimSection>
              <div>
                <div
                  className="mb-7 overflow-hidden"
                  style={{ borderRadius: "4px", width: "220px", height: "270px" }}
                >
                  <img
                    src="https://cdn.poehali.dev/projects/13ac3431-8be6-43ae-9b05-653727179c8c/bucket/020e9384-79cf-4c57-a66d-1fbfff1488ca.JPG"
                    alt="Геннадий Авилов"
                    className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <h3 className="font-cormorant text-3xl font-light italic mb-1" style={{ color: "hsl(25,25%,28%)" }}>
                  Геннадий Авилов
                </h3>
                <p className="font-golos text-sm mb-5" style={{ color: "hsl(290,18%,55%)" }}>
                  Кемерово · Опыт более 18 лет
                </p>
                <div className="space-y-2.5">
                  {[
                    "Гештальт-терапевт, супервизор",
                    "Кандидат психологических наук, доцент КемГУ",
                    "Ассоциированный тренер Московского Гештальт Института",
                    "Специалист по экзистенциальным вопросам, кризисной психологии и работе с утратами",
                  ].map((spec, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <div
                        className="w-1 h-1 rounded-full mt-[9px] flex-shrink-0"
                        style={{ background: "hsl(290,18%,65%)" }}
                      />
                      <p className="font-golos text-sm font-light leading-relaxed" style={{ color: "hsl(25,20%,42%)" }}>
                        {spec}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimSection>
          </div>
        </div>
      </section>

      {/* ФОРМАТ */}
      <section className="py-24 px-6" style={{ background: "hsl(145,15%,92%)" }}>
        <div className="max-w-4xl mx-auto">
          <AnimSection>
            <p className="font-golos text-xs tracking-[0.2em] uppercase mb-4" style={{ color: "hsl(145,22%,40%)" }}>
              Практическая информация
            </p>
            <h2 className="font-cormorant text-5xl md:text-6xl font-light italic mb-16" style={{ color: "hsl(145,22%,22%)" }}>
              Формат и условия
            </h2>
          </AnimSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { icon: "Calendar", label: "Дата", value: "6–7 июня 2026" },
              { icon: "Clock", label: "Время", value: "11:00 — 19:00" },
              { icon: "Timer", label: "Длительность", value: "16 часов" },
              { icon: "MapPin", label: "Место", value: "Центральный район, Новосибирск" },
              { icon: "Users", label: "Участников", value: "до 16 человек" },
              { icon: "Banknote", label: "Стоимость", value: "10 000 ₽" },
            ].map((item, i) => (
              <AnimSection key={i}>
                <div
                  className="p-6 rounded-sm"
                  style={{
                    background: "hsl(38,30%,98%)",
                    border: "1px solid hsl(145,15%,84%)",
                  }}
                >
                  <Icon name={item.icon} size={20} className="mb-4" style={{ color: "hsl(145,22%,40%)" }} />
                  <p className="font-golos text-xs tracking-widest uppercase mb-2" style={{ color: "hsl(145,15%,55%)" }}>
                    {item.label}
                  </p>
                  <p className="font-cormorant text-2xl font-light" style={{ color: "hsl(25,25%,28%)" }}>
                    {item.value}
                  </p>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6" style={{ background: "hsl(38,30%,97%)" }}>
        <div className="max-w-3xl mx-auto">
          <AnimSection>
            <p className="font-golos text-xs tracking-[0.2em] uppercase mb-4" style={{ color: "hsl(290,18%,60%)" }}>
              Вопросы и ответы
            </p>
            <h2 className="font-cormorant text-5xl md:text-6xl font-light italic mb-12" style={{ color: "hsl(145,22%,28%)" }}>
              Часто спрашивают
            </h2>
          </AnimSection>
          <div>
            {faqs.map((faq, i) => (
              <AnimSection key={i}>
                <div className="faq-item">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full text-left py-6 flex items-start justify-between gap-4"
                  >
                    <span
                      className="font-golos text-lg font-light leading-snug transition-colors duration-200"
                      style={{ color: openFaq === i ? "hsl(145,22%,32%)" : "hsl(25,25%,28%)" }}
                    >
                      {faq.q}
                    </span>
                    <span
                      className="flex-shrink-0 mt-1 transition-transform duration-300"
                      style={{
                        color: "hsl(290,18%,65%)",
                        display: "inline-block",
                        transform: openFaq === i ? "rotate(45deg)" : "rotate(0deg)",
                      }}
                    >
                      <Icon name="Plus" size={18} />
                    </span>
                  </button>
                  <div
                    className="overflow-hidden transition-all duration-500 ease-in-out"
                    style={{
                      maxHeight: openFaq === i ? "300px" : "0",
                      opacity: openFaq === i ? 1 : 0,
                    }}
                  >
                    <p
                      className="font-golos text-base font-light leading-[1.9] pb-6"
                      style={{ color: "hsl(25,15%,45%)" }}
                    >
                      {faq.a}
                    </p>
                  </div>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* КОНТАКТ */}
      <section
        id="contact"
        className="py-28 px-6 text-center"
        style={{
          background: "linear-gradient(135deg, hsl(145,22%,24%) 0%, hsl(25,25%,22%) 100%)",
        }}
      >
        <AnimSection>
          <p className="font-golos text-xs tracking-[0.2em] uppercase mb-6" style={{ color: "hsl(290,25%,72%)" }}>
            Записаться
          </p>
          <h2
            className="font-cormorant text-5xl md:text-7xl font-light italic mb-6"
            style={{ color: "hsl(38,40%,94%)" }}
          >
            Сделайте первый шаг
          </h2>
          <p
            className="font-golos text-lg font-light leading-relaxed mb-12 max-w-xl mx-auto"
            style={{ color: "hsl(38,20%,72%)" }}
          >
            Напишите нам — расскажем подробнее о группе, ответим на вопросы
            и поможем понять, подходит ли вам этот формат.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://t.me/"
              className="inline-flex items-center gap-3 font-golos text-sm tracking-widest uppercase px-8 py-4 transition-all duration-300 hover:scale-105"
              style={{
                background: "hsl(290,18%,72%)",
                color: "hsl(25,25%,18%)",
                borderRadius: "2px",
              }}
            >
              <Icon name="Send" size={16} />
              Написать в Telegram
            </a>
            <a
              href="https://wa.me/"
              className="inline-flex items-center gap-3 font-golos text-sm tracking-widest uppercase px-8 py-4 transition-all duration-300 hover:opacity-80"
              style={{
                background: "transparent",
                color: "hsl(38,30%,85%)",
                border: "1px solid hsl(38,20%,55%)",
                borderRadius: "2px",
              }}
            >
              <Icon name="MessageCircle" size={16} />
              WhatsApp
            </a>
          </div>
          <p className="font-golos text-sm mt-10" style={{ color: "hsl(38,15%,58%)" }}>
            Или напишите на почту:{" "}
            <a href="mailto:hello@example.com" className="underline underline-offset-4 hover:opacity-80 transition-opacity">
              hello@example.com
            </a>
          </p>
        </AnimSection>
      </section>

      {/* ФУТЕР */}
      <footer
        className="py-8 px-6 text-center"
        style={{ background: "hsl(25,25%,18%)", borderTop: "1px solid hsl(25,15%,25%)" }}
      >
        <p className="font-golos text-xs font-light" style={{ color: "hsl(38,15%,50%)" }}>
          © 2025 Терапевтическая группа «Черёмуха»
        </p>
      </footer>
    </div>
  );
}
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const HERO_IMG =
  'https://cdn.poehali.dev/projects/8e856a4a-a6e3-43b5-86df-f255d2315d3d/files/af2077c9-d814-4778-83b1-d9829c1c6eae.jpg';
const ASSORT_IMG =
  'https://cdn.poehali.dev/projects/8e856a4a-a6e3-43b5-86df-f255d2315d3d/files/08b9fefb-5c43-4980-bc7b-2e712660c9a1.jpg';

const sections = [
  {
    href: '/catalog',
    label: 'Каталог',
    desc: '40+ видов свежего мяса напрямую с ферм',
    icon: 'ShoppingBasket',
    img: HERO_IMG,
  },
  {
    href: '/delivery',
    label: 'Доставка',
    desc: 'За 2 часа в термобоксе 0…+4 °C',
    icon: 'Truck',
    img: ASSORT_IMG,
  },
  {
    href: '/reviews',
    label: 'Отзывы',
    desc: '500+ довольных покупателей, рейтинг 4.9',
    icon: 'Star',
    img: ASSORT_IMG,
  },
  {
    href: '/about',
    label: 'О нас',
    desc: 'С 2014 года — напрямую с 12 проверенных ферм',
    icon: 'Leaf',
    img: HERO_IMG,
  },
  {
    href: '/contacts',
    label: 'Контакты',
    desc: 'г. Москва, ежедневно с 9:00 до 21:00',
    icon: 'MapPin',
    img: ASSORT_IMG,
  },
];

export default function Index() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const play = () => video.play().catch(() => {});
    video.addEventListener('ended', play);
    video.addEventListener('pause', play);
    play();
    return () => {
      video.removeEventListener('ended', play);
      video.removeEventListener('pause', play);
    };
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster={HERO_IMG}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://videos.pexels.com/video-files/10039910/10039910-uhd_3840_2160_24fps.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/85 to-charcoal/40" />
        <div className="container relative z-10 py-20">
          <div className="max-w-2xl animate-fade-in">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/20 border border-accent/40 text-accent text-sm font-600 mb-6">
              <Icon name="Leaf" size={16} />
              Фермерское мясо с 2014 года
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-700 text-cream leading-[1.05] mb-6">
              МЯСО, КОТОРОМУ
              <br />
              <span className="text-accent">ВЕРЯТ</span> ГУРМАНЫ
            </h1>
            <p className="text-lg text-cream/80 mb-8 max-w-xl">
              Знаем происхождение каждого отруба. Привозим охлаждённое мясо
              напрямую с проверенных ферм — без заморозки и компромиссов.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white font-700 text-base"
                asChild
              >
                <Link to="/catalog">
                  Перейти в каталог
                  <Icon name="ArrowRight" size={18} className="ml-1" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-cream/40 text-cream hover:bg-cream/10 font-600 text-base bg-transparent"
                asChild
              >
                <Link to="/about">О нашей лавке</Link>
              </Button>
            </div>
            <div className="flex flex-wrap gap-8 mt-12">
              {[
                { v: '40+', l: 'видов мяса' },
                { v: '12', l: 'проверенных ферм' },
                { v: '10 лет', l: 'на рынке' },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-3xl font-700 text-accent">{s.v}</div>
                  <div className="text-sm text-cream/60">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-14 bg-secondary">
        <div className="container grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: 'Snowflake', t: 'Охлаждённое', d: 'Никакой заморозки — только свежее мясо' },
            { icon: 'MapPin', t: 'Знаем ферму', d: 'Прозрачное происхождение каждого отруба' },
            { icon: 'Truck', t: 'Доставка за 2 ч', d: 'В термобоксах по городу' },
            { icon: 'BadgeCheck', t: 'Гарантия', d: 'Вернём деньги, если не понравится' },
          ].map((a) => (
            <div key={a.t} className="flex flex-col items-start gap-3 p-6 rounded-2xl bg-card hover-lift">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Icon name={a.icon} size={24} className="text-primary" />
              </div>
              <h3 className="font-display text-xl font-600">{a.t}</h3>
              <p className="text-sm text-muted-foreground">{a.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Navigation sections */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-10">
            <span className="text-accent font-600 uppercase tracking-widest text-sm">Навигация</span>
            <h2 className="font-display text-4xl md:text-5xl font-700 mt-2">Что вас интересует?</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((s, i) => (
              <Link
                key={s.href}
                to={s.href}
                className="group relative rounded-2xl overflow-hidden h-52 block hover-lift animate-scale-in"
                style={{ animationDelay: `${i * 60}ms`, opacity: 0 }}
              >
                <img
                  src={s.img}
                  alt={s.label}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent group-hover:via-charcoal/60 transition-all duration-300" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-8 h-8 rounded-lg bg-accent/90 flex items-center justify-center">
                      <Icon name={s.icon} size={16} className="text-white" />
                    </div>
                    <h3 className="font-display text-2xl font-700 text-cream">{s.label}</h3>
                  </div>
                  <p className="text-cream/75 text-sm">{s.desc}</p>
                  <span className="flex items-center gap-1 text-accent text-sm font-600 mt-3 group-hover:gap-2 transition-all">
                    Перейти <Icon name="ArrowRight" size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
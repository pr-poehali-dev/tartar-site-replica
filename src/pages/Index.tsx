import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { products } from '@/data/products';

const HERO_IMG =
  'https://cdn.poehali.dev/projects/8e856a4a-a6e3-43b5-86df-f255d2315d3d/files/af2077c9-d814-4778-83b1-d9829c1c6eae.jpg';
const ASSORT_IMG =
  'https://cdn.poehali.dev/projects/8e856a4a-a6e3-43b5-86df-f255d2315d3d/files/08b9fefb-5c43-4980-bc7b-2e712660c9a1.jpg';

const reviews = [
  {
    name: 'Анна Котова',
    text: 'Беру мясо только здесь уже полгода. Рибай — это что-то невероятное, гости в восторге от стейков!',
    rating: 5,
  },
  {
    name: 'Дмитрий Орлов',
    text: 'Привезли точно в срок, всё свежее и охлаждённое. Видно, что за качеством реально следят.',
    rating: 5,
  },
  {
    name: 'Мария Лебедева',
    text: 'Фарш — небо и земля по сравнению с магазинным. Котлеты получаются сочные. Заказываю каждую неделю.',
    rating: 5,
  },
];

const featured = products.slice(0, 6);

export default function Index() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <Layout>
      {/* Hero */}
      <section
        id="home"
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={HERO_IMG}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://videos.pexels.com/video-files/4110208/4110208-uhd_2560_1440_25fps.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/85 to-charcoal/50" />
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
                <a href="#about">О нашей лавке</a>
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
      <section className="py-16 bg-secondary">
        <div className="container grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* Catalog preview */}
      <section id="catalog" className="py-20">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-accent font-600 uppercase tracking-widest text-sm mb-2 block">Каталог</span>
              <h2 className="font-display text-4xl md:text-5xl font-700">Свежее каждый день</h2>
            </div>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white font-600 shrink-0" asChild>
              <Link to="/catalog">
                Весь каталог <Icon name="ArrowRight" size={16} className="ml-1" />
              </Link>
            </Button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {featured.map((p, i) => (
              <Link
                key={p.id}
                to={`/catalog/${p.id}`}
                className="group rounded-2xl overflow-hidden bg-card shadow-md hover-lift animate-scale-in block"
                style={{ animationDelay: `${i * 70}ms`, opacity: 0 }}
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {p.tag && (
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-accent text-white text-xs font-700">
                      {p.tag}
                    </span>
                  )}
                  <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-charcoal/70 text-cream text-xs font-500">
                    {p.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl font-600 mb-1 group-hover:text-primary transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{p.description}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-display text-2xl font-700 text-primary">{p.price}</span>
                      <span className="text-sm text-muted-foreground"> / {p.weight}</span>
                    </div>
                    <span className="flex items-center gap-1 text-sm text-accent font-600 group-hover:gap-2 transition-all">
                      Подробнее <Icon name="ArrowRight" size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery */}
      <section id="delivery" className="py-20 bg-charcoal text-cream">
        <div className="container grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-accent font-600 uppercase tracking-widest text-sm">Доставка</span>
            <h2 className="font-display text-4xl md:text-5xl font-700 mt-2 mb-6">
              Привезём свежим и холодным
            </h2>
            <div className="space-y-5">
              {[
                { icon: 'Clock', t: 'Быстро', d: 'Доставка по городу за 2 часа, в пригород — в день заказа.' },
                { icon: 'Package', t: 'В термобоксах', d: 'Мясо едет в специальной таре с хладоэлементами 0…+4 °C.' },
                { icon: 'Wallet', t: 'Удобная оплата', d: 'Картой онлайн, наличными или переводом курьеру.' },
                { icon: 'Gift', t: 'Бесплатно от 3 000 ₽', d: 'При заказе на меньшую сумму доставка — 300 ₽.' },
              ].map((d) => (
                <div key={d.t} className="flex gap-4">
                  <div className="w-11 h-11 shrink-0 rounded-xl bg-accent/20 flex items-center justify-center">
                    <Icon name={d.icon} size={22} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-600">{d.t}</h3>
                    <p className="text-cream/70 text-sm">{d.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden h-[420px]">
            <img src={ASSORT_IMG} alt="Доставка мяса" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-accent font-600 uppercase tracking-widest text-sm">Отзывы</span>
            <h2 className="font-display text-4xl md:text-5xl font-700 mt-2">Что говорят покупатели</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-7">
            {reviews.map((r) => (
              <div key={r.name} className="p-7 rounded-2xl bg-card shadow-md border border-border">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Icon key={i} name="Star" size={18} className="text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-foreground/90 mb-5 leading-relaxed">«{r.text}»</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center font-display font-700 text-primary">
                    {r.name[0]}
                  </div>
                  <span className="font-600">{r.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-secondary">
        <div className="container grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-3xl overflow-hidden h-[420px] order-2 lg:order-1">
            <img src={HERO_IMG} alt="О нас" className="w-full h-full object-cover" />
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-accent font-600 uppercase tracking-widest text-sm">О нас</span>
            <h2 className="font-display text-4xl md:text-5xl font-700 mt-2 mb-6">
              Мясная лавка с характером
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              «Тартар» начался в 2014 году с простой идеи — продавать мясо, в качестве которого мы
              уверены на 100%. Мы лично знаем каждого фермера, ездим на хозяйства и выбираем
              животных, выращенных без антибиотиков и гормонов.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Никакой заморозки и неизвестного происхождения. Только охлаждённое мясо, разделанное
              нашими мастерами в день доставки.
            </p>
            <Accordion type="single" collapsible className="w-full">
              {[
                { q: 'Откуда вы берёте мясо?', a: 'Работаем напрямую с 12 фермерскими хозяйствами Центральной России и Кавказа. Каждое прошло нашу проверку.' },
                { q: 'Есть ли документы качества?', a: 'Да, на всю продукцию имеются ветеринарные свидетельства и декларации соответствия.' },
                { q: 'Можно ли заказать редкий отруб?', a: 'Конечно. Напишите нам — найдём и привезём нужный вам отруб под заказ.' },
              ].map((f) => (
                <AccordionItem key={f.q} value={f.q}>
                  <AccordionTrigger className="font-display text-lg font-600 text-left">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-20 bg-charcoal text-cream">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-accent font-600 uppercase tracking-widest text-sm">Контакты</span>
            <h2 className="font-display text-4xl md:text-5xl font-700 mt-2">Заходите в гости</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-7">
            {[
              { icon: 'MapPin', t: 'Адрес', d: 'г. Москва, ул. Мясницкая, 24' },
              { icon: 'Phone', t: 'Телефон', d: '+7 (495) 123-45-67' },
              { icon: 'Clock', t: 'Часы работы', d: 'Ежедневно с 9:00 до 21:00' },
            ].map((c) => (
              <div key={c.t} className="p-7 rounded-2xl bg-white/5 border border-white/10 text-center">
                <div className="w-12 h-12 mx-auto rounded-xl bg-accent/20 flex items-center justify-center mb-4">
                  <Icon name={c.icon} size={24} className="text-accent" />
                </div>
                <h3 className="font-display text-lg font-600 mb-1">{c.t}</h3>
                <p className="text-cream/70">{c.d}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Button className="bg-accent hover:bg-accent/90 text-white font-700">
              <Icon name="Send" size={18} className="mr-1" />
              Написать в Telegram
            </Button>
            <Button variant="outline" className="border-cream/30 text-cream hover:bg-cream/10 font-600 bg-transparent">
              <Icon name="Phone" size={18} className="mr-1" />
              Позвонить
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

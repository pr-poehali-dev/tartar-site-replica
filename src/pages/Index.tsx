import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const HERO_IMG =
  'https://cdn.poehali.dev/projects/8e856a4a-a6e3-43b5-86df-f255d2315d3d/files/af2077c9-d814-4778-83b1-d9829c1c6eae.jpg';
const ASSORT_IMG =
  'https://cdn.poehali.dev/projects/8e856a4a-a6e3-43b5-86df-f255d2315d3d/files/08b9fefb-5c43-4980-bc7b-2e712660c9a1.jpg';

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  weight: string;
  img: string;
  origin: string;
  storage: string;
  description: string;
  tag?: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Рибай мраморный',
    category: 'Стейки',
    price: '2 490 ₽',
    weight: '1 кг',
    img: HERO_IMG,
    origin: 'Фермерское хозяйство «Заречье», Воронежская область. Бычки породы абердин-ангус зернового откорма.',
    storage: 'При температуре 0…+4 °C — до 5 суток. В морозильной камере −18 °C — до 6 месяцев.',
    description: 'Сочный стейк из толстого края с насыщенной мраморностью. Идеален для жарки на гриле medium rare.',
    tag: 'Хит',
  },
  {
    id: 2,
    name: 'Вырезка говяжья',
    category: 'Стейки',
    price: '1 890 ₽',
    weight: '1 кг',
    img: ASSORT_IMG,
    origin: 'Ферма «Лугово», Калужская область. Свободный выпас, без антибиотиков и гормонов роста.',
    storage: 'Хранить при 0…+4 °C до 4 суток. Не замораживать повторно после разморозки.',
    description: 'Самая нежная часть туши. Минимум соединительной ткани, готовится быстро и тает во рту.',
  },
  {
    id: 3,
    name: 'Фарш домашний',
    category: 'Фарш',
    price: '690 ₽',
    weight: '1 кг',
    img: ASSORT_IMG,
    origin: 'Купаж говядины и свинины из фермерских хозяйств Тульской области. Перекрут в день заказа.',
    storage: 'Свежий фарш — до 24 часов при 0…+4 °C. Рекомендуем заморозить, если не используете сразу.',
    description: 'Классический купаж 70/30 для котлет, тефтелей и пельменей. Без добавок и панировки.',
  },
  {
    id: 4,
    name: 'Колбаски для гриля',
    category: 'Колбасы',
    price: '890 ₽',
    weight: '1 кг',
    img: ASSORT_IMG,
    origin: 'Собственная коптильня «Тартар». Натуральная свиная черева, специи без усилителей вкуса.',
    storage: 'Хранить при 0…+6 °C до 7 суток. В вакуумной упаковке — до 21 дня.',
    description: 'Сочные колбаски в натуральной оболочке. Готовятся за 12 минут на углях или сковороде.',
    tag: 'Новинка',
  },
  {
    id: 5,
    name: 'Каре ягнёнка',
    category: 'Баранина',
    price: '2 190 ₽',
    weight: '1 кг',
    img: HERO_IMG,
    origin: 'Дагестанские горные пастбища. Молодой ягнёнок травяного откорма возрастом до 8 месяцев.',
    storage: 'Охлаждённое — до 5 суток при 0…+4 °C. Заморозка −18 °C сохраняет вкус до 4 месяцев.',
    description: 'Премиальный отруб на косточке. Нежное мясо без специфического запаха, для запекания в духовке.',
  },
  {
    id: 6,
    name: 'Грудинка свиная',
    category: 'Свинина',
    price: '590 ₽',
    weight: '1 кг',
    img: ASSORT_IMG,
    origin: 'Ферма «Дубрава», Белгородская область. Свиньи на натуральных кормах без сои.',
    storage: 'При 0…+4 °C до 5 суток. Отлично подходит для засолки и копчения.',
    description: 'Мясо с ровными прослойками сала. Идеальна для бекона, шашлыка и домашнего сала.',
  },
];

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

const navLinks = [
  { label: 'Главная', href: '#home' },
  { label: 'Каталог', href: '#catalog' },
  { label: 'Доставка', href: '#delivery' },
  { label: 'Отзывы', href: '#reviews' },
  { label: 'О нас', href: '#about' },
  { label: 'Контакты', href: '#contacts' },
];

export default function Index() {
  const [selected, setSelected] = useState<Product | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-charcoal/95 backdrop-blur border-b border-white/10">
        <div className="container flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2">
            <Icon name="Beef" size={28} className="text-accent" />
            <span className="font-display text-2xl font-700 tracking-wide text-cream">
              ТАРТАР
            </span>
          </a>
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-500 text-cream/80 hover:text-accent transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Button className="hidden sm:flex bg-accent hover:bg-accent/90 text-charcoal font-600">
              <Icon name="Phone" size={16} className="mr-1" />
              Заказать
            </Button>
            <button
              className="lg:hidden text-cream"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Icon name={menuOpen ? 'X' : 'Menu'} size={28} />
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav className="lg:hidden bg-charcoal border-t border-white/10 px-6 py-4 flex flex-col gap-4 animate-fade-in">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-cream/90 hover:text-accent font-500"
              >
                {l.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative min-h-screen flex items-center pt-16 overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
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
                className="bg-accent hover:bg-accent/90 text-charcoal font-700 text-base"
                asChild
              >
                <a href="#catalog">
                  Перейти в каталог
                  <Icon name="ArrowRight" size={18} className="ml-1" />
                </a>
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
                  <div className="font-display text-3xl font-700 text-accent">
                    {s.v}
                  </div>
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
            <div
              key={a.t}
              className="flex flex-col items-start gap-3 p-6 rounded-2xl bg-card hover-lift"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Icon name={a.icon} size={24} className="text-primary" />
              </div>
              <h3 className="font-display text-xl font-600">{a.t}</h3>
              <p className="text-sm text-muted-foreground">{a.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Catalog */}
      <section id="catalog" className="py-20">
        <div className="container">
          <div className="flex flex-col items-center text-center mb-12">
            <span className="text-accent font-600 uppercase tracking-widest text-sm mb-2">
              Каталог
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-700">
              Свежее каждый день
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl">
              Нажмите на товар, чтобы узнать происхождение, условия хранения и
              способ приготовления.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {products.map((p, i) => (
              <div
                key={p.id}
                onClick={() => setSelected(p)}
                className="group cursor-pointer rounded-2xl overflow-hidden bg-card shadow-md hover-lift animate-scale-in"
                style={{ animationDelay: `${i * 70}ms`, opacity: 0 }}
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {p.tag && (
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-accent text-charcoal text-xs font-700">
                      {p.tag}
                    </span>
                  )}
                  <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-charcoal/70 text-cream text-xs font-500">
                    {p.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl font-600 mb-1">{p.name}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                    {p.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-display text-2xl font-700 text-primary">
                        {p.price}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {' '}
                        / {p.weight}
                      </span>
                    </div>
                    <Button
                      size="sm"
                      className="bg-primary hover:bg-meat-dark text-primary-foreground font-600"
                    >
                      <Icon name="Plus" size={16} className="mr-1" />В корзину
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery */}
      <section id="delivery" className="py-20 bg-charcoal text-cream">
        <div className="container grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-accent font-600 uppercase tracking-widest text-sm">
              Доставка
            </span>
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
            <img
              src={ASSORT_IMG}
              alt="Доставка мяса"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-accent font-600 uppercase tracking-widest text-sm">
              Отзывы
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-700 mt-2">
              Что говорят покупатели
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-7">
            {reviews.map((r) => (
              <div
                key={r.name}
                className="p-7 rounded-2xl bg-card shadow-md border border-border"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      size={18}
                      className="text-accent fill-accent"
                    />
                  ))}
                </div>
                <p className="text-foreground/90 mb-5 leading-relaxed">
                  «{r.text}»
                </p>
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
            <img
              src={HERO_IMG}
              alt="О нас"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-accent font-600 uppercase tracking-widest text-sm">
              О нас
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-700 mt-2 mb-6">
              Мясная лавка с характером
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              «Тартар» начался в 2014 году с простой идеи — продавать мясо, в
              качестве которого мы уверены на 100%. Мы лично знаем каждого
              фермера, ездим на хозяйства и выбираем животных, выращенных без
              антибиотиков и гормонов.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Никакой заморозки и неизвестного происхождения. Только охлаждённое
              мясо, разделанное нашими мастерами в день доставки.
            </p>
            <Accordion type="single" collapsible className="w-full">
              {[
                { q: 'Откуда вы берёте мясо?', a: 'Работаем напрямую с 12 фермерскими хозяйствами Центральной России и Кавказа. Каждое прошло нашу проверку.' },
                { q: 'Есть ли документы качества?', a: 'Да, на всю продукцию имеются ветеринарные свидетельства и декларации соответствия.' },
                { q: 'Можно ли заказать редкий отруб?', a: 'Конечно. Напишите нам — найдём и привезём нужный вам отруб под заказ.' },
              ].map((f) => (
                <AccordionItem key={f.q} value={f.q}>
                  <AccordionTrigger className="font-display text-lg font-600 text-left">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {f.a}
                  </AccordionContent>
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
            <span className="text-accent font-600 uppercase tracking-widest text-sm">
              Контакты
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-700 mt-2">
              Заходите в гости
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-7">
            {[
              { icon: 'MapPin', t: 'Адрес', d: 'г. Москва, ул. Мясницкая, 24' },
              { icon: 'Phone', t: 'Телефон', d: '+7 (495) 123-45-67' },
              { icon: 'Clock', t: 'Часы работы', d: 'Ежедневно с 9:00 до 21:00' },
            ].map((c) => (
              <div
                key={c.t}
                className="p-7 rounded-2xl bg-white/5 border border-white/10 text-center"
              >
                <div className="w-12 h-12 mx-auto rounded-xl bg-accent/20 flex items-center justify-center mb-4">
                  <Icon name={c.icon} size={24} className="text-accent" />
                </div>
                <h3 className="font-display text-lg font-600 mb-1">{c.t}</h3>
                <p className="text-cream/70">{c.d}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Button className="bg-accent hover:bg-accent/90 text-charcoal font-700">
              <Icon name="Send" size={18} className="mr-1" />
              Написать в Telegram
            </Button>
            <Button
              variant="outline"
              className="border-cream/30 text-cream hover:bg-cream/10 font-600 bg-transparent"
            >
              <Icon name="Phone" size={18} className="mr-1" />
              Позвонить
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal border-t border-white/10 py-8 text-cream/60">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Icon name="Beef" size={22} className="text-accent" />
            <span className="font-display text-xl font-700 text-cream">
              ТАРТАР
            </span>
          </div>
          <p className="text-sm">
            © 2026 Мясная лавка «Тартар». Свежее мясо с проверенных ферм.
          </p>
        </div>
      </footer>

      {/* Product Modal */}
      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="max-w-lg p-0 overflow-hidden">
          {selected && (
            <>
              <div className="relative h-56">
                <img
                  src={selected.img}
                  alt={selected.name}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-accent text-charcoal text-xs font-700">
                  {selected.category}
                </span>
              </div>
              <div className="p-6">
                <DialogHeader>
                  <DialogTitle className="font-display text-2xl font-700">
                    {selected.name}
                  </DialogTitle>
                </DialogHeader>
                <p className="text-muted-foreground mt-2 mb-4">
                  {selected.description}
                </p>
                <div className="space-y-3 mb-5">
                  <div className="flex gap-3 p-3 rounded-xl bg-secondary">
                    <Icon
                      name="MapPin"
                      size={20}
                      className="text-primary shrink-0 mt-0.5"
                    />
                    <div>
                      <div className="font-600 text-sm">Происхождение</div>
                      <p className="text-sm text-muted-foreground">
                        {selected.origin}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 p-3 rounded-xl bg-secondary">
                    <Icon
                      name="Snowflake"
                      size={20}
                      className="text-primary shrink-0 mt-0.5"
                    />
                    <div>
                      <div className="font-600 text-sm">Хранение</div>
                      <p className="text-sm text-muted-foreground">
                        {selected.storage}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-display text-3xl font-700 text-primary">
                      {selected.price}
                    </span>
                    <span className="text-muted-foreground">
                      {' '}
                      / {selected.weight}
                    </span>
                  </div>
                  <Button className="bg-primary hover:bg-meat-dark text-primary-foreground font-600">
                    <Icon name="ShoppingCart" size={18} className="mr-1" />В
                    корзину
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

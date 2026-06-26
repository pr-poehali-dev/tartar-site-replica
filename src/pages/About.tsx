import Layout from '@/components/Layout';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Link } from 'react-router-dom';

const HERO_IMG =
  'https://cdn.poehali.dev/projects/8e856a4a-a6e3-43b5-86df-f255d2315d3d/files/af2077c9-d814-4778-83b1-d9829c1c6eae.jpg';
const ASSORT_IMG =
  'https://cdn.poehali.dev/projects/8e856a4a-a6e3-43b5-86df-f255d2315d3d/files/08b9fefb-5c43-4980-bc7b-2e712660c9a1.jpg';

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-charcoal text-cream py-16">
        <div className="container">
          <span className="text-accent font-600 uppercase tracking-widest text-sm block mb-3">
            О нас
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-700 mb-4">
            Мясная лавка с характером
          </h1>
          <p className="text-cream/70 text-lg max-w-xl">
            С 2014 года привозим фермерское мясо напрямую с проверенных хозяйств.
            Знаем происхождение каждого отруба.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="container grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative rounded-3xl overflow-hidden h-[480px]">
            <img src={HERO_IMG} alt="О нас" className="w-full h-full object-cover" />
          </div>
          <div>
            <span className="text-accent font-600 uppercase tracking-widest text-sm">Наша история</span>
            <h2 className="font-display text-4xl font-700 mt-2 mb-6">С фермы — прямо к вам</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                «Тартар» начался в 2014 году с простой идеи — продавать мясо, в качестве которого
                мы уверены на 100%. Основатель лавки сам объездил десятки хозяйств, прежде чем
                выбрать первых партнёров-фермеров.
              </p>
              <p>
                Мы лично знаем каждого фермера, ездим на хозяйства и выбираем животных,
                выращенных без антибиотиков, гормонов роста и искусственных кормов.
              </p>
              <p>
                Никакой заморозки и неизвестного происхождения. Только охлаждённое мясо,
                разделанное нашими мастерами в день доставки — с характером и душой.
              </p>
            </div>
            <div className="flex flex-wrap gap-8 mt-8">
              {[
                { v: '40+', l: 'видов мяса' },
                { v: '12', l: 'проверенных ферм' },
                { v: '10 лет', l: 'на рынке' },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-3xl font-700 text-primary">{s.v}</div>
                  <div className="text-sm text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <div className="text-center mb-10">
            <span className="text-accent font-600 uppercase tracking-widest text-sm">Наши принципы</span>
            <h2 className="font-display text-4xl font-700 mt-2">Что нами движет</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'Leaf', t: 'Натуральность', d: 'Только животные на естественном откорме без химии' },
              { icon: 'Eye', t: 'Прозрачность', d: 'Знаем ферму, породу и рацион каждого животного' },
              { icon: 'Snowflake', t: 'Свежесть', d: 'Охлаждённое, не замороженное — разница ощутима' },
              { icon: 'Heart', t: 'Уважение', d: 'К фермерам, животным и нашим покупателям' },
            ].map((v) => (
              <div key={v.t} className="p-6 rounded-2xl bg-card border border-border hover-lift text-center">
                <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name={v.icon} size={24} className="text-primary" />
                </div>
                <h3 className="font-display text-xl font-600 mb-2">{v.t}</h3>
                <p className="text-sm text-muted-foreground">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team photo */}
      <section className="py-16">
        <div className="container grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="text-accent font-600 uppercase tracking-widest text-sm">Часто спрашивают</span>
            <h2 className="font-display text-4xl font-700 mt-2 mb-8">Вопросы и ответы</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                { q: 'Откуда вы берёте мясо?', a: 'Работаем напрямую с 12 фермерскими хозяйствами Центральной России и Кавказа. Каждое прошло нашу личную проверку — мы ездим на фермы и смотрим на условия содержания животных.' },
                { q: 'Есть ли документы качества?', a: 'Да, на всю продукцию имеются ветеринарные свидетельства и декларации соответствия ГОСТ. По запросу высылаем документы перед заказом.' },
                { q: 'Продаёте ли вы замороженное мясо?', a: 'Нет. Мы принципиально работаем только с охлаждённым мясом. Заморозка ухудшает структуру волокон и вкус продукта.' },
                { q: 'Можно ли заказать редкий отруб?', a: 'Конечно. Напишите нам в Telegram или позвоните — найдём и привезём нужный вам отруб под заказ в течение 1–2 дней.' },
                { q: 'Как часто обновляется ассортимент?', a: 'Ежедневно. Мясо поступает с ферм несколько раз в неделю — вы всегда получаете максимально свежий продукт.' },
              ].map((f) => (
                <AccordionItem key={f.q} value={f.q}>
                  <AccordionTrigger className="font-display text-lg font-600 text-left">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="relative rounded-3xl overflow-hidden h-[480px]">
            <img src={ASSORT_IMG} alt="Наша продукция" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-charcoal text-cream">
        <div className="container text-center max-w-xl mx-auto">
          <h2 className="font-display text-4xl font-700 mb-4">Убедитесь сами</h2>
          <p className="text-cream/70 mb-8">
            Сделайте первый заказ и почувствуйте разницу. Если не понравится — вернём деньги.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-700" asChild>
            <Link to="/catalog">Перейти в каталог</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}

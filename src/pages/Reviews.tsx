import Layout from '@/components/Layout';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const reviews = [
  {
    name: 'Анна Котова',
    text: 'Беру мясо только здесь уже полгода. Рибай — это что-то невероятное, гости в восторге от стейков!',
    rating: 5,
    date: 'Март 2026',
    product: 'Рибай мраморный',
  },
  {
    name: 'Дмитрий Орлов',
    text: 'Привезли точно в срок, всё свежее и охлаждённое. Видно, что за качеством реально следят.',
    rating: 5,
    date: 'Апрель 2026',
    product: 'Вырезка говяжья',
  },
  {
    name: 'Мария Лебедева',
    text: 'Фарш — небо и земля по сравнению с магазинным. Котлеты получаются сочные. Заказываю каждую неделю.',
    rating: 5,
    date: 'Май 2026',
    product: 'Фарш домашний',
  },
  {
    name: 'Игорь Петров',
    text: 'Каре ягнёнка просто шедевр. Запекал в духовке — гости не поверили, что такое мясо можно купить с доставкой.',
    rating: 5,
    date: 'Май 2026',
    product: 'Каре ягнёнка',
  },
  {
    name: 'Светлана Борисова',
    text: 'Грудинка для засолки — отличная. Сало получилось нежнейшее. Буду брать ещё.',
    rating: 5,
    date: 'Июнь 2026',
    product: 'Грудинка свиная',
  },
  {
    name: 'Алексей Смирнов',
    text: 'Колбаски для гриля — лучшее, что я жарил на мангале. Сочные, аромат натуральный. Рекомендую всем!',
    rating: 5,
    date: 'Июнь 2026',
    product: 'Колбаски для гриля',
  },
];

export default function Reviews() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-charcoal text-cream py-16">
        <div className="container">
          <span className="text-accent font-600 uppercase tracking-widest text-sm block mb-3">
            Отзывы
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-700 mb-4">
            Что говорят покупатели
          </h1>
          <p className="text-cream/70 text-lg max-w-xl">
            Более 500 довольных клиентов за 10 лет работы. Читайте реальные
            отзывы о наших продуктах и доставке.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-secondary border-b border-border">
        <div className="container grid grid-cols-3 gap-6 max-w-2xl mx-auto text-center">
          {[
            { v: '500+', l: 'довольных клиентов' },
            { v: '4.9', l: 'средняя оценка' },
            { v: '98%', l: 'повторных заказов' },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-4xl font-700 text-primary mb-1">{s.v}</div>
              <div className="text-sm text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {reviews.map((r, i) => (
              <div
                key={r.name}
                className="p-7 rounded-2xl bg-card shadow-md border border-border animate-scale-in hover-lift"
                style={{ animationDelay: `${i * 60}ms`, opacity: 0 }}
              >
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: r.rating }).map((_, idx) => (
                    <Icon key={idx} name="Star" size={16} className="text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-foreground/90 mb-4 leading-relaxed">«{r.text}»</p>
                <div className="pt-4 border-t border-border flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-primary/15 flex items-center justify-center font-display font-700 text-primary text-sm">
                      {r.name[0]}
                    </div>
                    <div>
                      <div className="font-600 text-sm">{r.name}</div>
                      <div className="text-xs text-muted-foreground">{r.date}</div>
                    </div>
                  </div>
                  <span className="text-xs text-accent font-500 bg-accent/10 px-2 py-1 rounded-full">
                    {r.product}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary">
        <div className="container text-center max-w-xl mx-auto">
          <h2 className="font-display text-3xl font-700 mb-4">Поделитесь своим опытом</h2>
          <p className="text-muted-foreground mb-8">
            Оставьте отзыв в нашем Telegram-канале или позвоните — мы всегда рады обратной связи.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-primary hover:bg-meat-dark text-white font-700">
              <Icon name="Send" size={18} className="mr-2" />
              Написать в Telegram
            </Button>
            <Button variant="outline" className="border-primary/30 text-primary hover:bg-primary/10 font-600">
              <Icon name="Phone" size={18} className="mr-2" />
              Позвонить нам
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

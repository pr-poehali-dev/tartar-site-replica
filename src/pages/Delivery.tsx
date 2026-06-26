import Layout from '@/components/Layout';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const ASSORT_IMG =
  'https://cdn.poehali.dev/projects/8e856a4a-a6e3-43b5-86df-f255d2315d3d/files/08b9fefb-5c43-4980-bc7b-2e712660c9a1.jpg';

export default function Delivery() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-charcoal text-cream py-16">
        <div className="container">
          <span className="text-accent font-600 uppercase tracking-widest text-sm block mb-3">
            Доставка
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-700 mb-4">
            Привезём свежим и холодным
          </h1>
          <p className="text-cream/70 text-lg max-w-xl">
            Доставляем охлаждённое мясо в термобоксах по всему городу. Температура
            внутри — 0…+4 °C до самой двери.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16">
        <div className="container grid lg:grid-cols-2 gap-14 items-center">
          <div className="space-y-5">
            {[
              {
                icon: 'Clock',
                t: 'Быстро',
                d: 'Доставка по городу за 2 часа, в пригород — в день заказа. Принимаем заказы до 18:00.',
              },
              {
                icon: 'Package',
                t: 'В термобоксах',
                d: 'Мясо едет в специальной таре с хладоэлементами. Температурный режим 0…+4 °C гарантирован.',
              },
              {
                icon: 'Wallet',
                t: 'Удобная оплата',
                d: 'Картой онлайн при оформлении заказа, наличными или переводом курьеру при получении.',
              },
              {
                icon: 'Gift',
                t: 'Бесплатно от 3 000 ₽',
                d: 'При заказе на сумму менее 3 000 ₽ стоимость доставки составит 300 ₽.',
              },
              {
                icon: 'RefreshCw',
                t: 'Возврат',
                d: 'Если что-то не устроило — вернём деньги в течение 24 часов без лишних вопросов.',
              },
            ].map((d) => (
              <div key={d.t} className="flex gap-4 p-5 rounded-2xl bg-secondary">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon name={d.icon} size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-600 mb-1">{d.t}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{d.d}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="relative rounded-3xl overflow-hidden h-[500px]">
            <img
              src={ASSORT_IMG}
              alt="Доставка мяса"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent" />
          </div>
        </div>
      </section>

      {/* Zones */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <h2 className="font-display text-3xl md:text-4xl font-700 mb-10 text-center">
            Зоны доставки и стоимость
          </h2>
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { zone: 'Центр города', time: '1–2 часа', price: 'Бесплатно от 3 000 ₽', icon: 'Building2' },
              { zone: 'Пригород', time: 'В день заказа', price: '300–500 ₽', icon: 'Trees' },
              { zone: 'Область', time: 'На следующий день', price: 'от 500 ₽', icon: 'Map' },
            ].map((z) => (
              <div
                key={z.zone}
                className="p-6 rounded-2xl bg-card border border-border text-center hover-lift"
              >
                <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name={z.icon} size={24} className="text-primary" />
                </div>
                <h3 className="font-display text-xl font-600 mb-2">{z.zone}</h3>
                <p className="text-sm text-muted-foreground mb-1">⏱ {z.time}</p>
                <p className="text-sm font-600 text-primary">{z.price}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button className="bg-primary hover:bg-meat-dark text-white font-700" size="lg">
              <Icon name="Phone" size={18} className="mr-2" />
              Уточнить доставку
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

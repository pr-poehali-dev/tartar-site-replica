import Layout from '@/components/Layout';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function Contacts() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-charcoal text-cream py-16">
        <div className="container">
          <span className="text-accent font-600 uppercase tracking-widest text-sm block mb-3">
            Контакты
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-700 mb-4">
            Заходите в гости
          </h1>
          <p className="text-cream/70 text-lg max-w-xl">
            Пишите, звоните или приходите лично — мы всегда рады помочь с выбором.
          </p>
        </div>
      </section>

      {/* Contact grid */}
      <section className="py-16">
        <div className="container grid lg:grid-cols-2 gap-14">
          {/* Info */}
          <div>
            <h2 className="font-display text-3xl font-700 mb-8">Как с нами связаться</h2>
            <div className="space-y-4 mb-10">
              {[
                {
                  icon: 'MapPin',
                  t: 'Адрес',
                  d: '9-я просека, 5-я линия, 114',
                  sub: 'Самара',
                },
                {
                  icon: 'Phone',
                  t: 'Телефон',
                  d: '+7 (917) 816-30-30',
                  sub: 'Ежедневно с 9:00 до 21:00',
                },
                {
                  icon: 'Mail',
                  t: 'Email',
                  d: 'tartar.meat.market@gmail.com',
                  sub: 'Отвечаем в течение часа',
                },
                {
                  icon: 'Clock',
                  t: 'Часы работы',
                  d: 'Ежедневно с 9:00 до 21:00',
                  sub: 'Без выходных и праздников',
                },
              ].map((c) => (
                <div key={c.t} className="flex gap-4 p-5 rounded-2xl bg-secondary">
                  <div className="w-11 h-11 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon name={c.icon} size={22} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-600 text-sm mb-0.5">{c.t}</p>
                    <p className="text-foreground font-500">{c.d}</p>
                    <p className="text-xs text-muted-foreground">{c.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Socials */}
            <h3 className="font-display text-xl font-600 mb-4">Мы в мессенджерах</h3>
            <div className="flex flex-wrap gap-3">
              <Button className="bg-primary hover:bg-meat-dark text-white font-600">
                <Icon name="Send" size={18} className="mr-2" />
                Telegram
              </Button>
              <Button variant="outline" className="border-primary/30 text-primary hover:bg-primary/10 font-600">
                <Icon name="MessageCircle" size={18} className="mr-2" />
                WhatsApp
              </Button>
              <Button variant="outline" className="border-primary/30 text-primary hover:bg-primary/10 font-600">
                <Icon name="Phone" size={18} className="mr-2" />
                Позвонить
              </Button>
            </div>
          </div>

          {/* Form */}
          <div className="bg-card border border-border rounded-3xl p-8">
            <h2 className="font-display text-3xl font-700 mb-2">Напишите нам</h2>
            <p className="text-muted-foreground text-sm mb-7">
              Оставьте заявку — перезвоним в течение 30 минут.
            </p>
            <div className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-600 mb-1.5 block">Ваше имя</label>
                  <Input placeholder="Иван Иванов" className="bg-secondary border-border" />
                </div>
                <div>
                  <label className="text-sm font-600 mb-1.5 block">Телефон</label>
                  <Input placeholder="+7 (___) ___-__-__" className="bg-secondary border-border" />
                </div>
              </div>
              <div>
                <label className="text-sm font-600 mb-1.5 block">Тема обращения</label>
                <Input placeholder="Хочу сделать заказ / Вопрос по товару..." className="bg-secondary border-border" />
              </div>
              <div>
                <label className="text-sm font-600 mb-1.5 block">Сообщение</label>
                <Textarea
                  placeholder="Расскажите подробнее..."
                  rows={4}
                  className="bg-secondary border-border resize-none"
                />
              </div>
              <Button className="w-full bg-primary hover:bg-meat-dark text-white font-700" size="lg">
                <Icon name="Send" size={18} className="mr-2" />
                Отправить сообщение
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="py-4 pb-16">
        <div className="container">
          <div className="rounded-3xl overflow-hidden h-72 bg-secondary border border-border flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <Icon name="Map" size={48} className="mx-auto mb-3 text-primary/40" />
              <p className="font-display text-xl font-600">Самара, 9-я просека, 5-я линия, 114</p>
              <p className="text-sm mt-1">Карта будет здесь</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
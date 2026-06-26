import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import Icon from '@/components/ui/icon';
import { products, categories } from '@/data/products';

export default function Catalog() {
  const [activeSlug, setActiveSlug] = useState<string>('all');

  const filtered =
    activeSlug === 'all'
      ? products
      : products.filter((p) => p.categorySlug === activeSlug);

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-charcoal text-cream py-14">
        <div className="container">
          <div className="flex items-center gap-2 text-cream/50 text-sm mb-4">
            <Link to="/" className="hover:text-accent transition-colors">Главная</Link>
            <Icon name="ChevronRight" size={14} />
            <span className="text-cream">Каталог</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-700 mb-3">Каталог</h1>
          <p className="text-cream/70 text-lg max-w-lg">
            Свежее охлаждённое мясо напрямую с фермы. Нажмите на товар, чтобы
            узнать происхождение и условия хранения.
          </p>
        </div>
      </section>

      {/* Category tabs */}
      <section className="sticky top-16 z-30 bg-background border-b border-border shadow-sm">
        <div className="container">
          <div className="flex gap-2 overflow-x-auto py-3 scrollbar-none">
            <button
              onClick={() => setActiveSlug('all')}
              className={`shrink-0 px-5 py-2 rounded-full text-sm font-600 transition-all duration-200 hover:scale-105 active:scale-95 ${
                activeSlug === 'all'
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-secondary text-foreground hover:bg-primary/10'
              }`}
            >
              Все товары
            </button>
            {categories.map((c) => (
              <button
                key={c.slug}
                onClick={() => setActiveSlug(c.slug)}
                className={`shrink-0 flex items-center gap-1.5 px-5 py-2 rounded-full text-sm font-600 transition-all duration-200 hover:scale-105 active:scale-95 ${
                  activeSlug === c.slug
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-secondary text-foreground hover:bg-primary/10'
                }`}
              >
                <span>{c.icon}</span>
                {c.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-12">
        <div className="container">
          <p className="text-muted-foreground text-sm mb-6">
            Найдено товаров: <span className="font-600 text-foreground">{filtered.length}</span>
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((p, i) => (
              <Link
                key={p.id}
                to={`/catalog/${p.id}`}
                className="group rounded-2xl overflow-hidden bg-card shadow-md hover-lift animate-scale-in block"
                style={{ animationDelay: `${i * 50}ms`, opacity: 0 }}
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {p.tag && (
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-accent text-white text-xs font-700">
                      {p.tag}
                    </span>
                  )}
                  <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-charcoal/70 text-cream text-xs font-500">
                    {p.category}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-display text-lg font-600 mb-1 group-hover:text-primary transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-2 mb-3">
                    {p.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-display text-xl font-700 text-primary">{p.price}</span>
                      <span className="text-xs text-muted-foreground"> / {p.weight}</span>
                    </div>
                    <span className="flex items-center gap-1 text-xs text-accent font-600 group-hover:gap-2 transition-all">
                      Подробнее <Icon name="ArrowRight" size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

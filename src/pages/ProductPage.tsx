import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { products, categories } from '@/data/products';

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <Layout>
        <div className="container py-32 text-center">
          <p className="font-display text-3xl font-700 mb-4">Товар не найден</p>
          <Link to="/catalog">
            <Button className="bg-primary text-white">Вернуться в каталог</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const related = products
    .filter((p) => p.categorySlug === product.categorySlug && p.id !== product.id)
    .slice(0, 4);

  const catLabel = categories.find((c) => c.slug === product.categorySlug)?.label ?? product.category;

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-secondary border-b border-border">
        <div className="container py-3 flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-accent transition-colors">Главная</Link>
          <Icon name="ChevronRight" size={14} />
          <Link to="/catalog" className="hover:text-accent transition-colors">Каталог</Link>
          <Icon name="ChevronRight" size={14} />
          <Link
            to={`/catalog?cat=${product.categorySlug}`}
            className="hover:text-accent transition-colors"
          >
            {catLabel}
          </Link>
          <Icon name="ChevronRight" size={14} />
          <span className="text-foreground font-500">{product.name}</span>
        </div>
      </div>

      {/* Main */}
      <section className="py-12">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <div className="relative rounded-3xl overflow-hidden aspect-square animate-scale-in">
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.tag && (
                <span className="absolute top-5 left-5 px-4 py-1.5 rounded-full bg-accent text-white text-sm font-700">
                  {product.tag}
                </span>
              )}
            </div>

            {/* Info */}
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-600 mb-4">
                {categories.find((c) => c.slug === product.categorySlug)?.icon} {catLabel}
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-700 mb-3">{product.name}</h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">{product.description}</p>

              {/* Details */}
              <div className="space-y-3 mb-8">
                <div className="flex gap-4 p-4 rounded-2xl bg-secondary">
                  <div className="w-10 h-10 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon name="MapPin" size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-600 text-sm mb-0.5">Происхождение</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{product.origin}</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 rounded-2xl bg-secondary">
                  <div className="w-10 h-10 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon name="Snowflake" size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-600 text-sm mb-0.5">Условия хранения</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{product.storage}</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 rounded-2xl bg-secondary">
                  <div className="w-10 h-10 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon name="Scale" size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-600 text-sm mb-0.5">Фасовка</p>
                    <p className="text-muted-foreground text-sm">{product.weight}</p>
                  </div>
                </div>
              </div>

              {/* Price + CTA */}
              <div className="flex items-center justify-between mb-6 p-5 rounded-2xl bg-card border border-border">
                <div>
                  <p className="text-sm text-muted-foreground mb-0.5">Цена</p>
                  <span className="font-display text-4xl font-700 text-primary">{product.price}</span>
                  <span className="text-muted-foreground"> / {product.weight}</span>
                </div>
                <Button size="lg" className="bg-primary hover:bg-meat-dark text-white font-700">
                  <Icon name="ShoppingCart" size={20} className="mr-1" />
                  В корзину
                </Button>
              </div>

              <div className="flex gap-3">
                <Button
                  variant="outline"
                  className="flex-1 border-primary/30 text-primary hover:bg-primary/10 font-600"
                >
                  <Icon name="Phone" size={18} className="mr-1" />
                  Позвонить
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 border-primary/30 text-primary hover:bg-primary/10 font-600"
                >
                  <Icon name="Send" size={18} className="mr-1" />
                  Telegram
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="py-12 bg-secondary">
          <div className="container">
            <h2 className="font-display text-3xl font-700 mb-8">Из этой категории</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {related.map((p) => (
                <Link
                  key={p.id}
                  to={`/catalog/${p.id}`}
                  className="group rounded-2xl overflow-hidden bg-card shadow-md hover-lift block"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={p.img}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {p.tag && (
                      <span className="absolute top-3 left-3 px-2 py-0.5 rounded-full bg-accent text-white text-xs font-700">
                        {p.tag}
                      </span>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-display text-base font-600 mb-1 group-hover:text-primary transition-colors">
                      {p.name}
                    </h3>
                    <span className="font-display text-lg font-700 text-primary">{p.price}</span>
                    <span className="text-xs text-muted-foreground"> / {p.weight}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
}

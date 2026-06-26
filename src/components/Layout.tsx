import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const navLinks = [
  { label: 'Главная', href: '/' },
  { label: 'Каталог', href: '/catalog' },
  { label: 'Доставка', href: '/#delivery' },
  { label: 'Отзывы', href: '/#reviews' },
  { label: 'О нас', href: '/#about' },
  { label: 'Контакты', href: '/#contacts' },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <header className="fixed top-0 left-0 right-0 z-40 bg-charcoal/95 backdrop-blur border-b border-white/10">
        <div className="container flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <Icon name="Beef" size={28} className="text-accent" />
            <span className="font-display text-2xl font-700 tracking-wide text-cream">
              ТАРТАР
            </span>
          </Link>
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                className={`text-sm font-500 transition-colors ${
                  location.pathname === l.href
                    ? 'text-accent'
                    : 'text-cream/80 hover:text-accent'
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Button className="hidden sm:flex bg-accent hover:bg-accent/90 text-white font-600">
              <Icon name="Phone" size={16} className="mr-1" />
              Заказать
            </Button>
            <button className="lg:hidden text-cream" onClick={() => setMenuOpen(!menuOpen)}>
              <Icon name={menuOpen ? 'X' : 'Menu'} size={28} />
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav className="lg:hidden bg-charcoal border-t border-white/10 px-6 py-4 flex flex-col gap-4 animate-fade-in">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-cream/90 hover:text-accent font-500"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        )}
      </header>

      <main className="flex-1 pt-16">{children}</main>

      <footer className="bg-charcoal border-t border-white/10 py-8 text-cream/60">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Icon name="Beef" size={22} className="text-accent" />
            <span className="font-display text-xl font-700 text-cream">ТАРТАР</span>
          </div>
          <p className="text-sm">© 2026 Мясная лавка «Тартар». Свежее мясо с проверенных ферм.</p>
        </div>
      </footer>
    </div>
  );
}

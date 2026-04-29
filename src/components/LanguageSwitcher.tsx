import { useTranslation } from 'react-i18next';
import { Button } from './ui/button';
import { Languages } from 'lucide-react';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'fr' ? 'en' : 'fr';
    i18n.changeLanguage(newLang);
  };

  return (
    <Button 
      variant="ghost" 
      onClick={toggleLanguage}
      className="rounded-full px-4 py-2 flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-xs font-medium tracking-wider"
    >
      <Languages className="w-3.5 h-3.5 text-primary-glow" />
      <span>{i18n.language === 'fr' ? 'EN' : 'FR'}</span>
    </Button>
  );
};

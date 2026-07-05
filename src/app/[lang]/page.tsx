import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Countries from '@/components/Countries';
import Services from '@/components/Services';
import Stages from '@/components/Stages';
import About from '@/components/About';
import FAQ from '@/components/FAQ';
import ContactBanner from '@/components/ContactBanner';
import Footer from '@/components/Footer';
import { getDictionary } from '@/dictionaries';

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ru' }, { lang: 'hi' }, { lang: 'ur' }];
}

export default async function LangHome({ params }: { params: { lang: string } }) {
  const dict = await getDictionary(params.lang);

  return (
    <div className="min-h-screen bg-light-gray flex flex-col font-sans">
      <Header dict={dict} currentLang={params.lang} />
      <main className="flex-grow">
        <Hero dict={dict} />
        <Countries dict={dict} />
        <Services dict={dict} />
        <Stages dict={dict} />
        <About dict={dict} />
        <FAQ dict={dict} />
        <ContactBanner dict={dict} />
      </main>
      <Footer dict={dict} />
    </div>
  );
}

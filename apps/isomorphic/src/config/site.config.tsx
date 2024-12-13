import { Metadata } from 'next';
import logoImg from '@public/logo.svg';
import { LAYOUT_OPTIONS } from '@/config/enums';
import logoIconImg from '@public/logo-short.svg';
import { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types';

enum MODE {
  DARK = 'dark',
  LIGHT = 'light',
}

export const siteConfig = {
  title: 'Cubicus - Admin Dashboard Template',
  description: `Cubicus the ultimate React TypeScript Admin Template. Streamline your admin dashboard development with our feature-rich, responsive, and highly customizable solution. Boost productivity and create stunning admin interfaces effortlessly.`,
  logo: "https://cubicus.io/images/logo",
  icon: logoIconImg,
  mode: MODE.LIGHT,
  layout: LAYOUT_OPTIONS.HYDROGEN,
  // TODO: favicon
};

export const metaObject = (
  title?: string,
  openGraph?: OpenGraph,
  description: string = siteConfig.description
): Metadata => {
  return {
    title: title ? `${title} - Cubicus Furyroad` : siteConfig.title,
    description,
    openGraph: openGraph ?? {
      title: title ? `${title} - Cubicus Furyroad` : title,
      description,
      url: 'https://dashboard.cubicus.io',
      siteName: 'Cubicus Dashboard Furyroad', // https://developers.google.com/search/docs/appearance/site-names
      images: {
        url: 'https://cubicus.io/images/logo',
        width: 1200,
        height: 630,
      },
      locale: 'en_US',
      type: 'website',
    },
  };
};

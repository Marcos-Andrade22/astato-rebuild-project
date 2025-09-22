import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonical?: string;
  keywords?: string;
  ogImage?: string;
  structuredData?: object;
}

const SEOHead = ({
  title = "Manutenção Equipamentos Videocirurgia | Astato - Especialista em Endoscopia",
  description = "Manutenção especializada em equipamentos de videocirurgia, endoscopia e colonoscopia. 14+ anos de experiência em Karl Storz, Stryker, Richard Wolf. Atendimento nacional.",
  canonical = "https://astato.com.br/",
  keywords = "manutenção equipamentos videocirurgia, reparo endoscópios, assistência técnica equipamentos médicos, manutenção óticas cirúrgicas, Karl Storz, Stryker, Richard Wolf",
  ogImage = "https://astato.com.br/og-image.jpg",
  structuredData
}: SEOHeadProps) => {
  
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta tags
    const updateMetaTag = (name: string, content: string, property = false) => {
      const attribute = property ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // Basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    
    // Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:url', canonical, true);
    updateMetaTag('og:image', ogImage, true);
    
    // Twitter tags
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);

    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonical;

    // Add structured data if provided
    if (structuredData) {
      const scriptId = 'structured-data-script';
      let existingScript = document.getElementById(scriptId);
      if (existingScript) {
        existingScript.remove();
      }
      
      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

  }, [title, description, canonical, keywords, ogImage, structuredData]);

  return null;
};

export default SEOHead;
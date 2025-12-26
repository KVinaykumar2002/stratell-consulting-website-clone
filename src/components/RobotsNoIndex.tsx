import { useEffect } from 'react';

export default function RobotsNoIndex() {
  useEffect(() => {
    const robotsMeta = document.querySelector('meta[name="robots"]') as HTMLMetaElement;
    if (!robotsMeta) {
      const meta = document.createElement('meta');
      meta.name = 'robots';
      meta.content = 'noindex, nofollow';
      document.head.appendChild(meta);
    } else {
      robotsMeta.content = 'noindex, nofollow';
    }
  }, []);

  return null;
}


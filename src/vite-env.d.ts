/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SITE_URL: string;
  readonly VITE_GOOGLE_VERIFICATION: string;
  readonly VITE_YANDEX_VERIFICATION: string;
  readonly VITE_BING_VERIFICATION: string;
  readonly VITE_FACEBOOK_VERIFICATION: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}


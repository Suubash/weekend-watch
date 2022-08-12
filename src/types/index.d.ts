declare module "*.module.css";
declare module "*.svg";
declare module "*.png";

interface ImportMetaEnv {
  readonly VITE_PUBLIC_TMDB_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

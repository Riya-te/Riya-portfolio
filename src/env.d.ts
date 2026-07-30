declare module '*.asset.json' {
  const value: { url: string; integrity?: string };
  export default value;
}

declare module '*.pdf';

declare module '*.png';
declare module '*.svg';

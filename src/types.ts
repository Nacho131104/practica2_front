export type PaisDetalle = {
  name: { common: string };
  flags: { png: string };
  population: number;
  capital?: string[];
  region?: string;
  subregion?: string;
  continents?: string[];
  cca3?: string;
};
export type  Pais  = {
  name: {
    common: string;
    official: string;
  };
  flags: {
    png: string;
    svg: string;
  };
  population: number;
  capital?: string[];
  region?: string;
  subregion?: string;
  continents?: string[];
  cca3?: string;
  languages?: {
    [key: string]: string;
  };
  currencies?: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
}
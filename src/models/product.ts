// src/model.ts
export type Rollup = {
  current: string;
  main: string;
  fraction: string;
  discount_percentage: number;
  cheapest: string;
  reservable: boolean;
  deliverableAndInStock: boolean;
};

export type Recommended = {
  current: string;
  main: string;
  fraction: string;
  discount_percentage: number;
  cheapest: string;
  reservable: boolean;
  deliverableAndInStock: boolean;
};

export type Rating = {
  id: string;
  totalFamilyReviewsCount: number;
  averageRating: number;
  ratings: number[];
};

export type Product = {
  details: Details;
};

export type Details = {
  id: string;
  url: string;
  deepest_category_id: string;
  raw_title: string;
  encoded_title: string;
  attributes: string[];
  description: string;
  accessorized: boolean;
  suppress_accessories_redirect: boolean;
  thumb: string;
  image: string;
  brand_name: string;
  generalized_title: string;
  rating: Rating;
  rollup_price: {
    rollup_price: Rollup;
  };
  recommended_price: Recommended;
};

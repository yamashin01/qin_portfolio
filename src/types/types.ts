export type BlogType = {
    id: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
    title: string;
    body: string;
  };
  
export type PortfolioType = {
    id: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
    title: string;
    body: string;
    image?: {
        url: string;
    };
    url?: string;
};

export type AboutType = {
    id: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
    name: string;
    profile: string;
    image?: {
        url: string;
    };
};

    
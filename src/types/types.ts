import { MicroCMSListResponse } from "microcms-js-sdk";

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

// Twitter
export type TwitterProfileType = {
    id: string;
    name: string;
    profile_image_url: string;
    username: string;
};

export type TweetType = {
    id: string;
    created_at: string;
    text: string;
};

export type TwitterType = {
    profile: TwitterProfileType;
    tweets: TweetType[];
};
 

export type IndexProps = {
    blogData: MicroCMSListResponse<BlogType>;
    portfolioData: MicroCMSListResponse<PortfolioType>;
    twitterData: TwitterType;
};
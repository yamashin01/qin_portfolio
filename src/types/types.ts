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

// GitHub
export type GitHubType = {
    id: number;
    title: string;
    article: string;
};

export type GitHubRepoType = {
    id: string;
    forkCount: number;
    stargazerCount: number;
    name: string;
    description: string;
    url: string;
    languages: {
        edges: GitHubLangType[],
        totalSize: number,
    };
}

export type GitHubLangType = {
    node : {
        id: string;
        size: number;
        color: string;
        name: string;
    }
    size: number;
    percentage: number;
}
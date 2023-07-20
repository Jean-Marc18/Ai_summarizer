import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;

export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com',
        prepareHeaders: (headers) => {
           headers.set('X-RapidAPI-Key', rapidApiKey); 
           headers.set('X-RapidAPI-Host', 'article-extractor-and-summarizer.p.rapidapi.com'); 

           return headers;
        },
    }),
    endpoints: (builder) => ({
        getSummary: builder.query({
            query: (params) => `/summarize?url=${encodeURIComponent(params.articleUrl)}&lengh=3`
        })
    })
});
// Parce qu'on ne veut pas obtenir les infos dès qu'on est sur la page et qu'on veut cliquer sur le bouton d'abord alors on utilise useLazyGetSummaryQuery au lieu de useGetSummary
export const { useLazyGetSummaryQuery } = articleApi;
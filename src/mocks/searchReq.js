import { rest } from 'msw';
export const url =
  'https://cors-anywhere.herokuapp.com/https://listen-api-test.listennotes.com/api/v2/search?q=star%20wars&sort_by_date=0&type=episode&offset=0&len_min=10&len_max=30&episode_count_max=10&genre_ids=68%2C82&published_before=1580172454000&published_after=0&only_in=title%2Cdescription&language=English&safe_mode=0';
const searchReq = [
  rest.get(url, (req, res, ctx) => {
    return res(
      ctx.json({
        results: [
          {
            id: 'ea09b575d07341599d8d5b71f205517b',

            audio:
              'https://www.listennotes.com/e/p/ea09b575d07341599d8d5b71f205517b/',
            image:
              'https://cdn-images-1.listennotes.com/podcasts/the-rough-cut-PmR84dsqcbj-53MLh7NpAwm.1400x1400.jpg',
            podcast: {
              id: '8758da9be6c8452884a8cab6373b007c',
              image:
                'https://cdn-images-1.listennotes.com/podcasts/the-rough-cut-PmR84dsqcbj-53MLh7NpAwm.1400x1400.jpg',
              genre_ids: [68, 264],
              thumbnail:
                'https://cdn-images-1.listennotes.com/podcasts/the-rough-cut-AzKVtPeMOL4-53MLh7NpAwm.300x300.jpg',
              listen_score: null,
              title_original: 'The Rough Cut',
            },

            thumbnail:
              'https://cdn-images-1.listennotes.com/podcasts/the-rough-cut-AzKVtPeMOL4-53MLh7NpAwm.300x300.jpg',
            pub_date_ms: 1579507216047,
            title_original: 'Star Wars - The Force Awakens',
          },
          {
            id: '42b1898db6a84973b41879618002937b',

            audio:
              'https://www.listennotes.com/e/p/42b1898db6a84973b41879618002937b/',
            image:
              'https://cdn-images-1.listennotes.com/podcasts/the-vintage-rpg-podcast-vintage-rpg-V8MjvNnSRBt-eq8uGUY6vXN.1400x1400.jpg',
            podcast: {
              id: 'f3094a0b14684300a3d6b69a1063e708',
              image:
                'https://cdn-images-1.listennotes.com/podcasts/the-vintage-rpg-podcast-vintage-rpg-V8MjvNnSRBt-eq8uGUY6vXN.1400x1400.jpg',
              genre_ids: [82, 85, 83],
              thumbnail:
                'https://cdn-images-1.listennotes.com/podcasts/the-vintage-rpg-podcast-vintage-rpg-Mg-2ZYcmERT-eq8uGUY6vXN.300x300.jpg',
              listen_score: 45,
              title_original: 'The Vintage RPG Podcast',
            },

            thumbnail:
              'https://cdn-images-1.listennotes.com/podcasts/the-vintage-rpg-podcast-vintage-rpg-Mg-2ZYcmERT-eq8uGUY6vXN.300x300.jpg',
            pub_date_ms: 1575867600047,
            title_original: 'Star Wars Galaxy Guides',
          },
        ],
      })
    );
  }),
];

export default searchReq;

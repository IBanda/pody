import { rest } from 'msw';

const carouselReq = [
  rest.get(
    'https://cors-anywhere.herokuapp.com/https://listen-api-test.listennotes.com/api/v2/best_podcasts?page=5&region=us&safe_mode=0',
    (req, res, ctx) => {
      return res(
        ctx.json({
          podcasts: [
            {
              id: 'bf09da1c384f4910b5cd88b24d0afe47',
              image:
                'https://cdn-images-1.listennotes.com/podcasts/industry-focus-the-motley-fool-FgnhDWrQi4v-_HkAQ1m8DZy.1400x1400.jpg',
              title: 'Industry Focus',

              publisher: 'The Motley Fool',
              thumbnail:
                'https://cdn-images-1.listennotes.com/podcasts/industry-focus-the-motley-fool-4vbTFDzLaik-_HkAQ1m8DZy.300x300.jpg',
              is_claimed: false,
              description:
                'Healthcare, technology, energy, consumer goods, and more. Every day, Motley Fool analysts break down a specific industry and the stocks making headlines. Questions? Comments? Email us at IndustryFocus@fool.com.',
            },
            {
              id: 'dcc3f21204234e2fabf70d2d0fd0dd94',

              image:
                'https://cdn-images-1.listennotes.com/podcasts/the-investing-for-beginners-podcast-your-NjZ1SKFR0e4-1gOAxHUQYGK.1400x1400.jpg',
              title:
                'The Investing for Beginners Podcast - Your Path to Financial Freedom',
              country: 'United States',

              publisher: 'Andrew Sather and Dave Ahern',
              thumbnail:
                'https://cdn-images-1.listennotes.com/podcasts/the-investing-for-beginners-podcast-your-_A28ErMWdgK-1gOAxHUQYGK.300x300.jpg',
              is_claimed: false,
              description:
                'How to Start Investing in the Stock Market for Beginners',
            },
          ],
        })
      );
    }
  ),
];
export default carouselReq;

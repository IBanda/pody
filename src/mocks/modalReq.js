import { rest } from 'msw';

const modalReq = [
  rest.get(
    'https://cors-anywhere.herokuapp.com/https://listen-api-test.listennotes.com/api/v2/podcasts/bf09da1c384f4910b5cd88b24d0afe47?sort=recent_first',
    (req, res, ctx) => {
      return res(
        ctx.json({
          id: '4d3fe717742d4963a85562e9f84d8c79',
          rss: 'http://sw7x7.libsyn.com/rss',
          type: 'episodic',
          email: 'fx7@sw7x7.com',
          extra: {
            url1: '',
            url2: '',
            url3: '',
            google_url:
              'https://play.google.com/music/listen?u=0#/ps/I7gdcrqcmvhfnhh2cyqkcg32tkq',
            spotify_url: 'https://open.spotify.com/show/2rQJUP9Y3HxemiW3JHt9WV',
            youtube_url: 'https://www.youtube.com/sw7x7',
            linkedin_url: '',
            wechat_handle: '',
            patreon_handle: 'sw7x7',
            twitter_handle: '',
            facebook_handle: 'sw7x7',
            instagram_handle: '',
          },
          image:
            'https://cdn-images-1.listennotes.com/podcasts/star-wars-7x7-the-daily-star-wars-podcast-HN08OoDE7pc-AIg3cZVKCsL.1400x1400.jpg',
          title: 'Star Wars 7x7: The Daily Star Wars Podcast',
          country: 'United States',
          website:
            'http://sw7x7.com?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website',
          episodes: [
            {
              id: '4e7c59e10e4640b98f2f3cb1777dbb43',
              link:
                'https://sw7x7.libsyn.com/864-part-2-of-my-new-conversation-with-bobby-roberts?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website',
              audio:
                'https://www.listennotes.com/e/p/4e7c59e10e4640b98f2f3cb1777dbb43/',
              image:
                'https://cdn-images-1.listennotes.com/podcasts/star-wars-7x7-the-daily-star-wars-podcast-HN08OoDE7pc-AIg3cZVKCsL.1400x1400.jpg',
              title: '864: Part 2 of My (New) Conversation With Bobby Roberts',
              thumbnail:
                'https://cdn-images-1.listennotes.com/podcasts/star-wars-7x7-the-daily-star-wars-podcast-2LryqMj-sGP-AIg3cZVKCsL.300x300.jpg',
              description:
                '<p>The second half of my latest conversation with Bobby Roberts, Podcast Emeritus from Full of Sith and now Star Wars "Podcast Force Ghost at Large." Punch it!</p> <p>***We’re listener supported! Go to http://Patreon.com/sw7x7 to donate to the Star Wars 7x7 podcast, and you’ll get some fabulous rewards for your pledge.*** </p> <p>Check out SW7x7.com for full Star Wars 7x7 show notes and links, and to comment on any of the content of this episode! If you like what you\'ve heard, please leave us a rating or review on iTunes or Stitcher, which will also help more people discover this Star Wars podcast.</p> <p>Don\'t forget to join the Star Wars 7x7 fun on Facebook at Facebook.com/SW7x7, and follow the breaking news Twitter feed at Twitter.com/SW7x7Podcast. We\'re also on Pinterest and Instagram as "SW7x7" too, and we\'d love to connect with you there!</p>',
              pub_date_ms: 1479110401282,
            },
            {
              id: '9ae0e2e49a9c477191263df90adf7f3e',
              link:
                'https://sw7x7.libsyn.com/863-a-new-conversation-with-bobby-roberts-part-1?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website',
              audio:
                'https://www.listennotes.com/e/p/9ae0e2e49a9c477191263df90adf7f3e/',
              image:
                'https://cdn-images-1.listennotes.com/podcasts/star-wars-7x7-the-daily-star-wars-podcast-HN08OoDE7pc-AIg3cZVKCsL.1400x1400.jpg',
              title: '863: A (New) Conversation With Bobby Roberts, Part 1',
              thumbnail:
                'https://cdn-images-1.listennotes.com/podcasts/star-wars-7x7-the-daily-star-wars-podcast-2LryqMj-sGP-AIg3cZVKCsL.300x300.jpg',
              description:
                '<p>An in-depth conversation about the Star Wars "Story" movies and so much more, featuring Bobby Roberts, Star Wars "Podcast Force Ghost at Large." Punch it!</p> <p>***We’re listener supported! Go to http://Patreon.com/sw7x7 to donate to the Star Wars 7x7 podcast, and you’ll get some fabulous rewards for your pledge.*** </p> <p>Check out SW7x7.com for full Star Wars 7x7 show notes and links, and to comment on any of the content of this episode! If you like what you\'ve heard, please leave us a rating or review on iTunes or Stitcher, which will also help more people discover this Star Wars podcast.</p> <p>Don\'t forget to join the Star Wars 7x7 fun on Facebook at Facebook.com/SW7x7, and follow the breaking news Twitter feed at Twitter.com/SW7x7Podcast. We\'re also on Pinterest and Instagram as "SW7x7" too, and we\'d love to connect with you there!</p>',
              pub_date_ms: 1479024001283,
            },
          ],
          language: 'English',
          genre_ids: [86, 67, 68, 82, 100, 101, 160, 138],
          itunes_id: 896354638,
          publisher: 'Star Wars',
          thumbnail:
            'https://cdn-images-1.listennotes.com/podcasts/star-wars-7x7-the-daily-star-wars-podcast-2LryqMj-sGP-AIg3cZVKCsL.300x300.jpg',
          is_claimed: false,
          description:
            'Star Wars: The Rise of Skywalker, The Last Jedi, The Force Awakens, Star Wars Resistance, and more! The Star Wars 7x7 Podcast is Rebel-rousing fun for everyday Jedi, 7 minutes a day, 7 days a week. Destiny unleashed! #SW7x7 Join Allen Voivod for Star Wars news, history, trivia, movies, cartoon, comics, characters, vehicles, toys, books, and so much more. You get it all in just 7 minutes, so subscribe now!',
          looking_for: {
            guests: false,
            cohosts: false,
            sponsors: false,
            cross_promotion: false,
          },
          listen_score: 48,
          total_episodes: 2419,
          listennotes_url:
            'https://www.listennotes.com/c/4d3fe717742d4963a85562e9f84d8c79/',
          explicit_content: false,
          latest_pub_date_ms: 1608537600000,
          earliest_pub_date_ms: 1404637200000,
          next_episode_pub_date: 1478329201291,
          listen_score_global_rank: '1%',
        })
      );
    }
  ),
];
export default modalReq;

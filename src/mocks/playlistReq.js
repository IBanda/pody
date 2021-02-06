import { rest } from 'msw';

const playlistReq = [
  rest.get(
    'https://cors-anywhere.herokuapp.com/https://listen-api-test.listennotes.com/api/v2/playlists/kr3-ta28cJu?type=episode_list&last_timestamp_ms=0&sort=recent_added_first',
    (req, res, ctx) => {
      return res(
        ctx.json({
          items: [
            {
              id: 475797,
              data: {
                id: '4c72c4dfac004ffca0867a70361f77ab',
                audio:
                  'https://www.listennotes.com/e/p/4c72c4dfac004ffca0867a70361f77ab/',
                image:
                  'https://cdn-images-1.listennotes.com/podcasts/the-james-altucher/side-hustle-friday-monetize-LncxE9KjCgt-jDmTs6Nl-tr.1400x1400.jpg',
                title:
                  'Side Hustle Friday: Why should you START a podcast and MONETIZE your podcast through Ads and Patreon!',
                podcast: {
                  id: '6dabf2f65c384e1f897bb606859309f4',
                  image:
                    'https://cdn-images-1.listennotes.com/podcasts/the-james-altucher-show-james-altucher-ydcMlwOz5W7-sSHocv8YjIe.1400x1400.jpg',
                  title: 'The James Altucher Show',
                  publisher: 'James Altucher',
                  thumbnail:
                    'https://cdn-images-1.listennotes.com/podcasts/the-james-altucher-show-james-altucher-Hnzt-457Amb-sSHocv8YjIe.300x300.jpg',
                  listen_score: 67,
                },
                thumbnail:
                  'https://cdn-images-1.listennotes.com/podcasts/the-james-altucher/side-hustle-friday-monetize-qtbDBvrK5Ii-jDmTs6Nl-tr.300x300.jpg',
                description:
                  '<p>Another Side Hustle Friday! I sat down with Jay Yow, the Sound Engineer/ Producer of The James Altucher, to discuss ways to monetize a podcast, we spoke about why this is the best time to launch a podcast and our equipment set up for remote recording and interview. In this episode, we break down that\'s the different ways you can monetize through Ads, sponsors, affiliate deals, and Patreon! Part 2 will be coming soon Monday!</p>\n<hr>\n<p><strong>I write about all my podcasts! Check out the full post and learn what I learned at <a href="https://www.jamesaltucher.com/podcast">jamesaltucher.com/podcast</a>.</strong></p>\n<p><strong>Thanks so much for listening! If you like this episode, please subscribe to “The James Altucher Show” and rate and review wherever you get your podcasts:</strong></p>\n<p><a href="https://itunes.apple.com/us/podcast/the-james-altucher-show/id794030859?mt=2">Apple Podcasts</a></p>\n<p><a href="https://www.stitcher.com/podcast/stansberry-radio-network/the-james-altucher-show/e/52735033">Stitcher</a></p>\n<p><a href="https://www.iheart.com/podcast/232-The-James-Altucher-Show-27085086/episode/ep-298-ryan-holiday-competition-28789411/">iHeart Radio</a></p>\n<p><a href="https://open.spotify.com/episode/0ABi9w3Qrb2EFNDeeXlHyz">Spotify</a></p>\n<p> </p>\n<p><strong>Follow me on Social Media:</strong></p>\n<p><a href="https://www.youtube.com/channel/UCRQlx2klE_aNrPhz2OyKRdg">YouTube</a></p>\n<p><a href="https://twitter.com/jaltucher">Twitter</a></p>\n<p><a href="https://www.facebook.com/JAltucher.Blog/">Facebook</a></p>\n<p><a href="https://www.linkedin.com/in/jamesaltucher">Linkedin</a></p><p>See <a href="https://omnystudio.com/listener">omnystudio.com/listener</a> for privacy information.</p>',

                audio_length_sec: 3007,
              },
            },
            {
              id: 475796,
              data: {
                id: 'd5e2112643ac4d01baaa8eab6c7b7cae',
                audio:
                  'https://www.listennotes.com/e/p/d5e2112643ac4d01baaa8eab6c7b7cae/',
                image:
                  'https://cdn-images-1.listennotes.com/podcasts/the-james-altucher/side-hustle-friday-monetize-OBljDR14EC3-vZt0gi5hoDN.1400x1400.jpg',
                title: 'Side Hustle Friday: Monetize your podcast right now!',
                podcast: {
                  id: '6dabf2f65c384e1f897bb606859309f4',
                  image:
                    'https://cdn-images-1.listennotes.com/podcasts/the-james-altucher-show-james-altucher-ydcMlwOz5W7-sSHocv8YjIe.1400x1400.jpg',
                  title: 'The James Altucher Show',
                  publisher: 'James Altucher',
                  thumbnail:
                    'https://cdn-images-1.listennotes.com/podcasts/the-james-altucher-show-james-altucher-Hnzt-457Amb-sSHocv8YjIe.300x300.jpg',
                  listen_score: 67,
                },
                thumbnail:
                  'https://cdn-images-1.listennotes.com/podcasts/the-james-altucher/side-hustle-friday-monetize-i4IhCZMzQTl-vZt0gi5hoDN.300x300.jpg',
                description:
                  '<p>Part 2 on monetizing your podcast! In this episode, we talked about ways to monetize your podcast via merchandising, getting hired as a consultant through your podcast, speaking gigs, on and on! Also, enjoy Jay\'s episodic debut on the podcast! (Technically a second since this is a part of Friday\'s podcast!)</p>\n<hr>\n<p><strong>I write about all my podcasts! Check out the full post and learn what I learned at <a href="https://www.jamesaltucher.com/podcast">jamesaltucher.com/podcast</a>.</strong></p>\n<p><strong>Thanks so much for listening! If you like this episode, please subscribe to “The James Altucher Show” and rate and review wherever you get your podcasts:</strong></p>\n<p><a href="https://itunes.apple.com/us/podcast/the-james-altucher-show/id794030859?mt=2">Apple Podcasts</a></p>\n<p><a href="https://www.stitcher.com/podcast/stansberry-radio-network/the-james-altucher-show/e/52735033">Stitcher</a></p>\n<p><a href="https://www.iheart.com/podcast/232-The-James-Altucher-Show-27085086/episode/ep-298-ryan-holiday-competition-28789411/">iHeart Radio</a></p>\n<p><a href="https://open.spotify.com/episode/0ABi9w3Qrb2EFNDeeXlHyz">Spotify</a></p>\n<p> </p>\n<p><strong>Follow me on Social Media:</strong></p>\n<p><a href="https://www.youtube.com/channel/UCRQlx2klE_aNrPhz2OyKRdg">YouTube</a></p>\n<p><a href="https://twitter.com/jaltucher">Twitter</a></p>\n<p><a href="https://www.facebook.com/JAltucher.Blog/">Facebook</a></p>\n<p><a href="https://www.linkedin.com/in/jamesaltucher">Linkedin</a></p><p>See <a href="https://omnystudio.com/listener">omnystudio.com/listener</a> for privacy information.</p>',

                audio_length_sec: 2617,
              },
            },
          ],
          id: 'kr3-ta28cJu',
        })
      );
    }
  ),
];

export default playlistReq;

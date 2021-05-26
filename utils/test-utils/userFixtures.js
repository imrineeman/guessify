// Mock data for API tests
const fakeUser = {
  playlists: [
    '4rTbtLCApNz7nEFKPpIscN',
    '37i9dQZF1DX186v583rmzp',
    '7saDGCu8e21c1Ag4TBRMWE',
    '37i9dQZF1DX8Uebhn9wzrS',
    '5CZuGx4Wz5fWa3ohMeHOYA',
    '1zwzPY42OxZp8LLE7xoedZ',
    '5jX4aK19Mk6m5PhrkSPDBK',
    '5b00IL1M1gpmES7geCvdTK',
    '37i9dQZF1EM955QLDWn5fe',
    '30Mwl8RxusY27Vh7y7ArDx',
    '6ueSmpGXepWeAIehwbtGl2',
    '37i9dQZF1EuJfdIPaPkX29',
    '37i9dQZF1DX3Ogo9pFvBkY',
    '2sf2wo7leOlypzQDK1IRie',
    '4g6mxXak9fxKuMOfPYhDpH',
    '17FTW4ab3RP15DbfP9MMgi',
    '37i9dQZF1DWXLeA8Omikj7',
    '37i9dQZF1DWZeKCadgRdKQ',
    '37i9dQZF1DXc5h0hTDX230',
    '37i9dQZF1DWWQRwui0ExPn',
  ],
  spotifyId: '12345',
  username: 'Imri',
  spotifyName: 'Imri',
  email: 'neemanimri@gmail.com',
};

const fakePlaylist = {
  tracks: [

    {
      track: {
        album: {
          artists: [
            {
              external_urls: {
                spotify: 'https://open.spotify.com/artist/7qUcsMCdIHrs2LOZlmciQp',
              },
              href: 'https://api.spotify.com/v1/artists/7qUcsMCdIHrs2LOZlmciQp',
              id: '7qUcsMCdIHrs2LOZlmciQp',
              name: "Be'lakor",
              type: 'artist',
              uri: 'spotify:artist:7qUcsMCdIHrs2LOZlmciQp',
            },
          ],
          id: '1Y4CMOIbcORQnPqTvPhHRP',
          images: [
            {
              height: 640,
              url: 'https://i.scdn.co/image/ab67616d0000b273ed4b5e20cc5fe49757579c9f',
              width: 640,
            },
            {
              height: 300,
              url: 'https://i.scdn.co/image/ab67616d00001e02ed4b5e20cc5fe49757579c9f',
              width: 300,
            },
            {
              height: 64,
              url: 'https://i.scdn.co/image/ab67616d00004851ed4b5e20cc5fe49757579c9f',
              width: 64,
            },
          ],
          name: 'Of Breath and Bone',
          release_date: '2012-06-01',
        },
        id: '4yfgBNL6uHqXMpoUwkf29P',
        name: 'In Parting',
      },
    },
    {
      track: {
        album: {
          artists: [
            {
              external_urls: {
                spotify: 'https://open.spotify.com/artist/7qUcsMCdIHrs2LOZlmciQp',
              },
              href: 'https://api.spotify.com/v1/artists/7qUcsMCdIHrs2LOZlmciQp',
              id: '7qUcsMCdIHrs2LOZlmciQp',
              name: "Be'lakor",
              type: 'artist',
              uri: 'spotify:artist:7qUcsMCdIHrs2LOZlmciQp',
            },
          ],
          id: '1Y4CMOIbcORQnPqTvPhHRP',
          images: [
            {
              height: 640,
              url: 'https://i.scdn.co/image/ab67616d0000b273ed4b5e20cc5fe49757579c9f',
              width: 640,
            },
            {
              height: 300,
              url: 'https://i.scdn.co/image/ab67616d00001e02ed4b5e20cc5fe49757579c9f',
              width: 300,
            },
            {
              height: 64,
              url: 'https://i.scdn.co/image/ab67616d00004851ed4b5e20cc5fe49757579c9f',
              width: 64,
            },
          ],
          name: 'Of Breath and Bone',
          release_date: '2012-06-01',
        },
        id: '4FcE6WfFCq2kywHlqSjeka',
        name: 'Fraught',
      },
    },
    {
      track: {
        album: {
          artists: [
            {
              external_urls: {
                spotify: 'https://open.spotify.com/artist/7qUcsMCdIHrs2LOZlmciQp',
              },
              href: 'https://api.spotify.com/v1/artists/7qUcsMCdIHrs2LOZlmciQp',
              id: '7qUcsMCdIHrs2LOZlmciQp',
              name: "Be'lakor",
              type: 'artist',
              uri: 'spotify:artist:7qUcsMCdIHrs2LOZlmciQp',
            },
          ],
          id: '4VzCNpLiC373x4sb1DyxIn',
          images: [
            {
              height: 640,
              url: 'https://i.scdn.co/image/ab67616d0000b27389699e81670f73016fed371e',
              width: 640,
            },
            {
              height: 300,
              url: 'https://i.scdn.co/image/ab67616d00001e0289699e81670f73016fed371e',
              width: 300,
            },
            {
              height: 64,
              url: 'https://i.scdn.co/image/ab67616d0000485189699e81670f73016fed371e',
              width: 64,
            },
          ],
          name: "Stone's Reach",
          release_date: '2009-06-20',
        },
        id: '6WkjzMIrqvPIwB87m9Oloi',
        name: 'Countless Skies',
      },
    },
  ],
  playlistId: '23232323',
  userId: ['12345'],
};

module.exports = {
  fakeUser, fakePlaylist,
};

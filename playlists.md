**Show All Playlists**
----
  Returns json data about all fetched playlists.

* **URL**

  /api/playlists

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
    None
* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{
"userId": [
"5jnj21rsj8wrnnljdmkdh3jzf"
],
"tracks": [
{
"track": {
"album": {
"artists": [
{
"external_urls": {
"spotify": "https://open.spotify.com/artist/3pulcT2wt7FEG10lQlqDJL"
},
"href": "https://api.spotify.com/v1/artists/3pulcT2wt7FEG10lQlqDJL",
"id": "3pulcT2wt7FEG10lQlqDJL",
"name": "Amon Amarth",
"type": "artist",
"uri": "spotify:artist:3pulcT2wt7FEG10lQlqDJL"
}
],
"id": "6vpateiy0wXz9o376HI5F3",
"images": [
{
"height": 640,
"url": "https://i.scdn.co/image/ab67616d0000b273a8eb1699ff0cb3cc55f1b3af",
"width": 640
},
{
"height": 300,
"url": "https://i.scdn.co/image/ab67616d00001e02a8eb1699ff0cb3cc55f1b3af",
"width": 300
},
{
"height": 64,
"url": "https://i.scdn.co/image/ab67616d00004851a8eb1699ff0cb3cc55f1b3af",
"width": 64
}
],
"name": "With Oden On Our Side",
"release_date": "2006-10-03"
},
"id": "1Fj3SwH4PwLL0N1y6e0ojz",
"name": "Cry Of The Black Birds"
}
},
],
"playlistId": "1zwzPY42OxZp8LLE7xoedZ"
},
{
"userId": [
"5jnj21rsj8wrnnljdmkdh3jzf"
],
"tracks": [],
"playlistId": "4H0ySOzHtWX1K9GPSaACQz"
}`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "Playlist doesn't exist" }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "You are unauthorized to make this request." }`
    
**Show Specific Playlists**
----
  Returns json data about all fetched playlists.

* **URL**

  /api/playlists/:id

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
   `id=[integer]`
* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `
{
"userId": [
"5jnj21rsj8wrnnljdmkdh3jzf"
],
"tracks": [],
"playlistId": "4H0ySOzHtWX1K9GPSaACQz"
}`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "Playlist doesn't exist" }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "You are unauthorized to make this request." }`


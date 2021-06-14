*Show All Users*
----
  Returns json data about all users.

* **URL**

  /api/users

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `[{
                    "playlists": [
                      "4H0ySOzHtWX1K9GPSaACQz",
                      "37i9dQZF1EIUXSCDe2WuJl",],
                      "username": "Michal",
                      "spotifyName": "Bloom",
                      "spotifyId": "5jnj21rsj8wrnnlbkbkdsjzf",
                      "email": "michael@bloom.com"
                  },
                  {
                    "playlists": [],
                      "username": "Karen",
                      "spotifyName": "Bloom",
                      "spotifyId": "b2121rsj8wrnnlbkbkdsjzf",
                      "email": "karen@bloom.com"
                  }]`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "User doesn't exist" }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "You are unauthorized to make this request." }`
    
*Show Specific User*
----
  Returns json data about all users.

* **URL**

  /api/users/:d

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   id=[integer]

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `[{
                    "playlists": [
                      "4H0ySOzHtWX1K9GPSaACQz",
                      "37i9dQZF1EIUXSCDe2WuJl",],
                      "username": "Michal",
                      "spotifyName": "Bloom",
                      "spotifyId": "5jnj21rsj8wrnnlbkbkdsjzf",
                      "email": "michael@bloom.com"
                  }]`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "User doesn't exist" }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "You are unauthorized to make this request." }`
    
    

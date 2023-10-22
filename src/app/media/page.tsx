"use client";
import { setListData } from "./data";
import { useEffect, useState } from "react";
export default function Media() {
  const [accessToken, setAccessToken] = useState("");
  const [playlistData, setPlaylistData] = useState([]);
  const spotify_id = "0582e9a39b9243d8ad931b0286a23dfa";
  const spotify_Secret = "66dfa09386f5406b843cf990d7083b66";

  useEffect(() => {
    const authParams = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body:
        "grant_type=client_credentials&client_id=" +
        spotify_id +
        "&client_secret=" +
        spotify_Secret,
    };
    fetch("https://accounts.spotify.com/api/token", authParams)
      .then((res) => res.json())
      .then((data) => {
        fetch(
          "https://api.spotify.com/v1/playlists/17770zajOz2zdHNrmjyBmP/tracks",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + data.access_token,
            },
          }
        )
          .then((res) => res.json())
          .then((data) => setPlaylistData(data.items));
      });
  }, []);

  return (
    <div className="text-gray-600 body-font">
      <div className="flex flex-col text-center w-full mb-20">
        <h1 className="text-3xl font-extrabold sm:text-5xl underline underline-offset-8  title-font mb-4 text-gray-900 tracking-widest">
          SETLIST
        </h1>
        <div className="justify justify-around ">
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-xl">
            Here's a list of songs sure to get people out of there chairs on
            onto the dance floor!
          </p>
        </div>
      </div>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {playlistData.map((song) => {
            return (
              <div
                className="lg:w-1/4 md:w-1/2 p-4 w-full hover:scale-110 duration-150"
                key={song.track.external_urls.spotify}
              >
                <a
                  href={song.track.external_urls.spotify}
                  className="block relative h-48 rounded overflow-hidden"
                  target="_blank"
                >
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block rounded "
                    src={song.track.album.images[0].url}
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {song.track.artists[0].name}
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {song.track.name}
                  </h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GrPlayFill } from "react-icons/gr";

import YouTube from "react-youtube";

const MovieDetails = () => {
  const [user, SetUser] = useState({});
  const navigator = useNavigate();
  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:3006/movies/${params.id}`).then((response) =>
      response.json().then((data) => SetUser(data))
    );
  }, [params?.id]);

  return (
    <div className=" relative h-[150vh]  bg-black text-white">
      <YouTube
        containerClassName={"youtube"}
        videoId={`${user.video_id}`}
        opts={{
          width: "1500",
          height: "700",
          padding: 0,
          margin: 0,
          playerVars: { autoplay: 1, controls: 0 },
        }}
      ></YouTube>
      <button
        onClick={() => navigator("/home")}
        className="absolute top-[10px] right-[50px] p-[10px] bg-red-600 rounded-[50%]"
      >
        X
      </button>
      <div className="banner top-[300px] left-[80px] absolute ml-2">
        <div className="banner-container1">
          <h1 className="banner-title">
            {user?.title || user?.name || user?.original_name}
          </h1>
        </div>
        <div className="banner-container2 relative ">
          <button className="banner-bt1 ">Play</button>
          <GrPlayFill className="absolute top-[23px] left-[26px] text-[25px]" />
        </div>
        <h1 className="banner-description">{user?.overview}</h1>
        <div className="banner-container3"></div>
      </div>

      <div className="m-[26px]">
        <h1 className="font-bold text-[25px] mt-[10px] mb-[10px]">
          About {user.original_title}
        </h1>
        <h1>Popularity : {user.popularity}</h1>
        <h1>Release date : {user.release_date}</h1>
        <h1>Vote average : {user.vote_average}</h1>
        <h1>Vote count : {user.vote_count}</h1>
      </div>
    </div>
  );
};

export default MovieDetails;
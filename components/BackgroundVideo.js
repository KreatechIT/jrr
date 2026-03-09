import YouTube from "react-youtube";

export const BackgroundVideo = () => {
  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
      controls: 0,
      loop: 1,
      playlist: "1q0O82Schh4",
      disablekb: 1,
      fs: 0,
      mute: 1,
    },
  };

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute -top-[30px] left-0 w-full h-full z-10 pointer-events-none">
        <div className="absolute object-cover object-center top-0 left-0 w-full laptop:h-full mobile:h-full z-0">
          <YouTube
            videoId="1q0O82Schh4"
            opts={opts}
            className="w-screen scale-125 h-screen "
          />
        </div>
      </div>
    </div>
  );
};

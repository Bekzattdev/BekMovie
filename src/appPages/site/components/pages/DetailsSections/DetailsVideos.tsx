"use client";
import {
  useGetVideosMovieQuery,
  useGetVideosTvQuery,
} from "@/redux/api/details";
import scss from "./DetailsVideos.module.scss";
import ReactPlayer from "react-player";
import {
  AwaitedReactNode,
  FC,
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  ReactPortal,
} from "react";
import { IoCaretForwardCircleOutline } from "react-icons/io5";
import { useParams } from "next/navigation";
import { useHeaderStore } from "@/stores/useHeaderStore";

const DetailsVideos: FC = () => {
  const { tvQuery, movieQuery } = useParams();
  const { data: videosMovie } = useGetVideosMovieQuery(+movieQuery);
  const { data: videosTv } = useGetVideosTvQuery(+tvQuery);
  const videos = videosMovie?.results ? videosMovie : videosTv;
  const { videoKey, setVideoKey } = useHeaderStore();

  return (
    <div className={scss.DetailsVideos}>
      <div className={scss.content}>
        {videos?.results[0] ? <h1>Official Videos</h1> : null}
        <div className={scss.videos}>
          {videos?.results.map(
            (
              item: {
                key: string;
                name:
                  | string
                  | number
                  | bigint
                  | boolean
                  | ReactElement<any, string | JSXElementConstructor<any>>
                  | Iterable<ReactNode>
                  | ReactPortal
                  | Promise<AwaitedReactNode>
                  | null
                  | undefined;
              },
              index: Key | null | undefined
            ) => (
              <div
                onClick={() => {
                  setVideoKey(item.key);
                }}
                key={index}
                className={scss.videos_block}
              >
                <img
                  src={`https://img.youtube.com/vi/${item.key}/mqdefault.jpg`}
                  alt="image"
                />
                <h1>{item.name}</h1>
                <span>
                  <IoCaretForwardCircleOutline />
                </span>
              </div>
            )
          )}
        </div>
        {videoKey ? (
          <div className={scss.modalVideo} onClick={() => setVideoKey("")}>
            <div className={scss.videoPlayer}>
              <ReactPlayer
                controls
                playing
                width="100%"
                height="100%"
                url={`https://www.youtube.com/embed/${videoKey}`}
              />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default DetailsVideos;

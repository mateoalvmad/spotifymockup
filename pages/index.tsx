import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { Layout } from "@/layouts/layout";
import PlaylistCard from "@/components/PlaylistCard";

const inter = Inter({ subsets: ["latin"] });

const playlistInfo = {
  focus: [
    {
      image: "/media/piano.png",
      name: "Peaceful Piano",
      description: "Relax and indulge with beautiful piano pieces.",
    },
    {
      image: "/media/descarga.png",
      name: "YGBK Stitch",
      description: "You Gotta Be kidding Me!",
    },
  ],
};

export default function Home() {
  return (
    <>
      <Layout>
        <section className="main-content">
          <div className="playlist-section">
            <div className="playlist-section-header">
              <Link href={"/mateo"}>mateo</Link>
              <span className="playlist-section-header-tittle">Focus</span>
              <h1>Show all</h1>
            </div>
            <div className="playlist-section-container">
              {playlistInfo.focus.map((playlist, index) => {
                return (
                  <PlaylistCard
                    key={`${playlist.name}_${index}`}
                    description={playlist.description}
                    image={playlist.image}
                    name={playlist.name}
                  />
                );
              })}
            </div>
          </div>
          <div className="playlist-section">
            <div className="playlist-section-header">
              <span className="playlist-section-header-tittle">
                Spotify Playlist
              </span>
              <h1>Show all</h1>
            </div>
            <div className="playlist-section-container">
              {playlistInfo.focus.map((playlist, index) => {
                return (
                  <PlaylistCard
                    key={`${playlist.name}_${index}`}
                    description={playlist.description}
                    image={playlist.image}
                    name={playlist.name}
                  />
                );
              })}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

const IndexPage = () => {
  
}

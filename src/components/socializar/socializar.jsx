import React from "react";
import './socializar.css';
import {FaGithub,
    FaTwitter,
    FaFacebookF,
    FaLinkedin,
    FaYoutube,
    FaTwitch,} from "react-icosn/fa"
import { perfis } from "../../infos";

export const Socialicons = (params) => {
    return (
      <div className="stick_follow_icon">
        <ul>
          {perfis.twitter && (
            <li>
              <a href={perfis.twitter}>
                <FaTwitter />
              </a>
            </li>
          )}
          {perfis.github && (
            <li>
              <a href={perfis.github}>
                <FaGithub />
              </a>
            </li>
          )}
          {perfis.facebook && (
            <li>
              <a href={perfis.facebook}>
                <FaFacebookF />
              </a>
            </li>
          )}
          {perfis.linkedin && (
            <li>
              <a href={perfis.linkedin}>
                <FaLinkedin />
              </a>
            </li>
          )}
          {perfis.youtube && (
            <li>
              <a href={perfis.youtube}>
                <FaYoutube />
              </a>
            </li>
          )}
          {perfis.twitch && (
            <li>
              <a href={perfis.twitch}>
                <FaTwitch />
              </a>
            </li>
          )}
        </ul>
        <p>Follow Me</p>
      </div>
    );
  };
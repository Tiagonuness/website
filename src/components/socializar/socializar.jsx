import React from "react";
import './socializar.css';
import {FaGithub,
    FaTwitter,
    FaLinkedin,
    FaInstagram,} from "react-icons/fa"
import { perfis } from "../../infos";

function Socializar() {
  return (
    <div className="iconsPerfis">
      <ul>
        {perfis.twitter && (
          <li>
            <a href={perfis.twitter}>
              <FaTwitter/>
            </a>
          </li>
        )}
        {perfis.github && (
            <li>
              <a href={perfis.github}>
                <FaGithub/>
              </a>
            </li>
          )
        }
        {perfis.linkedin && (
          <li>
            <a href={perfis.linkedin}>
              <FaLinkedin/>
            </a>
          </li>
        )
        }
        {perfis.instagram && (
          <li>
            <a href={perfis.instagram}>
              <FaInstagram/>
            </a>
          </li>
        )
        }
      </ul>
    </div>
  )
}

export default Socializar
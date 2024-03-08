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
            <a href={perfis.twitter} target="_blank">
              <FaTwitter/>
            </a>
          </li>
        )}
        {perfis.github && (
            <li>
              <a href={perfis.github} target="_blank">
                <FaGithub/>
              </a>
            </li>
          )
        }
        {perfis.linkedin && (
          <li>
            <a href={perfis.linkedin} target="_blank">
              <FaLinkedin/>
            </a>
          </li>
        )
        }
        {perfis.instagram && (
          <li>
            <a href={perfis.instagram} target="_blank">
              <FaInstagram/>
            </a>
          </li>
        )
        }
      </ul>
      <p>Me Siga</p>
    </div>
  )
}

export default Socializar
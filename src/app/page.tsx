import Image from "next/image";
import type { CSSProperties } from "react";
import { GitHubIcon, LinkedInIcon, MastodonIcon, PawIcon } from "./icons";

const links = [
  {
    name: "LinkedIn",
    href: "https://ph.linkedin.com/in/aqlx86",
    Icon: LinkedInIcon,
  },
  {
    name: "GitHub",
    href: "https://github.com/aqlx86",
    Icon: GitHubIcon,
  },
  {
    name: "Mastodon",
    href: "https://mastodon.social/@aqlx86",
    rel: "me noopener noreferrer",
    Icon: MastodonIcon,
  },
  {
    name: "Petiply",
    href: "https://petiply.com/u/@fox",
    Icon: PawIcon,
  },
];

const year = new Date().getFullYear();
const bootLine = `AQL-OS v${String(year).slice(2)}.10 > booting profile ... [ OK ]`;

// The card tilts in once the boot line has finished typing.
const CHAR_MS = 18;
const typeTiming = { "--n": bootLine.length, "--d": "0ms" } as CSSProperties;
const cardDelay = {
  "--d": `${bootLine.length * CHAR_MS + 150}ms`,
} as CSSProperties;

export default function Home() {
  return (
    <div className="screen">
      <div className="stage">
        <p className="boot type" style={typeTiming} aria-hidden="true">
          {bootLine}
        </p>

        <main className="card" style={cardDelay}>
          <div className="avatar">
            <span className="ring">
              <Image
                src="/images/profile.jpg"
                alt="Arnel Q. Labarda"
                width={256}
                height={256}
                priority
              />
            </span>
          </div>

          <h1>Arnel Q. Labarda</h1>
          <p className="tagline">programmer / gamer / rider</p>

          <nav aria-label="Profiles">
            <ul className="icons">
              {links.map(({ name, href, rel, Icon }) => (
                <li key={name}>
                  <a
                    href={href}
                    target="_blank"
                    rel={rel ?? "noopener noreferrer"}
                    title={name}
                  >
                    <Icon />
                    <span className="sr-only">{name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </main>

        <footer className="footer" style={cardDelay}>
          <p aria-hidden="true">
            &gt; <span className="cursor" />
          </p>
          <p>© {year} ARNEL Q. LABARDA</p>
        </footer>
      </div>
    </div>
  );
}

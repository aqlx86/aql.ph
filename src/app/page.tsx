import Image from "next/image";

const links = [
  {
    name: "LinkedIn",
    handle: "in/aqlx86",
    href: "https://ph.linkedin.com/in/aqlx86",
  },
  {
    name: "GitHub",
    handle: "aqlx86",
    href: "https://github.com/aqlx86",
  },
  {
    name: "Mastodon",
    handle: "@aqlx86@mastodon.social",
    href: "https://mastodon.social/@aqlx86",
    rel: "me noopener noreferrer",
  },
  {
    name: "Petiply",
    handle: "@fox",
    href: "https://petiply.com/u/@fox",
  },
];

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <div className="wrap">
      <header className="meta">
        <span>AQL.PH</span>
        <span>Index — {year}</span>
      </header>

      <main>
        <section className="hero">
          <div className="photo">
            <Image
              src="/images/profile.jpg"
              alt="Arnel Q. Labarda"
              width={480}
              height={600}
              priority
            />
          </div>
          <div className="intro">
            <h1 className="name">
              Arnel
              <br />
              Q. Labarda
            </h1>
            <p className="tagline">programmer / gamer / rider</p>
          </div>
        </section>

        <section className="elsewhere" aria-labelledby="elsewhere-title">
          <h2 id="elsewhere-title" className="section-label">
            <span aria-hidden="true">§ 01</span>
            Elsewhere
          </h2>
          <ol className="links">
            {links.map(({ name, handle, href, rel }, i) => (
              <li key={name}>
                <a
                  className="row"
                  href={href}
                  target="_blank"
                  rel={rel ?? "noopener noreferrer"}
                >
                  <span className="num" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="label">{name}</span>
                  <span className="handle">{handle}</span>
                  <span className="ext" aria-hidden="true">
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </section>
      </main>

      <footer className="site-footer">
        <span>© {year} Arnel Q. Labarda</span>
        <span>Built with Next.js</span>
      </footer>
    </div>
  );
}

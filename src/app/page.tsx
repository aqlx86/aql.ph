import Image from "next/image";

export default function Home() {
  return (
    <div id="wrapper">
      <section id="main">
        <header>
          <span className="avatar">
            <Image
              src="/images/me.jpg"
              alt="Arnel Q. Labarda"
              width={200}
              height={200}
            />
          </span>
          <h1>Arnel Q. Labarda</h1>
          <p>programmer / gamer / rider</p>
        </header>

        <footer>
          <ul className="icons">
            <li>
              <a
                href="http://ph.linkedin.com/in/aqlx86"
                target="_blank"
                rel="noopener noreferrer"
                className="fa-linkedin"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/aqlx86"
                target="_blank"
                rel="noopener noreferrer"
                className="fa-github"
              >
                Github
              </a>
            </li>
            <li>
              <a
                href="https://paypal.me/aqlx86"
                target="_blank"
                rel="noopener noreferrer"
                className="fa-paypal"
              >
                Paypal
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@PSKMoto?sub_confirmation=1"
                target="_blank"
                rel="noopener noreferrer"
                className="fa-youtube"
              >
                Youtube
              </a>
            </li>
          </ul>
        </footer>
      </section>

      <footer id="footer"></footer>
    </div>
  );
}

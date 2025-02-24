import { DappledLight } from "../components/dappled-light";
import { Github, Twitter } from "lucide-react";
import Image from "next/image";
import { ThemeSwitcher } from "../components/theme-switcher";
import Link from "next/link";
import { Design } from "../components/design";
import { Projects } from "../components/projects";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <DappledLight />
      <main className="relative px-6 pt-24 mx-auto max-w-3xl z-10">
        <Header />
        <About />
        <Design />
        <Projects />
      </main>
    </div>
  );
}

import { Grey_Qo } from "next/font/google";

const greyQo = Grey_Qo({
  weight: "400",
  subsets: ["latin"],
});

const Header = () => {
  return (
    <section className="mb-16 flex items-start justify-between">
      <div className="flex items-start gap-6">
        <Image
          src="https://github.com/gitstar-oc.png"
          alt="OC's GitHub profile"
          width={100}
          height={100}
          className="rounded-full"
        />
        <div>
          <h1
            className={`${greyQo.className}  text-5xl mb-2 text-morning-heading dark:text-night-heading`}
          >
            OC
          </h1>
          <p
            className={` font-serif  text-lg mb-4 text-morning-text dark:text-night-text opacity-80`}
          >
            Design and AI Engineer
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <a
          href="https://x.com/IamnotOC"
          target="_blank"
          rel="noopener noreferrer"
          className="text-morning-text dark:text-night-text hover:text-morning-link dark:hover:text-night-link transition-colors duration-200"
        >
          <Twitter className="w-5 h-5" />
        </a>
        <a
          href="https://github.com/Gitstar-OC"
          target="_blank"
          rel="noopener noreferrer"
          className="text-morning-text dark:text-night-text hover:text-morning-link dark:hover:text-night-link transition-colors duration-200"
        >
          <Github className="w-5 h-5" />
        </a>
        <ThemeSwitcher />
      </div>
    </section>
  );
};

const About: React.FC = () => {
  return (
    <section className="mb-16 font-mono">
      <p className="text-lg mb-4 text-morning-text dark:text-night-text opacity-70">
        Hello, I am{" "}
        <Link
          href="https://github.com/Gitstar-OC"
          className="text-morning-link dark:text-night-link hover:underline"
        >
          OC
        </Link>
        , a 17 year old teen and currently I am a <i>design</i> and{" "}
        <i>ai / machine</i> <i>engineer</i>. I love to make great websites,
        animations and automate things. I am also a member of{" "}
        <Link
          href="https://hackclub.com"
          className="text-morning-link dark:text-night-link hover:underline"
        >
          hackclub
        </Link>{" "}
        where I help in various <i>activities</i> including helping with ongoing
        events, organizing them and updating the source code.
      </p>
      <p className="text-lg mb-4 text-morning-text dark:text-night-text opacity-70">
        I am also{" "}
        <span
          className="tooltip"
          data-tooltip="Participant in a lot of hackathons (40+)"
        >
          a pro hackathon participator{" "}
        </span>{" "}
        both physical and online and I have won 5 hackathons till date with lot
        of great prices including both cash and non cash (credits etc.)
      </p>
      <p className="text-lg mb-4 text-morning-text dark:text-night-text opacity-70">
        Other than this I love contributing to open source and collaborating
        with new people.
      </p>
    </section>
  );
};

import { DappledLight } from "../components/dappled-light"
import { Github, Twitter } from "lucide-react"
import Image from "next/image"
import { ThemeSwitcher } from "../components/theme-switcher"
import Link from "next/link"
import { FontProvider } from "../components/font-provider"
import { Design } from "../components/design"
import { Projects } from "../components/projects"

export default function Home() {
  return (
    <FontProvider>
      <div className="min-h-screen relative overflow-hidden">
        <DappledLight />
        <main className="relative px-6 pt-24 mx-auto max-w-3xl z-10">
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
                <h1 className="title" style={{ fontFamily: "var(--font-grey-qo)" }}>
                  OC
                </h1>
                <p className="subtitle" style={{ fontFamily: "var(--font-roboto-slab)" }}>
                  Design and AI Engineer
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://x.com/IamnotOC"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-current transition-colors duration-200"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/Gitstar-OC"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-current transition-colors duration-200"
              >
                <Github className="w-5 h-5" />
              </a>
              <ThemeSwitcher />
            </div>
          </section>

          <section className="mb-16">
            <p className="text">
              Hello, I am{" "}
              <Link href="https://github.com/Gitstar-OC" className="inline-link">
                OC
              </Link>
              , a 17 year old teen and currently I am a <i>design</i> and <i>ai / machine</i> <i>engineer</i>. I love to
              make great websites, animations and automate things. I am also a member of{" "}
              <Link href="https://hackclub.com" className="inline-link">
                hackclub
              </Link>{" "}
              where I help in various <i>activities</i> including helping with ongoing events, organizing them and
              updating the source code.
            </p>
            <p className="text">
              I am also{" "}
              <span className="tooltip" data-tooltip="Participant in a lot of hackathons (40+)">
                a pro hackathon participator{" "}
              </span>{" "}
              both physical and online and I have won 5 hackathons till date with lot of great prices including both
              cash and non cash (credits etc.)
            </p>
            <p className="text">
              Other than this I love contributing to open source and collaborating with new people.
            </p>
          </section>

          <Design />
          <Projects />
        </main>
      </div>
    </FontProvider>
  )
}


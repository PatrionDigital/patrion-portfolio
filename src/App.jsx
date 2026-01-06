import React, { useState, useEffect, useRef } from "react";
import {
  Mail,
  GamepadIcon,
  Coins,
  Code,
  Zap,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DragonflyLineIcon } from "@/components/icons/mingcute-dragonfly-line";
import { FarcasterIcon } from "@/components/icons/farcaster";
import { motion, useScroll, useTransform } from "framer-motion";

const Portfolio = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [dragonflyPositions] = useState(() =>
    Array.from({ length: 5 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      rotation: Math.random() * 360,
      speed: 0.2 + Math.random() * 0.3,
    }))
  );

  const [animatedPositions, setAnimatedPositions] =
    useState(dragonflyPositions);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedPositions((prev) =>
        prev.map((pos) => ({
          ...pos,
          x: (pos.x + pos.speed) % 100,
          y: pos.y + Math.sin(Date.now() * 0.001 + pos.id) * 0.1,
          rotation: pos.rotation + 0.5,
        }))
      );
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const DragonFly = ({ position }) => (
    <div
      className="fixed pointer-events-none opacity-20 text-blue-300 z-0"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        transform: `rotate(${position.rotation}deg)`,
        transition: "left 0.1s linear, top 0.1s linear",
      }}
    >
      <DragonflyLineIcon className="w-6 h-6" />
    </div>
  );

  const PageCard = ({ children, index, total }) => {
    const targetScale = 1 - (total - index) * 0.05;
    const range = [index * 0.25, 1];
    const scale = useTransform(scrollYProgress, range, [1, targetScale]);

    return (
      <div
        className="h-screen flex items-center justify-center sticky"
        style={{ top: `calc(-5vh + ${index * 25}px)` }}
      >
        <motion.div
          style={{ scale }}
          className="w-full h-full relative origin-top"
        >
          {children}
        </motion.div>
      </div>
    );
  };

  const pages = [
    // Hero Page
    <div className="w-full h-full bg-gradient-to-br from-slate-900 via-blue-900 to-black text-white flex items-center justify-center px-4">
      <div className="text-center z-10">
        <div className="mb-8">
          <DragonflyLineIcon className="w-32 h-32 mx-auto mb-4 text-blue-400 animate-pulse" />
          <h1 className="text-7xl font-bold mb-4 bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Patrion
          </h1>
          <div className="text-2xl text-blue-300 mb-8">
            Game Designer & Blockchain Developer
          </div>
        </div>
        <div className="flex flex-wrap gap-6 justify-center mb-12">
          <div className="flex items-center gap-2 bg-blue-900/30 px-4 py-2 rounded-full backdrop-blur-sm border border-blue-500/20">
            <GamepadIcon className="w-5 h-5 text-blue-400" />
            <span className="text-blue-300">Unity & C#</span>
          </div>
          <div className="flex items-center gap-2 bg-blue-900/30 px-4 py-2 rounded-full backdrop-blur-sm border border-blue-500/20">
            <Coins className="w-5 h-5 text-blue-400" />
            <span className="text-blue-300">Solidity & Web3</span>
          </div>
          <div className="flex items-center gap-2 bg-blue-900/30 px-4 py-2 rounded-full backdrop-blur-sm border border-blue-500/20">
            <Code className="w-5 h-5 text-blue-400" />
            <span className="text-blue-300">React & TypeScript</span>
          </div>
        </div>
        <div className="text-gray-300 max-w-2xl mx-auto">
          Creating immersive digital experiences through innovative game design
          and cutting-edge blockchain technology.
        </div>
      </div>
    </div>,

    // About Page
    <div className="w-full h-full bg-gradient-to-br from-blue-900 via-slate-800 to-black text-white flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto p-8 z-10">
        <div className="text-center mb-12">
          <DragonflyLineIcon className="w-24 h-24 mx-auto mb-4 text-blue-400" />
          <h2 className="text-5xl font-bold mb-8 bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            About Me
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300">
              I'm a passionate developer who bridges the gap between traditional
              game development and the innovative world of blockchain
              technology. With expertise in Unity and C#, I create engaging
              gaming experiences that captivate players.
            </p>
            <p className="text-lg text-gray-300">
              My blockchain development skills in Solidity and Web3 technologies
              allow me to pioneer new forms of digital ownership and
              decentralized gaming economies. I believe in creating experiences
              that are not just fun, but also meaningful and empowering for
              users.
            </p>
            <p className="text-lg text-gray-300">
              When I'm not coding, you'll find me exploring the latest in game
              design trends, studying blockchain innovations, or contributing to
              open-source projects that push the boundaries of what's possible
              in interactive entertainment.
            </p>
          </div>
          <Card className="bg-blue-900/20 border-blue-500/20">
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <GamepadIcon className="w-6 h-6 text-blue-400" />
                    <span className="text-blue-300 font-semibold">
                      Game Design Philosophy
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Player-centric design with emphasis on meaningful choices
                    and emergent gameplay.
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Coins className="w-6 h-6 text-blue-400" />
                    <span className="text-blue-300 font-semibold">
                      Blockchain Vision
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Democratizing digital ownership and creating sustainable
                    gaming economies.
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Zap className="w-6 h-6 text-blue-400" />
                    <span className="text-blue-300 font-semibold">
                      Innovation Focus
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Merging cutting-edge technology with timeless game design
                    principles.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>,

    // Skills Page
    <div className="w-full h-full bg-gradient-to-br from-slate-800 via-blue-900 to-black text-white flex items-center justify-center px-4 overflow-y-auto py-20">
      <div className="max-w-6xl mx-auto p-8 z-10">
        <div className="text-center mb-12">
          <DragonflyLineIcon className="w-24 h-24 mx-auto mb-4 text-blue-400" />
          <h2 className="text-5xl font-bold mb-8 bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-blue-900/20 border-blue-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-blue-300">
                <GamepadIcon className="w-8 h-8 text-blue-400" />
                Game Development
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Unity Engine</span>
                <div className="w-32 bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-blue-400 h-2 rounded-full"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">C# Programming</span>
                <div className="w-32 bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-blue-400 h-2 rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Game Design</span>
                <div className="w-32 bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-blue-400 h-2 rounded-full"
                    style={{ width: "95%" }}
                  ></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">3D Modeling</span>
                <div className="w-32 bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-blue-400 h-2 rounded-full"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-blue-900/20 border-blue-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-blue-300">
                <Coins className="w-8 h-8 text-blue-400" />
                Blockchain Development
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Solidity</span>
                <div className="w-32 bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-blue-400 h-2 rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Web3.js</span>
                <div className="w-32 bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-blue-400 h-2 rounded-full"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Smart Contracts</span>
                <div className="w-32 bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-blue-400 h-2 rounded-full"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">DeFi Protocols</span>
                <div className="w-32 bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-blue-400 h-2 rounded-full"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-blue-900/20 border-blue-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-blue-300">
                <Code className="w-8 h-8 text-blue-400" />
                Web Development
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">React</span>
                <div className="w-32 bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-blue-400 h-2 rounded-full"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">JavaScript</span>
                <div className="w-32 bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-blue-400 h-2 rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">TypeScript</span>
                <div className="w-32 bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-blue-400 h-2 rounded-full"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Vite</span>
                <div className="w-32 bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-blue-400 h-2 rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-blue-900/20 border-blue-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-blue-300">
                <Zap className="w-8 h-8 text-blue-400" />
                Tools & Platforms
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {[
                  "Git",
                  "Docker",
                  "AWS",
                  "Ethereum",
                  "Polygon",
                  "Hardhat",
                  "Truffle",
                  "MetaMask",
                  "IPFS",
                  "The Graph",
                  "OpenZeppelin",
                  "Chainlink",
                ].map((tool) => (
                  <span
                    key={tool}
                    className="bg-blue-700/30 text-blue-300 px-3 py-1 rounded-full text-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>,

    // Projects Page
    <div className="w-full h-full bg-gradient-to-br from-black via-blue-900 to-slate-800 text-white flex items-center justify-center px-4">
      <div className="max-w-6xl mx-auto p-8 z-10">
        <div className="text-center mb-12">
          <DragonflyLineIcon className="w-24 h-24 mx-auto mb-4 text-blue-400" />
          <h2 className="text-5xl font-bold mb-8 bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Featured Projects
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: Coins,
              title: "Kiss MINT Dash",
              desc: "A gamified NFT minting dashboard with dynamic pricing mechanics and real-time analytics. Features instant wallet integration and batch minting capabilities.",
              tags: ["Solidity", "React", "Web3", "NFT"],
            },
            {
              icon: GamepadIcon,
              title: "SecondOrder.fun",
              desc: "An innovative prediction market platform leveraging blockchain for transparent, decentralized betting on real-world events with automated settlement.",
              tags: ["Solidity", "TypeScript", "DeFi", "Oracles"],
            },
          ].map((project, i) => (
            <Card
              key={i}
              className="bg-blue-900/20 border-blue-500/20 hover:border-blue-400/40 transition-colors"
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-blue-300">
                  <project.icon className="w-8 h-8 text-blue-400" />
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-300">
                  {project.desc}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-blue-700/30 text-blue-300 px-2 py-1 rounded text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="default"
                    size="sm"
                    className="bg-blue-600 hover:bg-blue-500"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                  <Button variant="secondary" size="sm">
                    <Code className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>,

    // Contact Page
    <div className="w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white flex items-center justify-center px-4 overflow-y-auto py-20">
      <div className="max-w-4xl mx-auto p-8 z-10">
        <div className="text-center mb-12">
          <DragonflyLineIcon className="w-24 h-24 mx-auto mb-4 text-blue-400" />
          <h2 className="text-5xl font-bold mb-8 bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-gray-300 text-lg">
            Let's build something amazing together. Whether you need a game
            designer or blockchain developer, I'm here to help.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-blue-900/20 border-blue-500/20">
            <CardHeader>
              <CardTitle className="text-blue-300">Connect With Me</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                {
                  label: "Email",
                  value: "psd@patrion.xyz",
                  href: "mailto:psd@patrion.xyz",
                  icon: "✉️",
                },
                {
                  label: "GitHub",
                  value: "github.com/patrion",
                  href: "https://github.com/patrion",
                  icon: "🐙",
                },
                {
                  label: "LinkedIn",
                  value: "patricksiondavis",
                  href: "https://www.linkedin.com/in/patricksiondavis",
                  icon: "💼",
                },
                {
                  label: "X (Twitter)",
                  value: "@PatrionDigital",
                  href: "https://twitter.com/PatrionDigital",
                  icon: "𝕏",
                },
              ].map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={contact.icon !== "✉️" ? "_blank" : undefined}
                  rel={
                    contact.icon !== "✉️" ? "noopener noreferrer" : undefined
                  }
                  className="flex items-center gap-4 p-4 bg-blue-800/20 rounded-lg hover:bg-blue-800/40 transition-colors"
                >
                  <div className="w-6 h-6 text-blue-400 flex items-center justify-center text-xl">
                    {contact.icon}
                  </div>
                  <div>
                    <div className="text-blue-300 font-semibold">
                      {contact.label}
                    </div>
                    <div className="text-gray-400 text-sm">{contact.value}</div>
                  </div>
                </a>
              ))}
              <a
                href="https://warpcast.com/patrion"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-blue-800/20 rounded-lg hover:bg-blue-800/40 transition-colors"
              >
                <FarcasterIcon className="w-6 h-6 text-blue-400" />
                <div>
                  <div className="text-blue-300 font-semibold">Farcaster</div>
                  <div className="text-gray-400 text-sm">patrion.base.eth</div>
                </div>
              </a>
            </CardContent>
          </Card>
          <Card className="bg-blue-900/20 border-blue-500/20">
            <CardHeader>
              <CardTitle className="text-blue-300">Quick Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <label className="block text-blue-300 mb-2 text-sm">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-blue-900/30 border border-blue-500/30 rounded px-4 py-2 text-white focus:outline-none focus:border-blue-400"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-blue-300 mb-2 text-sm">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full bg-blue-900/30 border border-blue-500/30 rounded px-4 py-2 text-white focus:outline-none focus:border-blue-400"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-blue-300 mb-2 text-sm">
                    Message
                  </label>
                  <textarea
                    className="w-full bg-blue-900/30 border border-blue-500/30 rounded px-4 py-2 text-white focus:outline-none focus:border-blue-400 h-24 resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-500"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
        <div className="text-center mt-12 text-gray-400">
          <p>© 2025 Patrion. All rights reserved.</p>
          <p className="text-sm mt-2">
            Built with React & passion for innovation
          </p>
        </div>
      </div>
    </div>,
  ];

  return (
    <div className="relative bg-black">
      {animatedPositions.map((pos) => (
        <DragonFly key={pos.id} position={pos} />
      ))}

      <div ref={containerRef} className="relative">
        {pages.map((page, index) => (
          <PageCard key={index} index={index} total={pages.length}>
            {page}
          </PageCard>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

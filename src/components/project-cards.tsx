"use client";

import * as React from "react";
import Link from "next/link";
import { Swords, WalletCards, Shapes } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CanvasRevealEffect } from "@/components/canvas-flickering-grid";
import { ActivePulse } from "@/components/active-pulse";

const PROJECTS: ProjectCardProps[] = [
  {
    title: "Mars",
    summary:
      "A chess engine in Python with AI opponents and multiplayer support.",
    icon: <Swords className="text-black fill-black" size={20} />,
    githubLink: "https://www.github.com/jackquinlan/mars",
    productionLink: "https://chess.jackquinlan.me",
    colorList: [
      [220, 38, 38],
      [248, 113, 113],
    ],
  },
  {
    title: "Fintrack",
    summary:
      "A chess engine in Python with AI opponents and multiplayer support.",
    icon: <WalletCards className="text-black fill-black" size={20} />,
    githubLink: "https://www.github.com/jackquinlan/mars",
    productionLink: "https://chess.jackquinlan.me",
    colorList: [
      [22, 163, 74],
      [74, 222, 128],
    ],
  },
  {
    title: "Blueprint",
    summary:
      "A Next.js project blueprint with everything you need to build cool stuff.",
    icon: <Shapes className="text-black fill-black" size={20} />,
    githubLink: "https://www.github.com/jackquinlan/mars",
    productionLink: "https://chess.jackquinlan.me",
    colorList: [
      [37, 99, 235],
      [96, 165, 250],
    ],
  },
];

interface ProjectCardProps {
  title: string;
  summary?: string;
  icon?: React.ReactNode;
  colorList?: number[][];
  githubLink: string;
  productionLink?: string;
}

export function ProjectCards() {
  return (
    <div className="grid gap-4">
      {PROJECTS.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  );
}

function ProjectCard({
  title,
  summary,
  icon,
  githubLink,
  productionLink,
  colorList,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isClicked, setIsClicked] = React.useState(false);

  const contentRef = React.useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = React.useState(0);

  // Measure the content height when it changes
  React.useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [isClicked]);

  const handleCardClick = (e: React.MouseEvent) => {
    // Prevent expansion when clicking on buttons
    if (
      (e.target as HTMLElement).closest("a") ||
      (e.target as HTMLElement).closest("button")
    ) {
      return;
    }
    setIsClicked(!isClicked);
  };

  return (
    <Card
      className="relative overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
    >
      <CardContent>
        <div className="flex items-start gap-3">
          <Card className="relative w-16 h-16 flex items-center justify-center overflow-hidden shadow-none">
            {(isHovered || isClicked) && (
              <div className="absolute inset-0 rounded-md overflow-hidden">
                <CanvasRevealEffect
                  animationSpeed={4}
                  colors={colorList}
                  containerClassName="bg-white"
                />
              </div>
            )}
            <div className="relative z-10 flex items-center justify-center w-8 h-8 bg-white rounded-full border">
              {icon}
            </div>
          </Card>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h3 className="text-lg">{title}</h3>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" asChild>
                  <Link href={githubLink} target="_blank">
                    GitHub
                  </Link>
                </Button>
                {productionLink && (
                  <Button size="sm" variant="outline" asChild>
                    <Link href={productionLink} target="_blank">
                      <ActivePulse />
                      Live
                    </Link>
                  </Button>
                )}
              </div>
            </div>
            <p className="text-sm text-[#55585C]">{summary}</p>
          </div>
        </div>
        <motion.div
          initial={{ height: 0, opacity: 0, marginTop: 0 }}
          animate={{
            height:    isClicked ? contentHeight : 0,
            opacity:   isClicked ? 1 : 0,
            marginTop: isClicked ? 16 : 0,
          }}
          transition={{
            height: { duration: 0.3, ease: [0.33, 1, 0.68, 1] },
            opacity: {
              duration: isClicked ? 0.25 : 0.2,
              ease: [0.33, 1, 0.68, 1],
              delay: isClicked ? 0.05 : 0,
            },
            marginTop: { duration: 0.3, ease: [0.33, 1, 0.68, 1] },
          }}
        >
          <div ref={contentRef} className="border-t pt-4">
            Expanded Content
          </div>
        </motion.div>
      </CardContent>
    </Card>
  );
}

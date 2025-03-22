"use client";

import * as React from "react";
import { Swords, WalletCards } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { CanvasRevealEffect } from "@/components/canvas-flickering-grid";

const PROJECTS: ProjectCardProps[] = [
  { 
    title: "Mars",
    description: "A chess engine in Python with AI opponents and multiplayer support.", 
    icon: <Swords className="text-black fill-black" size={20} />,
    githubLink: "https://www.github.com/jackquinlan/mars",
    productionLink: "https://chess.jackquinlan.me",
    colorList: [[220, 38, 38], [248, 113, 113]],
  },
  { 
    title: "Fintrack",
    description: "A chess engine in Python with AI opponents and multiplayer support.", 
    icon: <WalletCards className="text-black fill-black" size={20} />,
    githubLink: "https://www.github.com/jackquinlan/mars",
    productionLink: "https://chess.jackquinlan.me",
    colorList: [[22, 163, 74], [74, 222, 128]],
  },
];

interface ProjectCardProps {
  title: string;
  description?: string;
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
  description, 
  icon,
  githubLink,
  productionLink,
  colorList,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <Card
      className="relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent>
        <div className="flex items-start gap-3">
          <Card className="relative w-16 h-16 flex items-center justify-center overflow-hidden shadow-none">
            {isHovered && (
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
                      <span className="relative flex h-2 w-2 mr-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                      </span>
                      Live 
                    </Link>
                  </Button>
                )}
              </div>
            </div>
            <p className="text-sm text-[#55585C]">
              {description}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

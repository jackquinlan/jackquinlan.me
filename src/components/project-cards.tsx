"use client";

import * as React from "react";
import { Swords } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const PROJECTS: ProjectCardProps[] = [
  { 
    title: "Mars",
    description: "A chess engine in Python with AI opponents and multiplayer support.",
    icon: <Swords className="text-black fill-black" size={24} />,
    githubLink: "https://www.github.com/jackquinlan/mars",
    productionLink: "https://chess.jackquinlan.me",
  },
];

interface ProjectCardProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  githubLink?: string;
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
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <Card
      className="overflow-hidden"
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent>
        <div className="flex items-start gap-3">
          <Card className="w-16 h-16 items-center justify-center">
            {icon}
          </Card>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">{title}</h3>
                <div className="flex gap-2">
                  {githubLink && (
                    <Button size="sm" variant="outline" asChild>
                      <Link href={githubLink} target="_blank">
                        GitHub
                      </Link>
                    </Button>
                  )}
                  <Button size="sm" variant="outline" disabled={!productionLink} asChild>
                    <Link href={productionLink ?? ""} target="_blank">Live</Link>
                  </Button>
                </div>
              </div>
              <p className="text-sm text-[#55585C] leading-none">{description}</p>
            </div>
        </div>
      </CardContent>
    </Card>
  );
}

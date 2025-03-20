import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";

export interface ProjectCardProps {
  name: string;
}

export function ProjectCard({ name }: ProjectCardProps) {
  return (
    <Card>
      <CardContent>
        <div className="flex items-start">{name}</div>
      </CardContent>
    </Card>
  );
}

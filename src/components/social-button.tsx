import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface SocialButtonProps {
  href: string;
  text: string;
}

export function SocialButton({ href, text }: SocialButtonProps) {
  return (
    <Button
      variant="outline"
      className="font-geist-mono h-8 px-3 text-xs"
      size="sm"
      asChild
    >
      <Link href={href} target="_blank" rel="noopener noreferrer">
        {text}
      </Link>
    </Button>
  );
}

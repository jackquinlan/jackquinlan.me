import * as React from "react";
import { SOCIAL_LINKS } from "@/lib/constants";
import { SocialButton } from "@/components/social-button";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F9F8F6]">
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="flex flex-col gap-1 mb-4">
          <h1 className="text-xl font-normal leading-tight">hi, i'm jack.</h1>
          <h2 className="text-xl font-normal leading-tight text-[#55585C]">
            i like to write code and build things.
          </h2>
        </div>
        <div className="flex gap-2 mb-8">
          {SOCIAL_LINKS.map((link) => (
            <SocialButton key={link.href} {...link} />
          ))}
        </div>
        <h2 className="text-xl font-normal mb-4">projects</h2>
      </div>
    </main>
  );
}

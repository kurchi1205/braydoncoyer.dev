import { BgGradient } from "./components/BgGradient";
import { NewsletterSignUp } from "./components/NewsletterSignUp";
import { ChangelogBento } from "./components/ChangelogBento";
import { fetchAndSortBlogPosts } from "./lib/utils";
import { SpeakingBento } from "./components/SpeakingBento";
import { CommunityWallBento } from "./components/CommunityWallBento";
import { CalendarBento } from "./components/CalendarBento";
import { FeaturedBlogCard } from "./components/FeaturedBlogCard";
import { ToolboxBento } from "./components/ToolboxBento";
import { ConnectionsBento } from "./components/ConnectionsBento";
import { AnimatedProfilePicture } from "./components/AnimatedProfilePicture";
import { AnimatedText } from "./components/AnimatedText";
import { PhotoGallery } from "./components/PhotoGallery";
import { AboutMeBento } from "./components/AboutMeBento";
import { AnimatedMobilePhotos } from "./components/AnimatedMobilePhotos";
import { GridWrapper } from "./components/GridWrapper";
import clsx from "clsx";

export default async function Home() {
  const allPublishedBlogPosts = await fetchAndSortBlogPosts();
  const featuredArticles = allPublishedBlogPosts.slice(0, 4);

  const PROFILE_DELAY = 0;
  const HEADING_DELAY = PROFILE_DELAY + 0.2;
  const PARAGRAPH_DELAY = HEADING_DELAY + 0.1;
  const PHOTOS_DELAY = PARAGRAPH_DELAY + 0.1;

  return (
    <section>
      <AnimatedProfilePicture delay={PROFILE_DELAY} />
      <div className="mt-6 space-y-10 md:mt-0 md:space-y-16">
        <section>
          <div className="relative text-balance">
            <GridWrapper>
              <AnimatedText
                as="h1"
                delay={HEADING_DELAY}
                className="mx-auto max-w-2xl text-center text-4xl font-medium leading-tight tracking-tighter text-text-primary md:text-6xl md:leading-[64px]"
              >
                Hey, I&apos;m Prerana! <br /> Welcome to my corner of the
                internet!
              </AnimatedText>
            </GridWrapper>
            <GridWrapper>
              <div className="mt-4 text-center md:mt-8">
                <AnimatedText
                  as="p"
                  delay={PARAGRAPH_DELAY}
                  className="leading-8 text-text-secondary"
                >
                  I&apos;m an AI/ML engineer with a passion for building scalable systems, exploring generative models, and turning complex ideas into working solutions. I love experimenting with new architectures, optimizing pipelines, and pushing the boundaries of what models can do. Outside of tech, you'll usually find me singing, it's my reset button and my favorite way to unwind.
                </AnimatedText>
              </div>
            </GridWrapper>
          </div>
        </section>
      </div>
    </section>
  );
}

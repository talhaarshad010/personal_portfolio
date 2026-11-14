import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Contact";
import Header from "@/components/Header";
import { ArrowLeft } from "@/components/Icons";
import ProjectsBrowser from "@/components/ProjectsBrowser";
import { profile, projects } from "@/data/site";

export const metadata: Metadata = {
  title: `All projects — ${profile.name}`,
  description: `Web and mobile projects built by ${profile.name}.`,
};

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main className="container projects-page">
        <Link href="/" className="back-link">
          <ArrowLeft /> Back home
        </Link>
        <div className="page-hero">
          <h1>
            All projects <em>({projects.length})</em>
          </h1>
          <p className="lead">
            What I&apos;ve built and what I&apos;m working on now. Filter by type or search to find one.
          </p>
        </div>
        <ProjectsBrowser />
      </main>
      <Footer />
    </>
  );
}

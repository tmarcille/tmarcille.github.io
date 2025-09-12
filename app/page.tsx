"use client";
import { useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { DownloadIcon, LinkedinIcon, ChevronDown, Book } from "lucide-react";
import {
  CONTACT_INFO,
  SKILLS_BY_CATEGORY,
  SKILL_ICONS,
  PROFESSIONAL_EXPERIENCE,
  INTERESTS,
  EDUCATION,
  CaseStudy,
  ResponsibilityWithCaseStudy,
  Responsibility,
} from "@/lib/personalData";

// --- Case Study Component ---
function CaseStudyComponent({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <div className="mt-2 pl-6 pr-2 py-3 bg-muted/50 border-l-2 border-primary rounded-r-md space-y-3 text-sm">
      <div>
        <h5 className="font-semibold tracking-wide text-foreground">
          The Challenge
        </h5>
        <p className="text-muted-foreground mt-1">{caseStudy.challenge}</p>
      </div>
      <div>
        <h5 className="font-semibold tracking-wide text-foreground">
          My Solution
        </h5>
        <p className="text-muted-foreground mt-1">{caseStudy.solution}</p>
      </div>
      <div>
        <h5 className="font-semibold tracking-wide text-foreground">
          The Impact
        </h5>
        <p className="text-muted-foreground mt-1">{caseStudy.impact}</p>
      </div>
    </div>
  );
}

export default function Resume() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [expandedCaseStudy, setExpandedCaseStudy] = useState<string | null>(
    null,
  );

  const handleSkillClick = (skill: string) => {
    setSelectedSkill((prevSkill) => (prevSkill === skill ? null : skill));
  };

  const handleToggleCaseStudy = (id: string) => {
    setExpandedCaseStudy((prevId) => (prevId === id ? null : id));
  };

  const handleDownloadPdf = () => {
    console.log("Downloading PDF...");
  };

  return (
    <TooltipProvider delayDuration={100}>
      <div className="font-sans min-h-screen bg-background text-foreground p-4 md:p-8">
        <div className="max-w-5xl mx-auto" id="resume-content">
          {/* --- Header --- */}
          <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-6 mb-8 border-b">
            <div className="flex items-center gap-6">
              <Avatar className="w-24 h-24">
                <AvatarImage src="/avatar.svg" alt="Théo Marcille" />
                <AvatarFallback className="text-2xl font-bold bg-muted">
                  TM
                </AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-4xl font-bold tracking-tight">
                  Théo Marcille
                </h1>
                <p className="text-lg text-muted-foreground mt-1">
                  Machine Learning Engineer
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-sm font-mono text-muted-foreground text-left md:text-right space-y-1">
                <p>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="hover:text-primary hover:underline"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </p>
                <p>
                  <a
                    href={`tel:${CONTACT_INFO.phone.replace(/[^\d+]/g, "")}`}
                    className="hover:text-primary hover:underline"
                  >
                    {CONTACT_INFO.phone}
                  </a>
                </p>
                <p>
                  <a
                    href={CONTACT_INFO.linkedin.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary hover:underline flex items-center gap-2 justify-start md:justify-end"
                  >
                    <LinkedinIcon className="h-4 w-4" />
                    {CONTACT_INFO.linkedin.display}
                  </a>
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <ThemeToggle />
                <Button
                  onClick={handleDownloadPdf}
                  variant="outline"
                  className="h-9 px-3 cursor-pointer"
                >
                  <DownloadIcon className="mr-2 h-4 w-4" />
                  PDF
                </Button>
              </div>
            </div>
          </header>

          <main className="space-y-12">
            {/* --- Professional Summary & Core Skills --- */}
            <section>
              <h2 className="text-xl font-semibold uppercase tracking-wide border-b pb-2 mb-2">
                Professional Summary
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                {/*#TODO complete this*/}
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold uppercase tracking-wide border-b pb-2 mb-2">
                Core Skills
              </h2>
              <div className="pt-2">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
                  {SKILLS_BY_CATEGORY.map((category) => (
                    <div key={category.category}>
                      <h3 className="font-medium text-muted-foreground text-sm mb-2">
                        {category.category}
                      </h3>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {category.skills.map((skill) => {
                          const IconComponent =
                            SKILL_ICONS[skill as keyof typeof SKILL_ICONS] ||
                            null;
                          return (
                            <Badge
                              key={skill}
                              variant={
                                selectedSkill === skill ? "default" : "outline"
                              }
                              className="cursor-pointer transition-colors text-xs py-0.5 px-2 flex items-center gap-1"
                              onClick={() => handleSkillClick(skill)}
                            >
                              {IconComponent && (
                                <IconComponent className="h-3 w-3" />
                              )}
                              <span>{skill}</span>
                            </Badge>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* --- MODIFIED: COMBINED LANGUAGES & INTERESTS SECTION --- */}
            <section>
              <h2 className="text-xl font-semibold uppercase tracking-wide border-b pb-2 mb-2">
                Languages & Interests
              </h2>
              <div className="flex flex-col md:flex-row gap-8 pt-2">
                {/* Languages Subsection */}
                <div>
                  <h3 className="font-medium text-muted-foreground text-sm mb-2">
                    Languages
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    <Badge variant="outline" className="text-xs py-0.5 px-2">
                      French (Native)
                    </Badge>
                    <Badge variant="outline" className="text-xs py-0.5 px-2">
                      English (Fluent)
                    </Badge>
                  </div>
                </div>
                {/* Interests Subsection */}
                <div>
                  <h3 className="font-medium text-muted-foreground text-sm mb-2">
                    Interests
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {INTERESTS.map((interest) => (
                      <Tooltip key={interest.name}>
                        <TooltipTrigger asChild>
                          <Badge
                            variant="outline"
                            className="text-xs py-0.5 px-2 flex items-center gap-1 cursor-default"
                          >
                            <interest.icon className="h-3 w-3" />
                            <span>{interest.name}</span>
                          </Badge>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{interest.tooltip}</p>
                        </TooltipContent>
                      </Tooltip>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* --- Professional Experience --- */}
            <section>
              <h2 className="text-xl font-semibold uppercase tracking-wide border-b pb-2">
                Professional Experience
              </h2>
              <div className="relative border-l-2 border-border pl-8 pt-2 space-y-8">
                {PROFESSIONAL_EXPERIENCE.map((job, jobIndex) => (
                  <div
                    key={jobIndex}
                    className="relative grid grid-cols-1 lg:grid-cols-4 gap-x-12 group"
                  >
                    <div className="absolute -left-[41px] top-1 h-4 w-4 rounded-full bg-primary border-4 border-background transition-transform duration-300 ease-in-out group-hover:scale-150"></div>
                    <div className="lg:col-span-3">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
                        <h3 className="text-xl font-bold">{job.title}</h3>
                        <p className="font-mono text-sm text-muted-foreground mt-1 mr-1 md:mt-0">
                          <a
                            href={job.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                          >
                            {job.company}
                          </a>{" "}
                        </p>
                      </div>
                      <div>
                        <p className="font-mono text-sm text-muted-foreground mt-1 md:mt-0">
                          {job.date} | {job.location}
                        </p>
                      </div>
                      <div className="mt-4 space-y-2 text-muted-foreground">
                        {job.responsibilities.map((item, itemIndex) => {
                          const caseStudyId = `${jobIndex}-${itemIndex}`;
                          const isExpanded = expandedCaseStudy === caseStudyId;

                          // Type guard to check if item has caseStudy
                          const hasCaseStudy = (
                            item: Responsibility,
                          ): item is ResponsibilityWithCaseStudy =>
                            "caseStudy" in item && item.caseStudy !== undefined;

                          return (
                            <div
                              key={itemIndex}
                              className={`transition-opacity duration-300 ${selectedSkill && !item.skills.includes(selectedSkill) ? "opacity-40" : "opacity-100"}`}
                            >
                              <div
                                className={`flex items-start justify-between p-1 rounded-md transition-colors ${hasCaseStudy(item) ? "cursor-pointer hover:bg-muted/50" : ""}`}
                                onClick={
                                  hasCaseStudy(item)
                                    ? () => handleToggleCaseStudy(caseStudyId)
                                    : undefined
                                }
                              >
                                <p className="flex-1">
                                  <span className="mr-2 text-primary">
                                    &#9679;
                                  </span>
                                  {item.text}
                                </p>
                                {hasCaseStudy(item) && (
                                  <ChevronDown
                                    className={`mt-1 h-4 w-4 text-muted-foreground shrink-0 transition-transform transform ${isExpanded ? "rotate-180" : ""}`}
                                  />
                                )}
                              </div>
                              {isExpanded && hasCaseStudy(item) && (
                                <div className="pl-4 pr-1 py-1">
                                  <CaseStudyComponent
                                    caseStudy={item.caseStudy}
                                  />
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                      {job.publications && (
                        <>
                          <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3 mt-3">
                            Publications
                          </h4>
                          {job.publications.map((publication) => (
                            <a
                              href={publication.url}
                              target="_blank"
                              key={publication.url}
                              rel="noopener noreferrer"
                              className="flex items-start hover:text-primary hover:underline mb-2"
                            >
                              <Book className="h-4 w-4 mr-2 text-muted-foreground flex-shrink-0 mt-0.5" />
                              <p className="text-sm text-muted-foreground">
                                {publication.text}
                              </p>
                            </a>
                          ))}
                        </>
                      )}
                    </div>
                    <div className="lg:col-span-1 mt-6 lg:mt-0">
                      {job.techStack && (
                        <>
                          <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3 mt-2.5">
                            Tech Stack
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {job.techStack.map((tech) => {
                              const IconComponent =
                                SKILL_ICONS[
                                  tech.name as keyof typeof SKILL_ICONS
                                ] || null;
                              return tech.tooltip ? (
                                <Tooltip key={tech.name}>
                                  <TooltipTrigger asChild>
                                    <Badge
                                      variant="secondary"
                                      className="cursor-default flex items-center gap-1"
                                    >
                                      {IconComponent && (
                                        <IconComponent className="h-3 w-3" />
                                      )}
                                      <span>{tech.name}</span>
                                    </Badge>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>{tech.tooltip}</p>
                                  </TooltipContent>
                                </Tooltip>
                              ) : (
                                <Badge
                                  key={tech.name}
                                  variant="secondary"
                                  className="cursor-default flex items-center gap-1"
                                >
                                  {IconComponent && (
                                    <IconComponent className="h-3 w-3" />
                                  )}
                                  <span>{tech.name}</span>
                                </Badge>
                              );
                            })}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* --- Education & Footer --- */}
            <section>
              <h2 className="text-xl font-semibold uppercase tracking-wide border-b pb-2 mb-2">
                Education
              </h2>
              <div className="space-y-4 pt-4">
                {EDUCATION.map((experience) => (
                  <div key={experience.cursus}>
                    <div className="flex flex-col mb-1 md:flex-row md:justify-between md:items-baseline">
                      <h3 className="text-lg font-semibold whitespace-pre-line">
                        {experience.cursus}
                      </h3>
                      <p className="font-mono text-sm text-muted-foreground mt-1 md:mt-0">
                        {experience.school} | {experience.date}
                      </p>
                    </div>
                    <p className="text-muted-foreground">
                      {experience.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </main>
          <footer className="mt-12 pt-6 border-t text-center text-sm text-muted-foreground font-mono space-y-2">
            <p>Last updated: September 2025</p>
            <p>
              <a
                href="https://github.com/tmarcille/dotfiles"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-primary transition-colors"
              >
                dotfiles
              </a>
            </p>
          </footer>
        </div>
      </div>
    </TooltipProvider>
  );
}

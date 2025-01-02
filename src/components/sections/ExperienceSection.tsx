"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaBriefcase, FaCalendar, FaMapMarkerAlt, FaTrophy, FaSearch, FaFilter } from "react-icons/fa";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { AnimatedText } from "@/components/ui/animated-text";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import { Badge } from "@/components/ui/badge";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { experiences } from "@/data/experience";
import { ExperienceType } from "@/types/experience";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

const employmentTypes: ExperienceType[] = [
  "Full-time",
  "Part-time",
  "Contract",
  "Freelance",
  "Internship",
];

const skillsList = Array.from(
  new Set(experiences.flatMap((exp) => exp.skills))
).sort();

export const ExperienceSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<ExperienceType | "all">("all");
  const [selectedSkill, setSelectedSkill] = useState<string | "all">("all");
  const [showFilters, setShowFilters] = useState(false);

  const filteredExperiences = useMemo(() => {
    let filtered = experiences;

    // Filter by employment type
    if (selectedType !== "all") {
      filtered = filtered.filter((exp) => exp.type === selectedType);
    }

    // Filter by skill
    if (selectedSkill !== "all") {
      filtered = filtered.filter((exp) => exp.skills.includes(selectedSkill));
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (exp) =>
          exp.title.toLowerCase().includes(query) ||
          exp.company.toLowerCase().includes(query) ||
          exp.description.some((desc) => desc.toLowerCase().includes(query)) ||
          exp.skills.some((skill) => skill.toLowerCase().includes(query))
      );
    }

    return filtered;
  }, [searchQuery, selectedType, selectedSkill]);

  const totalYears = useMemo(() => {
    const dates = experiences.map((exp) => ({
      start: new Date(exp.startDate),
      end: exp.endDate === "Present" ? new Date() : new Date(exp.endDate),
    }));

    const totalMonths = dates.reduce((acc, { start, end }) => {
      return acc + (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
    }, 0);

    return (totalMonths / 12).toFixed(1);
  }, []);

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <ScrollAnimation animation="fade">
          <AnimatedText
            text="Professional Experience"
            animation="bounce"
            className="text-3xl font-bold text-center mb-4"
          />
          <ParallaxScroll offset={20}>
            <p className="text-muted-foreground text-center mb-4 max-w-2xl mx-auto">
              {totalYears} years of experience building exceptional digital experiences
            </p>
          </ParallaxScroll>
        </ScrollAnimation>

        {/* Search and Filters */}
        <div className="mb-12 space-y-4">
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search by title, company, or skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 pl-10 rounded-full border bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
          </div>

          {/* Filter Toggle */}
          <div className="flex justify-center">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <FaFilter />
              {showFilters ? "Hide Filters" : "Show Filters"}
            </button>
          </div>

          {/* Filters */}
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="space-y-4"
            >
              {/* Employment Type Filter */}
              <div className="flex flex-wrap justify-center gap-2">
                <button
                  onClick={() => setSelectedType("all")}
                  className={`px-3 py-1 rounded-full text-sm transition-colors ${
                    selectedType === "all"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted hover:bg-muted/80"
                  }`}
                >
                  All Types
                </button>
                {employmentTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`px-3 py-1 rounded-full text-sm transition-colors ${
                      selectedType === type
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted hover:bg-muted/80"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>

              {/* Skills Filter */}
              <div className="flex flex-wrap justify-center gap-2">
                <button
                  onClick={() => setSelectedSkill("all")}
                  className={`px-3 py-1 rounded-full text-sm transition-colors ${
                    selectedSkill === "all"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted hover:bg-muted/80"
                  }`}
                >
                  All Skills
                </button>
                {skillsList.map((skill) => (
                  <button
                    key={skill}
                    onClick={() => setSelectedSkill(skill)}
                    className={`px-3 py-1 rounded-full text-sm transition-colors ${
                      selectedSkill === skill
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted hover:bg-muted/80"
                    }`}
                  >
                    {skill}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-border" />

          {/* Experience Items */}
          {filteredExperiences.length > 0 ? (
            filteredExperiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                variants={itemVariants}
                className={`relative flex flex-col md:flex-row gap-8 md:gap-16 mb-12 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full mt-6 z-10" />

                {/* Content */}
                <div className="flex-1 md:text-right">
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <div className="bg-background/50 backdrop-blur-sm rounded-lg p-6 border shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                        {/* Header */}
                        <div className="flex items-center gap-4 mb-4">
                          {experience.logo && (
                            <div className="relative w-12 h-12 flex-shrink-0">
                              <Image
                                src={experience.logo}
                                alt={experience.company}
                                fill
                                className="object-contain"
                              />
                            </div>
                          )}
                          <div className="flex-grow">
                            <h3 className="font-semibold text-xl">{experience.title}</h3>
                            <Link
                              href={experience.companyUrl || "#"}
                              className="text-primary hover:underline"
                            >
                              {experience.company}
                            </Link>
                          </div>
                        </div>

                        {/* Details */}
                        <div className="space-y-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <FaCalendar className="flex-shrink-0" />
                            <span>
                              {experience.startDate} - {experience.endDate}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FaMapMarkerAlt className="flex-shrink-0" />
                            <span>{experience.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FaBriefcase className="flex-shrink-0" />
                            <span>{experience.type}</span>
                          </div>
                        </div>

                        {/* Skills */}
                        <div className="mt-4 flex flex-wrap gap-2">
                          {experience.skills.map((skill) => (
                            <Badge
                              key={skill}
                              variant={selectedSkill === skill ? "default" : "secondary"}
                              className="cursor-pointer"
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedSkill(skill === selectedSkill ? "all" : skill);
                              }}
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </HoverCardTrigger>

                    <HoverCardContent
                      align={index % 2 === 0 ? "start" : "end"}
                      className="w-80"
                    >
                      {/* Description */}
                      <div className="space-y-2">
                        <h4 className="font-semibold">Key Responsibilities:</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                          {experience.description.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>

                        {/* Achievements */}
                        {experience.achievements && (
                          <div className="mt-4">
                            <h4 className="font-semibold flex items-center gap-2">
                              <FaTrophy className="text-yellow-400" />
                              Key Achievements:
                            </h4>
                            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                              {experience.achievements.map((achievement, i) => (
                                <li key={i}>{achievement}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Team */}
                        {experience.team && (
                          <p className="text-sm text-muted-foreground mt-4">
                            Team: {experience.team}
                          </p>
                        )}
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </div>

                {/* Empty space for timeline alignment */}
                <div className="flex-1" />
              </motion.div>
            ))
          ) : (
            <div className="text-center py-12 text-muted-foreground">
              No experiences found matching your criteria.
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}; 
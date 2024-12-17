import { Card, CardContent, CardHeader, CardImage } from "@/components/card";
import { Grid, GridCell } from "@/components/grid";
import { Carousel, CarouselItem } from "@/components/carousel";
import Icon from "@/components/icon";

import PageData from "./page_data.json"

function SkillCard({ iconData, children }) {
  return (
    <Card className="frosted">
      <CardHeader>
        <Icon size="is-medium" iconData={iconData} className="tech-icon"></Icon>
        <p className="card-header-title is-size-4">{children}</p>
      </CardHeader>
    </Card>
  )
}

function ProjectCard({ title, src, languages, frameworks, description }) {
  return (
    <Card>
      <CardHeader>
        <a className="card-header-title is-size-3" href={src}>
          {title}
        </a>
      </CardHeader>
      <CardContent>
        <p><b>Language(s):</b></p>
        <p>{languages.join(", ")}</p>

        <p><b>Frameworks, Libraries, & APIs:</b> {frameworks.join(", ")}</p>
        <p>{description}</p>
      </CardContent>
    </Card>
  )
}

function SiteSection({ children }) {
  return (
    <section className="section is-small">
      <div className="columns">
        <div className="column"></div>
        <div className="column is-two-thirds">
          {children}
        </div>
        <div className="column"></div>
      </div>
    </section>
  )
}

function processSkills(name) {
  let skillCards = []

  for (let skill of PageData["skills"][name]) {
    skillCards.push((
      <GridCell key={skill.title}>
        <SkillCard iconData={skill.icon}>{skill.title}</SkillCard>
      </GridCell>
    ))
  }
  return skillCards;
}

function processProjects() {
  let projectCards = []

  for (let project of PageData["projects"]) {
    projectCards.push((
      <CarouselItem key={project.title}>
        <ProjectCard 
          title={project.title}
          src={project.src}
          languages={project.languages}
          frameworks={project.frameworks}
          description={project.description}
        />
      </CarouselItem>
    ))
  }
  return projectCards;
}

export default function Home() {
  return (
    <>
      <SiteSection>
        <Card className="frosted">
          <CardHeader>
            <p className="card-header-title is-centered is-size-2">About Me</p>
          </CardHeader>
          <CardContent>
            <div className="columns">
              <div className="column">
                <Card className="frosted">
                  <CardImage src="/full_body.png" alt="Full body photo of myself." />
                </Card>
              </div>
              <div className="column">
                <Card className="frosted">
                  <CardContent>
                    <p className="is-size-4">
                      Hey! I'm a computer science enthusiast who's been studying computer science.
                      My current studies involve application architecture, game architecture, and data science.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>
      </SiteSection>
      <SiteSection>
        <Card className="frosted">
          <CardHeader>
            <p className="card-header-title is-centered is-size-1">Skills</p>
          </CardHeader>
          <CardContent>
            <h1 className="title is-size-3" id="my-skills-header">Programming Languages</h1>
            <Grid columnMin={12}>
              {processSkills("programming_languages")}
            </Grid>

            <h1 className="title is-size-3" id="my-skills-header">Web Technology</h1>
            <Grid columnMin={12}>
              {processSkills("web_technology")}
            </Grid>

            <h1 className="title is-size-3" id="my-skills-header">Rendering</h1>
            <Grid columnMin={12}>
              {processSkills("rendering")}
            </Grid>
          </CardContent>
        </Card>
      </SiteSection>
      <SiteSection>
        <Card className="frosted">
          <CardHeader>
            <p className="card-header-title is-centered is-size-1">Portfolio</p>
          </CardHeader>
          <CardContent>
            <Carousel>
              {processProjects()}
            </Carousel>
          </CardContent>
        </Card>
      </SiteSection>
    </>
  );
}

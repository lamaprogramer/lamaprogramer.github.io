import { Card, CardContent, CardHeader, CardImage } from "@/components/card";
import { Grid, GridCell } from "@/components/grid";
import Icon from "@/components/icon";

import PageData from "./page_data.json"
import "./page.css"

function SkillCard({ iconData, children }) {
  return (
    <Card className="frosted">
      <CardHeader>
        <div className="hstack">
          <Icon iconData={iconData} className="tech-icon"></Icon>
          <p className="tech-name fw-bold">{children}</p>
        </div>
      </CardHeader>
    </Card>
  )
}

function ProjectCard({ title, src, languages, frameworks, description }) {
  return (
    <Card className="project-card frosted">
      <CardHeader>
        <h2 className="fw-bold">{title}</h2>
      </CardHeader>
      <CardContent>
        <p><b>Source:</b> {src}</p>
        <p><b>Language(s):</b> {languages.join(", ")}</p>
        <p><b>Frameworks, Libraries, & APIs:</b> {frameworks.join(", ")}</p>
        <p>{description}</p>
      </CardContent>
    </Card>
  )
}

function SiteSection({ children }) {
  return (
    <section className="container my-5 site-section">
      <div className="row align-items-center">
        <div className="col-12">
          {children}
        </div>
      </div>
    </section>
  )
}

function processSkills(name) {
  let skillCards = [];

  for (const skill of PageData["skills"][name]) {
    skillCards.push((
      <GridCell key={skill.title}>
        <SkillCard iconData={skill.icon}>{skill.title}</SkillCard>
      </GridCell>
    ))
  }
  return skillCards;
}

function processProjects() {
  let projectCards = [];

  for (const project of PageData["projects"]) {
    projectCards.push((
      <GridCell key={project.title} width={{xxl: 4, lg: 6, md: 12}}>
        <ProjectCard
          title={project.title}
          src={project.src}
          languages={project.languages}
          frameworks={project.frameworks}
          description={project.description}
        />
      </GridCell>
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
            <h1 className="centered fw-bold">About Me</h1>
          </CardHeader>
          <CardContent>
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <Card className="frosted">
                  <CardImage src="/full_body.png" alt="Full body photo of myself." />
                </Card>
              </div>
              <div className="col-md-6 col-sm-12">
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
            <h1 className="centered fw-bold">Skills</h1>
          </CardHeader>
          <CardContent>
            <h1 className="pt-3">Programming Languages</h1>
            <Grid>
              {processSkills("programming_languages")}
            </Grid>

            <h1 className="pt-3">Web Technology</h1>
            <Grid>
              {processSkills("web_technology")}
            </Grid>

            <h1 className="pt-3">Rendering</h1>
            <Grid>
              {processSkills("rendering")}
            </Grid>
          </CardContent>
        </Card>
      </SiteSection>
      <SiteSection>
        <Card className="frosted">
          <CardHeader>
            <h1 className="centered fw-bold">Portfolio</h1>
          </CardHeader>
          <CardContent>
            <Grid>
              {processProjects()}
            </Grid>
          </CardContent>
        </Card>
      </SiteSection>
    </>
  );
}

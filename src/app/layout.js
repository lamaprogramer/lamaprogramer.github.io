import { Geist, Geist_Mono } from "next/font/google";

import { Dropdown, DropdownItem } from "@/components/dropdown";
import Icon from "@/components/icon";
import IconButton from "@/components/icon_button";
import { ThemeControl, HTML } from "@/components/theme_manager";

import "bulma/css/bulma.css"
import "@/fontawesome/css/fontawesome.css"
import "@/fontawesome/css/brands.css"
import "@/fontawesome/css/solid.css"

import "./root.css"
import "./glassmorphism.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio",
  description: "William's Portfolio'",
};

export default function RootLayout({ children }) {
  return (
    <HTML lang="en">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <header className="frosted p-5" id="nav">
          <div id="left-nav">
            <IconButton size="is-medium" iconData="fas fa-2x fa fa-bars" />
            <h1 className="title">William Allen Kinsey Jr.</h1>
          </div>
          <div id="right-nav">
            <Dropdown iconData="fas fa-2x fa fa-sun">
              <DropdownItem>
                <ThemeControl iconData="fa fa-sun" className="is-fullwidth" themeName="light">Light</ThemeControl>
              </DropdownItem>
              <DropdownItem>
                <ThemeControl iconData="fa fa-moon" className="is-fullwidth" themeName="dark">Dark</ThemeControl>
              </DropdownItem>
              <DropdownItem>
                <ThemeControl iconData="fa fa-computer" className="is-fullwidth" themeName="system">System</ThemeControl>
              </DropdownItem>
            </Dropdown>

            <a className="button icon-button" href="https://github.com/lamaprogramer" target="_blank">
              <Icon size="is-medium" iconData="fas fa-2x fa-brands fa-github" />
            </a>
          </div>
        </header>
        {children}
      </body>
    </HTML>
  );
}
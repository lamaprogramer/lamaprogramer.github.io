import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "react-bootstrap";
import { MinimalIconToggle } from "@/components/dropdown_extensions";
import { ThemeControl, HTML } from "@/components/theme_manager";
import IconButton from "@/components/icon_button";
import Icon from "@/components/icon";

import "bootstrap/dist/css/bootstrap.css"
import "@/fontawesome/css/fontawesome.css"
import "@/fontawesome/css/brands.css"
import "@/fontawesome/css/solid.css"
import "@/styles/glassmorphism.css"
import "./layout.css"

export const metadata = {
  title: "Portfolio",
  description: "William's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <HTML lang="en">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>
      <body>
        <header className="site-nav border-bottom frosted">
          <div className="nav-left">
            <IconButton iconData="fas fa-2x fa fa-bars" />
            <h1 className="fw-bold">William Allen Kinsey Jr.</h1>
          </div>
          <div className="nav-right">
            <Dropdown drop='down-centered'>
              <DropdownToggle iconData="fas fa-2x fa fa-sun" as={MinimalIconToggle}></DropdownToggle>
              <DropdownMenu className="frosted">
                <DropdownItem as={ThemeControl} iconData="fa fa-sun" themeName="light">Light</DropdownItem>
                <DropdownItem as={ThemeControl} iconData="fa fa-moon" themeName="dark">Dark</DropdownItem>
                <DropdownItem as={ThemeControl} iconData="fa fa-computer" themeName="system">System</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <a className="button icon-button" href="https://github.com/lamaprogramer" target="_blank">
              <Icon iconData="fas fa-2x fa-brands fa-github" />
            </a>
          </div>
        </header>
        {children}
      </body>
    </HTML>
  );
}
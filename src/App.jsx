import "./css/app.css";
import React from "react";

let menuElements = [
  "Home",
  "About",
  "Services",
  "Portfolio",
  "Team",
  "Pricing",
  "DropDown",
  "Contact",
];

class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div className="logoDiv">
          <h1 className="logoh1">OnePage</h1>
        </div>
        <div className="menuElements">
          {menuElements.map((elem, i) => {
            return (
              <p key="{i}" className="menuEl">
                {elem}
              </p>
            );
          })}
          <p className="GetStarted">Get Started</p>
        </div>
      </header>
    );
  }
}
const elementObj = {
  title: ["Lorem Ipsum", "Sed ut perspiciatis", "Magni Dolores", "NemoEnim"],
  context: [
    "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia",
    "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
  ],
};
export class MainPage extends React.Component {
  render() {
    return (
      <div id="main">
        <div className="upBlock">
          <h1 className="title">One Page Bootstrap</h1>
          <h1 className="title">Website Template</h1>
          <p className="upP">We are team of talanted designers</p>
          <button className="button">Get Started</button>
        </div>
        <div className="downBlock">
          {elementObj.title.map((elem, i) => {
            return (
              <div class="downChild">
                <h1 class="childH1">{elem}</h1>
                <p class="childP">{elementObj.context[i]}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default Header;

import routesState from "./routes";
import logo from 'imgs/logo.png';
import { useEffect, useState } from "react";

export default function () {
  const [routes, setRoutes] = useState(routesState);


  function setRoute (indGroup: number, indRoute:number) {
    const newRoutes = [...routes];

    newRoutes.forEach((group) => {
      group.items.forEach((route) => {
        route.active = false;
      })
    })

    newRoutes[indGroup]
    .items[indRoute].active = true; 

    setRoutes(newRoutes);
  }
  

  return (
    <div className="Nav">

      <div className="Nav_logo">
        <img src={logo}/>
      </div>

      <div className="Nav_groups">
        {routes.map(({items,head}, indGroup) => {
          return (
            <ul className="group" key={indGroup}>
              <h3>{head}</h3>
              {items.map(({Icon,text,active}, indRoute) => {
                return (
                  <li 
                    key={indRoute}
                    className={`${active && "active"}`}
                    onClick={() => setRoute(indGroup, indRoute)}>
                    <Icon/>
                    <span>{text}</span>
                  </li>
                )
              })}
            </ul>
          )
        })}
      </div>
    </div>
  )
}
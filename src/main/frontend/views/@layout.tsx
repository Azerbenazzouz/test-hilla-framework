import React from 'react';
import {NavLink, Outlet} from "react-router-dom";
import {createMenuItems} from "@vaadin/hilla-file-router/runtime.js";

function Layout() {
    console.log(createMenuItems())
    return(
        <div>
            <nav className="flex gap-s p-m">
                {createMenuItems().map(item => (
                    <NavLink to={item.to}>{item.title}</NavLink>
                ))}
            </nav>
            <main>
                <div className="v-full">
                    <Outlet/>
                </div>
            </main>
        </div>
    );
}

export default Layout;
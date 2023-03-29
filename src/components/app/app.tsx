import {AppShell, MantineProvider} from '@mantine/core';
import React from "react";
import {LandingPage} from '../../pages';
import {Header} from "../header";
import {Footer} from "../footer";

export const App = () => {
    return (
        <MantineProvider withGlobalStyles withNormalizeCSS>
            <AppShell
                style={{minHeight: "100%"}}
                navbar={<Header/>}
                footer={<Footer/>}
            >
                <LandingPage/>
            </AppShell>
        </MantineProvider>
    );
}
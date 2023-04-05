import {AppShell, MantineProvider} from '@mantine/core';
import React from "react";
import {Header} from "../header";
import {Footer} from "../footer";
import {AppRouter} from "../../routes/appRouter";

export const App = () => {
    return (
        <MantineProvider withGlobalStyles withNormalizeCSS>
            <AppShell
                style={{minHeight: "100%"}}
                navbar={<Header/>}
                footer={<Footer/>}
            >
                <AppRouter/>
            </AppShell>
        </MantineProvider>
    );
}
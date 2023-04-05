import React from "react";
import {Group, Header as MantineHeader, Image} from '@mantine/core';
import {useLocation} from "react-router-dom";
import {SearchBar} from "../searchBar";

export const Header = () => {
    const height = 80
    const location = useLocation()

    return (
        <MantineHeader height={height} p="xs">
            <Group spacing="xl">
                <Image maw={height} radius="md" src="/os-icon.svg"
                       alt="Open Source Construction Logo"/>
                {location.pathname === "/search" ? <SearchBar/> : null}
            </Group>
        </MantineHeader>
    )
}
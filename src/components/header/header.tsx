import React from "react";
import {Header as MantineHeader, Image} from '@mantine/core';

export const Header = () => {
    const height = 80
    return (
        <MantineHeader height={height} p="xs">
            <Image maw={height} radius="md" src="/os-icon.svg"
                   alt="Open Source Construction Logo"/>
        </MantineHeader>
    )
}
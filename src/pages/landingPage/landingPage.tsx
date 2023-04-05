import {SearchBar} from "../../components";
import {Container, Flex, Title} from "@mantine/core";
import React from "react";
import {useViewportSize} from "@mantine/hooks";

export const LandingPage = () => {
    const {height, width} = useViewportSize();
    return (
        <Container>
            <Flex
                mih={height}
                gap="md"
                justify="center"
                align="center"
                direction="row"
                wrap="wrap"
            >
                <div>
                    <Title order={1} mb="xl">Search the internet for materials!</Title>
                    <SearchBar />
                </div>

            </Flex>
        </Container>
    )
}
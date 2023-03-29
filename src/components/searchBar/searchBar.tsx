import React from "react";
import {TextInput} from "@mantine/core";
import {IconSearch} from "@tabler/icons-react";

export const SearchBar = () => {
    return (
        <TextInput
            placeholder="Search for Materials"
            radius="xl"
            size="xl"
            icon={<IconSearch size="2rem" />}
        />
    )
}
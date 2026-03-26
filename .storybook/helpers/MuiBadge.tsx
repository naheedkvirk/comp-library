import React from "react";
import {useOf} from '@storybook/addon-docs/blocks';
import Badge from '@mui/material/Badge';

export function MuiBadge(): React.ReactElement | null {
    const { preparedMeta } = useOf<'meta'>('meta');
    const isMui = preparedMeta.parameters?.pageContent?.isMui;

    return isMui
        ? (
            <Badge variant="standard">MUI</Badge>
        )
        : null; 
}
import React from 'react';
import styled from 'styled-components';
import { Typography } from 'antd';
import { GlobalOutlined, LockOutlined } from '@ant-design/icons';
import { DataHubViewType } from '../../../types.generated';

const StyledLockOutlined = styled(LockOutlined)<{ color }>`
    color: ${(props) => props.color};
    margin-right: 4px;
`;

const StyledGlobalOutlined = styled(GlobalOutlined)<{ color }>`
    color: ${(props) => props.color};
    margin-right: 4px;
`;

const StyledText = styled(Typography.Text)<{ color }>`
    && {
        color: ${(props) => props.color};
    }
`;

type Props = {
    type: DataHubViewType;
    color: string;
};

/**
 * Label used to describe View Types
 *
 * @param param0 the color of the text and iconography
 */
export const ViewTypeLabel = ({ type, color }: Props) => {
    const copy =
        type === DataHubViewType.Personal ? (
            <>
                <b>私密</b> - 仅对你可见.
            </>
        ) : (
            <>
                <b>公开</b> - 对所有人可见.
            </>
        );
    const Icon = type === DataHubViewType.Global ? StyledGlobalOutlined : StyledLockOutlined;

    return (
        <>
            <Icon color={color} />
            <StyledText color={color} type="secondary">
                {copy}
            </StyledText>
        </>
    );
};

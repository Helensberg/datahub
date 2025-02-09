import { Image, Typography } from 'antd';
import React from 'react';
import styled, { useTheme } from 'styled-components';
import dataHubLogo from '../../../images/datahublogo.png';
import { ANTD_GRAY } from '../../entity/shared/constants';

const Section = styled.div`
    width: auto;
    margin-top: 40px;
    margin-left: 60px;
`;

const TitleText = styled(Typography.Text)`
    font-size: 18px;
    margin-left: 8px;
    color: ${ANTD_GRAY[7]};
`;

const TitleSection = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

const MessageSection = styled.div`
    margin-bottom: 20px;
`;

const DetailParagraph = styled(Typography.Paragraph)`
    font-size: 14px;
`;

const ResourceList = styled.ul`
    font-size: 14px;
`;

const ResourceListItem = styled.li`
    margin-bottom: 4px;
`;

const resources = [
    {
        label: 'DataHub Project',
        path: 'https://datahubproject.io',
        shouldOpenInNewTab: true,
    },
    {
        label: 'DataHub Docs',
        path: 'https://datahubproject.io/docs',
        shouldOpenInNewTab: true,
    },
    {
        label: 'DataHub GitHub',
        path: 'https://github.com/datahub-project/datahub',
        shouldOpenInNewTab: true,
    },
];

export const ErrorSection = (): JSX.Element => {
    const themeConfig = useTheme();

    return (
        <Section>
            <div>
                <TitleSection>
                    <Image src={dataHubLogo} preview={false} style={{ width: 40 }} />
                    <TitleText strong>{themeConfig.content.title}</TitleText>
                </TitleSection>
                <MessageSection>
                    <Typography.Title level={2}>Something went wrong.</Typography.Title>
                    <DetailParagraph type="secondary">
                        发生了一个意外错误。请稍后再试，或者联系你的管理员。
                    </DetailParagraph>
                </MessageSection>
                <div>
                    <DetailParagraph type="secondary">
                        <b>需要支持?</b> 检查这些资源:
                    </DetailParagraph>
                    <ResourceList>
                        {resources.map((resource) => (
                            <ResourceListItem key={resource.path}>
                                <a href={resource.path}>{resource.label}</a>
                            </ResourceListItem>
                        ))}
                    </ResourceList>
                </div>
            </div>
        </Section>
    );
};

import React from 'react';
import styled from 'styled-components';
import { Divider, Typography, Switch, Card, message } from 'antd';

import { useUpdateUserSettingMutation } from '../../graphql/me.generated';
import { UserSetting } from '../../types.generated';
import { ANTD_GRAY } from '../entity/shared/constants';
import analytics, { EventType } from '../analytics';
import { useUserContext } from '../context/useUserContext';

const Page = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const SourceContainer = styled.div`
    width: 80%;
    padding-top: 20px;
    padding-right: 40px;
    padding-left: 40px;
`;

const TokensContainer = styled.div`
    padding-top: 0px;
`;

const TokensHeaderContainer = styled.div`
    && {
        padding-left: 0px;
    }
`;

const TokensTitle = styled(Typography.Title)`
    && {
        margin-bottom: 8px;
    }
`;

const UserSettingRow = styled.div`
    display: flex;
    justify-content: space-between;
`;

const DescriptionText = styled(Typography.Text)`
    color: ${ANTD_GRAY[7]};
    font-size: 11px;
`;

const SettingText = styled(Typography.Text)`
    font-size: 14px;
`;

export const Preferences = () => {
    // Current User Urn
    const { user, refetchUser } = useUserContext();

    const showSimplifiedHomepage = !!user?.settings?.appearance?.showSimplifiedHomepage;
    const [updateUserSettingMutation] = useUpdateUserSettingMutation();

    return (
        <Page>
            <SourceContainer>
                <TokensContainer>
                    <TokensHeaderContainer>
                        <TokensTitle level={2}>外观</TokensTitle>
                        <Typography.Paragraph type="secondary">管理你的外观设置.</Typography.Paragraph>
                    </TokensHeaderContainer>
                </TokensContainer>
                <Divider />
                <Card>
                    <UserSettingRow>
                        <span>
                            <SettingText>显示简化的主页 </SettingText>
                            <div>
                                <DescriptionText>
                                    将主页上的实体浏览卡片限制为Domains, Charts, Datasets, Dashboards and Glossary Terms
                                </DescriptionText>
                            </div>
                        </span>
                        <Switch
                            checked={showSimplifiedHomepage}
                            onChange={async () => {
                                await updateUserSettingMutation({
                                    variables: {
                                        input: {
                                            name: UserSetting.ShowSimplifiedHomepage,
                                            value: !showSimplifiedHomepage,
                                        },
                                    },
                                });
                                analytics.event({
                                    type: showSimplifiedHomepage
                                        ? EventType.ShowStandardHomepageEvent
                                        : EventType.ShowSimplifiedHomepageEvent,
                                });
                                message.success({ content: '设置更新!', duration: 2 });
                                refetchUser?.();
                            }}
                        />
                    </UserSettingRow>
                </Card>
            </SourceContainer>
        </Page>
    );
};

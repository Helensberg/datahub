import React from 'react';
import { Typography } from 'antd';
import styled from 'styled-components';
import { RoutedTabs } from '../shared/RoutedTabs';
import { GroupList } from './group/GroupList';
import { UserList } from './user/UserList';

const PageContainer = styled.div`
    padding-top: 20px;
    width: 100%;
    overflow: auto;
    flex: 1;
    display: flex;
    flex-direction: column;
`;

const PageHeaderContainer = styled.div`
    && {
        padding-left: 24px;
    }
`;

const PageTitle = styled(Typography.Title)`
    && {
        margin-bottom: 12px;
    }
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    overflow: auto;
    &&& .ant-tabs-nav {
        margin: 0;
    }
    color: #262626;
    // height: calc(100vh - 60px);

    &&& .ant-tabs > .ant-tabs-nav .ant-tabs-nav-wrap {
        padding-left: 28px;
    }
`;

enum TabType {
    Users = 'Users',
    Groups = 'Groups',
}
const ENABLED_TAB_TYPES = [TabType.Users, TabType.Groups];

export const ManageIdentities = () => {
    /**
     * Determines which view should be visible: users or groups list.
     */

    const getTabs = () => {
        return [
            {
                name: TabType.Users,
                path: TabType.Users.toLocaleLowerCase(),
                content: <UserList />,
                display: {
                    enabled: () => true,
                },
            },
            {
                name: TabType.Groups,
                path: TabType.Groups.toLocaleLowerCase(),
                content: <GroupList />,
                display: {
                    enabled: () => true,
                },
            },
        ].filter((tab) => ENABLED_TAB_TYPES.includes(tab.name));
    };

    const defaultTabPath = getTabs() && getTabs()?.length > 0 ? getTabs()[0].path : '';
    const onTabChange = () => null;

    return (
        <PageContainer>
            <PageHeaderContainer>
                <PageTitle level={3}>管理用户和群组</PageTitle>
                <Typography.Paragraph type="secondary">
                    查看你的AI Data Catalog用户和群组，并采取管理措施.
                </Typography.Paragraph>
            </PageHeaderContainer>
            <Content>
                <RoutedTabs defaultPath={defaultTabPath} tabs={getTabs()} onTabChange={onTabChange} />
            </Content>
        </PageContainer>
    );
};

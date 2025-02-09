import { Tabs, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IngestionSourceList } from './source/IngestionSourceList';
import { useAppConfig } from '../useAppConfig';
import { useUserContext } from '../context/useUserContext';
import { SecretsList } from './secret/SecretsList';
import { OnboardingTour } from '../onboarding/OnboardingTour';
import {
    INGESTION_CREATE_SOURCE_ID,
    INGESTION_REFRESH_SOURCES_ID,
} from '../onboarding/config/IngestionOnboardingConfig';

const PageContainer = styled.div`
    padding-top: 20px;
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

const StyledTabs = styled(Tabs)`
    &&& .ant-tabs-nav {
        margin-bottom: 0;
        padding-left: 28px;
    }
`;

const Tab = styled(Tabs.TabPane)`
    font-size: 14px;
    line-height: 22px;
`;

const ListContainer = styled.div``;

enum TabType {
    Sources = '数据源',
    Secrets = '机密信息',
}

export const ManageIngestionPage = () => {
    /**
     * Determines which view should be visible: ingestion sources or secrets.
     */
    const me = useUserContext();
    const { config, loaded } = useAppConfig();
    const isIngestionEnabled = config?.managedIngestionConfig.enabled;
    const showIngestionTab = isIngestionEnabled && me && me.platformPrivileges?.manageIngestion;
    const showSecretsTab = isIngestionEnabled && me && me.platformPrivileges?.manageSecrets;
    const [selectedTab, setSelectedTab] = useState<TabType>(TabType.Sources);

    // defaultTab might not be calculated correctly on mount, if `config` or `me` haven't been loaded yet
    useEffect(() => {
        if (loaded && me.loaded && !showIngestionTab && selectedTab === TabType.Sources) {
            setSelectedTab(TabType.Secrets);
        }
    }, [loaded, me.loaded, showIngestionTab, selectedTab]);

    const onClickTab = (newTab: string) => {
        setSelectedTab(TabType[newTab]);
    };

    return (
        <PageContainer>
            <OnboardingTour stepIds={[INGESTION_CREATE_SOURCE_ID, INGESTION_REFRESH_SOURCES_ID]} />
            <PageHeaderContainer>
                <PageTitle level={3}>管理数据源</PageTitle>
                <Typography.Paragraph type="secondary">
                    配置和安排同步以从数据源导入数据
                </Typography.Paragraph>
            </PageHeaderContainer>
            <StyledTabs activeKey={selectedTab} size="large" onTabClick={(tab: string) => onClickTab(tab)}>
                {showIngestionTab && <Tab key={TabType.Sources} tab={TabType.Sources} />}
                {showSecretsTab && <Tab key={TabType.Secrets} tab={TabType.Secrets} />}
            </StyledTabs>
            <ListContainer>{selectedTab === TabType.Sources ? <IngestionSourceList /> : <SecretsList />}</ListContainer>
        </PageContainer>
    );
};

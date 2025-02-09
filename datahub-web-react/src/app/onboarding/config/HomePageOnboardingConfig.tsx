import React from 'react';
import { Image, Typography } from 'antd';
import { OnboardingStep } from '../OnboardingStep';
import { ANTD_GRAY } from '../../entity/shared/constants';
import dataHubFlowDiagram from '../../../images/datahub-flow-diagram-light.png';

export const GLOBAL_WELCOME_TO_DATAHUB_ID = 'global-welcome-to-datahub';
export const HOME_PAGE_INGESTION_ID = 'home-page-ingestion';
export const HOME_PAGE_DOMAINS_ID = 'home-page-domains';
export const HOME_PAGE_PLATFORMS_ID = 'home-page-platforms';
export const HOME_PAGE_MOST_POPULAR_ID = 'home-page-most-popular';
export const HOME_PAGE_SEARCH_BAR_ID = 'home-page-search-bar';

export const HomePageOnboardingConfig: OnboardingStep[] = [
    {
        id: GLOBAL_WELCOME_TO_DATAHUB_ID,
        content: (
            <div>
                <Image
                    preview={false}
                    height={184}
                    width={500}
                    style={{ marginLeft: '50px' }}
                    src={dataHubFlowDiagram}
                />
                <Typography.Title level={3}>欢迎来到AI Data Catalog! 👋</Typography.Title>
                <Typography.Paragraph style={{ lineHeight: '22px' }}>
                    <strong>AI Data Catalog</strong> 能帮助你发现并整理所在组织内的重要数据。你可以:
                </Typography.Paragraph>
                <Typography.Paragraph style={{ lineHeight: '24px' }}>
                    <ul>
                        <li>
                            快速 <strong>搜索</strong>  Datasets, Dashboards, Data Pipelines以及更多
                        </li>
                        <li>
                            查看 <strong>端到端的Lineage</strong> 并全面理解数据是如何创建、转化和被使用的
                        </li>
                        <li>
                            <strong>洞察</strong>组织内其他人是如何使用数据的
                        </li>
                        <li>
                            定义<strong>ownership</strong> 并且获取赋予他人权限的<strong>方法</strong> 
                        </li>
                    </ul>
                    <p>Let&apos;s get started! 🚀</p>
                    <div
                        style={{
                            backgroundColor: ANTD_GRAY[4],
                            opacity: '0.7',
                            borderRadius: '4px',
                            height: '40px',
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <span style={{ paddingLeft: '5px' }}>💡</span>
                        <span style={{ paddingLeft: '10px' }}>
                            按下 <strong> Cmd + Ctrl + T</strong> 以便在任何时刻打开此教程.
                        </span>
                    </div>
                </Typography.Paragraph>
            </div>
        ),
        style: { minWidth: '650px' },
    },
    {
        id: HOME_PAGE_INGESTION_ID,
        selector: `#${HOME_PAGE_INGESTION_ID}`,
        title: 'Ingest Data',
        content: (
            <Typography.Paragraph>
                立即通过导航至<strong>Ingestion</strong> 页面来整合你的数据源。
            </Typography.Paragraph>
        ),
    },
    {
        id: HOME_PAGE_DOMAINS_ID,
        selector: `#${HOME_PAGE_DOMAINS_ID}`,
        title: '通过Domain进行探索',
        content: (
            <Typography.Paragraph>
                以下是你们组织的<strong>Domains</strong>. Domains是数据资产的集合
                比方说Tables, Dashboards, and ML模型，他们使得发现与组织特定部分相关的信息变得容易。
            </Typography.Paragraph>
        ),
    },
    {
        id: HOME_PAGE_PLATFORMS_ID,
        selector: `#${HOME_PAGE_PLATFORMS_ID}`,
        title: '通过Platform进行探索',
        content: (
            <Typography.Paragraph>
                以下是你们组织的<strong>Data Platforms</strong>. Data Platforms 是特定的第三方数据系统或者工具。
                例如数据仓库 <strong>Snowflake</strong>,编排器<strong>Airflow</strong>, 仪表盘工具<strong>Looker</strong>等。
            </Typography.Paragraph>
        ),
    },
    {
        id: HOME_PAGE_MOST_POPULAR_ID,
        selector: `#${HOME_PAGE_MOST_POPULAR_ID}`,
        title: '探索最受欢迎的资产',
        content: "在这里，你将会找到在你们组织内被查看得最为频繁的那些资产。",
    },
    {
        id: HOME_PAGE_SEARCH_BAR_ID,
        selector: `#${HOME_PAGE_SEARCH_BAR_ID}`,
        title: '发现你的数据 🔍',
        content: (
            <Typography.Paragraph>
                <p>
                    这就是<strong>搜索栏</strong>. 它将作为你发现对你最重要的数据并围绕其开展协作的起始点。
                </p>
                <p>
                    不确定从哪开始? 点击<strong>探索所有</strong>!
                </p>
            </Typography.Paragraph>
        ),
    },
];

import React from 'react';
import { Typography } from 'antd';
import { OnboardingStep } from '../OnboardingStep';

export const SEARCH_RESULTS_FILTERS_ID = 'search-results-filters';
export const SEARCH_RESULTS_ADVANCED_SEARCH_ID = 'search-results-advanced-search';
export const SEARCH_RESULTS_BROWSE_SIDEBAR_ID = 'search-results-browse-sidebar';
export const SEARCH_RESULTS_FILTERS_V2_INTRO = 'search-results-filters-v2-intro';

export const SearchOnboardingConfig: OnboardingStep[] = [
    {
        id: SEARCH_RESULTS_FILTERS_ID,
        selector: `#${SEARCH_RESULTS_FILTERS_ID}`,
        title: '🕵️ 缩小你的搜索范围',
        content: (
            <Typography.Paragraph>
                通过应用一个或多个filters快速找到相关资产. 试试通过<strong>类型</strong>,{' '}
                <strong>Owner</strong>以及其他进行筛选!
            </Typography.Paragraph>
        ),
    },
    {
        id: SEARCH_RESULTS_ADVANCED_SEARCH_ID,
        selector: `#${SEARCH_RESULTS_ADVANCED_SEARCH_ID}`,
        title: '💪 使用高级filters挖掘更深',
        content: (
            <Typography.Paragraph>
                <strong>高级Filters</strong>提供额外的功能来创建更具体的搜索查询。 
            </Typography.Paragraph>
        ),
    },
    {
        id: SEARCH_RESULTS_BROWSE_SIDEBAR_ID,
        selector: `#${SEARCH_RESULTS_BROWSE_SIDEBAR_ID}`,
        title: '🧭 通过平台探索并优化你的搜索',
        style: { minWidth: '425px' },
        content: (
            <Typography.Paragraph>
                清楚你要搜索的架构或文件夹吗？轻松地在线浏览你所在组织的平台，然后选择一个你想要依据其筛选结果的特定容器。
            </Typography.Paragraph>
        ),
    },
    {
        id: SEARCH_RESULTS_FILTERS_V2_INTRO,
        prerequisiteStepId: SEARCH_RESULTS_FILTERS_ID,
        selector: `#${SEARCH_RESULTS_FILTERS_V2_INTRO}`,
        title: 'Filters Have Moved',
        content: (
            <Typography.Paragraph>
                通过我们全新且改进的Filters界面快速找到相关资产！我们的最新更新已将Filters移至屏幕顶部以便于访问。
            </Typography.Paragraph>
        ),
    },
];

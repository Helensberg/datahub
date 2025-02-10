import React from 'react';
import { Typography } from 'antd';
import { OnboardingStep } from '../OnboardingStep';

export const DOMAINS_INTRO_ID = 'domains-intro';
export const DOMAINS_CREATE_DOMAIN_ID = 'domains-create-domain';

export const DomainsOnboardingConfig: OnboardingStep[] = [
    {
        id: DOMAINS_INTRO_ID,
        title: 'Domains',
        content: (
            <Typography.Paragraph>
                <p>
                    欢迎来到AI Data Catalog <strong>Domains</strong>!
                </p>
                <p>
                    <strong>Domains</strong> 是与您组织的特定部分相关联的相关数据资产的集合。
                    比方说 <strong>市场</strong> 部门.
                </p>
            </Typography.Paragraph>
        ),
    },
    {
        id: DOMAINS_CREATE_DOMAIN_ID,
        selector: `#${DOMAINS_CREATE_DOMAIN_ID}`,
        title: '创建新的Domain',
        content: (
            <Typography.Paragraph>
                <p>
                    点击这里去创建新的 <strong>Domain</strong>.
                </p>
            </Typography.Paragraph>
        ),
    },
];

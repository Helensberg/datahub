import React from 'react';
import { Typography } from 'antd';
import { OnboardingStep } from '../OnboardingStep';

export const GROUPS_INTRO_ID = 'groups-intro';
export const GROUPS_CREATE_GROUP_ID = 'groups-create-group';

export const GroupsOnboardingConfig: OnboardingStep[] = [
    {
        id: GROUPS_INTRO_ID,
        title: '群组',
        content: (
            <Typography.Paragraph>
                <p>
                    欢迎来到AI Data Catalog<strong>群组</strong>!
                </p>
                <p>
                    <strong>群组</strong> 是用户集合，可用于为资产分配所有权并管理访问权限。
                </p>
                <p>
                    <strong>群组</strong> 可以在AI Data Catalog原生创建，或者从您的身份提供者处进行同步。
                </p>
            </Typography.Paragraph>
        ),
    },
    {
        id: GROUPS_CREATE_GROUP_ID,
        selector: `#${GROUPS_CREATE_GROUP_ID}`,
        title: '创建一个新的群组',
        content: (
            <Typography.Paragraph>
                <p>
                    点击这里去创建一个新的 <strong>群组</strong>.
                </p>
            </Typography.Paragraph>
        ),
    },
];

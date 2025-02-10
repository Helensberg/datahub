import React from 'react';
import { Typography } from 'antd';
import { OnboardingStep } from '../OnboardingStep';

export const POLICIES_INTRO_ID = 'policies-intro';
export const POLICIES_CREATE_POLICY_ID = 'policies-create-policy';

export const PoliciesOnboardingConfig: OnboardingStep[] = [
    {
        id: POLICIES_INTRO_ID,
        title: '策略',
        content: (
            <Typography.Paragraph>
                <p>
                    欢迎来到AI Data Catalog <strong>策略</strong>!
                </p>
                <p>
                    在绝大多数情况下， <strong>角色</strong> 是授予AI Data Catalog用户权限的最佳选择。
                </p>
                <p>
                    当需要对用户和组的权限进行更精细的控制时，<strong>策略</strong> 就发挥作用了。
                </p>
            </Typography.Paragraph>
        ),
    },
    {
        id: POLICIES_CREATE_POLICY_ID,
        selector: `#${POLICIES_CREATE_POLICY_ID}`,
        title: '创建一个新的策略',
        content: (
            <Typography.Paragraph>
                <p>
                    点击这里去创建一个新的<strong>策略</strong>。
                </p>
            </Typography.Paragraph>
        ),
    },
];

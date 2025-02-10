import React from 'react';
import { Typography } from 'antd';
import { OnboardingStep } from '../OnboardingStep';

export const ROLES_INTRO_ID = 'roles-intro';

export const RolesOnboardingConfig: OnboardingStep[] = [
    {
        id: ROLES_INTRO_ID,
        title: '角色',
        content: (
            <Typography.Paragraph>
                <p>
                    欢迎来到AI Data Catalog<strong>角色</strong>!
                </p>
                <p>
                    <strong>角色</strong> 是在此平台上管理用户权限的最佳方式。
                </p>
                <p>
                    AI Data Catalog目前支持三种可用的角色： <strong>管理员</strong>,{' '}
                    <strong>编辑</strong> 和 <strong>读者</strong>.
                </p>
            </Typography.Paragraph>
        ),
    },
];

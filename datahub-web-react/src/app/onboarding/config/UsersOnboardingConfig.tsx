import React from 'react';
import { Typography } from 'antd';
import { OnboardingStep } from '../OnboardingStep';

export const USERS_INTRO_ID = 'users-intro';
export const USERS_SSO_ID = 'users-sso';
export const USERS_INVITE_LINK_ID = 'users-invite-link';
export const USERS_ASSIGN_ROLE_ID = 'users-assign-role';

export const UsersOnboardingConfig: OnboardingStep[] = [
    {
        id: USERS_INTRO_ID,
        title: '用户',
        content: (
            <Typography.Paragraph>
                <p>
                    欢迎来到AI Data Catalog <strong>用户</strong>!
                </p>
                <p>
                    T有几种不同的方式可以把新的<strong>用户</strong> 引入AI Data Catalog.
                </p>
            </Typography.Paragraph>
        ),
    },
    {
        id: USERS_SSO_ID,
        title: '配置单点登录 (SSO)',
        content: (
            <Typography.Paragraph>
                <p>
                    引入新 <strong>用户</strong> 的首选方式是使用 <strong>单点登录</strong>。
                    目前，AI Data Catalog支持开放身份认证OIDC SSO.
                </p>
            </Typography.Paragraph>
        ),
    },
    {
        id: USERS_INVITE_LINK_ID,
        selector: `#${USERS_INVITE_LINK_ID}`,
        title: '邀请新用户',
        content: (
            <Typography.Paragraph>
                <p>
                    与同事共享邀请链接以便让他们进入AI Data Catalog. 还可以通过为此链接为新进来的用户分配<strong>角色</strong> 。
                </p>
            </Typography.Paragraph>
        ),
    },
    {
        id: USERS_ASSIGN_ROLE_ID,
        selector: `#${USERS_ASSIGN_ROLE_ID}`,
        title: '分配角色',
        content: (
            <Typography.Paragraph>
                <p>
                    你可以分配<strong>角色</strong> 给现有的 <strong>用户</strong> 。
                </p>
            </Typography.Paragraph>
        ),
    },
];

import React from 'react';
import { Typography } from 'antd';
import { OnboardingStep } from '../OnboardingStep';

export const BUSINESS_GLOSSARY_INTRO_ID = 'business-glossary-intro';
export const BUSINESS_GLOSSARY_CREATE_TERM_ID = 'business-glossary-create-term';
export const BUSINESS_GLOSSARY_CREATE_TERM_GROUP_ID = 'business-glossary-create-term-group';

export const BusinessGlossaryOnboardingConfig: OnboardingStep[] = [
    {
        id: BUSINESS_GLOSSARY_INTRO_ID,
        title: 'Business Glossary 📖',
        content: (
            <Typography.Paragraph>
                <p>
                    欢迎来到<strong>Business Glossary</strong>!
                </p>
                <p>
                    Glossary是一系列结构化和标准化的标签的集合，你可以用此来对数据资产进行分类。
                    你可以查看或创建<strong>Terms</strong> 和 <strong>Term Groups</strong>。
                </p>
            </Typography.Paragraph>
        ),
    },
    {
        id: BUSINESS_GLOSSARY_CREATE_TERM_ID,
        selector: `#${BUSINESS_GLOSSARY_CREATE_TERM_ID}`,
        title: 'Glossary Terms',
        content: (
            <Typography.Paragraph>
                <p>
                    点击这里去创建新的 <strong>Term</strong> .
                </p>
                <p>
                    <strong>Terms</strong> 是被赋予了特定定义的单词或短语。
                </p>
            </Typography.Paragraph>
        ),
    },
    {
        id: BUSINESS_GLOSSARY_CREATE_TERM_GROUP_ID,
        selector: `#${BUSINESS_GLOSSARY_CREATE_TERM_GROUP_ID}`,
        title: 'Glossary Term Groups',
        content: (
            <Typography.Paragraph>
                <p>
                    点击这里去创建新的 <strong>Term Group</strong>.
                </p>
                <p>
                    <strong>Term Groups</strong> 充当文件夹的角色，包括Terms和Term Groups.
                </p>
                <p>
                    例如，可能有一个 <strong>PII Term Group</strong> 包含不同类型的 PII Terms，
                    比方说 <strong>Email</strong> 或者 <strong>电话号码</strong>.
                </p>
            </Typography.Paragraph>
        ),
    },
];

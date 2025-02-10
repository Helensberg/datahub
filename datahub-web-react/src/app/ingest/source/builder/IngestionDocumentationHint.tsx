import React from 'react';
import styled from 'styled-components';
import { Button, Tooltip } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

import { SourceConfig } from './types';
import { ANTD_GRAY } from '../../../entity/shared/constants';

const Container = styled.div`
    background-color: #ffffff;
    border-radius: 8px;
    padding: 12px 12px 16px 24px;
    border: 1px solid #e0e0e0;
    margin-bottom: 20px;
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;
`;

const Title = styled.div`
    font-size: 16px;
    font-weight: bold;
`;

const Description = styled.div`
    font-size: 14px;
    max-width: 90%;
`;

const StyledCloseOutlined = styled(CloseOutlined)`
    color: ${ANTD_GRAY[6]};
`;

interface Props {
    sourceConfigs: SourceConfig;
    onHide: () => void;
}

export const IngestionDocumentationHint = ({ sourceConfigs, onHide }: Props) => {
    const { displayName, docsUrl } = sourceConfigs;
    return (
        <Container>
            <Header>
                <Title>Let&apos;s get connected! 🎉</Title>
                <Tooltip showArrow={false} title="Hide">
                    <Button type="text" icon={<StyledCloseOutlined />} onClick={onHide} />
                </Tooltip>
            </Header>
            <Description>
                <div style={{ marginBottom: 8 }}>
                    为了能从 {displayName}导入数据, 我们&apos;需要得到更多相关信息.
                </div>
                <div>
                    检查{' '}
                    <a href={docsUrl} target="_blank" rel="noopener noreferrer">
                        {displayName} Guide
                    </a>{' '}
                    去了解先决条件,l了解可用的设置,并查看示例以帮助连接到数据源。
                </div>
            </Description>
        </Container>
    );
};

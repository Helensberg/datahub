import { Typography } from 'antd';
import React from 'react';
import styled from 'styled-components/macro';
import { ANTD_GRAY } from '../entity/shared/constants';

const StyledParagraph = styled(Typography.Paragraph)`
    text-align: justify;
    text-justify: inter-word;
    margin: 40px 0;
    font-size: 15px;
`;

function EmptyDomainDescription() {
    return (
        <>
            <StyledParagraph type="secondary">
                <strong style={{ color: ANTD_GRAY[8] }}> 欢迎来到你的数据Domains!</strong> 看起来这个空间已经准备好被打造成
                一个条理清晰的数据世界了。 首先创建你的一个Domain通过——为您的数据资产设立一个高级别的分类。
            </StyledParagraph>
            <StyledParagraph type="secondary">
                <strong style={{ color: ANTD_GRAY[8] }}> 创建嵌套Domains</strong> ：想要挖掘到更深的层次? 你也可以创建嵌套Domains
                去增加精细度和结构就像嵌套俄罗斯套娃一样，这一切都是为了完善您的组织架构。 
            </StyledParagraph>
            <StyledParagraph type="secondary">
                <strong style={{ color: ANTD_GRAY[8] }}>建立你的数据产品</strong>: 一旦设定好Domains，再深入一步！ 
                组织你的数据资产为数据产品以实现数据网络架构。数据产品使得你可以将数据按照产品的方式处置，使其更易管理和获取。
            </StyledParagraph>
            <StyledParagraph type="secondary">
                准备好开启这场数据冒险之旅了吗? 点击创建Domain按钮去塑造你的数据版图吧！
            </StyledParagraph>
        </>
    );
}

export default EmptyDomainDescription;

import { EntityType } from '../../../types.generated';

// TODO(Gabe): integrate this w/ the theme
export const REDESIGN_COLORS = {
    GREY: '#e5e5e5',
    BLUE: '#1890FF',
};

export const ANTD_GRAY = {
    1: '#FFFFFF',
    2: '#FAFAFA',
    2.5: '#F8F8F8',
    3: '#F5F5F5',
    4: '#F0F0F0',
    4.5: '#E9E9E9',
    5: '#D9D9D9',
    6: '#BFBFBF',
    7: '#8C8C8C',
    8: '#595959',
    9: '#434343',
};

export const ANTD_GRAY_V2 = {
    1: '#F8F9Fa',
    2: '#F3F5F6',
    5: '#DDE0E4',
    6: '#B2B8BD',
    8: '#5E666E',
    10: '#1B1E22',
};

export const EMPTY_MESSAGES = {
    documentation: {
        title: '无文档',
        description: '通过添加文档以及有助于理解的资源链接来分享你的知识。',
    },
    tags: {
        title: '无标签',
        description: '给实体添加标签以帮助使其更易被发现，并突出它们最重要的属性。',
    },
    terms: {
        title: '无术语',
        description: '将词汇表中的术语应用于实体以对其数据进行分类。',
    },
    owners: {
        title: '无所有者',
        description: '添加所有者有助于你追踪谁应对这些数据负责。',
    },
    properties: {
        title: '无属性',
        description: '如果你的数据源中存在属性，它们将会在此处显示。',
    },
    queries: {
        title: '无查询',
        description: '针对该数据集创建、查看以及分享常用查询。',
    },
    domain: {
        title: '未设置域',
        description: '通过将相关实体添加到一个域中，依据你的组织结构对它们进行分组。',
    },
    dataProduct: {
        title: '未设置数据产品',
        description: '通过将相关实体添加到一个数据产品中，依据共享特征对它们进行分组。',
    },
    contains: {
        title: '不包含任何术语',
        description: '术语可以包含其他术语以表示一种 “有一个” 样式的关系。',
    },
    inherits: {
        title: '不继承自任何术语',
        description: '术语可以从其他术语继承而来，以表示一种 “是一个” 样式的关系。',
    },
    '被包含': {
        title: '不被任何术语所包含',
        description: '术语可以被其他术语所包含，以表示一种 “有一个” 样式的关系。',
    },
    '被继承': {
        title: '不继承自任何术语',
        description: '术语可以从其他术语继承而来，以表示一种 “是一个” 样式的关系。',
    },
    businessAttributes: {
        title: '还尚未添加任何业务属性',
        description: '给实体添加业务属性以对其数据进行分类。',
    },
};

export const ELASTIC_MAX_COUNT = 10000;

export const getElasticCappedTotalValueText = (count: number) => {
    if (count === ELASTIC_MAX_COUNT) {
        return `${ELASTIC_MAX_COUNT}+`;
    }

    return `${count}`;
};

export const ENTITY_TYPES_WITH_MANUAL_LINEAGE = new Set([
    EntityType.Dashboard,
    EntityType.Chart,
    EntityType.Dataset,
    EntityType.DataJob,
]);

export const GLOSSARY_ENTITY_TYPES = [EntityType.GlossaryTerm, EntityType.GlossaryNode];

export const DEFAULT_SYSTEM_ACTOR_URNS = ['urn:li:corpuser:__datahub_system', 'urn:li:corpuser:unknown'];

export const VIEW_ENTITY_PAGE = 'VIEW_ENTITY_PAGE';

// only values for Domain Entity for custom configurable default tab
export enum EntityProfileTab {
    DOMAIN_ENTITIES_TAB = 'DOMAIN_ENTITIES_TAB',
    DOCUMENTATION_TAB = 'DOCUMENTATION_TAB',
    DATA_PRODUCTS_TAB = 'DATA_PRODUCTS_TAB',
}

import { message, Modal } from 'antd';
import React, { useState } from 'react';
import ActionDropdown from './ActionDropdown';
import { handleBatchError } from '../../../../utils';
import { useBatchSetDataProductMutation } from '../../../../../../../graphql/dataProduct.generated';
import SetDataProductModal from '../../../../containers/profile/sidebar/DataProduct/SetDataProductModal';

type Props = {
    urns: Array<string>;
    disabled: boolean;
    refetch?: () => void;
};

// eslint-disable-next-line
export default function DataProductsDropdown({ urns, disabled = false, refetch }: Props) {
    const [isEditModalVisible, setIsEditModalVisible] = useState(false);
    const [batchSetDataProductMutation] = useBatchSetDataProductMutation();

    const batchUnsetDataProducts = () => {
        batchSetDataProductMutation({
            variables: {
                input: {
                    resourceUrns: urns,
                },
            },
        })
            .then(({ errors }) => {
                if (!errors) {
                    message.loading({ content: 'Loading...', duration: 2 });
                    setTimeout(() => {
                        message.success({ content: '移除数据产品!', duration: 2 });
                        refetch?.();
                    }, 2000);
                }
            })
            .catch((e) => {
                message.destroy();
                message.error(
                    handleBatchError(urns, e, {
                        content: `未能移除数据产品: \n ${e.message || ''}`,
                        duration: 3,
                    }),
                );
            });
    };

    return (
        <>
            <ActionDropdown
                name="Data Product"
                actions={[
                    {
                        title: '设定数据产品',
                        onClick: () => {
                            setIsEditModalVisible(true);
                        },
                    },
                    {
                        title: '取消设定数据产品',
                        onClick: () => {
                            Modal.confirm({
                                title: `如果你继续，数据产品设定将被取消.`,
                                content: `你确定你讲取消设定数据产品?`,
                                onOk() {
                                    batchUnsetDataProducts();
                                },
                                onCancel() {},
                                okText: 'Yes',
                                maskClosable: true,
                                closable: true,
                            });
                        },
                    },
                ]}
                disabled={disabled}
            />
            {isEditModalVisible && (
                <SetDataProductModal
                    urns={urns}
                    currentDataProduct={null}
                    onModalClose={() => {
                        setIsEditModalVisible(false);
                    }}
                    refetch={refetch}
                />
            )}
        </>
    );
}

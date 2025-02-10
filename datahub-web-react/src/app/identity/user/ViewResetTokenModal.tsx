import { RedoOutlined } from '@ant-design/icons';
import { Button, message, Modal, Typography } from 'antd';
import React, { useState } from 'react';
import styled from 'styled-components';
import { PageRoutes } from '../../../conf/Global';
import { useCreateNativeUserResetTokenMutation } from '../../../graphql/user.generated';
import analytics, { EventType } from '../../analytics';

const ModalSection = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 12px;
`;

const ModalSectionHeader = styled(Typography.Text)`
    &&&& {
        padding: 0px;
        margin: 0px;
        margin-bottom: 4px;
    }
`;

const ModalSectionParagraph = styled(Typography.Paragraph)`
    &&&& {
        padding: 0px;
        margin: 0px;
    }
`;

const CreateResetTokenButton = styled(Button)`
    display: inline-block;
    width: 20px;
    margin-left: -6px;
`;

type Props = {
    open: boolean;
    userUrn: string;
    username: string;
    onClose: () => void;
};

export default function ViewResetTokenModal({ open, userUrn, username, onClose }: Props) {
    const baseUrl = window.location.origin;
    const [hasGeneratedResetToken, setHasGeneratedResetToken] = useState(false);

    const [createNativeUserResetTokenMutation, { data: createNativeUserResetTokenData }] =
        useCreateNativeUserResetTokenMutation({});

    const createNativeUserResetToken = () => {
        createNativeUserResetTokenMutation({
            variables: {
                input: {
                    userUrn,
                },
            },
        })
            .then(({ errors }) => {
                if (!errors) {
                    analytics.event({
                        type: EventType.CreateResetCredentialsLinkEvent,
                        userUrn,
                    });
                    setHasGeneratedResetToken(true);
                    message.success('生成了用于重置凭证的新链接');
                }
            })
            .catch((e) => {
                message.destroy();
                message.error({
                    content: `未能生成用于重置凭证的新链接: \n ${e.message || ''}`,
                    duration: 3,
                });
            });
    };

    const resetToken = createNativeUserResetTokenData?.createNativeUserResetToken?.resetToken || '';

    const inviteLink = `${baseUrl}${PageRoutes.RESET_CREDENTIALS}?reset_token=${resetToken}`;

    return (
        <Modal
            width={700}
            footer={null}
            title={
                <Typography.Text>
                    <b>重设用户密码</b>
                </Typography.Text>
            }
            open={open}
            onCancel={onClose}
        >
            {hasGeneratedResetToken ? (
                <ModalSection>
                    <ModalSectionHeader strong>Share reset link</ModalSectionHeader>
                    <ModalSectionParagraph>
                        分享此链接给{username}去重置凭证。
                        <b>此链接会在24小时后失效。</b>
                    </ModalSectionParagraph>
                    <Typography.Paragraph copyable={{ text: inviteLink }}>
                        <pre>{inviteLink}</pre>
                    </Typography.Paragraph>
                </ModalSection>
            ) : (
                <ModalSection>
                    <ModalSectionHeader strong>一个新链接一定会被生成</ModalSectionHeader>
                    <ModalSectionParagraph>
                        你不能查看任何旧链接. 请在下方生成新链接.
                    </ModalSectionParagraph>
                </ModalSection>
            )}
            <ModalSection>
                <ModalSectionHeader strong>生成新链接！</ModalSectionHeader>
                <ModalSectionParagraph>
                    生成了新的重置链接! 请注意，任何旧链接将不再有效。
                </ModalSectionParagraph>
                <CreateResetTokenButton
                    onClick={createNativeUserResetToken}
                    size="small"
                    type="text"
                    data-testid="refreshButton"
                >
                    <RedoOutlined style={{}} />
                </CreateResetTokenButton>
            </ModalSection>
        </Modal>
    );
}

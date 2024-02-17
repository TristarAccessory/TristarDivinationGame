import {useState} from 'react';
import {Modal} from 'react-bootstrap';
import styled from "styled-components";
import {
    FacebookShareButton,
    LineShareButton,
    FacebookMessengerShareButton,
    FacebookIcon,
    LineIcon,
    FacebookMessengerIcon
} from 'react-share';

import AnswerButton from "#/Game/Shared/AnswerButton.tsx";

const StyledModal = styled(Modal)`
    .modal-content {
        color: #A0522D;
        background-color: rgb(254, 239, 232, 0.8);
    }
`;

const StyledCloseButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    border: 1px solid #A0522D;
    border-radius: 0.5rem;
`;

const ShareModal = ({finalResult, shareUrl}: {
    finalResult: string,
    shareUrl: string;
}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const shareTitle = `我在 Tristar 小遊戲的運勢是${finalResult}，你的呢？`;

    return (
        <>
            <AnswerButton answer={{text: "分享給朋友", type: "share"}}
                          handleChoice={handleShow}/>

            <StyledModal show={show} onHide={handleClose} centered={true}>
                <Modal.Header closeButton>
                    <Modal.Title className="fw-bolder">
                        分享你的結果給朋友
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex justify-content-around">
                        <FacebookShareButton title={shareTitle}
                                             url={shareUrl}>
                            <FacebookIcon size={32} round/>
                        </FacebookShareButton>
                        <LineShareButton title={shareTitle}
                                         url={shareUrl}>
                            <LineIcon size={32} round/>
                        </LineShareButton>
                        <FacebookMessengerShareButton title={shareTitle}
                                                      url={shareUrl}
                                                      appId="TristarDivinationGame">
                            <FacebookMessengerIcon size={32} round/>
                        </FacebookMessengerShareButton>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <StyledCloseButtonContainer>
                        <AnswerButton answer={{text: "關閉", type: "close"}}
                                      handleChoice={handleClose}/>
                    </StyledCloseButtonContainer>
                </Modal.Footer>
            </StyledModal>
        </>
    );
};

export default ShareModal;

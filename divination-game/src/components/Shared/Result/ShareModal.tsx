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

const ShareModal = ({shareUrl}: {
    shareUrl: string;
}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <AnswerButton answer={{text: "分享給朋友", type: "share"}}
                          handleChoice={handleShow}/>

            <StyledModal show={show} onHide={handleClose} centered={true}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        分享你的結果給朋友
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex justify-content-around">
                        <FacebookShareButton url={shareUrl}>
                            <FacebookIcon size={32} round/>
                        </FacebookShareButton>
                        <LineShareButton url={shareUrl}>
                            <LineIcon size={32} round/>
                        </LineShareButton>
                        <FacebookMessengerShareButton url={shareUrl} appId="YOUR_APP_ID">
                            <FacebookMessengerIcon size={32} round/>
                        </FacebookMessengerShareButton>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <AnswerButton answer={{text: "關閉", type: "close"}}
                                  handleChoice={handleClose}/>
                </Modal.Footer>
            </StyledModal>
        </>
    );
};

export default ShareModal;

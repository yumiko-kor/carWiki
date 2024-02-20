import { useState } from "react";
import styled from "styled-components";

const DetailModal = ({ $display }) => {
    
    return (
        <ModalBg $display={$display}>
            <ModalWrap>

            </ModalWrap>
        </ModalBg>
    );
};

const ModalBg = styled.div`
    position: fixed;
	background: ${props => props.$bgcolor || 'rgba(248, 254, 255, 0.2)'};
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	min-width: 1080px;
	display: ${props => (props.$display === 'hidden' ? 'none' : 'block')};
    visibility: ${props => (props.$visibility === 'hidden' ? 'hidden' : 'visible')};
	z-index: 20;
`;

const ModalWrap = styled.div`
	position: absolute;
	background: #FAFEFF;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	min-width: ${props => props.min || '604px'};
	padding: ${props => props.$padding || '30px'};
	border-radius: 20px;
	min-height: 608px;
	overflow: auto;
	box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
`;

export default DetailModal;
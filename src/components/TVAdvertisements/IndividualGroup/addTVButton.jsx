import React from 'react';
import { FaTv } from 'react-icons/fa'; // Import the TV icon from react-icons
import styled from "styled-components";

const AddTVButton = () => {
    return (
        <StyledWrapper>
            <ul className="add-tv-button">
                <li className="icon-content">
                    <div className="tv">
                        <FaTv />
                    </div>
                    <div className="text">Add TV</div>
                </li>
            </ul>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
    .add-tv-button {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
        margin: 0;
        cursor: pointer;
    }

    .icon-content {
        margin: 0 10px;
        position: relative;
    }

    .tv {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 85px;
        height: 40px; 
        border-radius: 10%;
        color: rgba(213, 205, 240, 0.87);
        font-size: 28px; 
        transition: color 0.3s ease-in-out;
        background-color:rgb(255, 255, 255);;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    }

    .add-tv-button:hover .tv {
        color: rgb(179, 139, 255); 
    }

    .text {
        position: absolute;
        top: -30px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #000;
        color: #fff;
        padding: 6px 15px;
        border-radius: 5px;
        opacity: 0;
        visibility: hidden;
        font-size: 14px;
        transition: all 0.3s ease;
        white-space: nowrap;     
    }

    .add-tv-button:hover .icon-content .text {
        opacity: 1;
        visibility: visible;
        top: -50px;
    }
`;

export default AddTVButton;

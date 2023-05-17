import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineDown } from 'react-icons/ai'

const AccordionContainer = styled.div`
  margin-bottom: 10px;
`;

const AccordionItem = styled.div`
  color: var(--secondary-color);
  border: 1px solid #000;
  border-left: none;
  border-right: none;
  border-bottom: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  font-size: 24px;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #eee;
  }
`;

const AccordionContent = styled.div`
  transition: 0.4s;
  /* display: ${({ isOpen }) => (isOpen ? 'block' : 'none')}; */
  height:  ${({ isOpen }) => (isOpen ? '100%' : '-0px')};
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  font-weight: 400;
  font-size: ${({ isOpen }) => (isOpen ? '20px' : '0')};
  padding: ${({ isOpen }) => (isOpen ? '2%' : '0')};
  
`;

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close the clicked item if it's already open
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <AccordionContainer>
      {items.map((item, index) => (
        <div key={index}>
          <AccordionItem index={index} onClick={() => handleItemClick(index)}>
            {item.title} <AiOutlineDown />
          </AccordionItem>
          <AccordionContent  isOpen={activeIndex === index}>
            {item.content}{index}
          </AccordionContent>
        </div>
      ))}
    </AccordionContainer>
  );
};

export default Accordion;

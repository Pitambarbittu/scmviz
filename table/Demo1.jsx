import React, { useState } from 'react';

const AccordionTable = ({ data }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <table className="accordion-table">
      <thead>
        <tr>
          <th>Header</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <React.Fragment key={index}>
            <tr className="accordion-header" onClick={() => toggleAccordion(index)}>
              <td>{item.header}</td>
              <td>{expandedIndex === index ? '-' : '+'}</td>
            </tr>
            {expandedIndex === index && (
              <tr className="accordion-content">
                <td colSpan="2">{item.content}</td>
              </tr>
            )}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

const Demo1 = () => {
  const accordionData = [
    {
      header: 'Section 1',
      content: 'Content for section 1',
    },
    {
      header: 'Section 2',
      content: 'Content for section 2',
    },
    {
      header: 'Section 3',
      content: 'Content for section 3',
    },
  ];

  return (
    <div className="app">
      <AccordionTable data={accordionData} />
    </div>
  );
};

export default Demo1;

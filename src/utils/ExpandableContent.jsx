import React, { useState } from 'react';

const ExpandableTextbox = ({ text, textClass, className, viewClass, limit = 100 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => setIsExpanded(!isExpanded);

  const displayText = isExpanded ? text : text.slice(0, limit);

  return (
    <div className={`${className}`}>
      <p className={`${textClass}`}>
        {displayText}
        {!isExpanded && text.length > limit ? '...' : ''}
      </p>

      {text.length > limit && (
        <button
          onClick={toggleExpanded}
          className={`text-blue-500 text-sm font-medium mt-2 ${viewClass}`}
        >
          {isExpanded ? 'View less' : 'View more'}
        </button>
      )}
    </div>
  );
};

export default ExpandableTextbox;

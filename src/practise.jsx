const Alert = ({ type, children }) => {
  const colors = {
    success: 'lightgreen',
    error: 'salmon',
    warning: 'orange'
  };

  return (
    <div style={{ backgroundColor: colors[type]}}>
      {children}
    </div>
  );
};

// Usage
// <Alert type="error">
//   <strong>Error 404:</strong> Page not found.
// </Alert>


import React, { useState } from 'react';

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '5px', margin: '10px' }}>
      
      {/* 1. The Trigger Button */}
      <button 
        onClick={() => setIsOpen(prev=>!prev) } 
        style={{ 
          width: '100%', 
          padding: '10px', 
          background: '#f0f0f0', 
          border: 'none',
          textAlign: 'left',
          cursor: 'pointer'
        }}
      >
        {/* Shows an arrow based on state */}
        {title} {isOpen ? '🔼' : '🔽'}
      </button>

      {/* 2. The Conditional Render */}
      {/* If isOpen is true, show this div. If false, show nothing. */}

    {isOpen ? <div style={{ padding: '10px' }}>
        {children}
      </div> : null}

    </div>
  );
};


const Card = ({ children, footerContent }) => {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', overflow: 'hidden', maxWidth: '300px' }}>
      
      {/* 1. Main Content Area */}
      <div style={{ padding: '20px' }}>
        {children}
      </div>

      {/* 2. Footer Area (Conditional) */}
      {/* Only render this gray box IF footerContent exists */}
      
      { /* ??? Your Code Here ??? */ 
        <div style={{ background: '#f5f5f5', padding: '10px', borderTop: '1px solid #ccc' }}>
          {footerContent}
        </div>
      }

    </div>
  );
};

// Usage Example to test your mind:
// <Card footerContent={<button>Buy Now</button>}>
//   <h3>iPhone 15</h3>
//   <p>$999</p>
// </Card>
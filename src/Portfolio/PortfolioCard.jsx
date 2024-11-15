import React, { useRef } from 'react';

function PortfolioCard(props) {
  const cardRef = useRef(null); // Reference for the card
  const hoverDivRef = useRef(null); // Reference for the hoverDiv

  function handleHoverDivMove(e) {
    if (cardRef.current && hoverDivRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left; // X position within the card
      const y = e.clientY - rect.top;  // Y position within the card

      hoverDivRef.current.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      hoverDivRef.current.style.opacity = 1; // Ensure it is visible
      hoverDivRef.current.style.display = 'flex'; // Make it visible
    }
  }

  function handleMouseLeave() {
    if (hoverDivRef.current) {
      hoverDivRef.current.style.opacity = 0; // Fade out
      hoverDivRef.current.style.display = 'none'; // Hide completely after fading
    }
  }

  function handleCardClick() {
    if (props.link) {
      window.open(props.link, "_blank"); // Open the link in a new tab
    }
  }

  return (
    <article
      className="card"
      ref={cardRef}
      onMouseMove={handleHoverDivMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleCardClick} // Redirect when clicking the card
      style={{
        position: 'relative',
        cursor: 'pointer',
        overflow: 'visible', // Allow overflow to not be clipped
      }}
    >
      <div
        className='hoverDiv'
        ref={hoverDivRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '400px',
          height: '300px',
          pointerEvents: 'none', // Prevent blocking interactions with the card
          transition: 'transform 0.2s, opacity 0.6s',
          opacity: 0,
          backgroundImage: `url(${props.image})`, // Use backgroundImage with the URL from props
          backgroundSize: 'cover', // Adjust background size
          backgroundPosition: 'center',
          borderRadius: '10px',
          display: 'none', // Initially hidden
          justifyContent: 'center',
          alignItems: 'center',
          transform: 'translate(-50%, -50%)',
          color: '#000',
          zIndex: 999,
          border: "2px solid gray"
        }}
      >
        <span>View</span>
      </div>
      <div className="container">
        <div className="content">
          <span className="card_role">{props.role || "Default Role"}</span>
          <div className="info">
            <h3 className="card-title">{props.title || "Default Title"}</h3>
            <p className="card-description">{props.description || "Default Description"}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default PortfolioCard;

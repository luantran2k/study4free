function ClockIcon() {
  return (
    <svg
      width="16px"
      height="16px"
      viewBox="0 0 48 48"
      fill="currentColor"
      fontSize="currentFontSize"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="a"
        style={{
          fill: 'none',
          stroke: '#000000',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
        }}
        d="M24,2.5A21.5,21.5,0,1,1,2.5,24,21.51,21.51,0,0,1,24,2.5Z"
      />
      <circle
        className="a"
        style={{
          fill: 'none',
          stroke: '#000000',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
        }}
        cx="24"
        cy="24"
        r="2.5"
      />
      <line
        className="a"
        style={{
          fill: 'none',
          stroke: '#000000',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
        }}
        x1="24"
        y1="21.5"
        x2="24"
        y2="11.44"
      />
      <line
        className="a"
        style={{
          fill: 'none',
          stroke: '#000000',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
        }}
        x1="26.1"
        y1="25.35"
        x2="38.3"
        y2="33.15"
      />
    </svg>
  );
}

export default ClockIcon;

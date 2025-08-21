const ServiceHeaderLogo = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 300 80"
        width="300"
        height="80"
      >
        {/* Background gradient definition */}
        <defs>
          <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1e40af" stopOpacity={1} />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity={1} />
            <stop offset="100%" stopColor="#f97316" stopOpacity={1} />
          </linearGradient>
          <linearGradient
            id="orbitGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#2563eb" stopOpacity={0.8} />
            <stop offset="100%" stopColor="#ea580c" stopOpacity={0.6} />
          </linearGradient>
        </defs>

        {/* Orbital rings */}
        <g transform="translate(40,40)">
          {/* Outer orbit */}
          <ellipse
            cx="0"
            cy="0"
            rx="25"
            ry="8"
            fill="none"
            stroke="url(#orbitGradient)"
            strokeWidth="2"
            opacity="0.7"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0;360"
              dur="8s"
              repeatCount="indefinite"
            />
          </ellipse>

          {/* Middle orbit */}
          <ellipse
            cx="0"
            cy="0"
            rx="18"
            ry="6"
            fill="none"
            stroke="url(#orbitGradient)"
            strokeWidth="1.5"
            opacity="0.8"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="360;0"
              dur="6s"
              repeatCount="indefinite"
            />
          </ellipse>

          {/* Inner orbit */}
          <ellipse
            cx="0"
            cy="0"
            rx="12"
            ry="4"
            fill="none"
            stroke="url(#orbitGradient)"
            strokeWidth="1"
            opacity="0.9"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0;360"
              dur="4s"
              repeatCount="indefinite"
            />
          </ellipse>

          {/* Central core */}
          <circle cx="0" cy="0" r="4" fill="url(#textGradient)">
            <animate
              attributeName="r"
              values="3.5;4.5;3.5"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>

          {/* Orbiting particles */}
          <circle cx="22" cy="0" r="2" fill="#2563eb" opacity="0.8">
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0;360"
              dur="8s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="-15" cy="0" r="1.5" fill="#ea580c" opacity="0.7">
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="360;0"
              dur="6s"
              repeatCount="indefinite"
            />
          </circle>
        </g>

        {/* Text */}
        <text
          x="65"
          y="50"
          fontFamily="Arial, sans-serif"
          fontSize="28"
          fontWeight="bold"
          fill="url(#textGradient)"
        >
          ORBILOX
        </text>

        {/* Subtle glow effect */}
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </svg>
    </>
  );
};

export default ServiceHeaderLogo;

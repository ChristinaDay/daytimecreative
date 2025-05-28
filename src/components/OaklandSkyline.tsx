import React from 'react';

const OaklandSkyline = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 h-48 overflow-hidden -z-5 w-screen">
      <svg
        viewBox="0 0 1800 240"
        className="w-full h-full min-w-full"
        preserveAspectRatio="none"
        style={{ width: '100vw', minWidth: '100vw' }}
      >
        <defs>
          {/* Night gradients using dark blue */}
          <linearGradient id="nightBuildingGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0f172a" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#0f172a" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="tallNightBuildingGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0f172a" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#0f172a" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#0f172a" stopOpacity="0.5" />
          </linearGradient>
          <linearGradient id="nightAtmosphericGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0f172a" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#0f172a" stopOpacity="0.1" />
          </linearGradient>
          
          {/* Window light patterns */}
          <pattern id="windowLights" patternUnits="userSpaceOnUse" width="8" height="12">
            <rect width="8" height="12" fill="transparent"/>
            <rect x="1" y="2" width="2" height="2" fill="#fbbf24" opacity="0.8"/>
            <rect x="5" y="2" width="2" height="2" fill="#fbbf24" opacity="0.6"/>
            <rect x="1" y="6" width="2" height="2" fill="#fbbf24" opacity="0.7"/>
            <rect x="5" y="8" width="2" height="2" fill="#fbbf24" opacity="0.5"/>
          </pattern>
          
          <pattern id="sparseWindowLights" patternUnits="userSpaceOnUse" width="10" height="15">
            <rect width="10" height="15" fill="transparent"/>
            <rect x="2" y="3" width="1.5" height="1.5" fill="#fbbf24" opacity="0.6"/>
            <rect x="6" y="7" width="1.5" height="1.5" fill="#fbbf24" opacity="0.4"/>
            <rect x="2" y="11" width="1.5" height="1.5" fill="#fbbf24" opacity="0.5"/>
          </pattern>
        </defs>

        {/* Night sky background - distant hills on right side only */}
        <path
          d="M1000,240 C1080,200 1120,180 1200,150 C1250,130 1280,115 1320,125 C1380,140 1420,170 1480,175 C1520,178 1550,160 1580,140 C1600,125 1620,110 1650,105 C1680,100 1720,115 1750,125 C1770,132 1785,128 1800,130 L1800,240 Z"
          fill="url(#nightAtmosphericGradient)"
        />
        
        {/* Bay Bridge - nighttime silhouette */}
        <g fill="#0f172a" opacity="0.4">
          {/* Bridge foundation with perspective */}
          <path d="M0,178 Q210,176 420,180" stroke="#0f172a" strokeWidth="4" fill="none" />
          
          {/* Western tower (main suspension tower) */}
          <rect x="140" y="95" width="20" height="83" fill="#0f172a" />
          <rect x="145" y="90" width="10" height="10" fill="#0f172a" />
          <polygon points="145,90 150,85 155,90" fill="#0f172a" />
          
          {/* Tower lights */}
          <circle cx="150" cy="88" r="1" fill="#ef4444" opacity="0.8" />
          <circle cx="308" cy="103" r="1" fill="#ef4444" opacity="0.8" />
          
          {/* Eastern tower */}
          <rect x="300" y="110" width="16" height="68" fill="#0f172a" />
          <rect x="304" y="105" width="8" height="8" fill="#0f172a" />
          
          {/* Main suspension cables */}
          <path d="M150,95 Q235,120 308,110" stroke="#0f172a" strokeWidth="2" fill="none" opacity="0.8" />
          
          {/* Vertical cables with proper spacing */}
          <g opacity="0.5">
            <path d="M170,178 Q170,140 175,125" stroke="#0f172a" strokeWidth="0.8" fill="none" />
            <path d="M200,178 Q200,135 205,120" stroke="#0f172a" strokeWidth="0.8" fill="none" />
            <path d="M230,178 Q230,138 235,123" stroke="#0f172a" strokeWidth="0.8" fill="none" />
            <path d="M260,178 Q260,135 265,120" stroke="#0f172a" strokeWidth="0.8" fill="none" />
            <path d="M290,178 Q290,140 295,125" stroke="#0f172a" strokeWidth="0.8" fill="none" />
          </g>
        </g>

        {/* Far left edge buildings - night silhouettes */}
        <g fill="#0f172a" opacity="0.3">
          <rect x="0" y="165" width="28" height="75" fill="#0f172a" />
          <rect x="32" y="155" width="22" height="85" fill="#0f172a" />
          <rect x="58" y="170" width="18" height="70" fill="#0f172a" />
          <rect x="80" y="160" width="25" height="80" fill="#0f172a" />
          <rect x="110" y="175" width="16" height="65" fill="#0f172a" />
          
          {/* Sparse window lights */}
          <rect x="5" y="170" width="18" height="65" fill="url(#sparseWindowLights)" />
          <rect x="35" y="160" width="16" height="75" fill="url(#sparseWindowLights)" />
        </g>

        {/* Far background buildings - darker night tones */}
        <g fill="#0f172a" opacity="0.35">
          <rect x="380" y="130" width="24" height="110" fill="#0f172a" />
          <rect x="410" y="140" width="30" height="100" fill="#0f172a" />
          <rect x="450" y="125" width="28" height="115" fill="#0f172a" />
          <rect x="485" y="135" width="22" height="105" fill="#0f172a" />
          <rect x="515" y="145" width="26" height="95" fill="#0f172a" />
          <rect x="550" y="130" width="32" height="110" fill="#0f172a" />
          
          {/* Right side buildings */}
          <rect x="1320" y="140" width="28" height="100" fill="#0f172a" />
          <rect x="1355" y="130" width="32" height="110" fill="#0f172a" />
          <rect x="1395" y="145" width="24" height="95" fill="#0f172a" />
          <rect x="1425" y="135" width="30" height="105" fill="#0f172a" />
          <rect x="1465" y="150" width="22" height="90" fill="#0f172a" />
          <rect x="1495" y="140" width="26" height="100" fill="#0f172a" />
          <rect x="1530" y="155" width="28" height="85" fill="#0f172a" />
          <rect x="1565" y="145" width="24" height="95" fill="#0f172a" />
          <rect x="1595" y="160" width="30" height="80" fill="#0f172a" />
          <rect x="1635" y="150" width="26" height="90" fill="#0f172a" />
          <rect x="1670" y="165" width="22" height="75" fill="#0f172a" />
          <rect x="1700" y="155" width="28" height="85" fill="#0f172a" />
          <rect x="1735" y="170" width="24" height="70" fill="#0f172a" />
          <rect x="1765" y="160" width="35" height="80" fill="#0f172a" />
          
          {/* Scattered window lights on background buildings */}
          <rect x="385" y="135" width="14" height="100" fill="url(#sparseWindowLights)" />
          <rect x="455" y="130" width="18" height="105" fill="url(#sparseWindowLights)" />
          <rect x="1360" y="135" width="22" height="100" fill="url(#sparseWindowLights)" />
          <rect x="1500" y="145" width="16" height="90" fill="url(#sparseWindowLights)" />
        </g>

        {/* Midground - main downtown cluster with night lighting */}
        <g fill="#0f172a" opacity="0.6">
          {/* Tribune Tower - nighttime silhouette with clock illumination */}
          <rect x="690" y="70" width="44" height="170" fill="url(#tallNightBuildingGradient)" />
          {/* Illuminated clock section */}
          <rect x="698" y="60" width="28" height="20" fill="#0f172a" />
          <circle cx="712" cy="70" r="6" fill="none" stroke="#fbbf24" strokeWidth="1" opacity="0.9" />
          <circle cx="712" cy="70" r="2" fill="#fbbf24" opacity="0.8" />
          {/* Spire with beacon light */}
          <polygon points="705,60 712,40 719,60" fill="#0f172a" />
          <rect x="710" y="40" width="4" height="25" fill="#0f172a" />
          <polygon points="710,40 712,35 714,40" fill="#0f172a" />
          <circle cx="712" cy="37" r="1.5" fill="#ef4444" opacity="0.9" />
          
          {/* Main office towers with window lights */}
          <rect x="745" y="85" width="48" height="155" fill="url(#tallNightBuildingGradient)" />
          <polygon points="745,85 769,70 793,85" fill="#0f172a" />
          {/* Window lights pattern */}
          <rect x="750" y="90" width="38" height="145" fill="url(#windowLights)" />
          
          <rect x="805" y="60" width="42" height="180" fill="url(#tallNightBuildingGradient)" />
          <rect x="812" y="53" width="28" height="12" fill="#0f172a" />
          <rect x="810" y="65" width="32" height="170" fill="url(#windowLights)" />
          
          <rect x="855" y="90" width="38" height="150" fill="url(#nightBuildingGradient)" />
          <rect x="860" y="95" width="28" height="140" fill="url(#windowLights)" />
          
          <rect x="900" y="80" width="32" height="160" fill="url(#tallNightBuildingGradient)" />
          <polygon points="900,80 916,65 932,80" fill="#0f172a" />
          <rect x="905" y="85" width="22" height="150" fill="url(#windowLights)" />
          
          <rect x="940" y="95" width="40" height="145" fill="url(#nightBuildingGradient)" />
          <rect x="945" y="100" width="30" height="135" fill="url(#sparseWindowLights)" />
          
          {/* Mid-rise buildings with occasional lights */}
          <rect x="990" y="145" width="28" height="95" fill="#0f172a" />
          <rect x="1025" y="130" width="34" height="110" fill="#0f172a" />
          <rect x="1070" y="155" width="26" height="85" fill="#0f172a" />
          <rect x="1105" y="150" width="32" height="90" fill="#0f172a" />
          <rect x="1145" y="140" width="36" height="100" fill="#0f172a" />
          <rect x="1190" y="155" width="28" height="85" fill="#0f172a" />
          <rect x="1225" y="145" width="30" height="95" fill="#0f172a" />
          
          {/* Window lights on mid-rise buildings */}
          <rect x="995" y="150" width="18" height="85" fill="url(#sparseWindowLights)" />
          <rect x="1030" y="135" width="24" height="100" fill="url(#sparseWindowLights)" />
          <rect x="1150" y="145" width="26" height="90" fill="url(#sparseWindowLights)" />
        </g>

        {/* Foreground buildings - dark silhouettes */}
        <g fill="#0f172a" opacity="0.75">
          {/* Left side foreground */}
          <rect x="0" y="185" width="28" height="55" fill="#0f172a" />
          <rect x="32" y="180" width="22" height="60" fill="#0f172a" />
          <rect x="58" y="190" width="20" height="50" fill="#0f172a" />
          <rect x="82" y="175" width="18" height="65" fill="#0f172a" />
          
          {/* Mid-foreground buildings */}
          <rect x="610" y="170" width="20" height="70" fill="#0f172a" />
          <rect x="635" y="155" width="28" height="85" fill="#0f172a" />
          <polygon points="635,155 649,145 663,155" fill="#0f172a" />
          
          {/* Right side foreground */}
          <rect x="1260" y="180" width="34" height="60" fill="#0f172a" />
          <rect x="1300" y="165" width="38" height="75" fill="#0f172a" />
          <rect x="1345" y="175" width="30" height="65" fill="#0f172a" />
          <rect x="1380" y="185" width="26" height="55" fill="#0f172a" />
          <rect x="1415" y="183" width="22" height="57" fill="#0f172a" />
          <rect x="1445" y="190" width="24" height="50" fill="#0f172a" />
          <rect x="1475" y="180" width="32" height="60" fill="#0f172a" />
          <rect x="1515" y="195" width="20" height="45" fill="#0f172a" />
          <rect x="1540" y="185" width="28" height="55" fill="#0f172a" />
          <rect x="1575" y="200" width="22" height="40" fill="#0f172a" />
          <rect x="1605" y="190" width="30" height="50" fill="#0f172a" />
          <rect x="1640" y="205" width="24" height="35" fill="#0f172a" />
          <rect x="1670" y="195" width="32" height="45" fill="#0f172a" />
          <rect x="1710" y="210" width="26" height="30" fill="#0f172a" />
          <rect x="1745" y="200" width="30" height="40" fill="#0f172a" />
          <rect x="1780" y="215" width="20" height="25" fill="#0f172a" />
          
          {/* Minimal window lights on foreground buildings */}
          <rect x="5" y="190" width="18" height="45" fill="url(#sparseWindowLights)" />
          <rect x="640" y="160" width="18" height="75" fill="url(#sparseWindowLights)" />
          <rect x="1305" y="170" width="28" height="65" fill="url(#sparseWindowLights)" />
        </g>

        {/* Closest foreground elements - pure silhouettes */}
        <g fill="#0f172a" opacity="0.85">
          <rect x="0" y="215" width="22" height="25" fill="#0f172a" />
          <rect x="26" y="210" width="18" height="30" fill="#0f172a" />
          <rect x="590" y="200" width="14" height="40" fill="#0f172a" />
          <rect x="670" y="205" width="12" height="35" fill="#0f172a" />
          <rect x="1310" y="210" width="16" height="30" fill="#0f172a" />
          <rect x="1460" y="215" width="20" height="25" fill="#0f172a" />
          <rect x="1660" y="220" width="26" height="20" fill="#0f172a" />
          <rect x="1760" y="225" width="24" height="15" fill="#0f172a" />
          <rect x="1785" y="230" width="15" height="10" fill="#0f172a" />
        </g>

        {/* Ground line - dark night ground */}
        <rect x="0" y="235" width="1800" height="5" fill="#0f172a" opacity="0.9" />
        <rect x="0" y="238" width="1800" height="2" fill="#0f172a" opacity="0.7" />
      </svg>
    </div>
  );
};

export default OaklandSkyline; 
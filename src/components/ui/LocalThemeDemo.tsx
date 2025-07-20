import { useState } from "react";

export default function LocalThemeDemo() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  return (
    <div
      className={`max-w-2xl mx-auto p-6 rounded-lg shadow transition-colors border
        ${theme === "dark"
          ? "bg-gray-900 border-gray-700"
          : "bg-white border-gray-200"}
      `}
    >
      <div className="flex items-center justify-between mb-4">
        <h5 className={`font-semibold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>Theme Preview</h5>
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className={`p-2 rounded-full border shadow-sm transition-colors
            ${theme === "dark" ? "bg-gray-800 border-gray-600" : "bg-white border-gray-200"}
          `}
          aria-label="Toggle demo theme"
        >
          {theme === "dark" ? (
            // Moon icon
            <svg className="w-5 h-5 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
            </svg>
          ) : (
            // Sun icon
            <svg className="w-5 h-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          )}
        </button>
      </div>
      <div className="space-y-4">
        <div className={`p-4 rounded-lg border
          ${theme === "dark"
            ? "bg-gray-800 border-gray-700 text-white"
            : "bg-gray-50 border-gray-200 text-gray-900"}
        `}>
          <h3 className="text-lg font-serif mb-2">Designer & Developer for B2B Companies</h3>
          <p className="text-sm">Building digital products that actually work.</p>
        </div>
        <div className={`p-4 rounded-lg border shadow-sm
          ${theme === "dark"
            ? "bg-gray-900 border-gray-700 text-white"
            : "bg-white border-gray-200 text-gray-900"}
        `}>
          <h4 className="font-semibold mb-2">Project Card</h4>
          <p className="text-sm">Clean typography with subtle borders</p>
        </div>
        <div className="flex gap-2">
          <button className={`px-4 py-2 rounded-lg text-sm font-medium
            ${theme === "dark"
              ? "bg-white text-gray-900"
              : "bg-gray-900 text-white"}
          `}>
            Primary
          </button>
          <button className={`px-4 py-2 rounded-lg text-sm font-medium border
            ${theme === "dark"
              ? "bg-gray-800 text-white border-gray-600"
              : "bg-white text-gray-900 border-gray-300"}
          `}>
            Secondary
          </button>
        </div>
      </div>
    </div>
  );
} 
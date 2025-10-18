import React, { useState } from "react";
import { copyToClipboard } from "../../../utils/copyToClipboard";
import { CopyIcon } from "lucide-react";
import { showSuccessToast } from "../Toast/ToastProvider";

const CopyBtn = ({ className, text, truncate = false, length = 12 }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        copyToClipboard(text, (success) => {
            if (success) {
                setCopied(true);
                setTimeout(() => setCopied(false), 1500);
            }
        });
    };

    // Truncated display text
    const displayText = truncate && text.length > length ? text.slice(0, length) + "..." : text;

    return (
        <div className="relative flex items-center gap-2 group w-fit">
            {/* Text with tooltip on hover */}
            <p
                className={`cursor-pointer w-fit ${className}`}
                title={text}
            >
                {displayText}
            </p>

            {/* Copy Button (hidden until hover) */}
            <button
                onClick={handleCopy}
                className={`px-2 py-1 text-xs rounded-lg absolute left-[50%]
          bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600
          opacity-0 group-hover:opacity-100 transition-opacity duration-200 scale-75`}
            >
                <CopyIcon className="w-4 text-gray-700 dark:text-gray-300" />
            </button>
            {copied && (
                <>
                    {showSuccessToast("Copied Successfully")}
                </>
            )}
        </div>
    );
};

export default CopyBtn;

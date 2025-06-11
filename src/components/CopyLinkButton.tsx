'use client';

interface CopyLinkButtonProps {
  anchorId: string;
}

export default function CopyLinkButton({ anchorId }: CopyLinkButtonProps) {
  const handleCopyLink = () => {
    const url = `${window.location.origin}${window.location.pathname}#${anchorId}`;
    navigator.clipboard.writeText(url);
  };

  return (
    <button
      onClick={handleCopyLink}
      className="mt-2 text-sm text-text-light/60 dark:text-text-dark/60 hover:text-accent-light dark:hover:text-accent-dark transition-colors"
      title="Copy link to this section"
    >
      🔗 Copy link
    </button>
  );
} 
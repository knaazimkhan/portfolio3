import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

const SHORTCUTS = {
  'g h': '/',           // Go Home
  'g p': '/projects',   // Go to Projects
  'g s': '/skills',     // Go to Skills
  'g e': '/education',  // Go to Education
  'g b': '/blog',       // Go to Blog
  'g c': '/contact',    // Go to Contact
  '?': '/shortcuts',    // Show Shortcuts Help
} as const;

export const useKeyboardShortcuts = () => {
  const router = useRouter();
  const keys: string[] = [];
  const timeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Ignore if user is typing in an input or textarea
      if (
        event.target instanceof HTMLInputElement ||
        event.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      // Add key to keys array
      keys.push(event.key.toLowerCase());
      
      // Reset keys after 1 second of no keypresses
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
      timeout.current = setTimeout(() => {
        keys.length = 0;
      }, 1000);

      // Check if current key combination matches any shortcuts
      const currentCombo = keys.join(' ');
      const matchingShortcut = Object.entries(SHORTCUTS).find(([shortcut]) =>
        currentCombo.endsWith(shortcut)
      );

      if (matchingShortcut) {
        event.preventDefault();
        const [_, path] = matchingShortcut;
        router.push(path);
        keys.length = 0;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [router]);

  return SHORTCUTS;
}; 
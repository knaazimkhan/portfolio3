'use client';

import { useState, useEffect, useCallback } from 'react';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/shortcuts-dialog';
import { useKeyboardShortcuts } from '@/hooks/use-keyboard-shortcuts';

export const ShortcutsHelp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const shortcuts = useKeyboardShortcuts();

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    // Ignore if user is typing in an input, textarea, or contentEditable element
    if (
      e.target instanceof HTMLInputElement ||
      e.target instanceof HTMLTextAreaElement ||
      (e.target instanceof HTMLElement && e.target.isContentEditable)
    ) {
      return;
    }

    // Ignore if any modifier keys are pressed (except shift for '?')
    if (e.ctrlKey || e.altKey || e.metaKey) {
      return;
    }

    if (e.key === '?' && e.shiftKey) {
      e.preventDefault();
      setIsOpen(true);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Handle dialog close with Escape key
  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent 
        className="sm:max-w-[425px]"
        onEscapeKeyDown={() => setIsOpen(false)}
        onInteractOutside={() => setIsOpen(false)}
      >
        <DialogHeader>
          <DialogTitle>Keyboard Shortcuts</DialogTitle>
          <DialogDescription>
            Press any shortcut to navigate quickly
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            {Object.entries(shortcuts).map(([shortcut, path]) => (
              <div
                key={shortcut}
                className="flex items-center justify-between rounded-lg p-2 hover:bg-muted/50 transition-colors"
                role="listitem"
              >
                <span className="text-sm text-muted-foreground">
                  {path === '/shortcuts' ? 'Show Shortcuts' : `Go to ${path.slice(1)}`}
                </span>
                <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                  {shortcut.split(' ').map((key, i) => (
                    <span key={i}>
                      {key.toUpperCase()}
                      {i < shortcut.split(' ').length - 1 && ' + '}
                    </span>
                  ))}
                </kbd>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between text-xs text-muted-foreground border-t pt-4 mt-2">
            <span>Press <kbd className="px-1 rounded bg-muted">Shift + ?</kbd> to show/hide</span>
            <span>Press <kbd className="px-1 rounded bg-muted">ESC</kbd> to close</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}; 
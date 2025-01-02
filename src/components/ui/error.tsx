import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";

interface ErrorProps {
  title?: string;
  message?: string;
  retry?: () => void;
}

export const Error = ({
  title = "Something went wrong",
  message = "An error occurred while loading the content. Please try again later.",
  retry,
}: ErrorProps) => {
  return (
    <div className="flex min-h-[400px] w-full flex-col items-center justify-center space-y-4 text-center">
      <ExclamationTriangleIcon className="h-12 w-12 text-destructive" />
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground max-w-md">{message}</p>
      </div>
      {retry && (
        <Button
          onClick={retry}
          variant="outline"
          className="mt-4"
          aria-label="Retry loading content"
        >
          Try Again
        </Button>
      )}
    </div>
  );
}; 
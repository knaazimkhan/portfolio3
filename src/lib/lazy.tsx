import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Loading } from "@/components/ui/loading";

interface LazyLoadOptions {
  ssr?: boolean;
  loading?: React.ReactNode;
}

export function lazyLoad<T extends React.ComponentType<any>>(
  importFn: () => Promise<{ default: T }>,
  options: LazyLoadOptions = {}
) {
  const {
    ssr = true,
    loading = <Loading text="Loading component..." />,
  } = options;

  const LazyComponent = dynamic(importFn, {
    ssr,
    loading: () => <>{loading}</>,
  });

  return function LazyLoadWrapper(props: React.ComponentProps<T>) {
    return (
      <Suspense fallback={loading}>
        <LazyComponent {...props} />
      </Suspense>
    );
  };
} 
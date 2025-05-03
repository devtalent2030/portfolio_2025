'use client';
import { Dialog } from '@headlessui/react';
import { Suspense, lazy } from 'react';

export default function ProjectModal({
  slug, isOpen, onClose,
}:{ slug:string; isOpen:boolean; onClose:()=>void }) {
  const MDX = lazy(() => import(`../../../content/projects/${slug}.mdx`));

  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/60 backdrop-blur" />
      <div className="relative mx-auto mt-12 max-w-3xl overflow-y-auto rounded-2xl bg-skin-bg p-8">
        <Suspense fallback={<p className="text-center">Loading…</p>}>
          <MDX />
        </Suspense>
      </div>
    </Dialog>
  );
}

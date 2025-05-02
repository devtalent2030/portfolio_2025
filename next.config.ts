import createMDX from '@next/mdx';
import type { NextConfig } from 'next';

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    providerImportSource: '@mdx-js/react',
  },
});

const nextConfig: NextConfig = {
  pageExtensions: ['tsx', 'mdx'],
  reactStrictMode: true,
};

export default withMDX(nextConfig);

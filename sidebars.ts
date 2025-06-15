import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // Main JLPT documentation sidebar
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: '📋 Yêu cầu dự án',
      items: ['requirements/overview', 'requirements/ui-features'],
    },
    {
      type: 'category',
      label: '🛠️ Thiết lập môi trường',
      items: ['setup/installation'],
    },
    {
      type: 'category',
      label: '🏗️ Kiến trúc hệ thống',
      items: ['architecture/overview'],
    },
    {
      type: 'category',
      label: '💻 Phát triển',
      items: ['development/getting-started', 'development/coding-standards'],
    },
    {
      type: 'category',
      label: '🚀 Triển khai',
      items: ['deployment/overview'],
    },
    {
      type: 'category',
      label: 'Tutorial Basics',
      items: [
        'tutorial-basics/create-a-document',
        'tutorial-basics/create-a-blog-post',
        'tutorial-basics/markdown-features',
        'tutorial-basics/create-a-page',
        'tutorial-basics/deploy-your-site',
        'tutorial-basics/congratulations',
      ],
    },
    {
      type: 'category',
      label: 'Tutorial Extras',
      items: ['tutorial-extras/manage-docs-versions', 'tutorial-extras/translate-your-site'],
    },
  ],
};

export default sidebars;

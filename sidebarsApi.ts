// sidebarsApi.ts
import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebarsApi: SidebarsConfig = {
    apiSidebar: [
      {
        type: 'category',
        label: 'API Overview',
        items: [
          'introduction',
          'api-write-queries',
          'api-read-queries', // maps to api/introduction.md
          // maps to api/endpoints.md
        ],
      },
      
    ],
  };
  
  export default sidebarsApi;
  
// sidebarsApi.ts
import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebarsApi: SidebarsConfig = {
    apiSidebar: [
      {
        type: 'category',
        label: 'LAOS API',
        items: [
          'introduction',
          'api-read-queries',
          'api-write-queries', // maps to api/introduction.md
          // maps to api/endpoints.md
        ],
      },
      
    ],
  };
  
  export default sidebarsApi;
  
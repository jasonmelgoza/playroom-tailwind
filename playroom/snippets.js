export default [
  {
    group: 'Block',
    name: 'Full Screen',
    code: `
    <Box className='flex flex-col h-screen w-100'>
    
    </Box>
    `,
  },
  {
    group: 'Block',
    name: 'Nav Bar',
    code: `
      <Box as='nav' className='flex-grow-0 flex-shrink-0 bg-gray-800'>
        <Box className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
          <Box className='flex items-center justify-between h-16'>
            <Box className='flex items-center'>
              <Box className='flex-shrink-0'>
                <Box className='text-white'>NavBar</Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    `,
  },
  {
    group: 'Block',
    name: 'Main',
    code: `
    <Box as='main' className='flex-1 bg-white'>
      Main content
    </Box>
    `,
  },
  {
    group: 'Block',
    name: 'Footer',
    code: `
    <Box as='footer' className='px-4 py-4 text-sm border-t border-gray-300 sm:py-6 sm:px-6'>
      Footer
    </Box>
    `,
  },
  {
    group: 'Block',
    name: 'Title Bar',
    code: `
      <Box as="header" className="bg-white border-b border-gray-300">
        <Box className="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <Box className="flex items-center justify-between">
            <Box as="h1" className="text-xl font-medium leading-tight text-gray-900">
              Section Title
            </Box>
          </Box>
        </Box>
      </Box>
    `,
  },
  {
    group: 'Block',
    name: 'Card',
    code: `
      <Box className='p-4 bg-white border rounded'>Card</Box>
    `,
  },
  {
    group: 'UI',
    name: 'Default Button',
    code: `
      <Box as='button' className='inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:text-gray-800 active:bg-gray-50'>
        Button
      </Box>
    `,
  },
  {
    group: 'UI',
    name: 'Primary Button',
    code: `
      <Box as='button' className='items-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-blue-600 border border-transparent rounded-md nline-flex hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue focus:border-blue-700 active:bg-blue-700'>
        Button
      </Box>
    `,
  },
  {
    group: 'UI',
    name: 'Icon Button',
    code: `
      <Box
        as='button'
        class="p-1 border-2 border-transparent text-gray-100 rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700"
        aria-label="Notifications"
      >
        <svg
          class="h-5 w-5"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9 0H7L6.24658 2.26026C5.87501 2.37363 5.51875 2.52208 5.18166 2.70177L3.05025 1.63606L1.63604 3.05028L2.70175 5.1817C2.52207 5.51878 2.37362 5.87503 2.26026 6.24658L0 7V9L2.26026 9.75342C2.37362 10.125 2.52207 10.4812 2.70175 10.8183L1.63604 12.9497L3.05026 14.3639L5.18167 13.2982C5.51876 13.4779 5.87502 13.6264 6.24658 13.7397L7 16H9L9.75342 13.7397C10.125 13.6264 10.4812 13.4779 10.8183 13.2982L12.9497 14.3639L14.364 12.9497L13.2983 10.8183C13.4779 10.4812 13.6264 10.125 13.7397 9.75342L16 9V7L13.7397 6.24658C13.6264 5.87503 13.4779 5.51878 13.2983 5.1817L14.364 3.05028L12.9498 1.63606L10.8183 2.70177C10.4812 2.52208 10.125 2.37363 9.75342 2.26026L9 0ZM8 11C9.65685 11 11 9.65685 11 8C11 6.34315 9.65685 5 8 5C6.34315 5 5 6.34315 5 8C5 9.65685 6.34315 11 8 11Z"
            fill="currentColor"
          ></path>
        </svg>
      </Box>
    `,
  },
];

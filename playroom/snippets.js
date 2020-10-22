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
      <Box as='button' className='inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-gray-500 border border-transparent rounded-md hover:bg-gray-600 focus:outline-none focus:border-gray-700 active:bg-gray-700'>
        Button
      </Box>
    `,
  },
  {
    group: 'UI',
    name: 'Primary Button',
    code: `
      <Box as='button' className='inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-blue-500 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus:border-blue-700 active:bg-blue-700'>
        Button
      </Box>
    `,
  },
];

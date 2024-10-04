import { extendTheme,  ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
    initialColorMode: 'dark'
};

// const themes = extendTheme({config,
//     colors: {
//         gray: {
//           50: '#f9f9f9',
//           100: '#ededed',
//           200: '#d3d3d3',
//           300: '#b3b3b3',
//           400: '#a0a0a0',
//           500: '#898989',
//           600: '#6c6c6c',
//           700: '#202020',
//           800: '#121212',
//           900: '#111'
//         },
//         lightGray: {
//           50: '#ffffff', 
//           100: '#f0f0f0',
//           200: '#e0e0e0',
//           300: '#d0d0d0',
//           400: '#b0b0b0',
//           500: '#a0a0a0',
//           600: '#707070',
//           700: '#404040',
//           800: '#303030',
//           900: '#202020',
//         },
//       }
// });


const themes = extendTheme({
  config,
  styles: {
    global: (props: { colorMode: string; }) => ({
      body: {
        bg: props.colorMode === 'dark' ? 'gray.800' : 'gray.100',
        color: props.colorMode === 'dark' ? 'gray.50' : 'gray.800',
      },
    }),
  },
  colors: {
    gray: {
      50:  '#f9f9f9',  // Very light gray
      100: '#ededed',  // Light gray
      200: '#d3d3d3',  // Soft gray
      300: '#b3b3b3',  // Medium gray
      400: '#a0a0a0',  // Darker medium gray
      500: '#898989',  // Gray
      600: '#6c6c6c',  // Dark gray
      700: '#202020',  // Very dark gray
      800: '#121212',  // Almost black
      900: '#111111',  // Near black
    }
  }
});



export default themes;
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { MainRoutes } from './services/routes';
import { AppContextProvider } from './context/Context';
import { createLocalStorage } from './services/storage/storage';

function App() {
  if(!localStorage){createLocalStorage()}
 
  return (
    <BrowserRouter>
      <AppContextProvider>  
        <ChakraProvider>
          <MainRoutes/>
        </ChakraProvider>
      </AppContextProvider>  
    </BrowserRouter>
  );
}

export default App;

/**
 * @format
 */

import {AppRegistry} from 'react-native';
import { Provider } from 'react-redux';
import App from './App';
import {name as appName} from './app.json';
import { ActiveIndexProvider } from './Providers/ActiveIndex';
import { store } from './Providers/store';
import { ColorsProvider } from './Theme/Colors';

const RootComponent = () => (
    <ColorsProvider>
        <Provider store={store}>
            <ActiveIndexProvider>
                <App />
            </ActiveIndexProvider>
        </Provider>
    </ColorsProvider>
  );

AppRegistry.registerComponent(appName, () => RootComponent);

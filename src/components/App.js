import { createStackNavigator} from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation';
import CameraScreen from './CameraScreen';
import HomeScreen from './HomeScreen';
import ImagePickerScreen from './ImagePickerScreen';
import EditResultScreen from './EditResultScreen';
import SaveResultScreen from './SaveResultScreen';
import HistoryScreen from './HistoryScreen';

const AppNavigator = createStackNavigator(
  {
    Camera: CameraScreen,
    Home: HomeScreen,
    ImagePicker: ImagePickerScreen,
    EditResult: EditResultScreen,
    SaveResult: SaveResultScreen,
    History: HistoryScreen,
  },
  {
    initialRouteName: 'ImagePicker'
    // initialRouteName: 'History'
  }
);

export default createAppContainer(AppNavigator);
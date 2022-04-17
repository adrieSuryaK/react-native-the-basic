import React, {useState, useEffect} from 'react';
import {View, ScrollView} from 'react-native';
import StylingComponent from './pages/StylingComponent';
import SampleComponent from './pages/SampleComponent';
import FlexBox from './pages/FlexBox';
import FlexBoxHook from './pages/FlexBoxHook'
import PositionComponent from './pages/PositionComponent';
import PropsDinamis from './pages/PropsDinamis';

const App = () => {
  const [isShow, SetIsShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      SetIsShow(false);
    }, 6000);
  }, []);
  return (
    <View style={{backgroundColor:'#ffbe76', flex:1}}>
      <ScrollView>
        {/* <SampleComponent />
        <StylingComponent /> */}
        {/* {isShow && <FlexBox />} */}
        {/* { isShow&& <FlexBoxHook />} */}
        {/* <PositionComponent /> */}
        <PropsDinamis/>
      </ScrollView>
    </View>
  );
};

export default App;

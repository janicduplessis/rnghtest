import React, {useCallback} from 'react';
import {View, Text, RefreshControl} from 'react-native';

import {ScrollView} from 'react-native-gesture-handler';

const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};
export default function App() {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);

    wait(1500).then(() => setRefreshing(false));
  }, []);

  return (
    <ScrollView
      style={{flex: 1}}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View
        style={{
          height: 2000,
          paddingTop: 64,
          backgroundColor: 'pink',
          alignItems: 'center',
        }}>
        <Text>Pull down to see RefreshControl indicator</Text>
      </View>
    </ScrollView>
  );
}

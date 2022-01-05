import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, ListRenderItemInfo, ActivityIndicator } from 'react-native';
interface Props {
  title: string;

}
const Header: React.FC<Props> = ({ title }) => {

  const [data, setData] = useState<any[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true)
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(json => {
        setLoading(false)
        setData(json)
      })
      .catch((e) => {
        setLoading(false)
        console.log("err", e)
      })
  }, [])



  const renderHeader = () => {
    return (
      <SafeAreaView style={styles.header}>
        {loading ? <ActivityIndicator /> : <Text style={styles.headerText}>Home</Text>}
      </SafeAreaView>
    )

  }

  const renderMainView = () => {
    return (
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={({ item, index }) => {

            return (
              <View>
                <Text>{item.title}</Text>
                <Text>{item.body}</Text>
              </View>
            )
          }}
        />
      </View>
    )
  }

  return (
    <>
      {renderHeader()}
      {renderMainView()}
    </>
  );
};
const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cfcfcf',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: '600',
  },
  container: {
    flex: 1
  }
});
export default Header;
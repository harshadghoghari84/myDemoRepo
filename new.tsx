import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface deignProps { }

const deign = (props: deignProps) => {
    return (
        <View style={styles.container}>
            <Text>deign</Text>
        </View>
    );
};

export default deign;

const styles = StyleSheet.create({
    container: {}
});

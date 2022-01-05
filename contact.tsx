import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface componentNameProps { }

const contact = (props: componentNameProps) => {
    return (
        <View style={styles.container}>
            <Text>contact</Text>
        </View>
    );
};

export default contact;

const styles = StyleSheet.create({
    container: {}
});

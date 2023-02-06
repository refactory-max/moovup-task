import React from 'react';
import { FlatList, Image, StyleSheet, View } from 'react-native';
import { ListItem } from '@rneui/themed';

// Network
const MoovupServices = require('../network/moovup_services.js');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
});

const HomeScreen = () => {

    const [people, setPeople] = React.useState([]);

    React.useEffect(() => {
        (async () => {
            const people = await MoovupServices.getPeople();
            console.log(people);
            setPeople(people);
        })();
    }, []);

    const getDisplayName = (person) => {
        let nameElements = [];
        if (person && person.name) {
            if (person.name.first) {
                nameElements.push(person.name.first);
            }
            if (person.name.last) {
                nameElements.push(person.name.last);
            }
        }
        return nameElements.length > 0 ? nameElements.join(' ') : 'Invalid name';
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={people}
                renderItem={({ item }) =>
                    <ListItem
                        onPress={() => {
                            console.log(`Pressed ${getDisplayName(item)}`);
                            // TODO: handle press on a list item
                        }}>
                        <Image
                            style={styles.tinyLogo}
                            source={{
                                uri: item.picture,
                            }}
                        />
                        <ListItem.Content>
                            <ListItem.Title>{getDisplayName(item)}</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron />
                    </ListItem>
                }
            />
        </View>
    );
}

export default HomeScreen;

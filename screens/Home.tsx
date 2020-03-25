import React , {useState} from 'react';
import { StyleSheet, Text, View,Image, ScrollView} from 'react-native';
import {Navbar} from '../src/Navbar';


export const Home = () => {


    return (
        <View>
            <Navbar title = 'Your profile'/>
            <View>
                <Image
                    source={{
                        uri: 'https://images.unsplash.com/photo-1551026081-ae81ac20c552?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
                    }}
                    style={styles.image}
                />
                <ScrollView >
                    <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur ea nobis voluptas. Ad architecto autem, culpa doloribus, ea error id ipsam maiores maxime quaerat quisquam temporibus? Consectetur dicta quam voluptatum.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid at blanditiis commodi cum debitis, delectus deleniti dolor, doloremque dolorum enim error facere incidunt nostrum praesentium quo unde voluptate voluptatibus!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur culpa deserunt distinctio ea eum exercitationem incidunt ipsam ipsum nam, nemo porro praesentium unde voluptates. Error molestiae, qui? Consequatur, doloribus natus.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias atque consequatur magnam nisi optio perspiciatis, quo recusandae unde? Consequuntur fuga ipsa recusandae sed soluta. Facere fuga incidunt magnam quisquam voluptas!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, placeat suscipit! Consequatur deserunt dolor earum eius explicabo, harum itaque libero obcaecati, odio officiis quis recusandae saepe? Aliquam cum incidunt placeat!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet blanditiis commodi consequatur earum nihil possimus quasi quia repellat voluptatibus? Accusantium doloremque eaque maiores molestias nemo quo rem saepe sint temporibus.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut excepturi vero voluptatem voluptatum? Ad alias asperiores commodi cupiditate dolorum hic laudantium magnam nihil nulla soluta? Eveniet laudantium maxime tenetur voluptatem.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid at blanditiis commodi cum debitis, delectus deleniti dolor, doloremque dolorum enim error facere incidunt nostrum praesentium quo unde voluptate voluptatibus!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur culpa deserunt distinctio ea eum exercitationem incidunt ipsam ipsum nam, nemo porro praesentium unde voluptates. Error molestiae, qui? Consequatur, doloribus natus.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias atque consequatur magnam nisi optio perspiciatis, quo recusandae unde? Consequuntur fuga ipsa recusandae sed soluta. Facere fuga incidunt magnam quisquam voluptas!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, placeat suscipit! Consequatur deserunt dolor earum eius explicabo, harum itaque libero obcaecati, odio officiis quis recusandae saepe? Aliquam cum incidunt placeat!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet blanditiis commodi consequatur earum nihil possimus quasi quia repellat voluptatibus? Accusantium doloremque eaque maiores molestias nemo quo rem saepe sint temporibus.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut excepturi vero voluptatem voluptatum? Ad alias asperiores commodi cupiditate dolorum hic laudantium magnam nihil nulla soluta? Eveniet laudantium maxime tenetur voluptatem.
                    </Text>
                </ScrollView>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        height: '90%'
    },

    image: {
        width: 120,
        height: 120,
        borderRadius: 100,
        margin: 10,
        alignSelf: 'center',
    },
    text: {
        margin: 10,
        textAlign: 'center',
        fontSize: 15,
    }
});

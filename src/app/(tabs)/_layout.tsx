import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, Pressable, Button } from 'react-native';
import { ThemedText } from '@/src/components/ThemedText';
import { useRouter } from 'expo-router';
import {  TabList, TabTrigger, TabSlot } from 'expo-router/ui';

// Defining the layout of the custom tab navigator
export function Layout() {
  return (
    <Tabs>
      <TabSlot />
      <TabList>
        <TabTrigger name="home" href="/">
          <Text>Home</Text>
        </TabTrigger>
        <TabTrigger name="article" href="/article">
          <Text>Article</Text>
        </TabTrigger>
      </TabList>
    </Tabs>
  );
}

const getColor = (focused: boolean) => (focused ? '#000' : '#666');

export default function TabLayout() {
  const [modalVisible, setModalVisible] = useState(false);
  const router = useRouter();

  return (
    <>
      <Tabs screenOptions={{headerShown:false, tabBarShowLabel:false}} initialRouteName='index'>
        <Tabs.Screen name="index" options={{
            title:'Home',
            tabBarIcon:({focused})=>
                <Ionicons name={focused ? 'home-sharp' : 'home-outline'} size={24} color={getColor(focused)} />
                // <MaterialCommunityIcons name="home-variant-outline" size={24} color={getColor(focused)} style={{width:'full'}}/>
            
        }}/>

        <Tabs.Screen name='create' options={{
            title:'Create',
            tabBarButton: (props) => (
                <Pressable style={{alignItems:'center', padding:5}}  onPress={() => setModalVisible(true)}>
                  <Ionicons name='add-circle-outline' size={30} />
                </Pressable>
            ),
        }}/>
        <Tabs.Screen name="profile" options={{
            title:'Profile',
            tabBarIcon:({focused})=>(
                <FontAwesome name={focused ? 'user' : 'user-o'} size={focused ? 26 : 24} color={getColor(focused)} />
            )
        }}/>
      </Tabs>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableOpacity style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.2)' }} activeOpacity={1} onPressOut={() => setModalVisible(false)}>
          <View style={{ width: 200, padding: 20, backgroundColor: 'white', borderRadius: 10, marginBottom: 60, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => { setModalVisible(false); router.push('/create/createTraining'); }}>
              <ThemedText>Training</ThemedText>
            </TouchableOpacity>
            <View style={{ height: 1, backgroundColor: '#ccc', width: '100%', marginVertical: 10 }} />
            <TouchableOpacity onPress={() => { setModalVisible(false); router.push('/create/createCompetition'); }}>
              <ThemedText>Competition</ThemedText>
            </TouchableOpacity>
            <View style={{ height: 1, backgroundColor: '#ccc', width: '100%', marginVertical: 10 }} />
            <TouchableOpacity onPress={() => { setModalVisible(false); router.push('/create/createPost'); }}>
              <ThemedText>Post</ThemedText>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </>
  );
}

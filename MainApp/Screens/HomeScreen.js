import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, StatusBar, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

class HomeScreen extends React.Component{
  // static navigationOptions = {
  //      header: null
  //  }
  render(){
    return(
      <View style={styles.container}>
        <View>
        <Text>HomeScreen</Text>
        <Button
        onPress={() =>
        this.props.navigation.navigate('HomeScreen')}
        title="HOME" />
        <Button
        onPress={() =>
        this.props.navigation.navigate('PlannerScreen')}
        title="PLANNER" />
        <Button
        onPress={() =>
        this.props.navigation.navigate('BoringScreen')}
        title="BORING" />
        </View>
        <View style={styles.Bottom}>
        <TouchableOpacity
        style={styles.tab}
         onPress={()=>this.props.navigation.navigate('HomeScreen')}>
             <View>
                 <Icon name='home' />
                 <Text>FEED</Text>
             </View>
         </TouchableOpacity>
         <TouchableOpacity
         style={styles.tab}
          onPress={()=>this.props.navigation.navigate('PlannerScreen')}>
              <View>
                  <Icon name='event' />
                  <Text>PLANNER</Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity
          style={styles.tab}
           onPress={()=>this.props.navigation.navigate('BoringScreen')}>
               <View>
                   <Icon name='home' />
                   <Text>BORING</Text>
               </View>
           </TouchableOpacity>
           <TouchableOpacity
           style={styles.tab}
            onPress={()=>this.props.navigation.navigate('HomeScreen')}>
                <View>
                    <Icon name='event' />
                    <Text>MESSAGE</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
            style={{backgroundColor:'#ffff', padding: 5}}
             onPress={()=>this.props.navigation.navigate('AccountScreen')}>
                 <View>
                     <Icon name='home' />
                     <Text>ACCOUNT</Text>
                 </View>
             </TouchableOpacity>
            </View>
      </View>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  Bottom: {
    marginBottom: 0,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-evenly',
    position: 'absolute',
    bottom:0,

  },
  tab: {
    padding: 5,
  },
});

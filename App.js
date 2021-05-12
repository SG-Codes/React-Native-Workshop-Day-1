// import React from 'react';
// import {View, Text} from 'react-native';

// class App extends React.Component {
//   render() {
//     return (
//       <View>
//         <Text>Hello</Text>
//       </View>
//     );
//   }
// }

// export default App;
import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from 'react-native';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React Native',
      age: 10,
    };
  }

  btnClick = () => {
    this.setState({
      name: 'Reactjs',
    });
  };

  render() {
    return (
      <View>
        <ScrollView>
          <Text>Reat Native Workshop</Text>
          <Image
            style={{height: 400, width: 200, borderRadius: 20}}
            source={{
              uri: 'https://images.unsplash.com/photo-1620788951796-4dcefc742c8d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
            }}
          />
          <Image
            style={{height: 400, width: 200, borderRadius: 20}}
            source={{
              uri: 'https://images.unsplash.com/photo-1620788951796-4dcefc742c8d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
            }}
          />
          <Image
            style={{height: 400, width: 200, borderRadius: 20}}
            source={{
              uri: 'https://images.unsplash.com/photo-1620788951796-4dcefc742c8d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
            }}
          />
          <TextInput style={styles.fieldStyle} placeholder="Write your name" />
          <Button title="Click Here" onPress={this.btnClick} />
          <TouchableOpacity onPress={this.btnClick}>
            <Text style={{fontSize: 22}}>{this.state.name}</Text>
          </TouchableOpacity>
          <ActivityIndicator size="large" color="black" />
        </ScrollView>
      </View>
    );
  }
}

// function App() {
//   const btnClick = () => {
//     alert('This is the button.');
//   };

//   return (
//     <View>
//       <ScrollView>
//         <Text>Reat Native Workshop</Text>
//         <Image
//           style={{height: 400, width: 200, borderRadius: 20}}
//           source={{
//             uri: 'https://images.unsplash.com/photo-1620788951796-4dcefc742c8d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
//           }}
//         />
//         <Image
//           style={{height: 400, width: 200, borderRadius: 20}}
//           source={{
//             uri: 'https://images.unsplash.com/photo-1620788951796-4dcefc742c8d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
//           }}
//         />
//         <Image
//           style={{height: 400, width: 200, borderRadius: 20}}
//           source={{
//             uri: 'https://images.unsplash.com/photo-1620788951796-4dcefc742c8d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
//           }}
//         />
//         <TextInput style={styles.fieldStyle} placeholder="Write your name" />
//         <Button title="Click Here" onPress={btnClick} />
//         <TouchableOpacity onPress={btnClick}>
//           <Text style={{fontSize: 22}}>Click Me</Text>
//         </TouchableOpacity>
//         <ActivityIndicator size="large" color="black" />
//       </ScrollView>
//     </View>
//   );
// }

const styles = StyleSheet.create({
  fieldStyle: {
    width: 500,
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
  },
  btn: {
    width: 400,
  },
});

export default App;

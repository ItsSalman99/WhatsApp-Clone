import React, { PureComponent } from 'react';
import { PermissionsAndroid, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import cameraroll from "@react-native-community/cameraroll"
import { useNavigation } from '@react-navigation/native';

export default class CameraScreen extends PureComponent {
  constructor(props){
    super(props);
    // Get it from props
    const { navigation } = this.props;
  }

  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          onGoogleVisionBarcodesDetected={({ barcodes }) => {
            console.log(barcodes);
          }}
        />
        <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
        <StatusBar barStyle="light-content" backgroundColor="#000" />
          <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
            <MaterialIcon name='camera' size={40} color="dodgerblue" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Gallery')} style={styles.gallery}>
            <MaterialIcon name='photo' size={20} color="dodgerblue" />
        </TouchableOpacity>
      </View>
    );
  }

  takePicture = async () =>  {
    const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
    const hasPermission = await PermissionsAndroid.check(permission);
    if (hasPermission) {
      if (this.camera) {
        const options = { quality: 0.5 };
        const data = await this.camera.takePictureAsync(options);
        await cameraroll.save(data.uri, ['photo'])
        console.log(data);
      }
    }

  const status = await PermissionsAndroid.request(permission);
  
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
  gallery: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
    position: 'absolute',
    left: 0,
    bottom: 0,

  },
});
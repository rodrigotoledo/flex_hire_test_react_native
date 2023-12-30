import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';

function ProfileButton({onPress}) {
  return (
    <TouchableOpacity style={styles.profileButton} onPress={onPress}>
      <View style={styles.buttonContent}>
        <FontAwesomeIcon
          icon={faUser}
          style={styles.buttonIcon}
          size={20}
          color="#ffffff"
        />
        <Text style={styles.buttonText}>Profile</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  profileButton: {
    backgroundColor: '#1877f2',
    borderColor: 'transparent',
    borderWidth: 0,
    marginVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    borderRadius: 8,
  },
  buttonContent: {
    flexDirection: 'row', // Items in the same horizontal line
    alignItems: 'center', // Align items vertically to the center
    paddingVertical: 10,
  },
  buttonIcon: {
    marginRight: 10, // Spacing between icon and text
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default ProfileButton;

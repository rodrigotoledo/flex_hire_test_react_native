import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faList} from '@fortawesome/free-solid-svg-icons';

function JobsButton({onPress}) {
  return (
    <TouchableOpacity style={styles.jobsButton} onPress={onPress}>
      <View style={styles.buttonContent}>
        <FontAwesomeIcon
          icon={faList}
          style={styles.buttonIcon}
          size={20}
          color="#4285f4"
        />
        <Text style={styles.buttonText}>Jobs</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  jobsButton: {
    backgroundColor: 'white',
    borderColor: '#4285f4',
    borderWidth: 2,
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
    marginRight: 10, // Spacing between the icon and text
    color: '#4285f4',
  },
  buttonText: {
    color: '#4285f4',
    fontSize: 16,
  },
});

export default JobsButton;

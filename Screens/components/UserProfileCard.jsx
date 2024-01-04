import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {
  PROFILE_ALT,
  PHONE,
  UPDATED_AT,
  STATUS,
  DATA_NOT_AVAILABLE_DESCRIPTION,
} from '../../lib/constants'; // Import your constants

function UserProfileCard(props) {
  const {profile} = props;
  return profile !== null ? (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <View style={styles.avatar}>
          <Image
            source={{uri: profile.data.currentUser.avatarUrl}}
            style={styles.avatarImage}
            alt={PROFILE_ALT}
          />
        </View>
        <Text style={styles.name}>{profile.data.currentUser.name}</Text>
        <Text style={styles.info}>
          {PHONE}: {profile.data.currentUser.phone}
        </Text>
        <Text style={styles.info}>
          {UPDATED_AT}: {profile.updated_at}
        </Text>
        <Text style={styles.status}>
          {STATUS}: {profile.data.currentUser.status}
        </Text>
      </View>
    </View>
  ) : (
    <View style={styles.noRecord}>
      <Text>{DATA_NOT_AVAILABLE_DESCRIPTION}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: 16,
  },
  avatar: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: '#ffffff',
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarImage: {
    width: '90%',
    height: '90%',
    padding: 4,
    borderRadius: 60,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  info: {
    color: 'gray',
  },
  status: {
    color: 'skyblue',
  },
  noRecord: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default UserProfileCard;

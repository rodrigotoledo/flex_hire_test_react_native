import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Link
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import JobsButton from '../Buttons/Jobs';
import ProfileButton from '../Buttons/Profile';
import {
  PROFILE_TITLE,
  BACK_TO_MAIN_PAGE,
  PROFILE_ALT,
  PHONE,
  UPDATED_AT,
  STATUS,
  SKILLS_TITLE,
  NO_SKILLS_OBTAINED,
  EXPERIENCE,
  EMAIL_SUBSCRIPTIONS_TITLE,
  ANSWERS_TITLE,
  DATA_NOT_AVAILABLE_TITLE,
  DATA_NOT_AVAILABLE_DESCRIPTION,
  REFRESH,
} from '../lib/constants';
import UserProfileCard from './components/UserProfileCard';
import MockProfile from '../lib/MockProfile';

const Profile = () => {
  const navigation = useNavigation();
  const [profile, setProfile] = useState(null);
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const FetchProfile = async () => {
      try {
        // Replace with your GraphQL query function
        // const profileDataResponse = await graphqlQuery();
        // setProfileData(profileDataResponse.profileData);
        setProfile(await MockProfile.fakeData());
      } catch (error) {
        console.error(
          'TODO: I have problems getting data from the API endpoint:',
          error,
        );
        const profile = await MockProfile.fakeData();
        console.error(profile)
        console.error('---------------------------------------');
        setProfile(null);
      }
    };

    FetchProfile();
  }, []);

  const handleJobsButtonPress = () => {
    navigation.navigate('MainStack', {
      screen: 'Jobs',
    });
  };

  const handleProfileButtonPress = () => {
    navigation.navigate('MainStack', {
      screen: 'Profile',
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{PROFILE_TITLE}</Text>
        <UserProfileCard profile={profile} />
      </View>

       <View style={styles.detailsContainer}>
        <Text style={styles.detailsTitle}>{SKILLS_TITLE}</Text>
        {/* {profile.data.currentUser.userSkills.length === 0 ? (
          <Text style={styles.detailsText}>{NO_SKILLS_OBTAINED}</Text>
        ) : (
          <View style={styles.skillsList}>
            {profile.data.currentUser.userSkills.map((skill, index) => (
              <Text key={index} style={styles.skillItem}>
                <Text style={styles.skillName}>{skill.skill.name}</Text> -{' '}
                {`${EXPERIENCE}: ${skill.experience}`}
              </Text>
            ))}
          </View>
        )} */}
        <Text
          style={styles.detailsTitle}>{`${EMAIL_SUBSCRIPTIONS_TITLE}:`}</Text>
        {/* {profile.data.currentUser.emailSubscriptions.length === 0 ? (
          <Text style={styles.detailsText}>{NO_SKILLS_OBTAINED}</Text>
        ) : (
          <Text style={styles.detailsText}>
            {profile.data.currentUser.emailSubscriptions
              .map(subscription => subscription.subscriptionName)
              .join(', ')}
          </Text>
        )} */}
        <Text style={styles.detailsTitle}>{ANSWERS_TITLE}</Text>
        {/* <View style={styles.answersList}>
          {profile.data.currentUser.answers.map((answer, index) => (
            <Link key={index} href={answer.optimizedUrl}>
              <Text style={styles.answerLink}>{answer.optimizedUrl}</Text>
            </Link>
          ))}
        </View> */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  link: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  profileImageContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 60,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 8,
  },
  status: {
    fontSize: 16,
    color: 'skyblue',
  },
  errorContainer: {
    backgroundColor: 'rgba(255, 0, 0, 0.1)',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  errorTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  errorDescription: {
    fontSize: 16,
    color: 'red',
    marginBottom: 8,
  },
  refreshLink: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  detailsContainer: {
    marginTop: 16,
  },
  detailsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  detailsText: {
    fontSize: 16,
    marginBottom: 8,
  },
  skillsList: {
    marginLeft: 16,
    marginTop: 8,
  },
  skillItem: {
    fontSize: 16,
    marginBottom: 8,
  },
  skillName: {
    fontWeight: 'bold',
  },
  answersList: {
    marginLeft: 16,
    marginTop: 8,
  },
  answerLink: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
    marginBottom: 8,
  },
});

export default Profile;

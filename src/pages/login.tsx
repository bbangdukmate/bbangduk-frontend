import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

type SectionProps = {
  title: string;
};

function Section({ title }: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        공유할수록 커지는 빵!
      </Text>
      <Image
        source={require('../assets/kakao_login.png')}
        style={styles.logo}
      />
    </View>
  );
}

function Login(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Section title='공유할수록 커지는 빵!' />
      <View style={styles.spacer} />
      <View style={styles.socialContainer}>
        <TouchableOpacity>
          <Image
            source={require('../assets/google_login.png')}
            style={styles.socialIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../assets/kakao_login.png')}
            style={styles.socialIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
  },
  logo: {
    width: 24,
    height: 24,
    marginTop: 8,
  },
  spacer: {
    flex: 1,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '50%',
    marginBottom: 32,
  },
  socialIcon: {
    width: 50,
    height: 50,
  },
});

export default Login;

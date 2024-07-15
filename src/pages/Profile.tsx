import { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  useColorScheme,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Image,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Section } from './Signup';

function Profile(): React.JSX.Element {
  const [introduce, setIntroduce] = useState('');
  const [favorite, setFavorite] = useState('');
  const [property, setProperty] = useState('');

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={true}>
        <View style={styles.container}>
          <Section title='프로필 편집' />
          <View style={styles.inputContainer}>
            <Text>나는 단팥빵이 좋아님!</Text>
            <Text>프로필을 꾸며 빵덕력을 뽐내 보세요!</Text>
            <Text>프로필 완성도가 높을 수록 메이트 매칭률이 높아져요!</Text>
            <View style={styles.labelContainer}>
              <Text style={styles.label}>한 줄 소개</Text>
            </View>
            <TextInput
              style={styles.input}
              value={introduce}
              onChangeText={setIntroduce}
              placeholder="자신을 표현할 한 줄 소개를 입력해 주세요. (120자 이내)"
            />
            <View style={styles.labelContainer}>
              <Text style={styles.label}>한 줄 소개</Text>
            </View>
            <TextInput
              style={styles.input}
              value={favorite}
              onChangeText={setFavorite}
              placeholder="좋아하는 빵을 입력해주세요."
            />
            <View style={styles.labelContainer}>
              <Text style={styles.label}>좋아하는 빵</Text>
            </View>
            <TextInput
              style={styles.input}
              value={property}
              onChangeText={setProperty}
              placeholder="좋아하는 빵의 속성을 입력해 주세요. ex) 촉촉, 크리미, 겉바속촉 등"
            />
          </View>
          <TouchableOpacity style={styles.lastButton}>
            <Text style={styles.lastButtonText}>완료</Text>
          </TouchableOpacity>
          <View style={styles.spacer} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: Colors.white,
    paddingVertical: 20,
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
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  required: {
    color: 'red',
    marginLeft: 4,
  },
  inputContainer: {
    width: '80%',
    marginTop: 16,
  },
  semiTitleLabel: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 30,
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10,
  },
  info: {
    fontSize: 10,
    fontWeight: '400',
    marginBottom: 15,
    color: '#EC5938',
  },
  leftInput: {
    height: 40,
    flex: 1,
    marginRight: 8,
    borderColor: Colors.light,
    borderRadius: 10,
    paddingHorizontal: 8,
    backgroundColor: '#F5F5F5',
  },
  input: {
    height: 40,
    borderColor: Colors.light,
    borderRadius: 10,
    marginBottom: 16,
    paddingHorizontal: 8,
    backgroundColor: '#F5F5F5',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  button: {
    width: 120,
    backgroundColor: '#EC5938',
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 16,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  spacer: {
    flex: 1,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  radio: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#EC5938',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  radioSelected: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: '#EC5938',
  },
  radioLabel: {
    fontSize: 16,
    marginLeft: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    height: 24,
    width: 24,
    borderWidth: 2,
    borderColor: '#EC5938',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  checkboxSelected: {
    height: 12,
    width: 12,
    backgroundColor: '#EC5938',
  },
  checkboxLabel: {
    fontSize: 16,
  },
  checkboxRequired: {
    color: '#EC5938'
  },
  checkboxNotRequired: {
    color: '#AEAEB0'
  },
  checkboxIcon: {
    marginLeft: 10,
    marginRight: 10,
  },
  allAgree: {
    backgroundColor: '#F9FAFC',
    display: 'flex',
    flexDirection: 'row',
    height: 40,
  },
  lastButton: {
    width: '100%',
    height: 80,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',  
    backgroundColor: '#EC5938',
  },
  lastButtonText: {
    fontSize: 20,
    fontWeight: '800',
    color: '#FFFFFF'
  }
});

export default Profile;

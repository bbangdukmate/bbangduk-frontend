import { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  useColorScheme,
  TextInput,
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
        {title}
      </Text>
    </View>
  );
}

function Signup(): React.JSX.Element {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [gender, setGender] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  return (
    <View style={styles.container}>
      <Section title='회원가입' />
      <View style={styles.inputContainer}>
        <Text style={styles.label}>회원 정보</Text>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>이름</Text>
          <Text style={styles.required}>*</Text>
        </View>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="홍길동"
        />
        <View style={styles.labelContainer}>
          <Text style={styles.label}>휴대전화번호</Text>
          <Text style={styles.required}>*</Text>
        </View>
        <View style={styles.rowContainer}>
          <TextInput
            style={styles.leftInput}
            value={name}
            onChangeText={setName}
            keyboardType="phone-pad"
            placeholder="01000000000"
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>인증번호 요청</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.labelContainer}>
          <Text style={styles.label}>아이디(이메일)</Text>
          <Text style={styles.required}>*</Text>
        </View>

        <View style={styles.rowContainer}>
          <TextInput
            style={styles.leftInput}
            value={email}
            onChangeText={setEmail}
            placeholder="hong6@naver.com"
            keyboardType="email-address"
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>중복확인</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>닉네임</Text>
          <Text style={styles.required}>*</Text>
        </View>

        <View style={styles.rowContainer}>
          <TextInput
            style={styles.leftInput}
            value={nickname}
            onChangeText={setNickname}
            placeholder="홍길동1호"
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>중복확인</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.label}>성별</Text>
        <View style={styles.rowContainer}>
          <TouchableOpacity style={styles.radioContainer} onPress={() => setGender('male')}>
            <View style={styles.radio}>
              {gender === 'male' && <View style={styles.radioSelected} />}
            </View>
            <Text style={styles.radioLabel}>남성</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.radioContainer} onPress={() => setGender('female')}>
            <View style={styles.radio}>
              {gender === 'female' && <View style={styles.radioSelected} />}
            </View>
            <Text style={styles.radioLabel}>여성</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>전체 동의</Text>
          <Text style={styles.required}>*</Text>
        </View>
        <View style={styles.rowContainer}>
          <TouchableOpacity
            style={styles.checkboxContainer}
            onPress={() => setTermsAccepted(!termsAccepted)}
          >
            <View style={styles.checkbox}>
              {termsAccepted && <View style={styles.checkboxSelected} />}
            </View>
            <Text style={styles.checkboxLabel}>이용약관 동의(필수)</Text>
          </TouchableOpacity>
        </View>
      </View>


      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>회원가입</Text>
      </TouchableOpacity>
      <View style={styles.spacer} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  required: {
    color: 'red',
    marginLeft: 4,
    marginBottom: 15,
  },
  inputContainer: {
    width: '80%',
    marginTop: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 15,
  },
  leftInput: {
    height: 50,
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
    marginBottom: 16,
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
});


export default Signup;

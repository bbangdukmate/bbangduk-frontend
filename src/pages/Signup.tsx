import { NavigationProp, useNavigation } from '@react-navigation/native';
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
import { RootStackParamList } from '../../App';

type SectionProps = {
  title: string;
};

export function Section({ title }: SectionProps): React.JSX.Element {
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
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [birthday, setBirthday] = useState('');
  const [gender, setGender] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [personalInfoAccepted, setPersonalInfoAccepted] = useState(false);
  const [ageAccepted, setAgeAccepted] = useState(false);
  const [marketingAccepted, setMarketingAccepted] = useState(false);
  const [allAgree, setAllAgree] = useState(false);
  const [pushAccepted, setPushAccepted] = useState(false);
  const [emailAccepted, setEmailAccepted] = useState(false);


  useEffect(() => {
    if (marketingAccepted) {
      setPushAccepted(true)
      setEmailAccepted(true)
    } else {
      setPushAccepted(false)
      setEmailAccepted(false)
    }
  }, [marketingAccepted])

  useEffect(() => {
    if (allAgree) {
      setTermsAccepted(true)
      setPersonalInfoAccepted(true)
      setAgeAccepted(true)
      setMarketingAccepted(true)
    } else {
      setTermsAccepted(false)
      setPersonalInfoAccepted(false)
      setAgeAccepted(false)
      setMarketingAccepted(false)
    }
  }, [allAgree])

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={true}>
        <View style={styles.container}>
          <Section title='회원가입' />
          <View style={styles.inputContainer}>
            <Text style={styles.semiTitleLabel}>회원 정보</Text>
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
            <Text style={styles.info}>* 휴대전화번호는 숫자만 입력 가능합니다.</Text>

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
            <Text style={styles.info}>닉네임은 국문, 영문, 숫자만 사용하고 2~10글자까지 가능합니다.</Text>
            <Text style={styles.semiTitleLabel}>추가 정보</Text>
            <Text style={styles.label}>성별</Text>
            <View style={styles.rowContainer}>
              <TouchableOpacity style={styles.radioContainer} onPress={() => setGender('male')}>

                {
                  gender === 'male' 
                    ?<Image
                    source={require('../assets/Ellipse_activate.png')}/>
                    :<Image
                    source={require('../assets/Ellipse_inactivate.png')}/>
                }
                <Text style={styles.radioLabel}>남</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.radioContainer} onPress={() => setGender('female')}>
              {
                  gender === 'female' 
                    ?<Image
                    source={require('../assets/Ellipse_activate.png')}/>
                    :<Image
                    source={require('../assets/Ellipse_inactivate.png')}/>
                }
                <Text style={styles.radioLabel}>여</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.labelContainer}>
              <Text style={styles.label}>생년월일</Text>
            </View>
            <TextInput
              style={styles.input}
              value={birthday}
              onChangeText={setBirthday}
              placeholder="20000101"
            />
            <Text style={styles.info}>*숫자로 8자리까지 입력 가능합니다.</Text>
            
            <View style={styles.allAgree}>
              <TouchableOpacity
                style={styles.checkboxContainer}
                onPress={() => setAllAgree(!allAgree)}
              >

              {
                allAgree 
                  ?<Image
                  style={styles.checkboxIcon}
                  source={require('../assets/checkbox_activate.png')}/>
                  :<Image
                  style={styles.checkboxIcon}
                  source={require('../assets/checkbox_inactivate.png')}/>
              }
              <Text style={styles.label}>전체 동의</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.rowContainer}>
              <TouchableOpacity
                style={styles.checkboxContainer}
                onPress={() => setTermsAccepted(!termsAccepted)}
              >
                {
                  termsAccepted 
                    ?<Image
                    source={require('../assets/check_activate.png')}/>
                    :<Image
                    source={require('../assets/check_inactivate.png')}/>
                }
                <Text style={styles.checkboxLabel}>이용약관 동의</Text>
                <Text style={styles.checkboxRequired}>(필수)</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.rowContainer}>
              <TouchableOpacity
                style={styles.checkboxContainer}
                onPress={() => setPersonalInfoAccepted(!personalInfoAccepted)}
              >
                {
                  personalInfoAccepted 
                    ?<Image
                    source={require('../assets/check_activate.png')}/>
                    :<Image
                    source={require('../assets/check_inactivate.png')}/>
                }
                <Text style={styles.checkboxLabel}>개인정보 수집 및 이용 동의</Text>
                <Text style={styles.checkboxRequired}>(필수)</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.rowContainer}>
              <TouchableOpacity
                style={styles.checkboxContainer}
                onPress={() => setAgeAccepted(!ageAccepted)}
              >
                {
                  ageAccepted 
                    ?<Image
                    source={require('../assets/check_activate.png')}/>
                    :<Image
                    source={require('../assets/check_inactivate.png')}/>
                }
                <Text style={styles.checkboxLabel}>만 14세 이상 확인</Text>
                <Text style={styles.checkboxRequired}>(필수)</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.info}>*14세 미만 회원의 가입은 불가합니다.</Text>
            <View style={styles.rowContainer}>
              <TouchableOpacity
                style={styles.checkboxContainer}
                onPress={() => setMarketingAccepted(!marketingAccepted)}
              >
                {
                  marketingAccepted 
                    ?<Image
                    source={require('../assets/check_activate.png')}/>
                    :<Image
                    source={require('../assets/check_inactivate.png')}/>
                }
                <View>
                  <View style={styles.rowContainer}>
                    <Text style={styles.checkboxLabel}>마케팅 수신 동의</Text>
                    <Text style={styles.checkboxNotRequired}>(선택)</Text>
                  </View>
                  <View style={styles.rowContainer}>
                    <TouchableOpacity style={styles.radioContainer} onPress={() => setPushAccepted(!pushAccepted)}>
                      {
                        pushAccepted
                          ?<Image
                          source={require('../assets/checkbox_activate.png')}/>
                          :<Image
                          source={require('../assets/checkbox_inactivate.png')}/>
                      }
                      <Text style={styles.radioLabel}>푸시</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.radioContainer} onPress={() => setEmailAccepted(!emailAccepted)}>
                      {
                        emailAccepted
                          ?<Image
                          source={require('../assets/checkbox_activate.png')}/>
                          :<Image
                          source={require('../assets/checkbox_inactivate.png')}/>
                      }
                      <Text style={styles.radioLabel}>E-mail</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity style={styles.lastButton} onPress={() => navigation.navigate('Profile')}>
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

export default Signup;

import { useSignIn } from '../lib'
import { loadKeys, testPassword } from '../utils/localStorage'
import Form from '../components/Form'

const SignIn = () => {
  const accounts = loadKeys()
  const { form } = useSignIn({
    list: accounts,
    test: ({ name, password }) => testPassword(name, password),
  })

  return <Form form={form} />
}

export default SignIn

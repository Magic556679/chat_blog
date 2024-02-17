import { useForm, SubmitHandler } from 'react-hook-form'
import { register as registerApi } from '@/services/user'
import { AxiosError } from 'axios'

type Inputs = {
  name: string
  email: string
  password: string
}

const Register = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<Inputs>()

  const handlerRegister = async (formData: Inputs) => {
    try {
      await registerApi(formData)
    } catch (err) {
      if (err instanceof AxiosError) {
        setError('password', {
          type: 'manual',
          message: err.response?.data.message
        })
      }
      console.error(err)
    }
  }

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    handlerRegister(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <div className="mx-10 mb-6 relative">
        <input
          type="text"
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="暱稱"
          autoComplete="name"
          {...register('name', {
            required: { value: true, message: '此欄位必填寫' }
          })}
        />
        {errors.name?.type === 'required' && (
          <p className="text-red-500 absolute text-xs">{errors.name.message}</p>
        )}
      </div>
      <div className="mx-10 mb-6 relative">
        <input
          type="email"
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="電子信箱"
          autoComplete="email"
          {...register('email', {
            required: { value: true, message: '此欄位必填寫' },
            pattern: {
              value: /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/g,
              message: '請輸入Email格式'
            }
          })}
        />
        {errors.email?.type === 'required' && (
          <p className="text-red-500 absolute text-xs">
            {errors.email.message}
          </p>
        )}
        {errors.email?.type === 'pattern' && (
          <p className="text-red-500 absolute text-xs">
            {errors.email.message}
          </p>
        )}
      </div>
      <div className="mx-10 mb-6 relative">
        <input
          type="password"
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="密碼"
          autoComplete="current-password"
          {...register('password', {
            required: { value: true, message: '此欄位必填寫' }
          })}
        />
        {errors.password?.type === 'required' && (
          <p className="text-red-500 absolute text-xs">
            {errors.password.message}
          </p>
        )}
        {errors.password?.type === 'manual' && (
          <p className="text-red-500 absolute text-xs">
            {errors.password.message}
          </p>
        )}
      </div>

      <div className="mx-10 mb-1">
        <input
          type="submit"
          className="w-full text-white bg-[#0077C5] rounded-lg px-1  py-1 cursor-pointer"
          value="註冊"
        ></input>
      </div>
    </form>
  )
}

export default Register

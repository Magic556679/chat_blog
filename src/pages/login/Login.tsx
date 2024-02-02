import { useForm, SubmitHandler } from 'react-hook-form'

type Inputs = {
  email: string
  password: string
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log('onSubmit', data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <div className="mx-10 mb-6 relative">
        <input
          type="text"
          className="w-full"
          {...register('email', {
            required: { value: true, message: '此欄位必填寫' },
            pattern: {
              value: /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/g,
              message: '不符合 Email 規則'
            }
          })}
        />
        {errors.email?.type === 'required' && (
          <p
            style={{
              color: 'red',
              position: 'absolute'
            }}
          >
            {errors.email.message}
          </p>
        )}
        {errors.email?.type === 'pattern' && (
          <p
            style={{
              color: 'red',
              position: 'absolute'
            }}
          >
            {errors.email.message}
          </p>
        )}
      </div>
      <div className="mx-10 mb-6 relative">
        <input
          type="text"
          className="w-full"
          {...register('password', {
            required: { value: true, message: '此欄位必填寫' }
          })}
        />
        {errors.password?.type === 'required' && (
          <p
            style={{
              color: 'red',
              position: 'absolute'
            }}
          >
            {errors.password.message}
          </p>
        )}
      </div>

      <div className="mx-10 mb-1">
        <input
          type="submit"
          className="w-full bg-[#0077C5] rounded-lg px-1  py-1"
          value="登入"
        ></input>
      </div>
    </form>
  )
}

export default Login

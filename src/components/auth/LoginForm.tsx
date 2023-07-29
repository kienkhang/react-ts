// Validation
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
// Import components
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import SharedButton from '../shared/SharedButton'
import LoginSocial from './LoginSocial'

const formSchema = z.object({
  email: z.string().email('Email không đúng'),
  password: z.string().min(6, 'Ít nhất 6 ký tự')
})

const LoginForm = () => {
  //
  const router = useRouter()

  // Define Form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: 'helloworld@g.com',
      password: '123456'
    }
  })
  // Destruct errors
  const errors = useMemo(() => form.formState.errors, [form.formState])

  // Submit function
  function doSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    router.push({
      name: '/'
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(doSubmit)} className="h-max">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" className="input-primary" {...field} />
              </FormControl>
              <div className="text-xs min-h-[1.25rem] text-red-500">{errors.email?.message}</div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" className="input-primary" type="password" {...field} />
              </FormControl>
              <div className="text-xs min-h-[1.25rem] text-red-500">{errors.password?.message}</div>
            </FormItem>
          )}
        />
        <SharedButton type="submit" className="w-full gap-2">
          <IMdiLogin className="w-5 h-5"></IMdiLogin>
          Login
        </SharedButton>
      </form>
      <div className="mt-4">
        <LoginSocial></LoginSocial>
      </div>
    </Form>
  )
}

export default LoginForm

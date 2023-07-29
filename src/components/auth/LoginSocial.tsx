import { Button } from '../ui/button'

const LoginSocial = () => {
  return (
    <Button className="w-full gap-2">
      <ILocalGoogle className="w-5 h-5" />
      <span className="font-medium"> Google </span>
    </Button>
  )
}

export default LoginSocial

import LoginForm from "@/components/auth/LoginForm";

const LoginPage = () => {
  return (
    <div className="w-max h-max">
      <p className="text-2xl font-bold">Hey, hello 🖐️</p>
      <p className="mt-2 mb-2 text-sm text-gray-500">
        Enter the information you entered while registering
      </p>
      <div className="w-full max-w-sm px-5 py-6 bg-white rounded-lg shadow-md lg:max-w-md">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;

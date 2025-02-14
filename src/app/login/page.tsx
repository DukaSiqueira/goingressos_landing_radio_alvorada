import LoginForm from "@/components/forms/LoginForm";
import RegisterForm from "@/components/forms/RegisterForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Login = () => {
  return (
    <div className=" bg-cover bg-slate-200 bg-center bg-no-repeat min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg flex flex-row w-11/12">
        <div className="p-8 w-6/12">
          <Tabs defaultValue="login">
            <TabsList className="flex justify-start items-center w-full">
              <TabsTrigger value="login">Entrar</TabsTrigger>
              <TabsTrigger value="register">Registrar</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
                <LoginForm />
            </TabsContent>
            <TabsContent value="register">
                <RegisterForm />
            </TabsContent>
          </Tabs>
        </div>
        <div className="p-8 w-6/12 bg-brand-medium  rounded-r-lg text-white flex flex-col">
          <h2 className="text-3xl">
            Participe do Clube do Ouvinte Coração Missionário!
          </h2>
          <p className="text-base my-5">
            Faça parte do Clube do Ouvinte Coração Missionário. Com a sua ajuda,
            continuamos nossa missão de levar fé, esperança e inspiração para
            milhares de ouvintes. Juntos, podemos mais!
          </p>
          <div className="mt-auto p-4 bg-brand-light rounded-lg text-base">
            <p className="italic w-full">
              &quot;E disse-lhes: Ide por todo o mundo, pregai o evangelho a
              toda criatura.&quot;
            </p>
            <p className="">— Marcos 16:15</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

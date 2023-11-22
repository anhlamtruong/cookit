"use client";

import formConfig from "@/config/authentication/sign_in_form.json"; // adjust the import path accordingly
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Icons } from "@/components/ui/icons";
import { useStyles } from "@/hooks/useStyles";
import { toast } from "react-hot-toast";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

type Variant = "LOGIN" | "REGISTER";

const AuthForm = () => {
  const session = useSession();
  const styles = useStyles();
  const router = useRouter();

  const [variant, setVariant] = useState<Variant>("LOGIN");
  const [isLoading, setIsLoading] = useState(false);
  const [isSessionLoading, setSessionIsLoading] = useState(false);

  useEffect(() => {
    if (session?.status === "loading") {
      setSessionIsLoading(true);
    }
    if (session?.status === "unauthenticated") {
      setSessionIsLoading(false);
    }
    if (session?.status === "authenticated") {
      setSessionIsLoading(false);
      router.push("/profile");
    }
  }, [session?.status, router]);

  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else if (variant === "REGISTER") {
      setVariant("LOGIN");
    }
  }, [variant]);

  const authForm = useForm<FieldValues>({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = authForm;

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);

    if (variant === "REGISTER") {
      // Axios Register
      axios
        .post("/api/register", data)
        .then(() => signIn("credentials", data))
        .catch(() => toast.error("Something went wrong!"))
        .finally(() => setIsLoading(false));
    }
    console.log(data);
    if (variant === "LOGIN") {
      // NextAuth Sign In

      await signIn("credentials", {
        ...data,
        redirect: false,
      })
        .then((callback) => {
          if (callback?.error) {
            toast.error("Invalid credentials");
          }
          if (callback?.ok || !callback?.error) {
            toast.success("Logged in successfully 🎉");
            router.push("/profile");
          }
        })
        .finally(() => setIsLoading(false));
    }

    setIsLoading(false);
  };

  const socialAction = async (action: string) => {
    setIsLoading(true);
    // Next Auth Social Sign In
    toast.loading("Authenticating, please wait...");
    // Next Auth Social Sign In
    await signIn(action, { redirect: false })
      .then((callback) => {
        if (callback?.error) {
          // If there's an error, show an error toast
          toast.error("Invalid credentials");
        } else {
          // If sign in is successful, show a success toast
          toast.success(`Sign in successfully with ${action}🎉`);
          router.push("/profile");
        }
      })
      .finally(() => {
        setIsLoading(false); // Stop loading state regardless of the result
      });
  };

  return isSessionLoading === true ? (
    <Skeleton />
  ) : (
    <div className="justify-center self-center items-center flex flex-col gap-4 w-full h-full">
      <Form {...authForm}>
        <form onSubmit={authForm.handleSubmit(onSubmit)} className="space-y-2">
          {variant === "LOGIN" &&
            formConfig.variants.LOGIN.fields.map((f) => {
              return (
                <FormField
                  key={f.name}
                  control={authForm.control}
                  name={f.name}
                  render={({ field }) => (
                    <FormItem className="w-full ">
                      <FormLabel className=" sr-only" htmlFor={f.name}>
                        {f.label}
                      </FormLabel>
                      <FormControl>
                        <Input
                          className=" form-input"
                          id={f.name}
                          placeholder={f.placeholder}
                          {...field}
                          type={f.name}
                          register={register}
                          autoCorrect="off"
                          errors={errors}
                          disabled={isLoading}
                        />
                      </FormControl>
                      <FormDescription>{f.description}</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              );
            })}
          {variant === "REGISTER" &&
            formConfig.variants.REGISTER.fields.map((f) => {
              return (
                <FormField
                  key={f.name}
                  control={authForm.control}
                  name={f.name}
                  render={({ field }) => (
                    <FormItem className="w-full ">
                      <FormLabel className=" sr-only" htmlFor={f.name}>
                        {f.label}
                      </FormLabel>
                      <FormControl>
                        <Input
                          className=" form-input"
                          id={f.name}
                          placeholder={f.placeholder}
                          {...field}
                          type={f.name}
                          register={register}
                          autoCorrect="off"
                          errors={errors}
                          disabled={isLoading}
                        />
                      </FormControl>
                      <FormDescription>{f.description}</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              );
            })}

          <Button
            variant="default"
            disabled={isLoading}
            type="submit"
            fullWidth={false}
          >
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            {variant === "LOGIN"
              ? formConfig.variants.LOGIN.submitButtonLabel
              : formConfig.variants.REGISTER.submitButtonLabel}{" "}
            with Email
          </Button>
        </form>
      </Form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <div className="flex justify-between gap-3">
        <Button
          fullWidth={true}
          variant="outline"
          type="button"
          onClick={() => socialAction("github")}
          disabled={isLoading}
        >
          <Icons.gitHub className="mr-2 h-4 w-4" /> Github
        </Button>
        <Button
          fullWidth={true}
          variant="outline"
          type="button"
          onClick={() => socialAction("google")}
          disabled={isLoading}
        >
          <Icons.google className="mr-2 h-4 w-4" /> Google
        </Button>
      </div>
      <div
        style={styles.textTertiary}
        className="flex gap-1 justify-center text-sm mt-1 px-2"
      >
        <div>
          {variant === "LOGIN"
            ? "New to Cookit ?"
            : "Already have an account ?"}
        </div>
        <div
          onClick={toggleVariant}
          className="hover:underline underline-offset-2 cursor-pointer"
        >
          {variant === "LOGIN" ? "Create an account" : "Login"}
        </div>
      </div>
    </div>
  );
};

export default AuthForm;

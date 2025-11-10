"use client";
import AuthLayout from "@/modules/user/components/AuthLayout";
import AuthForm from "@/modules/user/components/AuthForm";

export default function LoginPage() {
  return (
    <AuthLayout>
      <AuthForm mode="login" />
    </AuthLayout>
  );
}

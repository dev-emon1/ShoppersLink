"use client";
import AuthLayout from "@/modules/user/components/AuthLayout";
import AuthForm from "@/modules/user/components/AuthForm";

export default function RegisterPage() {
  return (
    <AuthLayout>
      <AuthForm mode="register" />
    </AuthLayout>
  );
}

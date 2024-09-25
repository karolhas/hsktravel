"use client";

//hooks
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";

//components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

//icons
import { Send } from "lucide-react";

//toast-notification
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function ContactEmailForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();
  const [submissionStatus, setSubmissionStatus] = useState<null | string>(null);

  const onSubmit = async (data: FormData) => {
    try {
      const response = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          service_id: "service_c3xiqgb",
          template_id: "template_f094417",
          user_id: "UOP9hqyngoo7QgPMI",
          template_params: {
            from_name: data.name,
            from_email: data.email,
            message: data.message,
          },
        }
      );

      handleResponse(response);
      reset();
    } catch (error) {
      handleResponseError();
    }
  };

  const handleResponse = (response: any) => {
    if (response.status === 200) {
      setSubmissionStatus("success");
      toast.success("Your message has been sent successfully!", {
        position: "top-center",
        autoClose: 5000,
      });
    } else {
      setSubmissionStatus("error");
      toast.error(
        "There was an error sending your message. Please try again later.",
        {
          position: "top-center",
          autoClose: 5000,
        }
      );
    }
  };

  const handleResponseError = () => {
    setSubmissionStatus("error");
    toast.error(
      "There was an error sending your message. Please try again later.",
      {
        position: "top-center",
        autoClose: 5000,
      }
    );
  };

  return (
    <section className="md:w-1/2 p-8">
      <ToastContainer />
      <h2 className="text-2xl font-semibold mb-4 text-gray-900">
        Send Us a Message
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <InputField
          id="name"
          label="Name"
          placeholder="John Doe"
          register={register("name", { required: "Name is required" })}
          error={errors.name}
        />
        <InputField
          id="email"
          label="Email"
          placeholder="john@example.com"
          register={register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
          error={errors.email}
        />
        <InputField
          id="message"
          label="Message"
          placeholder="Tell us about your dream vacation..."
          textarea
          register={register("message", { required: "Message is required" })}
          error={errors.message}
        />
        <SubmitButton isSubmitting={isSubmitting} />
      </form>
    </section>
  );
}

const InputField = ({
  id,
  label,
  placeholder,
  register,
  error,
  textarea,
}: any) => (
  <div>
    <Label htmlFor={id}>{label}</Label>
    {textarea ? (
      <Textarea
        id={id}
        {...register}
        rows={4}
        className="w-full"
        placeholder={placeholder}
      />
    ) : (
      <Input
        type="text"
        id={id}
        {...register}
        className="w-full"
        placeholder={placeholder}
      />
    )}
    {error && <p className="text-red-600 text-sm mt-1">{error.message}</p>}
  </div>
);

const SubmitButton = ({ isSubmitting }: { isSubmitting: boolean }) => (
  <Button
    variant="default"
    type="submit"
    disabled={isSubmitting}
    className="flex items-center rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
  >
    {isSubmitting ? <Spinner /> : <Send className="w-4 h-4 mr-2" />}
    {isSubmitting ? "Sending..." : "Send Message"}
  </Button>
);

const Spinner = () => (
  <svg
    className="animate-spin h-5 w-5 mr-2 text-white"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8v8H4z"
    ></path>
  </svg>
);

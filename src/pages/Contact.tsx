import { Button, Textarea, TextInput, Title, useMantineTheme } from "@mantine/core";
import React from "react";
import { useForm } from "@mantine/form";
import axios from "axios";

const Contact = () => {

  const theme = useMantineTheme();

  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      message: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  const handleSubmit = async(values: any) => {
    try {
      if (!process.env.NEXT_PUBLIC_MICROCMS_API_KEY) return null;
      await axios.post("https://zx1fjxug3n.microcms.io/api/v1/contact", values, {
        headers: {
          "Content-Type": "application/json",
          "X-MICROCMS-API-KEY": process.env.NEXT_PUBLIC_MICROCMS_API_KEY,
        }          
      })
      form.reset();
    } catch {
      alert('API Error POST');
    }
  }

  return (
    <div>
      <div className="py-4">
        <Title>Contact</Title>
      </div>
      <div className="bg-gray-100 h-px rounded-full mb-8" />
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <div className="gap-2">
          <TextInput
            className="w-full py-4"
            label="Email"
            placeholder="your@email.com"
            required
            {...form.getInputProps("email")}
          />
          <TextInput
            className="w-full py-4"
            label="Name"
            placeholder="Taro Yamada"
            required
            {...form.getInputProps("name")}
          />
          <Textarea
            className="w-full py-4"
            label="Your Message"
            placeholder="アプリ開発について相談したい。"
            required
            {...form.getInputProps("message")}
          />
        </div>
        <div className="text-center py-4">
          <Button color={theme.colorScheme === 'dark' ? "gray" : "dark"} radius="xl" type="submit">
            Send Message
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Contact;

import { Button, Textarea, TextInput, Title } from "@mantine/core";
import { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div>
      <div className="border-b-2 border-solid border-b-gray-100 border-x-white border-t-white py-4 mb-8">
        <Title>Contact</Title>
      </div>
      <div className="gap-2">
        <TextInput
          className="w-full py-4"
          label="Email"
          placeholder="your@email.com"
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <TextInput
          className="w-full py-4"
          label="Name"
          placeholder="Taro Yamada"
          onChange={(e) => setName(e.currentTarget.value)}
        />
        <Textarea
          className="w-full py-4"
          label="Your Message"
          placeholder="I want to order your goods"
          onChange={(e) => setMessage(e.currentTarget.value)}
        />
      </div>
      <div className="text-center py-4">
        <Button color="dark" radius="xl">
          Send Message
        </Button>
      </div>
    </div>
  );
};

export default Contact;

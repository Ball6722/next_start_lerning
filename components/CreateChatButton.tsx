"use client";

import { useRouter } from 'next/navigation'
import { Button } from "./ui/button";
import { MessagesSquareIcon } from "lucide-react";
function CreateChatButton() {
  const router = useRouter();
  const createNewChat = async () => {

    router.push("/chat/abc");
  };
  return (
    <Button variant={"ghost"}>
        <MessagesSquareIcon />
    </Button>
  )
}

export default CreateChatButton;
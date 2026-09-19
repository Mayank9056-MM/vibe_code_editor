"use client";

import { Button } from "@/components/ui/button";
// import { createPlayground } from "@/features/playground/actions";
import { Plus } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import TemplateSelectingModal from "./TemplateSelectingModal";
import { createPlayground } from "../actions";

const AddNewButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const handleSubmit = async (data: {
    title: string;
    template: "REACT" | "NEXTJS" | "EXPRESS" | "VUE" | "HONO" | "ANGULAR";
    description?: string;
  }) => {
    const res = await createPlayground(data);
    toast.success(`Playground created successfully`);
    setIsModalOpen(false);
    if (res?.id) {
      router.push(`/playground/${res.id}`);
    }
  };

  return (
    <>
      <div
        onClick={() => setIsModalOpen(true)}
        className="group px-6 py-6 flex flex-row justify-between items-center border border-border rounded-xl bg-card hover:bg-accent/40 cursor-pointer 
        transition-all duration-200 ease-in-out
        hover:border-primary/40 hover:shadow-sm"
      >
        <div className="flex flex-row justify-center items-start gap-4">
          <Button
            variant={"outline"}
            className="flex justify-center items-center bg-muted/60 border-border group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors duration-200"
            size={"icon"}
          >
            <Plus
              size={20}
              className="transition-transform duration-200 group-hover:rotate-90"
            />
          </Button>
          <div className="flex flex-col">
            <h1 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">Add New</h1>
            <p className="text-sm text-muted-foreground max-w-[220px]">
              Create a new playground
            </p>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <Image
            src={"/add-new.svg"}
            alt="Create new playground"
            width={150}
            height={150}
            className="transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      </div>

      <TemplateSelectingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default AddNewButton;
